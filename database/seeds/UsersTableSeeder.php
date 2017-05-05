<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user1 = array(
            'name' => 'Admin',
            'email' => 'admin@teapot.dev',
            'password' => bcrypt('admin'),
        );

        App\User::create($user1);

        $user1 = array(
            'name' => 'User',
            'email' => 'user@teapot.dev',
            'password' => bcrypt('user'),
        );

        App\User::create($user1);

        factory(App\User::class, 20)->create();
    }
}
