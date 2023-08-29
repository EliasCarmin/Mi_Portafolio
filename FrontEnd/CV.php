<!DOCTYPE html>
<html>
<head>
        <!-- Aquí puedes colocar tus etiquetas <meta>, enlaces a hojas de estilo, scripts, etc. -->
        <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!--ÍCONO DE PESTAÑA -->
        <link rel="icon" href="/IMG/mishi blanco.png" type="image/x-icon">

        <!--AOS-->
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">  
        <!--librarys-->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
        <!--CSS-->
        <link rel="stylesheet" href="/CSS/index.css">
        <link rel="stylesheet" href="/CSS/pdf.css">
 <title>Currículum</title>
</head>
<body>
    <?php include '../BACK/Header.php'; ?>

    <!-- PDF -->
    <div class="pdf-container">
        <iframe class="pdf" src="../Docs/EliasCarmin.pdf"></iframe>
    </div>


    <?php include '../BACK/Footer.php'; ?>
</body>
</html>