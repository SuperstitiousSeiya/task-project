
// Main axios-like function using fetch
function createUrlWithParams(url: string, params?: Record<string, any>): string {
    const urlObj = new URL(url);
    if (params) {
        Object.keys(params).forEach(key => urlObj.searchParams.append(key, params[key]));
    }
    return urlObj.toString();
}

async function axiosLikeRequest({
    method,
    url,
    baseURL,
    headers = {}, 
    params = null,
    data = null,
    ...restOptions
}: {
    method: string;
    url: string;
    baseURL?: string;
    params?: any;
    data?: any;
    [key: string]: any; 
}): Promise<any> {
    const fetchOptions: RequestInit = {
        method: method.toUpperCase(),
        headers: headers as HeadersInit, 
        ...restOptions 
    };

    if (data) {
        fetchOptions.body = JSON.stringify(data);
        fetchOptions.headers = {
            ...fetchOptions.headers,
            'Content-Type': 'application/json'
        };
    }

    const finalUrl = baseURL ? baseURL + url : url;
    const finalUrlWithParams = params ? createUrlWithParams(finalUrl, params) : finalUrl;

    try {
        const response = await fetch(finalUrlWithParams, fetchOptions);
        const responseData = await response.json();

        if (!response.ok) {
            throw {
                response: {
                    status: response.status,
                    statusText: response.statusText,
                    data: responseData
                }
            };
        }

        return {
            data: responseData,
            status: response.status,
            statusText: response.statusText,
            headers: response.headers
        };
    } catch (error) {
        if (error) {
            throw error;
        } else {
            throw {
                message: error,
                response: null
            };
        }
    }
}



export const makeRequest = (baseURL?: string) => ({
    get: (url: string, options: RequestInit = {}) => axiosLikeRequest({ method: 'GET', url, baseURL, ...options }),
    post: (url: string, data?: any, options: RequestInit = {}) => axiosLikeRequest({ method: 'POST', url, baseURL, data, ...options }),
    put: (url: string, data?: any, options: RequestInit = {}) => axiosLikeRequest({ method: 'PUT', url, baseURL, data, ...options }),
    delete: (url: string, options: RequestInit = {}) => axiosLikeRequest({ method: 'DELETE', url, baseURL, ...options }),
    patch: (url: string, data?: any, options: RequestInit = {}) => axiosLikeRequest({ method: 'PATCH', url, baseURL, data, ...options })
});



