//https://teachablemachine.withgoogle.com/models/qaPZZzDfD/
var prediccion1=""
var prediccion2=""
Webcam.set({
    height:300,
    width:500,
    image_format:"png",
    png_quality:90
});
Webcam.attach("camara");
function foto(){
    Webcam.snap(function(
        data_uri
    ){
        document.getElementById("resultado").innerHTML='<img id="captura_de_pantalla" src="'+data_uri+'">';
    });
}
console.log("ml5version:",ml5.version);
var red_reunoral=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/qaPZZzDfD/model.json",modelo);
function modelo(){
    console.log("modelo listo")
}
function hablar(){
    var texto=window.speechSynthesis;
    var emocion1="la primera emocion detectada es:"+prediccion1;
    var emocion2="la segunda emocion detectada es:"+prediccion2;
}
function respuesta(){
    var foto_tomada=document.getElementById("captura_de_pantalla");
    red_reunoral.classify(foto_tomada,emojiresults);
}
function emojiresults(error,results){
    if(error){
        console.log(error);
    }else{
        console.log(results);
        prediccion1=results[0].label;
        prediccion2=results[1].label;
        document.getElementById("emoji_1").innerHTML=prediccion1;
        document.getElementById("emoji_3").innerHTML=prediccion2;
        hablar();
        if(prediccion1=="muyfeliz"){
            document.getElementById("emoji_2").innerHTML="&#128516;";
        }
        if(prediccion1=="feliz"){
            document.getElementById("emoji_2").innerHTML="&#128512;";
        }
        if(prediccion1=="enojado"){
            document.getElementById("emoji_2").innerHTML="&#128544;";
        }if(prediccion1=="triste"){
            document.getElementById("emoji_2").innerHTML="&#128557;";
        }if(prediccion1=="😬"){
            document.getElementById("emoji_2").innerHTML="&#128528;";
        }


        if(prediccion2=="muyfeliz"){
            document.getElementById("emoji_2").innerHTML="&#128516;";
        }
        if(prediccion2=="feliz"){
            document.getElementById("emoji_2").innerHTML="&#128512;";
        }
        if(prediccion2=="enojado"){
            document.getElementById("emoji_2").innerHTML="&#128544;";
        }if(prediccion2=="triste"){
            document.getElementById("emoji_2").innerHTML="&#128557;";
        }if(prediccion2=="😬"){
            document.getElementById("emoji_2").innerHTML="&#128528;";
        }
    }
}