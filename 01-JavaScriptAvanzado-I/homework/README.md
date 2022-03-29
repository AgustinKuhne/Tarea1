
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); // este log de x, no mostrara el 1 de arriba, si no el 10 de la var x, debido a que es una variable local y no global.
  console.log(a);
  var f = function(a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);
}
c(8,9,10);
console.log(b);
console.log(x);
/*
Lo primero que va a printear el codigo, sera el console.log(x), que es igual a 10, ya que es el primer log en la cadena. 
Luego, va a printear el console.log(a), que dara como resultado 8, ya que es el argumento que recibe la funcion almacenada en la variable c.
El tercer print deberia ser otro 8 mas, debedio a que en funcion almacenada en la variable f, se dice que b = a, y luego se pide printear b, por la tanto resulta en otro 8, por que b es igual que a.
En cuarto lugar, si bien se dice dentro de la funcion f que b = c, no se pide printear a b dentro de la funcion almacenada en f, pero si dentro de la funcion almacenada en c, lo que resultara con un 9 en pantalla, ya que el numero 9 es el argumento b de la funcion almacenada en c.
En quinto lugar, se mostraba el numero 10 de la variable b, ya que se dice que b = 10, y esta, al no estar almacenada en una funcion, no recibe cambios.
Por ultimo, se mostrara el numero 1, ya que se pide un log de x, que es una variable global y no local, lo mismo pasa con el 10 de b.
*/
```

```javascript
console.log(bar);
console.log(baz);
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
/*
el primer log, console.log(bar) sera undefined.
el segundo log, console.log(baz) dara error, ya que no esta baz no declarado.
y foo(); sera igual a Hola!
*/
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);
/*
imprime Franco, ya que todos los objetos reciben un valor de True, y como se dice que si es true, instructor = Franco, y luego se pide un log de instructor
*/
```

```javascript
var instructor = "Tony";
console.log(instructor);
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();
console.log(instructor);
/*
El primer log, imprimira Tony, ya que se pide antes que cualquier cosa modofique el resultado.
Luego dentro de la funcion, se pide un otro log, que dara como resultado Franco,
luego fuera de la funcion, se pide otro log mas, que dara como resultado Tony, ya que el if(true), esta dentro de la funcion y se vuelve un condicional local y no global.
*/
```
```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
}
console.log(instructor);
console.log(pm);
/*
El primer log dentro del if(true) dara como resultado de The flash, ya que todos los objetos reciben un valor de True, por lo tanto el cambio se aplica.
Con el log(pm) pasa lo mismo, dara como resultado Reverse Flash.
Luego, fuera del if, se pide un log de instructor y pm, el log de instructor dara como resultado The Flash, ya que las variables declararas en var si se pueden modificar, pm dara Franco, ya que let no permite cambios.
*/
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // Error, no se puede hacere operaciones con strings
"2" * "3" // Error
4 + 5 + "px" // Error
"$" + 4 + 5 // Error
"4" - 2 // Error
"4px" - 2 // error
7 / 0 // infinito
{}[0]
parseInt("09") // 9
5 && 2 // 2
2 && 5 // 5
5 || 0 // 5
0 || 5 //  5
[3]+[3]-[10] // -6
3>2>1 // false
[] == ![] // true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
/*
El log de a, sera undefined, ya que es una variable que se declara en una linea mas abajo.
Y el log de foo, dara 2, ya que es una funcion que se daclara mas abajo
*/
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);
/*
No tendra resultado porque getFood es false
*/

```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // Aurelio de Rosa

var test = obj.prop.getFullname;

console.log(test()); //undefined

```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
/*
1
4
3
2

el 1 sale primero porque es el primero que aparece y no tiene nada que lo impida,
luego viene el 4, ya que el 3 y 2 tienen setTimeout lo que provoca que tarden mas en mostrarse en pantalla.
luego viene el 3, ya que tiene un setTimeout de 0 ms.
Y por ultimo el 2, que tiene un seTimeout de 1000 ms.
*/
```
