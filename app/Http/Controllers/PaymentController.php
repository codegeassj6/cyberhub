<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $stripe = new \Stripe\StripeClient(env('STRIPE_SK'));
        $checkout = $stripe->checkout->sessions->create([
            'success_url' => 'cyberhub.test',
            'cancel_url' => 'cyberhub.test',
            'line_items' => [
                [
                    'price_data' => [
                        'currency' => 'usd',
                        'unit_mount' => 500,
                        'product_data' => [
                            'name' => "Cool stripe",
                        ]
                    ],
                ],
                'quantity' => 1,
            ],
            'mode' => 'payment',
        ]);

        return response()->json(['message' => ''], 200);
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
