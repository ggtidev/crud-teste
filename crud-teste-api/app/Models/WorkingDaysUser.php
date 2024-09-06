<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkingDaysUser extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'user_id',
        'working_day_id',
    ];

    protected $table = 'working_days_user';

    public function workingDay()
    {
        return $this->belongsTo(WorkingDays::class, 'working_day_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}