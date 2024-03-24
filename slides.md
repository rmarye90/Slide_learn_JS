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
<p class="text-center text-#e11d48 text-7xl">Les Variables</p>
</div>
<div v-click="2">
C'est ce qui va nous permettre de stocker une données!
</div>

---

<p class="text-center text-#e11d48 text-5xl pb-8"> Declarer une variable</p>

<div v-click="1" class="pb-8">
<span class="text-#c026d3 text-2xl">CONST:</span> <span class="font-serif text-1xl"> ne peut se voir réassigner une valeur. Permet d'éviter des erreurs en s'assurent, que si on utilise </span> <span class="text-#c026d3 text-2xl"> const</span>, <span class="font-serif text-1xl">la variable ne sera pas écrasée par la suite.</span> 
</div>

<div v-click="2" class="pb-8">
<span class="text-#c026d3 text-2xl">LET:</span><span class="font-serif text-1xl"> peut être mise à jour mais pas re-déclarée</span>
</div>

<div v-click="3" class="pb-8">
<span v-mark="{at: 4, color: '#e11d48', type: 'strike-through'}" class="text-#c026d3 text-2xl">VAR:</span><span class="font-serif text-1xl"> peut être mise à jour et re-déclarée </span>
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

<div>
<p class="text-center text-#e11d48 text-5xl">Les types de variables</p>
</div>

<div v-click="1" class="text-center">
On peut stocker plusieurs types de données dans une variable:
<br>
<span v-click="1" class=" text-gray-500 italic">// mais qu'une donnée pars variable. </span>
</div>

<div v-click="2">
<p class="text-#a3e635"> Les nombres: </p>
</div>

<div v-click="3">
```js
const a = 2;
const b = 3.14;
const c = -320;
const d = 1/3;
```
</div>

<div v-click="4">
<p class="text-#a3e635" > Les chaines de caractères: </p>
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

<div v-click="6">
<p class="text-#a3e635" > Les booléens: </p>
</div>

<div v-click="7">

```js
let is_connected = true;
let not_connected = false;
```

</div>

---

<div>
<p class="text-#a3e635" > Les tableaux: </p>
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
