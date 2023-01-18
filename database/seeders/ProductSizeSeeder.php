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
            'unit' => 'g',
            'price' => 15
        ]);

        DB::table('product_size')->insert([
            'product_id' => 1,
            'value' => 170,
            'unit' => 'g',
            'price' => 30,
        ]);

        DB::table('product_size')->insert([
            'product_id' => 2,
            'value' => 240,
            'unit' => 'ml',
            'price' => rand(10, 30)
        ]);

        DB::table('product_size')->insert([
            'product_id' => 2,
            'value' => 300,
            'unit' => 'ml',
            'price' => rand(10, 30)
        ]);

        DB::table('product_size')->insert([
            'product_id' => 3,
            'value' => 90,
            'unit' => 'g',
            'price' => rand(10, 30)
        ]);

        DB::table('product_size')->insert([
            'product_id' => 3,
            'value' => 10,
            'unit' => 'g',
            'price' => rand(10, 30)
        ]);

        DB::table('product_size')->insert([
            'product_id' => 4,
            'value' => 25,
            'unit' => 'g',
            'price' => rand(10, 30)
        ]);

        DB::table('product_size')->insert([
            'product_id' => 5,
            'value' => 240,
            'unit' => 'ml',
            'price' => rand(10, 30)
        ]);

        DB::table('product_size')->insert([
            'product_id' => 5,
            'value' => 800,
            'unit' => 'ml',
            'price' => rand(10, 30)
        ]);

        DB::table('product_size')->insert([
            'product_id' => 5,
            'value' => 1000,
            'unit' => 'ml',
            'price' => rand(10, 30)
        ]);

        DB::table('product_size')->insert([
            'product_id' => 6,
            'value' => 500,
            'unit' => 'ml',
            'price' => rand(10, 30)
        ]);

        DB::table('product_size')->insert([
            'product_id' => 6,
            'value' => 1000,
            'unit' => 'ml',
            'price' => rand(10, 30)
        ]);
    }
}
