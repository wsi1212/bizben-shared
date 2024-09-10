"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultHttpResponseHeaders = void 0;
exports.responseOptions = responseOptions;
exports.getUserSubFromHttpHeaders = getUserSubFromHttpHeaders;
exports.response200Simple = response200Simple;
exports.response200 = response200;
exports.responseError = responseError;
exports.defaultHttpResponseHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, User",
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS,PATCH",
};
function responseOptions() {
    return {
        statusCode: 204, // No Content
        headers: Object.assign({}, exports.defaultHttpResponseHeaders),
        body: "",
    };
}
function getUserSubFromHttpHeaders(headers) {
    if ("User" in headers) {
        return headers.User;
    }
    else if ("user" in headers) {
        return headers.user;
    }
    return null;
}
function response200Simple() {
    return {
        statusCode: 200,
        headers: exports.defaultHttpResponseHeaders,
        body: JSON.stringify({ status: "success" }),
    };
}
function response200(body) {
    return {
        statusCode: 200,
        headers: exports.defaultHttpResponseHeaders,
        body: JSON.stringify(body),
    };
}
function responseError(error) {
    const errorMessage = { error: error.message };
    return {
        statusCode: error.code || 500,
        headers: exports.defaultHttpResponseHeaders,
        body: JSON.stringify(errorMessage),
    };
}
