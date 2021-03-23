"use strict";
BigNumber.config({DECIMAL_PLACES: 2, ROUNDING_MODE: BigNumber.ROUND_HALF_UP}); 
var FMT_MONEDA = "$0,0.00",
    forma = document.getElementById("forma"),
    salida1 = document.getElementById("salida1"),
    salida2 = document.getElementById("salida2"),
    salida3 = document.getElementById("salida3"),
    salida4 = document.getElementById("salida4");



Node.prototype.error = function(mensaje){
    this.className = "error";
    this.textContent = mensaje;
};
Node.prototype.info = function(mensaje){
    this.className = "info";
    this.textContent = mensaje;
};
function Borrar(){
    document.getElementById("salida1").value = "",
    document.getElementById("salida2").value = "",
    document.getElementById("salida3").value = "",
    document.getElementById("salida4").value = "",
    document.getElementById("ent1").value = "",
    document.getElementById("ent2").value = "";
}
function procesa(){
    var entero1 = forma["numero1"].value,
        entero2 = forma["numero2"].value,
        numero1 = numeral().unformat(forma["numero1"].value),
        numero2 = numeral().unformat(forma["numero2"].value),
        error = false;
    
    var valor1 = new BigNumber(numero1).plus(BigNumber(numero2)),
        valor2 = new BigNumber(numero1).minus(BigNumber(numero2)),
        valor3 = new BigNumber(numero1).times(BigNumber(numero2)),
        valor4 = new BigNumber(numero1).div(BigNumber(numero2));
    
    if (entero2 == 0){
        error = true;
        salida1.info("Suma: "+numeral(valor1).format(FMT_MONEDA));
        salida2.info("Resta: "+numeral(valor2).format(FMT_MONEDA));
        salida3.info("Multiplicación: "+numeral(0).format(FMT_MONEDA));
        salida4.error("División: Error " );
        
    }
    if (entero1 == 0) {
       salida1.info("Suma: " + numeral(valor1).format(FMT_MONEDA));
       salida2.info("Resta: " + numeral(valor2).format(FMT_MONEDA));
       salida3.info("Multiplicación: " + numeral(0).format(FMT_MONEDA));
       salida4.info("División: " + numeral(0).format(FMT_MONEDA));
    }
    if (entero1 == entero2) {
       salida1.info("Suma: " + numeral(valor1).format(FMT_MONEDA));
       salida2.info("Resta: " + numeral(0).format(FMT_MONEDA));
       salida3.info("Multiplicación: " + numeral(valor3).format(FMT_MONEDA));
       salida4.info("División: " + numeral(1).format(FMT_MONEDA));
    }
    
    if (!error){
       
       salida1.info("Suma: " + numeral(valor1).format(FMT_MONEDA));
       salida2.info("Resta: " + numeral(valor2).format(FMT_MONEDA));
       salida3.info("Multiplicación: " + numeral(valor3).format(FMT_MONEDA));
       salida4.info("División: " + numeral(valor4).format(FMT_MONEDA));
    }
    
}
        
        

  


