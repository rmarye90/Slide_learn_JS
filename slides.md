---
layout: cover
theme: seriph
background: none
title: Les Fondamentaux de JavaScript
author: Florian Beaumont
download: false
highlighter: shiki
drawings:
  persist: false
transition: slide-left
mdc: true
fonts:
  sans: Roboto
  serif: Roboto Slab
  mono: Fira Code
---

# Bienvenue dans Javascript !

## Lancez-vous dans le web dynamique.

---
layout: image-right
title: Bienvenue et Introduction
image: https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80
preload: false
---

# Objectifs de ce cours
<div class="h-20">
    <ListWithDelai :list="['Interactivité', 'Dynamisme', 'Carriere']"/>
</div>

<br />
<br />

# Importance de JavaScript dans le développement web :

Clé de l'interactivité, dynamise le web, essentiel pour une carrière en développement.
---

# Sommaire
<Toc minDepth="1" maxDepth="2"></Toc>

---
layout: image-right
image: https://images.unsplash.com/photo-1536995769641-12e9f98fd223?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

# Pourquoi Javascript ?
<ul>
    <li v-after>- <span v-mark.underline.orange>Interactivité</span></li>
    <li v-after>- <span v-mark.circle.teal>Dynamisme</span></li>
    <li v-after>- <span v-mark="{ color: '#701', type: 'underline' }">Carriere</span></li>
</ul>

<!-- <v-clicks depth="3"> -->
<!---->
<!-- - Item 1 -->
<!--   - Item 1.1 -->
<!--     - Item 1.1.1 -->
<!--         - Item 1.1.2 -->
<!--   - Item 1.2 -->
<!-- - Item 2 -->
<!--   - Item 2.1 -->
<!--   - Item 2.2 -->
<!---->
<!-- </v-clicks> -->

---
title: Premiers pas avec JavaScript
layout: center
---

<h1 class="text-center">Hello, World</h1> 
````md magic-move
```js
console.log('Hello, World!');
```
```js
console.log('Hello, World!');
console.info('Hello, World!');
console.error('Hello, World!');
console.debug('Hello, World!');
console.warning('Hello, World!');
```
````
<!-- throw new Error() pour signaler des erreurs qui doivent interrompre l'exécution d'un bloc de code.

catch(error) pour gérer de manière élégante les erreurs qui peuvent être récupérées.

console.error() pour logger des erreurs ou des informations importantes pour le débogage sans interrompre l'exécution du programme.-->

---
title: Variables, Types de Données, et Opérations
layout: center
class: text-center
---

# Variables et Constantes
<span v-mark.strike-through.red>`var`</span>, <span v-mark.circle.teal>`let` et `const`</span>
```js
let x = 42;
console.log(x);
```

<p v-click="'+1'">Pourquoi ?</p>
<img v-click="'+1'" src="/assets/images/ManonSofaWellness.jpg" class="m-auto h-60 rounded shadow" />

---
title: var exemple #1 
transition: fade-out
---

# Un peu d'explication #1:

<div  v-mark="{at: 1, color: 'teal', type: 'highlight'}">var: peut être re-déclarée et mise à jour</div>
<div v-click="2" v-mark="{at: 2, color: 'teal', type: 'highlight'}">let et const : peut être mise à jour mais <span v-mark="{at: 2, color: '#BE4165', type: 'strike-through'}">pas re-déclarée</span></div>

```js {monaco-run}
// var: peut être re-déclarée et mise à jour
var greeting = "Hello";
var greeting = "Bonjour"; // Re-déclaration valide
console.log(greeting); // "Bonjour"

// let et const: peuvent être mise à jour mais pas re-déclarées
let greeting2 = "Hello";
//let greeting2 = "Hola";
greeting2 = "Bonjour"; 
```
---
title: var exemple #2
transition: fade-out
---

# Un peu d'explication #2:

<div v-click="0" v-mark="{at: 1, color: 'teal', type: 'highlight'}">Le scope de la variable est le bloc d'instructions</div>
<div class="flex w-220 gap-2">
    <div class="w-1/2">
```js {monaco-run}
// var: portée de fonction
function testVar() {
  var x = 1;
  if (true) {
    var x = 2; // Même variable !
    console.log(x); // 2
  }
  console.log(x); // 2
}
testVar();
```
    </div>
    <div class="w-1/2">
```js {monaco-run}
// let: portée de bloc
function testLet() {
  let y = 1;
  if (true) {
    let y = 2; // Variable différente
    console.log(y); // 2
  }
  console.log(y); // 1
}
testLet();
```
    </div>
</div>


---
title: var exemple #3
transition: fade-out
---

# Un peu d'explication #3:

<div v-click="0" v-mark="{at: 5, color: 'teal', type: 'highlight'}">Le Hoisting</div>
```js {monaco-run}
console.log(a); // var a; 
var a = 3;

let b = 3;

const c = 3;
```


---
title: var exemple #4
transition: fade-out
---

# Un peu d'explication #4:

<div v-click="0" v-mark="{at: 1, color: 'teal', type: 'highlight'}">Le scope encore</div>
```js {monaco-run} {autorun:false}
// var dans une boucle for
for (var i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}

console.log(i); // 3, `i` est accessible en dehors de la boucle
console.log('-------------------------');
// let dans une boucle for
for (let j = 0; j < 3; j++) {
  console.log(j); // 0, 1, 2
}

/* console.log(j); Erreur: j is not defined, `j` n'est pas accessible en dehors de la boucle */
```
