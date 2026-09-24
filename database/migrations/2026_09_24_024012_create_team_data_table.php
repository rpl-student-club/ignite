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
        Schema::create('team_data', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('competition_id')->constrained('competitions')->onDelete('restrict');
            $table->string('university');
            $table->string('mentor');
            $table->string('ktm_link');
            $table->string('document_link')->nullable();
            $table->enum('status', ['FAILED', 'PASSED']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('team_data');
    }
};
