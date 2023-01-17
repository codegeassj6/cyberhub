<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'image',
        'rating'
    ];

    protected $table = 'products';



    public function getSizes() {
        return $this->hasMany(ProductSize::class, 'product_id', 'id')->orderBy('value', 'asc');
    }
}
