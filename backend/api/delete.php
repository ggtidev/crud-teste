<?php
include 'db.php';

if (isset($_GET['id'])) {
    $id = $_GET['id'];

    $query = "DELETE FROM profissionais WHERE id = $id";
    $result = pg_query($conn, $query);

    if ($result) {
        echo "Profissional excluído com sucesso!";
    } else {
        echo "Erro ao excluir profissional.";
    }
}
?>