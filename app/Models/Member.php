<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Fillable;

#[Fillable(['user_id', 'name', 'study_program', 'role'])]
class Member extends Model
{
    public function user() {
        return $this->belongsTo(User::class, 'user_id');
    }
}
