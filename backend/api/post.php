<?php

include 'db.php'; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"));

 
    if (!empty($data->nome) && !empty($data->especialidade) && !empty($data->crm) && !empty($data->email)) {
        $query = "INSERT INTO profissionais (nome, especialidade, crm, contato, email, data_contratacao, inicio_atendimento, fim_atendimento, status, dias_atendimento) 
                  VALUES (:nome, :especialidade, :crm, :contato, :email, :data_contratacao, :inicio_atendimento, :fim_atendimento, :status, :dias_atendimento)";

        $stmt = $pdo->prepare($query);
        $result = $stmt->execute([
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
            echo json_encode(["message" => "Profissional cadastrado com sucesso!"]);
        } else {
            echo json_encode(["message" => "Erro ao cadastrar profissional."]);
        }
    } else {
        echo json_encode(["message" => "Dados incompletos."]);
    }
}
?>