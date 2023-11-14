<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class MyApiTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function testGetFiles()
    {
        $response = $this->get('/api/files');

        if ($response->status() === 302) {
            $response = $this->followRedirects($response);
        }

        $response->assertStatus(200);
        $response->assertJsonStructure([
            '*' => [
                'id',
                'user_id',
                'file_name',
                'encrypted_data',
                'created_at',
                'updated_at',
            ]
        ]);
    }
}
