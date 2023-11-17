<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('files', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('name')->nullable();
            $table->string('file_name'); // Nombre del archivo encriptado
            $table->bigInteger('file_size')->nullable();
            $table->text('encrypted_data'); // Ruta del archivo encriptado
            $table->text('iv'); // IV para desencriptar el archivo
            $table->string('file_type')->nullable(); // Tipo de archivo (opcional)
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('files');
    }
};
