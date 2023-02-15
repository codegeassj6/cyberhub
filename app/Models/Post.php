<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\PostImage;
use Carbon;
use Auth;
use App\Models\PostLike;

class Post extends Model
{
    use HasFactory;

    protected $table = 'posts';
    protected $fillable = [
        'user_id',
        'message',
        'created_at',
        'updated_at',
    ];

    protected $casts = [
        'is_like' => 'boolean',
    ];

    public function getUser() {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function getAttachImages() {
        return $this->hasMany(PostImage::class, 'post_id')->orderBy('created_at', 'desc');
    }

    public function getComments() {
        return $this->hasMany(Comment::class, 'post_id')->orderBy('created_at', 'desc');
    }

    public function getPostLikes() {
        return $this->hasMany(PostLike::class, 'post_id')->where('user_id', Auth::id());
    }


}
