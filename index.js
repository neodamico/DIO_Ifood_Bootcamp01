let nomeDoHeroi = "Arthur"

let xpGanho = 6730
let nivelDoHeroi = ""

if (xpGanho <= 1000){
    nivelDoHeroi = "Ferro";

} else if (xpGanho > 1001 && xpGanho <= 2000){
    nivelDoHeroi = "Bronze"

} else if (xpGanho > 2001 && xpGanho <= 5000){
    nivelDoHeroi = "Prata"

}else if (xpGanho > 6001 && xpGanho <= 7000){
    nivelDoHeroi = "Ouro"

}else if (xpGanho > 7001 && xpGanho <= 8000){
    nivelDoHeroi = "Platina"

}else if (xpGanho > 8001 && xpGanho <= 9000){
    nivelDoHeroi = "Ascendente"
    
}else if (xpGanho > 9001 && xpGanho <= 10000){
    nivelDoHeroi = "Imortal"

}else 
nivelDoHeroi = "Radiante";





console.log('O herói de nome ' +nomeDoHeroi, 'está no nível de ' + nivelDoHeroi);