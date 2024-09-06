<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('password');
            $table->string('crm');
            $table->string('phone_number')->unique();
            $table->string('email')->unique();
            $table->date('hiring_date');
            $table->time('start_service');
            $table->time('end_service');
            $table->boolean('status')->default(true);
            $table->foreignId('expertise_id')->constrained('expertises');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
