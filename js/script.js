function calculate(){
    const etanol =  document.getElementById("etanol").value
    const gasolina = document.getElementById("gasolina").value
    const resultado = etanol/gasolina
    
    var text=''
    if(resultado >= 0.8){
        text="Gasolina é a melhor opção"
    } else {
        if (resultado <= 0.6){
        text="Etanol é a melhor opção"
    } else {
        text="Pode abastecer com etanol ou gasolina"
    }
    }
    document.getElementById("text_area").innerText=text
}


