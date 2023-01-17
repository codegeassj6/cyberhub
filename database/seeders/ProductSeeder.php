<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;
use Str;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
            'stock' => rand(1,12),
            'name' => 'Piatos',
            'description' => Str::random(10),
            'variation' => '',
            'rating' => 5,
            'image' => 'piatos.jpg',
        ]);

        DB::table('products')->insert([
            'stock' => rand(1,12),
            'name' => 'Sting',
            'description' => Str::random(10),
            'variation' => '',
            'rating' => 5,
            'image' => 'sting.jpg',
        ]);

        DB::table('products')->insert([
            'stock' => rand(1,12),
            'name' => 'Cracklings',
            'description' => Str::random(10),
            'variation' => '',
            'rating' => 5,
            'image' => 'cracklings.png',
        ]);

        DB::table('products')->insert([
            'stock' => rand(1,12),
            'name' => 'Extreme',
            'description' => Str::random(10),
            'variation' => '',
            'rating' => 5,
            'image' => 'extreme.jpg',
        ]);

        DB::table('products')->insert([
            'stock' => rand(1,12),
            'name' => 'Coke',
            'description' => Str::random(10),
            'variation' => '',
            'rating' => 5,
            'image' => 'coke12oz.jpg',
        ]);

        DB::table('products')->insert([
            'stock' => rand(1,12),
            'name' => 'Nature Spring Bottle Water',
            'description' => Str::random(10),
            'variation' => '',
            'rating' => 5,
            'image' => 'naturespring500ml.jpg',
        ]);

    }
}
