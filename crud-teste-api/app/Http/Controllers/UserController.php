<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\StoreUserRequest;
use App\Services\Service;
use App\Services\UserService;
use Illuminate\Http\Request;

class UserController extends Controller
{
    protected Service $service;

    public function __construct(UserService $service)
    {
        $this->service = $service;
    }

    public function store(Request $request)
    {
        return $this->service->create($request);
    }

    public function showAll()
    {
        return $this->service->getAll();
    }

    public function find(string $user_id)
    {
        return $this->service->find($user_id);
    }

    public function update(string $user_id, Request $request)
    {
        return $this->service->update($user_id, $request);
    }

    public function delete(string $id)
    {
        return $this->service->delete($id);
    }
}
