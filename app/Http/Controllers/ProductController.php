<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Models\Product;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $product_paginate = Product::orderBy('rating', 'desc')->paginate(8);
        // get items and add new value
        $product_paginate->getCollection()->transform(function ($value) {
            $variation = Product::find($value->id);
            $value->size = $variation->getSizes;
            if($variation->getSizes()->first()) {
                $value->default_price = $variation->getSizes()->first()->price;
                $value->default_size = $variation->getSizes()->first()->value;
                $value->default_product_size_id = $variation->getSizes()->first()->id;
                $value->default_stocks = $variation->getSizes()->first()->stock;
            }
            return $value;
        });

        return $product_paginate;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
