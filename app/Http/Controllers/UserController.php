<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function update(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:30',
            'day_of_birth' => 'nullable|date_format:Y-m-d',
            'phone' => 'nullable|string|min:0|max:11|numeric',
            'address' => 'nullable|string|max:255'
        ]);
        $data = $request->only(['name', 'day_of_birth', 'phone', 'address']);
        $user = Auth()->user();

        $user->update($data);

        return response()->json([
            'message' => 'update thông tin thành công!'
        ], 200);
    }
}
