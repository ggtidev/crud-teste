<?php

namespace App\Repositories;

use App\Models\WorkingDays;
use App\Repositories\Repository;

class WorkingDaysRepository extends Repository
{
    protected $model;

    public function __construct(WorkingDays $model)
    {
        parent::__construct($model);
    }
}