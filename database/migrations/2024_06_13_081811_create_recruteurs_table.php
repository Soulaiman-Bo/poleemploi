<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecruteursTable extends Migration
{
    public function up()
    {
        Schema::create('recruteurs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('personne_id')->constrained('personnes');
            $table->string('refRecruteur')->unique();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('recruteurs');
    }
}
