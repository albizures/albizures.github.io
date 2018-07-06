---
title: "Guía general de Javascript: Tipos"
tags: [javascript]
hidden: false
image: /assets/img/js.png
lang: "es"
---

[Índice]({% post_url 2018-03-25-guia-general-javascript %})

[Anterior artículo]({% post_url 2018-03-26-guia-general-javascript-conceptos-esenciales %})

Javascript es un lenguaje dinámicamente tipado (dynamic typing), esto significa que javascript no necesita que se le especifique el tipo de dato al definir una variable.[^1]

Por ejemplo:

```js
var foo = 1
var bar = 'Hello world'
var tru = true
var obj = {}
var arr = []
```

Para definir una variable usamos la palabra reservada **var**[^2] seguido del nombre y por ultimo inicializarlo con un valor, esto ultimo es opcional y el intérprete de javascript en tiempo de ejecución va a decidir el tipo de variable que es.


## Datos primitivos:
En javascript existen 6 tipos primitivos (_boolean_, _number_, _string_, _symbol_, _undefined_ y _null_), todo lo demás es considerado _object_ incluido los arreglos y las funciones.

Estos tipos son los más simples de javascript y al pasarse como parámetros a una función se crea una copia de ellos a excepción de symbol.

**Boolean**: Los booleanos solo pueden representar verdadero y falso, y son igual a los booleanos de cualquier otro lenguaje.

```js
// las siguientes variables son de tipo boolean
var foo = true
var bar = false
var equal = 1 === 1
```
**Number**: En javascript el tipo Number puede representar tanto un Integer como un Float, y adicional en javascript también existen los valores _Infinity_ y _NaN_ (Not a Number)[^3] considerados también numbers.

```js
// las siguientes variables son de tipo number
var integer = 9
var float = 3.1416
var nan = NaN
var infinity = Infinity
var division = 9 / 2
```

**String**: son cadenas de texto que se declaran usando comillas (“), comillas simples (‘) ó acentos graves (`).[^4]

```js
// las siguientes variables son de tipo string
var string1 = "lorem"
var string2 = 'ipsum'
var string3 = `ipsum`
```

**Symbol**: es un tipo de dato único que comúnmente es usado como identificador de propiedades privadas. En otros lenguajes es llamado _atom_. El tipo symbol es nuevo en javascript y su uso no es muy común.

Para crear un symbol se usa la función _Symbol_ normalmente pasando un string como descripción. Un symbol es único e incluso cuando se usa el mismo descriptor dos symbols no pueden ser iguales.

```js
var bar = Symbol('bar')
Symbol('bar') === Symbol('bar') // false
```

**Undefined**: este valor representa comúnmente 4 casos

1. Es el valor que se le asigna a una variable que no ha sido inicializada con un valor específico.
1. Es el valor que retorna una función que no tiene una sentencia return.
1. Es el valor de una propiedad no definida.
1. Es el valor que tiene un parámetro que no se fue pasado a una función al ejecutarla.

```js
// las siguientes variables son de tipo undefined
var und1
var und2 = undefined
var und3 = {}.foo
```

**Null**: conceptualmente es parecido a undefined, MDN lo define como:

> El valor null es un literal de Javascript que representa un valor nulo o "vacío". Es uno de los valores primitivos de Javascript.

Pero null es el origen de confusiones y no es recomendado su uso. Una curiosidad de null es que si se usa el operador `typeof` el resultado sera _object_, esto es porque así lo definió la primera especificación y fue dejado así por temas de compatibilidad.

### Object: 
Es un conjunto de propiedades (_value_) que están identificadas con un nombre (_key_). Dónde key es un string o un symbol y value puede ser cualquier valor.

```js
// las siguientes variables son de tipo object
var obj1 = {}
var obj2 = {
  'bar': true,
  foo: 1,
  1: 'lorem'
}
```

Existe dos formas de crear/acceder a las propiedades de un objeto ya creado.
1. Dot notation
1. Brackets notation

**Dot notation**: esta es la forma mas comun de hacer referencia a una propiedad y su sintaxis es usar un punto seguido del nombre de la propiedad.

```js
var obj = {}
obj.newProperty = 'foo'
console.log(obj.newProperty)
```

**Brackets notation**: esta segunda forma es comúnmente usada para acceder a los elementos de los array y es usada en casos en que se necesita usar una variable.

```js
var obj = {}
var name = 'newProperty'
obj[name] = 'foo'
console.log(obj[name])
```

Los objetos a diferencia de los tipos primitivos son tratados de forma especial, al ser datos complejos crear copias puede ser muy costoso, así que estos valores son pasados por referencia (o sea solo existe una versión de ese objeto). Esto puede ser origen de errores y dolores de cabeza.

```js
var obj1 = {
  foo: 1
}
// la referencia de obj1 es pasada a obj2
var obj2 = obj1
// ahora desde obj2 se puede cambiar el valor de la propiedades
obj2.foo = 10
// e incluso crear nuevas propiedades
obj2.bar = 'foo'
console.log(obj1) // {foo: 10, bar: "foo"}
console.log(obj2) // {foo: 10, bar: "foo"}
console.log(obj1 === obj2) // true
```

Notar que `obj1` y `obj2` hacen referencia a un mismo objeto y cualquier cambio que se le haga sera reflejado en las dos variables.

**Array**: los arrays son objetos especiales, que tienen ciertas características especiales para su fácil uso, como la propiedad _length_, y un conjunto de funciones para su manipulación. Los arrays no tiene un tipo relacionado o sea que pueden contener cualquier tipo de dato.

```js
var arr = [
   1,
  'foo',
  true,
  {bar: 5},
  [3, 6, 9]
]
console.log(arr.length) // 5
```

**Function**: las funciones también son objetos en javascript, con la característica que se pueden ejecutar. Las funciones son una de las características más importantes de javascript, por eso mismo hablaremos más a fondo de ellas en el siguiente artículo.

[^1]: Javascript también es débilmente tipado (weak typing ó loosely typing) esto se explicará en un próximo artículo, donde se hablará de coerción. 
[^2]: También se puede usar let y const se hablara de las diferencias de estas tres opción mas adelante en la guía.
[^3]: NaN es el intento fallido de la conversión de un String a Number, se hablara de esto más detalladamente en coerción.
[^4]: En uso de acentos graves para declarar strings es una nueva característica de javascript llamada Template literals.