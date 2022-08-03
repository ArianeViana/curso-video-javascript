function verificar(){
    var sistema = new Date()
    var anoAtual = sistema.getFullYear()
    var txtano = document.getElementById("txtano")
    var ano = Number(txtano.value)

    if(ano == 0 || ano > anoAtual){
        window.alert("Verifique os dados e tente novamente!")
    }else {
        var sexo = document.getElementsByName("radsex") 
        var genero = ""   
        var res = document.getElementById("resultado")
        var imagem = document.createElement("img")
        imagem.setAttribute("id", "foto")    
        var idade = anoAtual - ano

        if(sexo[0].checked){
            genero = "homem"
            if(idade < 12){
                imagem.setAttribute("src", "./images/crianca-homem.png")
            }else if(idade < 18){
                imagem.setAttribute("src", "./images/adolescente-homem.png")
            }else if(idade < 35){
                imagem.setAttribute("src", "./images/jovem-homem.png")
            }else if(idade < 60){
                imagem.setAttribute("src", "./images/adulto-homem.png")
            }else{
                imagem.setAttribute("src", "./images/idoso-homem.png")
            }
        }else if(sexo[1].checked){
            genero = "mulher"
            if(idade < 12){
                imagem.setAttribute("src", "./images/crianca-mulher.png")
            }else if(idade < 18){
                imagem.setAttribute("src", "./images/adolescente-mulher.png")
            }else if(idade < 35){
                imagem.setAttribute("src", "./images/jovem-mulher.png")
            }else if(idade < 60){
                imagem.setAttribute("src", "./images/adulto-mulher.png")
            }else{
                imagem.setAttribute("src", "./images/idoso-mulher.png")
            }
        }
        
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(imagem)
    }
    
}