<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;

class ProductSizeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('product_size')->insert([
            'product_id' => 1,
            'value' => 40,
            'unit' => 'g'
        ]);

        DB::table('product_size')->insert([
            'product_id' => 1,
            'value' => 170,
            'unit' => 'g',
        ]);

        DB::table('product_size')->insert([
            'product_id' => 2,
            'value' => 240,
            'unit' => 'ml',
        ]);

        DB::table('product_size')->insert([
            'product_id' => 2,
            'value' => 300,
            'unit' => 'ml',
        ]);

        DB::table('product_size')->insert([
            'product_id' => 3,
            'value' => 90,
            'unit' => 'g',
        ]);

        DB::table('product_size')->insert([
            'product_id' => 3,
            'value' => 10,
            'unit' => 'g',
        ]);

        DB::table('product_size')->insert([
            'product_id' => 4,
            'value' => 25,
            'unit' => 'g',
        ]);

        DB::table('product_size')->insert([
            'product_id' => 5,
            'value' => 240,
            'unit' => 'ml',
        ]);

        DB::table('product_size')->insert([
            'product_id' => 5,
            'value' => 800,
            'unit' => 'ml',
        ]);

        DB::table('product_size')->insert([
            'product_id' => 5,
            'value' => 1000,
            'unit' => 'ml',
        ]);

        DB::table('product_size')->insert([
            'product_id' => 6,
            'value' => 500,
            'unit' => 'ml',
        ]);

        DB::table('product_size')->insert([
            'product_id' => 6,
            'value' => 1000,
            'unit' => 'ml',
        ]);


    }
}
