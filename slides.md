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

