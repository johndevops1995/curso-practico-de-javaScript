//for (let i = 0; i < 5; i++) {
//    console.log("El valor de i es: " + i);
//}

//let i = 0;

//while (i < 5) {
//    console.log("El valor de i es: " + i); i++;
//}


//for (let i = 10; i >= 2; i--) {
//    console.log("El valor de i es: " + i);
//}

//let i = 10;

//while (i >= 2) {
//    console.log("El valor de i es: " + i); i--;
//}





/*let respuesta = prompt ('cuanto es 2 + 2');

while (respuesta != '4') {
    let pregunta = prompt('¿Cuanto es 2 + 2?')
    respuesta = pregunta;
}

const array = [1, 'jaja', true, false];

const obj = {
    nombre: 'Fulanito',
    edad: 3,
};*/


/*function imprimirPrimerElementoArray(arr) { 
    console.log(arr[1])
}

imprimirPrimerElementoArray(['juanita', 'rigoberto','natalia'])*/

/*function imprimirElementoPorElemento(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}*/

/*function imprimirElementoPorElementoObjeto(obj) {
    const arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}*/
const tipoDeSuscripciones = {
    free: 'solo puedes tomar los cursos gratis',
    basic: 'solo puesdes tomar durante un mes casi todos los cursos ',
    expert: 'puedes tomar los cursos durante un año',
    expertduo: 'tu y alguien mas pueden tomar los cuirsos durante un año'
};

function conseguirTipoSuscripcion(suscripcion) {
    if (tipoDeSuscripciones[suscripcion]){
        console.log(tipoDeSuscripciones[suscripcion])
        return;
    }

    console.warn('ese tipo de suscripcionm no existe')
};

var arrayDeSuscripcion =[
    "Free" ,"Solo puedes tomar los cursos gratis",
    "Basic" ,"Puedes tomar casi todos los cursos de Platzi durante un mes",
    "Expert" ,"Puedes tomar casi todos los cursos de Platzi durante un año",
    "ExpertPlus","Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
  ]
  let pos = arrayDeSuscripcion.indexOf('Free');
  
  if (pos != -1){
    console.log(arrayDeSuscripcion[pos+1])
  }else{
    console.log('El plan no existe')
  }