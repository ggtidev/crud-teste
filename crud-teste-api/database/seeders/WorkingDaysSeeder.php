<?php

namespace Database\Seeders;

use App\Models\WorkingDays;
use Illuminate\Database\Seeder;

class WorkingDaysSeeder extends Seeder
 {
    public function run(): void
    {
        $days = [
            ['day' => 'Segunda-feira'],
            ['day' => 'Terça-feira'],
            ['day' => 'Quarta-feira'],
            ['day' => 'Quinta-feira'],
            ['day' => 'Sexta-feira'],
            ['day' => 'Sábado'],
            ['day' => 'Domingo'],
        ];

        foreach ($days as $value) {
            WorkingDays::create($value);
        }
    }
 }