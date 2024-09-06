<?php

namespace Database\Seeders;

use App\Models\Expertise;
use App\Models\User;
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
 {
    public function run(): void
    {
        $expertise = Expertise::where('name', 'Pediatria')->first();

        $user = [
            'name' => 'Admin',
            'password' => 'password',
            'expertise_id' => $expertise->id,
            'crm' => '4617826439',
            'phone_number' => '83861242357',
            'email' => 'admin@gmail.com',
            'hiring_date' => now(),
            'start_service' => '08:00',
            'end_service' => '16:00',
            'status' => true,
        ];

        User::create($user);
    }
 }