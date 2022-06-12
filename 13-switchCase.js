var sistema = new Date()
var diaSemana = sistema.getDay()

switch(diaSemana){
    case 0: 
        console.log("Hoje é domingo")
        break
    case 1:
        console.log("Hoja é segunda")
        break
    case 2:
        console.log("Hoja é terça")
        break
    case 3:
        console.log("Hoja é quarta")
        break
    case 4:
        console.log("Hoja é quinta")
        break
    case 5:
        console.log("Hoja é sexta")
        break
    case 6:
        console.log("Hoja é sábado!")
        break
    default:
        console.log("Erro!")
}