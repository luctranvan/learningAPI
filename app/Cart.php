<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $fillable = [
        'user_id', 'product_id', 'quantity'
    ];

    protected $appends = ['price'];

    public function product()
    {
        return $this->belongsTo('App\Product');
    }

    public function getPriceAttribute()
    {
        return $this->attributes['quantity'] * $this->product->price;
    }
}
