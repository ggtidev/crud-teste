<?php

include 'db.php';

$query = 'SELECT * FROM profissionais';
$stmt = $pdo->prepare($query);
$stmt->execute();

$dados = $stmt->fetchAll();
echo json_encode($dados);
?>