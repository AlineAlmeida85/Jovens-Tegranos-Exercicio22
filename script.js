function calcular() {   

    let valorX = parseInt(document.getElementById("valorX").value);

    var tabuada='';

    for(var count = 1; count <= 10 ; count++)
        tabuada += valorX + " x " + count + " = " + valorX * count + "<br />";
  
        result1.innerHTML = tabuada;    
    
}