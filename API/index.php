<?php

require_once __DIR__ . '/config.php';

  // aqui estou verificando se a requisição é GET ou POST
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        get();
        break;
    case 'POST':
        post();
        break;
    case 'PUT':
        put();
        break;
    case 'DELETE':
        delete();
        break;
    default:
        http_response_code(405);
        echo json_encode(['error' => 'Método não permitido' + $method]);
        exit;
}

function createConection() {
    $dsn = 'mysql:host=localhost:3306;dbname=hospital';
    $username = 'gerente';
    $password = '123456';

    $pdo = new PDO($dsn, $username, $password);
    return $pdo;
}

function get() {
    
    $pdo = createConection();

    $stmt = $pdo->prepare('SELECT * FROM Cadastro_Profissionais');
    $stmt->execute();

    $profissionais = $stmt->fetchAll();
    http_response_code(200);
    echo json_encode(['profissionais' => $profissionais]);
}

function post() {

    $pdo = createConection();
    $data = json_decode(file_get_contents('php://input'), true);

    $nome = $data['nome'];
    $especialidade = $data['especialidade'];
    $crm = $data['crm'];
    $contato = $data['contato'];
    $email = $data['email'];
    $inicioatendimento = $data['inicioatendimento'];
    $fimatendimento = $data['fimatendimento'];
    $diasatendimento = $data['diasatendimento'];
    $datacontrataca = $data['datacontratacao'];
    $statuscadastro = $data['statuscadastro'];


    $stmt = $pdo->prepare('INSERT INTO Cadastro_Profissionais (Nome, Especialidade, CRM, Contato, Email, Inicio_Atendimento, Fim_Atendimento, Dias_Atendimento, Data_Contratacao, Status_Cadastro) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
    $stmt->execute([$nome, $especialidade, $crm, $contato, $email, $inicioatendimento, $fimatendimento, $diasatendimento, $datacontrataca, $statuscadastro]);

    http_response_code(201);
    echo json_encode(['message' => 'Cadastro criado com sucesso!']);
}

function put() {
    $pdo = createConection();
    $data = json_decode(file_get_contents('php://input'), true);

    $crm = $data['crm'];
    $nome = $data['nome'];
    $especialidade = $data['especialidade'];
    $contato = $data['contato'];
    $email = $data['email'];
    $inicioatendimento = $data['inicioatendimento'];
    $fimatendimento = $data['fimatendimento'];
    $diasatendimento = $data['diasatendimento'];
    $datacontratacao = $data['datacontratacao'];
    $statuscadastro = $data['statuscadastro'];

    $stmt = $pdo->prepare('UPDATE Cadastro_Profissionais SET Nome = ?, Especialidade = ?, Contato = ?, Email = ?, Inicio_Atendimento = ?, Fim_Atendimento = ?, Dias_Atendimento = ?, Data_Contratacao = ?, Status_Cadastro = ? WHERE CRM = ?');
    $stmt->execute([$nome, $especialidade, $contato, $email, $inicioatendimento, $fimatendimento, $diasatendimento, $datacontratacao, $statuscadastro, $crm]);

    http_response_code(200);
    echo json_encode(['message' => 'Cadastro atualizado com sucesso!']);
}

function delete() {

    $pdo = createConection();
    $crm = $_GET['crm'];

    $stmt = $pdo->prepare('DELETE FROM Cadastro_Profissionais WHERE CRM = ?');
    $stmt->execute([$crm]);

    http_response_code(200);
    echo json_encode(['message' => 'Cadastro excluído com sucesso!']);
}

?>