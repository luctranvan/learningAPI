<?php

namespace App\Http\Controllers;

use App\Product;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function products()
    {
        $products = Product::all();
        return response()->json($products);
    }

    public function add(Request $request)
    {

        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'quantity' => 'required|integer|min:1|max:9999999999'
        ]);

        $data = $request->only(['name', 'description', 'price', 'quantity']);

        $product = Product::create($data);

        return response()->json([
            'message' => 'Tạo mới sản phẩm khoản thành công!'
        ], 201);

    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make(['id' => $id], [
            'id' => 'required|exists:products,id',
        ]);

        if ($validator->fails()) {
            return error_response_json($validator->errors()->messages());
        }
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric'
        ]);

        $data = $request->only(['name', 'description', 'price', 'quantity']);

        $model = Product::where('id', $id)->firstOrFail();
        $model->update($data);

        return response()->json([
            'message' => 'Update thông tin thành công!'
        ], 200);
    }

    public function delete(Request $request, $id)
    {
        $validator = Validator::make(['id' => $id], [
            'id' => 'required|exists:products,id',
        ]);

        if ($validator->fails()) {
            return error_response_json($validator->errors()->messages());
        }

        $model = Product::where('id', $id)->firstOrFail();
        $model->delete();
        return response()->json([
            'message' => 'Xóa sản phẩm thành công!'
        ]);
    }
}
