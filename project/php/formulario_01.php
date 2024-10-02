<?php
// formulario.php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $github_username = $_POST['github_username'];
    $email = $_POST['email'];

    // Guardar datos en el archivo
    $data = "GitHub Username: $github_username, Email: $email\n";
    file_put_contents('container_formulario.txt', $data, FILE_APPEND);
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Formulario</title>
    <link rel="stylesheet" href="css/formulario_01.css">
</head>
<body>
    <form method="post" action="">
        <label for="github_username">Nombre de usuario de GitHub:</label>
        <input type="text" id="github_username" name="github_username" required>
        <br>
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" required>
        <br>
        <input type="submit" value="Enviar">
    </form>
</body>
</html>
