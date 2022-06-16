function carregar(){
    var sistema = new Date()
    var hora = sistema.getHours()
    var msgHora = document.getElementById("msg-hora")
    var img = document.getElementById("imagem")
    var msg = document.getElementById("msg")
    
    msgHora.innerHTML = `Agora são ${hora} horas`

    if(hora > 0 && hora < 12){
        img.src = "manha.png"
        document.body.style.backgroundColor = "rgb(160, 183, 192)"
        msg.innerHTML = "BOM DIA"

    }else if(hora > 12 && hora < 18){
        img.src = "tarde.png"
        document.body.style.backgroundColor = "rgb(221, 194, 123)"
        msg.innerHTML = "BOA TARDE"
    }else {
        img.src= "noite.png"
        document.body.style.backgroundColor = "rgb(78, 105, 195)"
        msg.innerHTML = "BOA NOITE"
    }

}
