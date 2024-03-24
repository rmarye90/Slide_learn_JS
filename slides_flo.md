---
author: Florian Beaumont
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
drawings:
  persist: false
fonts:
  sans: Roboto
  serif: Roboto Slab
  mono: Fira Code
---

# Bienvenue dans Javascript !

## Lancez-vous dans le web dynamique.

---
title: Bienvenue et Introduction
height: 100
image: https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80
preload: false
---

# Objectifs de ce cours

<v-clicks>

- Comprendre les fondamentaux de JavaScript 
- Manipuler le DOM pour l'interactivité
- Maîtriser les fonctions asynchrones et la récupération de données
- Principes de clean code en JavaScript
- Techniques avancées et bonnes pratiques

</v-clicks>



---

## Pourquoi Javascript ?

<div h-80 flex="~ items-center">
    <div grid="~ gap-y-4" mt10>
        <p><span text-2xl v-click="1" class="color-#F7DF1E">Interactivité</span> <span op50 v-click="2"> - JavaScript anime vos pages, créant des interactions immédiates avec l'utilisateur.</span></p>
        <p><span text-2xl v-click="3" class="color-purple">Flexibilité</span> <span op50 v-click="4"> - JavaScript s'adapte, côté client comme serveur, pour des solutions complètes.</span></p>
        <p><span text-2xl v-click="5" class="color-#4FC08D">Accessibilité</span> <span op50 v-click="6"> - Supporté universellement, JavaScript assure une expérience fluide sur tous les navigateurs.</span></p>
    </div>
</div>

---
title: Premiers pas avec JavaScript
---

<h1 class="text-center">Hello, World</h1> 
```js {monaco-run} {autorun:false}
console.log('Hello, World!');
```
<v-click at="+1">
```js
console.log('Hello, World!');
console.info('Hello, World!');
console.error('Hello, World!');
console.warning('Hello, World!');
```
</v-click>
<!-- throw new Error() pour signaler des erreurs qui doivent interrompre l'exécution d'un bloc de code.

catch(error) pour gérer de manière élégante les erreurs qui peuvent être récupérées.

console.error() pour logger des erreurs ou des informations importantes pour le débogage sans interrompre l'exécution du programme.-->

---
title: Variables, Types de Données, et Opérations
---

<div grid="~ flex-start">
<div text-2xl origin-top-left transition duration-500 :class="$clicks < 1 ? 'scale-150' : 'op50'">
Variables et Constantes
</div>
<div class="inline-block py-4 tracking-widest">
    <span v-mark.strike-through.red origin-top-left transition duration-500 :class="$clicks < 2 ? '' : 'op50 text-red-300'">`var`</span>, <span v-mark.box.teal  origin-top-left transition duration-500 :class="$clicks < 3 ? '' : 'op50'">`let` et `const`</span>
</div>

<div class="w-0.25 h-40 bg-white absolute left-40 top-40" v-click="3" />
<div class="inline-block" w-60>
```js {monaco-run}
let x = 42;
console.log(x);
```
</div>

</div>

<h3 v-click="'+1'" class="text-center py-4">Pourquoi ?</h3>
<img v-click="'+1'" src="/assets/images/ManonSofaWellness.jpg" class="absolute right-20 h-60 rounded shadow" />

---
title: var exemple #1 
transition: fade-out
---

<div class="~ grid grid-cols-2 gap-4">

<div>

# Un peu d'explication #1:

<div><span class="color-teal">var</span> : <span :class="$clicks < 2 ? '' : 'op50'">peut être re-déclarée et mise à jour</span></div>
<div v-click="2"><span class="color-teal">let</span> : <span :class="$clicks < 4 ? '' : 'op50'">peut être mise à jour mais <span v-mark="{at: 3, color: '#BE4165', type: 'strike-through'}">pas re-déclarée</span></span></div>
<div v-click="4"><span class="color-teal">const</span> : ne peut ni <span v-mark="{at: 5, color: '#BE4165', type: 'strike-through'}">être mise à jour</span> ni <span v-mark="{at: 5, color: '#BE4165', type: 'strike-through'}">etre re-déclarée</span></div>

</div>

<div class="col-start-2">


```js {monaco-run} {autorun:false}
var greeting = "Hello";
var greeting = "Bonjour"; // Re-déclaration valide

// let peut être mise à jour mais pas re-déclaré
let greeting2 = "Hello";
//let greeting2 = "Bonjour";
greeting2 = "Bonjour"; 

// const ne peut ni être mis à jour ni re-déclaré
const greeting3 = "Hello";
//const greeting3 = "Bonjour";
greeting3 = "Bonjour";

console.log(greeting); // "Bonjour"
```

</div>
</div>
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

# Hoisting

<div v-click="0" v-mark="{at: 1, color: 'teal', type: 'highlight'}" class="w-24">Le Hoisting</div>
<Arrow v-bind="{ x1:10, y1:150, x2:50, y2:150 }" />
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

---
title: functions 
---

# Les fonctions

<div class="grid grid-cols-2 gap-2">
    <div>
    
````md magic-move
```js {hide|1-3|7-10|all}{lines:true}
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

const addShorter = (a, b) => {
  return a + b;
}

console.log(addShorter(2, 3));
```

```js
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

const addShorter = (a, b) => a + b;

console.log(addShorter(2, 3));
```

```js
function add(a) {
  return a + 4;
}

console.log(add(2, 3));

const addShorter = a => a + 4;

console.log(addShorter(2, 3));
```

````

</div>
<div v-click="6" mt--12>
    <h3>A quoi sert la fonction ?</h3>
    <p class="op50">Les fonctions nous aident à réutiliser des morceaux de code sans avoir à le réécrire.
    Il y a différentes manières d'écrire des fonctions, mais elles visent toutes à accomplir une tâche.</p>
</div>

</div>

---
title: Les tableaux
---

# Les tableaux

````md magic-move
```js
const names = new Array('Le meilleur des mondes', 'Crime et Chatiment', 'Le proces', 'Les nuits blanche');
```

```js
const livres = ['Le meilleur des mondes', 'Crime et Chatiment', 'Le proces', 'Les nuits blanche'];

console.log(livres[3]); // Accède au quatrième livre: Les nuits blanche 
```
````
<br />

<v-click at="+1">

#### A quoi sert le tableau ?
Les tableaux en JavaScript stockent des collections d'éléments sous une même variable, permettant d'organiser, d'accéder, et de manipuler ces données grâce à des indices.

</v-click>

---

<v-click at="+1">
## Le mot clef `this`

* Le this en JavaScript fait référence à l'objet qui est en train d'exécuter le code courant, servant à accéder à ses propriétés et méthodes.
</v-click>
<br />
<v-click at="+1">
## Contexte de this :

* Fonctions Traditionnelles : this varie selon comment la fonction est appelée.
* Arrow Functions : this est fixé au contexte de déclaration, sans propre this.

</v-click>
<br />
<v-click at="+1">
## Hoisting :

* Fonctions Traditionnelles : Déclarations hoistées, utilisables avant leur définition.
* Arrow Functions : Doivent être déclarées avant utilisation, pas de hoisting.
</v-click>

---

# Sommaire
<Toc minDepth="1" maxDepth="2"></Toc>
