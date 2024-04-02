---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
fonts:
  sans: Bebas Neue
  serif: Source Code Pro
  mono: Bebas Neue
---

<div v-click="1">
<p class="text-center text-title-color text-7xl">Les Variables</p>
</div>
<div v-click="2">
C'est ce qui va nous permettre de stocker une données!
</div>

---

<h1 class="text-title-color pb-8">Declarer une variable</h1>

<div v-click="1" class="pb-8">
<span class="text-span-primary text-2xl">CONST:</span> <span class="font-serif text-1xl"> ne peut se voir réassigner une valeur. Permet d'éviter des erreurs en s'assurent, que si on utilise </span> <span class="text-span-primary text-2xl"> const</span>, <span class="font-serif text-1xl">la variable ne sera pas écrasée par la suite.</span> 
</div>

<div v-click="2" class="pb-8">
<span class="text-span-primary text-2xl">LET:</span><span class="font-serif text-1xl"> peut être mise à jour mais pas re-déclarée</span>
</div>

<div v-click="3" class="pb-8">
<span v-mark="{at: 4, color: '#e11d48', type: 'strike-through'}" class="text-span-primary text-2xl">VAR:</span><span class="font-serif text-1xl"> peut être mise à jour et re-déclarée </span>
<span v-click="4" class=" text-gray-500 italic">// ne s'utilise plus </span>
</div> 

<div v-click="5">

```js
const a = 2;
const une_autre_variable = "Ma super chaine de caractère";

let a = "2";
let a = "Je suis une chaine maintenant";
```
</div>

---

<h1 class="text-title-color">Les bonnes pratiques</h1>
<h2 v-click="1" class="pb-5 text-center">Pour nomer ses variables </h2>

<div v-click="2">
<span class="text-span-primary text-2xl">rules 1: </span> <span class="font-serif text-sm"> Des noms descriptifs et explicites.</span>
<div class="font-serif text-span-accent">
ex: 
</div>
</div>


---

<h1 class="text-title-color pb-5">Hoisting</h1>
<div v-click="1" class="text-sm font-serif pb-5"> Cette mécanique consiste à faire "virtuellement" remonter la déclaration d'une variable (ou d'une fonction) tout au haut du code lors de l'analyse du code par le moteur</div>

<div v-click="2" class="quote size-w-160 font-serif"> Mais attention, il ne remonte que la déclaration, et non l'initialisation, la valeur de la variable sera alors mise à "undefined". </div>

<div v-click="3" pt-8>

```js {monaco-run}
console.log(a); // var a; 
var a = 3;

let b = 3;

const c = 3;
```

</div>

---

<div>
<h1 class="text-title-color">Les types de variables</h1>
</div>

<p v-click="1" class="quote size-w-150 font-serif pb-5">
On peut stocker plusieurs types de données dans une variable:
<br>
<span v-click="1" class=" text-gray-500 italic">// mais qu'une donnée pars variable. </span>
</p>

<div class="grid grid-cols-3 gap-4 text-center pt-8">
<div>
<div v-click="2">
<p class="text-span-primary"> Les nombres: </p>
</div>

<div v-click="3">
```js
const a = 2;
const b = 3.14;
const c = -320;
const d = 1/3;
```
</div>
</div>

<div>
<div v-click="4">
<p class="text-span-primary" > Les chaines de caractères: </p>
</div>

<div v-click="5">
```js
const a = "Hello World";
const b = `Hello World`;
const c = 'Hello World';
const a = "Ce n'est pas une chaine de caractères";
const b = 'Ce n\'est pas une chaine de caractères';
```
</div>
</div>

<div>
<div v-click="6">
<p class="text-span-primary" > Les booléens: </p>
</div>

<div v-click="7">

```js
let is_connected = true;
let not_connected = false;
```
</div>
</div>
</div>
---

<div>
<p class="text-span-primary" > Les tableaux: </p>
<p v-click="1" class="font-serif text-sm"> Celle ci peut contenir plusieurs données</p>
</div>

<div v-click="2">

```js
const is_connected = ['Pierre', 'Paul', 'Jacques'];
const not_connected = ['true', '10', 'Pierre'];
```

</div>

<div v-click="3">
<p class="font-serif text-sm">Chaque élément du tableau peut étre récupéré avec [i]</p>
<p class="font-serif text-sm"> i = numéro de l'index de l'éllement à récupérer en commencent par 0</p>
</div>

<div v-click="4">

```js
is_connected[0]; // Pierre
is_connected[2]; // Jacques

not_connected[1]; // 10
not_connected[18];  // undefined
```

</div>

---

<div>
<p class="text-#a3e635" > Les objets: </p>
</div>
