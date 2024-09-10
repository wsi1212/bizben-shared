export const defaultHttpResponseHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, User",
  "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS,PATCH",
};

export function responseOptions(): {
  statusCode: number;
  headers: typeof defaultHttpResponseHeaders;
  body: string;
} {
  return {
      statusCode: 204, // No Content
      headers: { ...defaultHttpResponseHeaders },
      body: "",
  };
}

export function getUserSubFromHttpHeaders(headers: Record<string, any>): any {
  if ("User" in headers) {
      return headers.User;
  } else if ("user" in headers) {
      return headers.user;
  }
  return null;
}

export function response200Simple(): {
  statusCode: number;
  headers: typeof defaultHttpResponseHeaders;
  body: string;
} {
  return {
      statusCode: 200,
      headers: defaultHttpResponseHeaders,
      body: JSON.stringify({ status: "success" }),
  };
}

export function response200(body: Record<string, any>): {
  statusCode: number;
  headers: typeof defaultHttpResponseHeaders;
  body: string;
} {
  return {
      statusCode: 200,
      headers: defaultHttpResponseHeaders,
      body: JSON.stringify(body),
  };
}

export function responseError(error: any): {
  statusCode: number;
  headers: typeof defaultHttpResponseHeaders;
  body: string;
} {
  const errorMessage = { error: error.message };
  return {
      statusCode: error.code || 500,
      headers: defaultHttpResponseHeaders,
      body: JSON.stringify(errorMessage),
  };
}
