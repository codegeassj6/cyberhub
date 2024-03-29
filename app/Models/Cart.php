<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ProductSize;

class Cart extends Model
{
    use HasFactory;

    protected $table = 'carts';
    protected $fillable = [
        'user_id',
        'product_id',
        'quantity',
        'product_size_id',

    ];

    public function getProductSize()
    {
        return $this->hasOne(ProductSize::class, 'id', 'product_size_id');
    }

}
