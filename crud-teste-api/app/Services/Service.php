<?php

namespace App\Services;

use App\Repositories\Repository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

abstract class Service
{
    protected Repository $repository;

    public function __construct(Repository $repository)
    {
        $this->repository = $repository;
    }

    public function repository()
    {
        return $this->repository;
    }    
}
