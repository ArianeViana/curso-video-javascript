var idade = 15

if(idade < 16){
    console.log("Você não pode votar.")
}else if(idade < 18 || idade >= 65){
    console.log("Seu voto é facultativo.")
}else{
    console.log("Seu voto é obrigatório!")
}