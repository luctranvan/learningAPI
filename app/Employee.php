<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Employee extends Model
{
    protected $table = 'employees';
    use SoftDeletes;

    protected $fillable = ['name', 'salary', 'age'];
}
