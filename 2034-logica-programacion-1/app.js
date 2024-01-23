//variables 
let numeroSecreto = 2;
let numeroUsuario = 0;
let intentos = 1;
let palabraIntento = 'Intento';
while(numeroUsuario != numeroSecreto) {
// != es diferente de ...
    numeroUsuario = prompt("🎇ingresa un número entre 1 y 10🎇: ");
    console.log(numeroUsuario);
    /*este codigo realiza la comparacion*/
    if (numeroUsuario == numeroSecreto){
        alert(`👌🎉acertaste el número es: ${numeroUsuario} Lo hiciste en ${intentos} ${palabraIntento} 🎉`);
    }else {
        if(numeroUsuario > numeroSecreto){
            alert('🤦‍♂️el número secreto es menor');
        }else{
            alert('🤦‍♂️el número secreto es mayor')
        }
        //incrementamos en contador cuando no acierta
        intentos = intentos + 1;
        palabraIntento = 'Intentos';
        if (intentos >3){
            alert(' 😥Llegastes al número máximo de intentos😪');
            break;
        }
    }
}

