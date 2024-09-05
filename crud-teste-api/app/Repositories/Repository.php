<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;

abstract class Repository
{

    protected $model;

    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    public function model()
    {
        return $this->model;
    }

    public function create(array $data)
    {
        return $this->model->create($data);
    }

    public function find(string $id)
    {
        return $this->model->find($id);
    }

    public function findWithNestedRelations(string $id, array $relations)
    {
        return $this->model
            ->with($relations)
            ->find($id);
    }

    public function getAll(string $parameter, string $order)
    {
        return $this->model
            ->orderBy($parameter, $order)
            ->get();
    }

    public function getAllWithNestedRelations(array $relations, string $parameter, string $order)
    {
        return $this->model
            ->with($relations)
            ->orderBy($parameter, $order)
            ->get();
    }

    public function update(array $conditions, array $data)
    {
        $this->model
            ->where($conditions)
            ->update($data);
    }

    public function updateById(string $id, array $data)
    {
        $this->model
            ->where('id', $id)
            ->update($data);
    }

    public function deleteById(string $id)
    {
        $this->model
            ->where('id', $id)
            ->delete();
    }

    public function delete(array $conditions)
    {
        $this->model
            ->where($conditions)
            ->delete();
    }
}
