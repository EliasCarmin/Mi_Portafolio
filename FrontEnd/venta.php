<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!--AOS-->
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">  
        <!--librarys-->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
        <!--CSS-->
        <link rel="stylesheet" href="/CSS/index.css">
        <link rel="stylesheet" href="/CSS/pdf.css">
        <link rel="stylesheet" href="/CSS/proyectos.css">

    <title>Panel Ventanilla</title>
</head>
<body>
    <?php include '../BACK/Header.php'; ?>

    <div class="texto_panel">

        <div class="texto">
        <h1>Panel de Control: Llamadas de emergencia en el distrito de Ventanilla</h1>
        <p>En el presente proyecto, se obtuvo la información de registro de llamadas de emergencias en el centro de datos abiertos del Gobierno Peruano; el objetivo principal es estudiar los datos para brindar un apoyo estadístico para las toma de desiciones a las fuerzas policiales, utilizando técnicas de análisis de datos.</p>
        <br>
        <p>Repositorio en Git Hub:</p>
        </div>
        
        <div class="powerbi">
        <iframe title="Report Section" width="900" height="673.5" src="https://app.powerbi.com/view?r=eyJrIjoiMDJiY2M2ZDItNGUwOS00Y2NhLWIyMzktYmRmMDBiYTViMzQwIiwidCI6ImM0YTY2YzM0LTJiYjctNDUxZi04YmUxLWIyYzI2YTQzMDE1OCIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>
        </div>
            
    </div>
    
    <div class="Preguntas">
            <h2>¿Hay alguna tendencia de las llamadas de emrgencia en las horas del día? </h2>
            <p>Respuesta</p>
            <h2>¿En qué áreas o zonas de Ventanilla se realizan más llamadas de emergencia? </h2>
            <p>Respuesta</p>
            <h2>¿Cuáles son los meses con el mayor número de llamadas de emergencia? </h2>
            <p>Respuesta</p>
            <h2>¿Cuáles son los tipos de casos más comunes en las llamadas de emergencia? </h2>
            <p>Respuesta</p>
            <h2>¿Cuántas llamadas se realizan en cada turno (mañana, tarde, noche y día)?</h2>
            <p>Respuesta</p>
    </div>

    <?php include '../BACK/Footer.php'; ?>
</body>
</html>
