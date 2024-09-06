<?php

namespace Database\Seeders;

use App\Models\Expertise;
use App\Models\WorkingDays;
use Illuminate\Database\Seeder;

class ExpertisesSeeder extends Seeder
 {
    public function run(): void
    {
        $expertises = [
            ['name' => 'Pediatria'],
            ['name' => 'Ginecologia'],
            ['name' => 'Obstetrícia'],
            ['name' => 'Neonatologia'],
            ['name' => 'Endocrinologia Pediátrica'],
            ['name' => 'Nutrição Infantil'],
            ['name' => 'Genética Pediátrica'],
            ['name' => 'Alergologia Pediátrica'],
        ];

        foreach ($expertises as $value) {
            Expertise::create($value);
        }
    }
 }