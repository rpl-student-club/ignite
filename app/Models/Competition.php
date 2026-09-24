<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Fillable;

#[Fillable(['name', 'description'])]
class Competition extends Model
{
    public function teamData() {
        return $this->hasMany(TeamData::class);
    }
}
