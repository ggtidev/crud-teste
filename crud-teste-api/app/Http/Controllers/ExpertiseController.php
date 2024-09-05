<?php

namespace App\Http\Controllers;

use App\Services\ExpertiseService;
use App\Services\Service;

class ExpertiseController extends Controller
{
    protected Service $service;

    public function __construct(ExpertiseService $service)
    {
        $this->service = $service;
    }

    public function showAll()
    {
        return $this->service->getAll();
    }
}
