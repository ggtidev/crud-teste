<?php

include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "PUT") {
    $data = json_decode(file_get_contents("php://input"));

    if (!empty($data->id) && !empty($data->nome) && !empty($data->especialidade) && !empty($data->crm) && !empty($data->email)) {
        $query = "UPDATE profissionais SET 
                  nome = :nome,
                  especialidade = :especialidade,
                  crm = :crm,
                  contato = :contato,
                  email = :email,
                  data_contratacao = :data_contratacao,
                  inicio_atendimento = :inicio_atendimento,
                  fim_atendimento = :fim_atendimento,
                  status = :status,
                  dias_atendimento = :dias_atendimento
                  WHERE id = :id";

        $stmt = $pdo->prepare($query);
        $result = $stmt->execute([
            ':id' => $data->id,
            ':nome' => $data->nome,
            ':especialidade' => $data->especialidade,
            ':crm' => $data->crm,
            ':contato' => $data->contato,
            ':email' => $data->email,
            ':data_contratacao' => $data->data_contratacao,
            ':inicio_atendimento' => $data->inicio_atendimento,
            ':fim_atendimento' => $data->fim_atendimento,
            ':status' => $data->status,
            ':dias_atendimento' => implode(',', $data->dias_atendimento)
        ]);

        if ($result) {
            echo json_encode(["message" => "Profissional atualizado com sucesso!"]);
        } else {
            echo json_encode(["message" => "Erro ao atualizar profissional."]);
        }
    } else {
        echo json_encode(["message" => "Dados incompletos."]);
    }
}
?>