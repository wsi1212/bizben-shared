export declare const defaultHttpResponseHeaders: {
    "Content-Type": string;
    "Access-Control-Allow-Origin": string;
    "Access-Control-Allow-Headers": string;
    "Access-Control-Allow-Methods": string;
};
export declare function responseOptions(): {
    statusCode: number;
    headers: typeof defaultHttpResponseHeaders;
    body: string;
};
export declare function getUserSubFromHttpHeaders(headers: Record<string, any>): any;
export declare function response200Simple(): {
    statusCode: number;
    headers: typeof defaultHttpResponseHeaders;
    body: string;
};
export declare function response200(body: Record<string, any>): {
    statusCode: number;
    headers: typeof defaultHttpResponseHeaders;
    body: string;
};
export declare function responseError(error: any): {
    statusCode: number;
    headers: typeof defaultHttpResponseHeaders;
    body: string;
};
