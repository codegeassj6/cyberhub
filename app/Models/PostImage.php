<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Post;

class PostImage extends Model
{
    use HasFactory;

    protected $fillable = [
        'post_id',
        'image_link',
    ];

    protected $table = 'post_images';

    public function belongsToPost() {
        return $this->belongsTo(Post::class, 'post_id', 'id');
    }
}
