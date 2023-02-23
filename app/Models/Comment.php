<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Auth;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'post_id',
        'message',
    ];

    protected $table = 'comments';

    /**
     * Get the user associated with the Comment
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */

    public function getCommentLikes()
    {
        return $this->hasOne(CommentLike::class, 'comment_id');
    }
}
