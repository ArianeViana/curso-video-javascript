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
                imagem.setAttribute("src", "crianca-homem.png")
            }else if(idade < 18){
                imagem.setAttribute("src", "adolescente-homem.png")
            }else if(idade < 35){
                imagem.setAttribute("src", "jovem-homem.png")
            }else if(idade < 60){
                imagem.setAttribute("src", "adulto-homem.png")
            }else{
                imagem.setAttribute("src", "idoso-homem.png")
            }
        }else if(sexo[1].checked){
            genero = "mulher"
            if(idade < 12){
                imagem.setAttribute("src", "crianca-mulher.png")
            }else if(idade < 18){
                imagem.setAttribute("src", "adolescente-mulher.png")
            }else if(idade < 35){
                imagem.setAttribute("src", "jovem-mulher.png")
            }else if(idade < 60){
                imagem.setAttribute("src", "adulto-mulher.png")
            }else{
                imagem.setAttribute("src", "idoso-mulher.png")
            }
        }
        
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(imagem)
    }
    
}