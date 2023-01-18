<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;
use DB;
use Auth;
use Carbon;
use Validator;

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
            'id' => 'required|exists:products',
            'quantity' => 'integer|required',
            'product_size_id' => 'integer|required',
        ]);

        if($validator->fails()) {
            return response()->json(['message' => $validator->messages()->get('*')], 500);
        }

        $cart = Cart::where('product_id', $request->input('id'))->where('product_size_id', $request->input('product_size_id'))->first();

        if($cart) {
            $cart->update([
                'quantity' => $request->input('quantity') + $cart->quantity
            ]);

            $cart->save();
            return response()->json(['message' => 'updated'], 200);
        }

        DB::table('carts')->insert([
            'user_id' => Auth::user()->id,
            'product_id' => $request->input('id'),
            'quantity' => $request->input('quantity'),
            'product_size_id' => $request->input('product_size_id'),
            'created_at' => Carbon::now(),
        ]);

        return $request->all();
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function destroy(Cart $cart)
    {
        //
    }
}
