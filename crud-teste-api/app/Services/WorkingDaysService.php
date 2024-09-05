<?php

namespace App\Services;

use App\Repositories\WorkingDaysRepository;
use Exception;

class WorkingDaysService extends Service
{

    public function __construct(
        WorkingDaysRepository $repository,
    ) {
        parent::__construct($repository);
    }

    public function getAll()
    {
        try {
            $working_days = $this->repository->getAll('id', 'asc');
    
            return response()->json([
                'success' => true,
                'working_days' => $working_days,
            ], 200);
        } catch (Exception $error) {
            return response()->json(['status' => 400, 'message' => $error->getMessage()]);
        }
    }
}