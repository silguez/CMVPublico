$(document).ready(function(){
    $("button.tituloAzul").click(function(){
        $("h1").css("color","#4082c4");
    });

    $("button.restablecer").click(function(){
        $("h1").css("color","black");
        $("h3").css("background-color","transparent");
        $("h3").css("color","darkgrey");
    });

  });
