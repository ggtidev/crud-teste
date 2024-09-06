<?php

namespace App\Repositories;

use App\Models\Expertise;
use App\Models\User;
use App\Models\WorkingDays;
use App\Repositories\Repository;

class UserRepository extends Repository
{
    protected $model;

    public function __construct(User $model)
    {
        parent::__construct($model);
    }

    public function createRelationshipWorkingDay(array $data_relationship)
    {
        WorkingDays::create($data_relationship);
    }

    public function createRelationshipExpertise(array $data_relationship)
    {
        Expertise::create($data_relationship);
    }
}