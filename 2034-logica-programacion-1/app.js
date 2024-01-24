//variables 
let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraIntento = 'Intento';
while(numeroUsuario != numeroSecreto) {
// != es diferente de ...
    numeroUsuario = parseInt(prompt("🎇ingresa un número entre 1 y 10🎇: "));
    console.log(numeroUsuario);
    /*este codigo realiza la comparacion*/
    if (numeroUsuario == numeroSecreto){
        alert(`👌🎉acertaste el número es: ${numeroUsuario} Lo hiciste en ${intentos} ${intentos ==1 ? 'Intento' : 'Intentos'}  🎉`);
    }else {
        if(numeroUsuario > numeroSecreto){
            alert('🤦‍♂️el número secreto es menor');
        }else{
            alert('🤦‍♂️el número secreto es mayor')
        }
        //incrementamos en contador cuando no acierta
        //intentos = intentos + 1;
        //intentos +=1;
        intentos++
        //palabraIntento = 'Intentos';
        if (intentos >3){
            alert(' 😥Llegastes al número máximo de intentos😪');
            break;
        }
    }
}

