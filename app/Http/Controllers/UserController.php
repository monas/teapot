<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    //
    public static function getAllUsers()
    {
        // $list = \App\User::select('email')->get()->pluck('email');
        $list = \App\User::get(); //->pluck('email');

        return compact('list');
    }
}
