interface CallFetchConfig {
    responseType: ResponseType;
}
export interface HttpSuccessResponse<T> {
    ok: boolean;
    status: number;
    body: T;
}
type HttpResponse<T> = HttpErrorResponse | HttpSuccessResponse<T>;
export interface HttpErrorResponse {
    ok: boolean;
    status: number;
    body: Record<string, unknown> | string | null;
}
export declare enum ResponseType {
    BLOB = "BLOB",
    JSON = "JSON",
    TEXT = "TEXT"
}
export declare const makeRequest: <T>(url: string, requestInit: RequestInit, config?: CallFetchConfig) => Promise<HttpResponse<T>>;
export {};
