<?php

namespace App\Http\Controllers;

use App\Cart;
use App\Order;
use App\OrderProduct;
use App\Product;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class CartController extends Controller
{
    public function add(Request $request, $id)
    {
        $product = Product::findOrFail($id);
        $quantity = $request->quantity;
        $order = Cart::firstOrNew([
            'user_id' => Auth::id(),
            'product_id' => $id
        ]);
        if ($quantity) {
            $order->quantity = $quantity;
        } else {
            $order->quantity += 1;
        }

        $validator = Validator::make([
            'id' => $id,
            'quantity' => $order->quantity
        ], [
            'id' => 'required|exists:products,id',
            'quantity' => 'nullable|integer|min:1|max:'.$product->quantity
        ]);

        if ($validator->fails()) {
            return error_response_json($validator->errors()->messages());
        }

        $order->save();

        return response()->json($order);
    }

    public function products()
    {
        $products = Cart::where([
            ['user_id', '=', Auth::id()]
        ])->with('product')->get();
        return response()->json($products);
    }

    public function checkout(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'address' => 'required|string|min:3|max:255',
            'phone' => 'required|numeric'
        ]);
        if ($validator->fails()) {
            return error_response_json($validator->errors()->messages());
        }

        try {
            DB::beginTransaction();
            $products = Cart::where([
                ['user_id', '=', Auth::id()]
            ])->with('product')->get();

            if (!count($products)) {
                return error_response_json([], 'Bạn chưa có sản phẩm nào!');
            }

            $address = $request->address;
            $phone = $request->phone;
            $total = 0;
            foreach ($products as $product) {
                $total += $product->price;
            }

            $order = Order::create([
                'user_id' => Auth::id(),
                'address' => $address,
                'phone' => $phone,
                'status' => 1,
                'total' => $total
            ]);

            $order_product = [];
            $now = Carbon::now();
            foreach ($products as $product) {
                $order_product[] = [
                    'order_id' => $order->id,
                    'product_id' => $product->product_id,
                    'quantity' => $product->quantity,
                    'price' => $product->product->price,
                    'total' => $product->price,
                    'created_at' => $now,
                    'updated_at' => $now,
                ];
                Product::find($product->product_id)->decrement('quantity',  $product->quantity);
            }
            OrderProduct::insert($order_product);
            Cart::where([
                ['user_id', '=', Auth::id()]
            ])->delete();
            DB::commit();
            return response_json([], 'Mua hàng thành công');
        } catch (\Exception $e) {
            DB::rollBack();
            return error_response_json($e->getMessage(), 'Error', 500);
        }
    }
}
