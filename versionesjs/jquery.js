$(document).ready(function(){
    $("button.tituloVerde").click(function(){
        $("h1").css("color","green");
    });

    $("button.subrayoVerde").click(function(){
        $("h3").css("background-color","green");
        $("h3").css("color","white");
    });

    $("button.restablecer").click(function(){
        $("h1").css("color","black");
        $("h3").css("background-color","transparent");
        $("h3").css("color","darkgrey");
    });

  });

  $(document).ready(function(){
    $("button.nocturno").click(function(){
        $("body").css("background-color","rgb(44, 44, 44)");
        $("h1").css("color","white");
        $("h3").css("color","white");
        $("#parrafo").css("background-color","rgb(26, 25, 25)");
        $("#parrafo").css("color","white");

    });

    $("button.diurno").click(function(){
        $("body").css("background-color", "white");
        $("h1").css("color","black");
        $("h3").css("color","black");
        $("#parrafo").css("background-color","#eee");
        $("#parrafo").css("color","black");
    });

  });
