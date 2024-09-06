<?php

namespace App\Http\Controllers;

use App\Services\Service;
use App\Services\WorkingDaysService;

class WorkingDaysController extends Controller
{
    protected Service $service;

    public function __construct(WorkingDaysService $service)
    {
        $this->service = $service;
    }

    public function showAll()
    {
        return $this->service->getAll();
    }
}

