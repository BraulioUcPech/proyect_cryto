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
        Schema::table('users', function (Blueprint $table) {
            $table->unsignedBigInteger('face_id')->nullable(); // Asegúrate de que el tipo de columna sea compatible con la columna 'id' de 'face_data'.
            $table->foreign('face_id')->references('id')->on('face_data')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign(['face_id']);
            $table->dropColumn('face_id');
        });
    }
};
