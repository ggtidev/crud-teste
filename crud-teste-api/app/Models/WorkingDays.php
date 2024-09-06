<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkingDays extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'day',
    ];

    protected $table = 'working_days';
}