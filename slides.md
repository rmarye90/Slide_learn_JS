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
class: text-center
---

# Hello, World
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
