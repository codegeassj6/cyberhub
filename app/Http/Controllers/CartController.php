<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;
use DB;
use Auth;
use Carbon;
use Validator;
use App\Models\Product;
use App\Models\ProductSize;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cart = Cart::where('user_id', Auth::user()->id)->get();
        $cart->each(function($value) {
            $value->product_details = Product::find($value->product_id);
            $value->product_size_details = ProductSize::find($value->product_size_id);
            return $value;
        });

        return response()->json([
            'cart_items' => $cart,
            'cart_count' => $cart->pluck('quantity')->sum(),
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCartRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'product_id' => 'required',
            'quantity' => 'integer|required',
            'product_size_id' => 'integer|required',
        ]);

        if($validator->fails()) {
            return response()->json(['message' => $validator->messages()->get('*')], 500);
        }

        $cart = Cart::where('product_id', $request->input('product_id'))->where('product_size_id', $request->input('product_size_id'))->first();
        $product_details = ProductSize::where('id', $request->input('product_size_id'))->first();

        $quantity = $request->input('quantity');
        if($cart) {
            if($request->input('quantity') + $cart->quantity > $product_details->stock) {
                $quantity = $product_details->stock;
            } else {
                $quantity = $request->input('quantity') + $cart->quantity;
            }
                $cart->update([
                    // 'quantity' => $request->input('quantity') + $cart->quantity
                    'quantity' => $quantity
                ]);

                $cart->save();

                // return data query
                $cart_count = Cart::where('user_id', Auth::id())->get();
                return response()->json(['quantity' => $cart_count->pluck('quantity')->sum()], 200);
        }

        if($request->input('quantity') > $product_details->stock) {
            $quantity = $product_details->stock;
        }


        DB::table('carts')->insert([
            'user_id' => Auth::user()->id,
            'product_id' => $request->input('product_id'),
            'quantity' => $quantity,
            'product_size_id' => $request->input('product_size_id'),
            'created_at' => Carbon::now(),
        ]);

        // return data query
        $cart_count = Cart::where('user_id', Auth::id())->get();
        return response()->json(['quantity' => $cart_count->pluck('quantity')->sum()], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function show(Cart $cart)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCartRequest  $request
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Cart $cart)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'exists:carts|required',
            'quantity' => 'integer',
        ]);

        if($validator->fails()) {
            return response()->json(['message' => $validator->messages()->get('*')], 500);
        }

        $cart = $cart::where('id', $request->input('id'))->where('user_id', Auth::id())->first();
        if($cart) {
            if($request->input('quantity') >= 1 && $request->input('quantity') <= $cart->getProductSize->stock) {
                $cart->quantity = $request->input('quantity');
                $cart->save();

                return response()->json(['updated' => ''], 200);
            }
        }

        return response()->json(['message' => 'fail'], 500);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $cart = Cart::findOrFail($request->input('id'));
        if($cart->user_id == Auth::user()->id) {
            $cart->delete();
        }
    }
}
