<?php

namespace App\Services;

use App\Models\WorkingDaysUser;
use App\Repositories\ExpertiseRepository;
use App\Repositories\Repository;
use App\Repositories\UserRepository;
use App\Repositories\WorkingDaysRepository;
use Exception;
use Illuminate\Http\Request;

class UserService extends Service
{
    protected Repository $working_day_repository;
    protected Repository $expertise_repository;

    public function __construct(
        UserRepository $repository,
        WorkingDaysRepository $working_day_repository,
        ExpertiseRepository $expertise_repository
    ) {
        parent::__construct($repository);
        $this->working_day_repository = $working_day_repository;
        $this->expertise_repository = $expertise_repository;
    }

    public function create(Request $request)
    {
        try {
            $data = $request->except(['working_days']);

            $data["password"] = bcrypt($data["password"]);
            $user = $this->repository->create($data);
    
            foreach($request->working_days as $day){
                WorkingDaysUser::create([
                    'working_day_id' => $day,
                    'user_id' => $user->id,
                ]);
            }

            return response()->json([
                'success' => true,
                'user' => $user,
            ], 201);
        } catch (Exception $error) {
            return response()->json(['message' => $error->getMessage()], 400);
        }
    }

    public function getAll()
    {
        try {
            $users = $this->repository->getAllWithNestedRelations(['workingDays', 'expertise'], 'id', 'asc');
    
            return response()->json([
                'success' => true,
                'user' => $users,
            ], 200);
        } catch (Exception $error) {
            return response()->json(['message' => $error->getMessage()], 400);
        }
    }

    public function find(string $id)
    {
        try {
            $users = $this->repository->findWithNestedRelations($id, ['workingDays', 'expertise']);
    
            return response()->json([
                'success' => true,
                'user' => $users,
            ], 200);
        } catch (Exception $error) {
            return response()->json(['message' => $error->getMessage()], 400);
        }
    }

    public function update(string $id, Request $request)
    {
        try {
            $data = $request->except(['working_days']);
            $updatedUser = $this->repository->update(['id' => $id], $data);
    
            WorkingDaysUser::where('user_id', $id)->delete();

            foreach($request->working_days as $day){
                WorkingDaysUser::create([
                    'working_day_id' => $day,
                    'user_id' => $id,
                ]);
            }

            return response()->json([
                'success' => true,
            ], 200);
        } catch (Exception $error) {
            return response()->json(['message' => $error->getMessage()], 400);
        }
    }

    public function delete(string $id)
    {
        try {
            WorkingDaysUser::where('user_id', $id)->delete();

            $users = $this->repository->deleteById($id);

            return response()->json([
                'success' => true,
            ], 200);
        } catch (Exception $error) {
            return response()->json(['message' => $error->getMessage()], 400);
        }
    }
}