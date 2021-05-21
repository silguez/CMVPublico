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
