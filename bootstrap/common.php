<?php

function response_json($data = [], $message = 'Success', $code = true)
{
    return response()->json([
        'data' => $data,
        'code' => $code,
        'message' => $message,
    ]);
}

function error_response_json($errors = [], $message = 'Error', $code = 422)
{
    return response()->json([
        'errors' => $errors,
        'code' => $code,
        'message' => $message,
    ]);
}

function response_sql($data, $code = 1)
{
    return [
        'data' => $data,
        'code' => $code
    ];
}

function ApiResult($code = null, $msg = null, $data = null, $error = null, $debug = null)
{
    $response = ['code' => $code, 'msg' => $msg, 'data' => $data, 'error' => $error, 'debug' => $debug];
    return response()->json($response, $code);
}

function intToDateTime($value){
    return date("Y-m-d H:i:s", $value);
}
