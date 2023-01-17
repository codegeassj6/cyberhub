<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Str;
use DB;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('posts')->insert([
            'user_id' => rand(1,10),
            'message' => Str::random(10),
        ]);
    }
}
