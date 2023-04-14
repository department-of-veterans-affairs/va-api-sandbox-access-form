import { v4 as uuidv4 } from 'uuid';

// Interfaces & Constants

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

export enum ResponseType {
  BLOB = 'BLOB',
  JSON = 'JSON',
  TEXT = 'TEXT',
}

// Handles non network errors (response not ok and status not 200) and logs them to Sentry
const handleNonNetworkError = async (
  url: string,
  requestId: string,
  type: string,
  response: Response,
): Promise<HttpErrorResponse> => {
  // Tries to resolve the response to obtain error details
  let responseBody: Record<string, unknown> | null | string = null;

  if (response.headers.get('Content-type')?.includes('application/json')) {
    responseBody = (await response.json()) as Record<string, unknown>;
  } else {
    responseBody = await response.text();
  }

  return {
    body: responseBody,
    ok: response.ok,
    status: response.status,
  };
};

// Fetch common logic
export const makeRequest = <T>(
  url: string,
  requestInit: RequestInit,
  config: CallFetchConfig = { responseType: ResponseType.JSON },
): Promise<HttpResponse<T>> =>
  new Promise((resolve, reject) => {
    const request = new Request(url, requestInit);
    const requestId: string = uuidv4();

    // Common Headers
    request.headers.append('X-Request-ID', requestId);

    fetch(request)
      .then(async response => {
        if (response.ok) {
          const httpResponse: Partial<HttpResponse<T>> = {
            ok: response.ok,
            status: response.status,
          };

          if (config.responseType === ResponseType.JSON) {
            httpResponse.body = (await response.json()) as T;
          }

          if (config.responseType === ResponseType.TEXT) {
            httpResponse.body = (await response.text()) as T;
          }

          if (config.responseType === ResponseType.BLOB) {
            httpResponse.body = (await response.blob()) as T;
          }

          return resolve(httpResponse as HttpResponse<T>);
        } else {
          const errorResponse = await handleNonNetworkError(
            url,
            requestId,
            config.responseType,
            response,
          );
          return reject(errorResponse);
        }
      })
      .catch((error: string) => reject(new Error(error)));
  });
