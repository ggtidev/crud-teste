<?php

namespace App\Services;

use App\Repositories\ExpertiseRepository;
use Exception;

class ExpertiseService extends Service
{

    public function __construct(
        ExpertiseRepository $repository,
    ) {
        parent::__construct($repository);
    }

    public function getAll()
    {
        try {
            $expertises = $this->repository->getAll('name', 'asc');
    
            return response()->json([
                'success' => true,
                'expertises' => $expertises,
            ], 200);
        } catch (Exception $error) {
            return response()->json(['status' => 400, 'message' => $error->getMessage()]);
        }
    }
}