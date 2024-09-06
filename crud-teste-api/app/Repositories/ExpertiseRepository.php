<?php

namespace App\Repositories;

use App\Models\Expertise;
use App\Repositories\Repository;

class ExpertiseRepository extends Repository
{
    protected $model;

    public function __construct(Expertise $model)
    {
        parent::__construct($model);
    }
}