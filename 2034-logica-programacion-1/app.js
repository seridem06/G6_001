//variables 
let numeroSecreto = 2;
let numeroUsuario = prompt("ingresa un número entre 1 y 10: ");

console.log(numeroUsuario);
/*este codigo realiza la comparacion*/
if (numeroUsuario == numeroSecreto){
    alert(`acertaste el número es: ${numeroUsuario}`);
}else {
    if(numeroUsuario > numeroSecreto){
        alert('el número secreto es menor');
    }else{
        alert('el número secreto es mayór')
    }
    //la condicion no se cumplio
    //alert("lo siento no acertaste el número");
}



