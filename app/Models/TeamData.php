<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Fillable;

#[Fillable(['user_id', 'competition_id', 'university', 'mentor', 'ktm_link', 'document_link', 'status'])]
class TeamData extends Model
{
    public function user() {
        return $this->belongsTo(User::class);
    }

    public function competition() {
        return $this->belongsTo(Competition::class);
    }
}
