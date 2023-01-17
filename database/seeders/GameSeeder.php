<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;
use Str;

class GameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('games')->insert([
            'name' => 'Gods of War 4',
            'genre' => 'Action-adventure game, Role-playing video game, Fighting game, Hack and slash, Adventure',
            'trailer_link' => 'https://www.youtube.com/watch?v=K0u_kAWLJOA&ab_channel=PlayStation',
            'image' => 'gow4.jpg',
            'rating' => 5,
        ]);

        DB::table('games')->insert([
            'name' => 'Days Gone',
            'genre' => 'Open world, Action-adventure game, Shooter game, Survival horror, Nonlinear gameplay, Adventure',
            'trailer_link' => 'https://www.youtube.com/watch?v=FKtaOY9lMvM&ab_channel=PlayStation',
            'image' => 'daysgone.jpg',
            'rating' => 5,
        ]);

        DB::table('games')->insert([
            'name' => 'Assassins Creed Odyssey',
            'genre' => 'Action-adventure game, Fighting game, Shooter game, Platform game, Action role-playing game, Adventure',
            'trailer_link' => 'https://www.youtube.com/watch?v=_ddQqzwH__4&ab_channel=PlayStation',
            'image' => 'odyssey.jpg',
            'rating' => 5,
        ]);

        DB::table('games')->insert([
            'name' => 'Assassins Creed Valhalla',
            'genre' => 'Action-adventure game, Fighting game, Shooter game, Platform game, Action role-playing game, Adventure',
            'trailer_link' => 'https://www.youtube.com/watch?v=ssrNcwxALS4&ab_channel=IGN',
            'image' => 'valhalla.png',
            'rating' => 4,
        ]);

        DB::table('games')->insert([
            'name' => 'State of Decay 2',
            'genre' => 'Survival game, Open world, Shooter game, Horror, Hack and Slash, Fighting game,',
            'trailer_link' => 'https://www.youtube.com/watch?v=1ljRGIDGdwU&ab_channel=Xbox',
            'image' => 'sod2.jpg',
            'rating' => 5,
        ]);

        DB::table('games')->insert([
            'name' => 'Player Unknown Battleground',
            'genre' => 'Battle royale game, Shooter game, Free-to-play, Action-adventure game',
            'trailer_link' => 'https://www.youtube.com/watch?v=fDLAFIhfFy4&ab_channel=PUBG%3ABATTLEGROUNDS',
            'image' => 'pubg.jpg',
            'rating' => 5,
        ]);

        DB::table('games')->insert([
            'name' => 'Mobile Legends',
            'genre' => 'Multiplayer online battle arena, Action role-playing game',
            'trailer_link' => 'https://www.youtube.com/watch?v=1WolDM3mnSY&ab_channel=MobileLegends%3ABangBangOfficial',
            'image' => 'ml.jpg',
            'rating' => 5,
        ]);

        DB::table('games')->insert([
            'name' => 'Dota 2',
            'genre' => 'Multiplayer online battle arena, Entertainment, Narrative, Fantasy, Action role-playing game, Speculative fiction, Societal',
            'trailer_link' => 'https://www.youtube.com/watch?v=dokXgdROdE4&ab_channel=MaxLebled-3Danimator',
            'image' => 'dota2.jpg',
            'rating' => 5,
        ]);

        DB::table('games')->insert([
            'name' => 'Minecraft',
            'genre' => 'Sandbox survival, Builder, Open world, Adventure',
            'trailer_link' => 'https://www.youtube.com/results?search_query=minecraft+trailer',
            'image' => 'minecraft.jpg',
            'rating' => 4,
        ]);

        DB::table('games')->insert([
            'name' => 'Roblox',
            'genre' => 'First-person shooter, Simulation video game',
            'trailer_link' => 'https://www.youtube.com/watch?v=eAvXhNlO-rA&ab_channel=Roblox',
            'image' => 'roblox.jpg',
            'rating' => 4,
        ]);

        DB::table('games')->insert([
            'name' => 'Counter Strike 1.3',
            'genre' => 'First-person shooter',
            'trailer_link' => 'https://www.youtube.com/watch?v=Q2tHNL4lDVQ&ab_channel=MMOBomb',
            'image' => 'cs.jpg',
            'rating' => 3,
        ]);

        DB::table('games')->insert([
            'name' => 'CS Go',
            'genre' => 'First-person shooter',
            'trailer_link' => 'https://www.youtube.com/watch?v=edYCtaNueQY&ab_channel=Valve',
            'image' => 'csgo.jpg',
            'rating' => 4,
        ]);

        DB::table('games')->insert([
            'name' => 'Valorant',
            'genre' => 'First-person shooter',
            'trailer_link' => 'https://www.youtube.com/watch?v=XfuMEmcz3k0&ab_channel=VALORANT',
            'image' => 'valorant.jpg',
            'rating' => 4,
        ]);

        DB::table('games')->insert([
            'name' => 'Left 4 Dead 2',
            'genre' => 'First-person shooter, Horror',
            'trailer_link' => 'https://www.youtube.com/watch?v=XfuMEmcz3k0&ab_channel=VALORANT',
            'image' => 'left4dead2.jpg',
            'rating' => 3.5,
        ]);

        DB::table('games')->insert([
            'name' => 'NBA 2k22',
            'genre' => ' Simulation video game, Sports video game, Adventure game, Simulation Game, Sports',
            'trailer_link' => 'https://www.youtube.com/watch?v=OcUzwnA569M&ab_channel=NBA2K',
            'image' => 'nba2k22.jpg',
            'rating' => 3.5,
        ]);

        DB::table('games')->insert([
            'name' => 'Apex Legends',
            'genre' => 'First-person shooter, Battle royale game',
            'trailer_link' => 'https://www.youtube.com/watch?v=UMJb_mkqynU&ab_channel=ApexLegends',
            'image' => 'apex.jpg',
            'rating' => 3.5,
        ]);

        DB::table('games')->insert([
            'name' => 'Rust',
            'genre' => 'Survival game, First-person shooter, Indie game',
            'trailer_link' => 'https://www.youtube.com/watch?v=LGcECozNXEw&ab_channel=Facepunch',
            'image' => 'rust.png',
            'rating' => 3,
        ]);

        DB::table('games')->insert([
            'name' => 'Red Dead Redemption 2',
            'genre' => 'Open world, Action-adventure game, Third person shooter',
            'trailer_link' => 'https://www.youtube.com/watch?v=HVRzx17WHVk&ab_channel=RockstarGames',
            'image' => 'reddead2.jpg',
            'rating' => 4,
        ]);

        DB::table('games')->insert([
            'name' => 'Grand Theft Auto V',
            'genre' => ' Action-adventure game, Open world, Sandbox, Third-person shooter, Nonlinear gameplay, Adventure',
            'trailer_link' => 'https://www.youtube.com/watch?v=QkkoHAzjnUs&ab_channel=RockstarGames',
            'image' => 'GTAV.jpg',
            'rating' => 4,
        ]);

        DB::table('games')->insert([
            'name' => 'The Witcher 3 Wild Hunt',
            'genre' => 'Open world, Action role-playing game, Fighting game, Action-adventure game, Nonlinear gameplay',
            'trailer_link' => 'https://www.youtube.com/watch?v=1-l29HlKkXU&ab_channel=TheWitcher',
            'image' => 'witcher3.jpg',
            'rating' => 4,
        ]);

    }
}
