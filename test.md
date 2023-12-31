# Test de JavaScript

¡Es hora de poner a prueba cuánto sabes sobre JavaScript!

Esta lectura es una prueba de JavaScript. A diferencia de un examen, nadie te obligará a nada. **Puedes hacer trampa y saltar a la siguiente clase**, ese es el camino fácil. Pero tengo mucha fe en ti, confío en que seguirás mis consejos y no avanzarás a la siguiente clase hasta superar esta prueba.

## Instrucciones para tomar esta prueba

- Evalúa muy críticamente tu conocimiento.
- Si logras resolver la prueba, no importa cuánto te cueste, puedo asegurarte que tienes todo para continuar a las siguientes clases y tomar el resto del curso.
- Si no lo logras, no te preocupes, absolutamente nadie puede juzgarte, solo tú. Vuelve al [Curso Básico de JavaScript](https://platzi.com/cursos/basico-javascript/), anota los temas clave donde puedes mejorar, ubica las clases donde puedes aprenderlos y estudia vigorosamente.
- Es completamente válido hacer búsquedas en Google, cursos y tutoriales de Platzi, incluso usar tu cuaderno de notas sin importar si es físico o virtual.

Recuerda que **el éxito no se mide por cuánto tiempo te toma aprender**, esa métrica es relativamente inútil. Mejor concéntrate en completar los cursos de tu ruta de aprendizaje profesional y desarrollar los proyectos que realmente demuestran que dominas cada tecnología.

¡Mucha suerte!


## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?

Cajitas (espacios en memoria) donde podemos guardar informacion (dependiendo de los tipos y estructuras de datos que soporte nuestro lenguaje).

- ¿Cuál es la diferencia entre declarar e inicializar una variable?

Declarar es cuando le decimos a javaScript que vamos a crear una variable con el nombre tal.
Mientras que inicializar o reinicializar es asignarle un valor a esa variable.

- ¿Cuál es la diferencia entre sumar números y concatenar strings?
- ¿Cuál operador me permite sumar o concatenar?

El operador que nos permite sumar o concatenar es +. Este operador nos permite sumar numeros cuando sumamos numeros. Pero cuando lo usamos con strings, lo que hace es unir (concatenar, asi se dice) unir ambos strings.

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre:  strings
- Apellido: strings
- Nombre de usuario en Platzi: strings
- Edad = numero
- Correo electrónico = strings
- Mayor de edad = boolean
- Dinero ahorrado = numero
- Deudas = numero

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

....
**```javascript
let nombre = 'John Fredy';
let apellido = 'Rodriguez Zuluaga';
let userName = 'jfspeed';
let edad = 43;
let mail = 'jfspeed@jdhdjd.dcom'
let esMayorDeEdad = true;
let dineroAhorrado = 2000000
let deudas = 20000000
```** 
....

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

``````
let nombreCompleto = nombre + ' ' + apellido;
let dineroReal = dineroAhorrado - deudas;
```
```


## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?

```
function nombreCompleto(name, lastName) {
    return name + ' ' + lastName
}
```
las funciones nos permiten encapsular (guardar) bloques de codigo para reutilizarlos y ademas ejecutarlos en el futuro 

```
- ¿Cuándo me sirve usar una función en mi código?

```
nos sirve cuando tenemos variables o bloques de codigo muy parecidos (con cambios que podrian ser parametros y argumentos) que podemos encapsular para reutilizar mas de una vez en el futuro. 
tambien nos sirve para ordenar y mejorar la legibilidad de nuestro codigo. 

```
- ¿Cuál es la diferencia entre parámetros y argumentos de una función?

```
las funciones reciben parametros cuando las creamos y les enviamos argumentos cuando las ejecutamos.
```

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```
const name = "John Fredy";
const lastname = "Rodriguez Zuluaga";
const completeName = name + lastname;
const nickname = "jfspeed";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

RTA:
```
function nombreCompleto(name, lastName) {
    return name + ' ' + lastName
}

function saludo(name, lastname, username) {
  const completeName = nombreCompleto(name, lastname);
  

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + username + ".");
}

```


## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?
son la forma en la que ejecutamos un bloque de codigo u otro dependioendo de alguna validacion o condicion 

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

IF (else  y else if), Switch
El condicional if  (con else y else if) nos permite hacer validaciones completamente distintas (si asi lo queremos) en cada validacionan o condicional. 
en cambio, en el swicht todos las cases se comparan con la misma variable o condicion que definimos en el switch.


- ¿Puedo combinar funciones y condicionales?
si, las funciones pueden encapsular cuanlquier bloque de codigo incluyendo condionales


### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertDUO":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```
rta:
,,,
function conseguirTipoSuscripcion(suscripcion) { 
    if (suscripcion == "Free") {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    }
    
    if (suscripcion == 'basic') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }

    if (suscripcion == 'Expert') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    }

    if (suscripcion == 'ExpertDuo') {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    }
}
,,,

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏

RTA:
_____________
function conseguirTipoSuscripcion(suscripcion) {
    if (tipoDeSuscripciones[suscripcion]){
        console.log(tipoDeSuscripciones[suscripcion])
        return;
    }

    console.warn('ese tipo de suscripcion no existe')
};

______________


## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?
RTA:
es la forma de ejecutar un bloque de codigo hasta que se cumpla cierta condifcion 
- ¿Qué tipos de ciclos existen en JavaScript?
RTA:
 while, do while, for
- ¿Qué es un ciclo infinito y por qué es un problema?
RTA:
es cuando la validacion de nuestras condicionales nunca se cunplem y terminan toteando (dañando) la aplicacion (e.j. cuando ya no puede mas el navegador de tanta ejecucion de ese bloque de codigo).

- ¿Puedo mezclar ciclos y condicionales?
RTA:
si, aunque los ciclos son condicionales una especie de condicionales, nada nos impide agregar mas condicionales dentro del ciclo

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
RTA
____________________________________________
let i = 0;

while (i < 5) {
    console.log("El valor de i es: " + i); i++;
}
_____________________________________________
....

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```
RTA
_____________________________________________
let i = 10;

while (i >= 2) {
    console.log("El valor de i es: " + i); i--;
}
______________________________________________


### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: puedes usar la función prompt de JavaScript.
RTA
__________________

while (respuesta != '4') {
    let pregunta = prompt('¿Cuanto es 2 + 2?')
    respuesta = pregunta;
}
__________________

## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?
RTA
____________________________
es una lista de elementos.
-------
const array = [1, 'jaja', true, false];
___________________________
- ¿Qué es un objeto?
RTA
_____________________
es una lista de elementos pero cada elemento tiene un nombre clave
...
const obj = {
    nombre: 'Fulanito',
    edad: 3,
};
....
______________________
- ¿Cuándo es mejor usar objetos o arrays?
RTA
________________________
Arrays cuando lo que haremos es lo mmismo que en todos los demas (la regla se puede imcumplir) mientras que un objeto cuando los nombres de cada elemento son importantes para nuestro algoritmo.
________________________
- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
RTA
________________________
Si, los arrays pueden guardar objetos. y los objetos pueden guardar arrays entre sus propiedades.
________________________

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
RTA
____________________
 function imprimirPrimerElementoArray(arr) { 
    console.log(arr[1])
}

imprimirPrimerElementoArray(['juanita', 'rigoberto','natalia'])
____________________
### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
RTA
____________
 function imprimirElementoPorElemento(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
______________-

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
RTA:
______________
function imprimirElementoPorElementoObjeto(obj) {
    const arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
____________


## ¿Cómo te fue? 🏆
**¡Felicidades por completar la prueba de JavaScript!** Confío en que hayas completado cada paso y hayas pausado para repasar los temas de los ejercicios que se te complicaron.

Ahora sí, continúa a la siguiente clase, pero recuerda que **ya no puedes abandonar el curso**, debes completarlo hasta el final. No importa cuánto tiempo te tome. **Yo sé que tú puedes. Y tú deberías de saberlo también.**

¡Te espero en la siguiente clase para comenzar!