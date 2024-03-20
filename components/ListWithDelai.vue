<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  list: {
    type: Array,
    required: true,
  },
});

const elements = ref([]);

let intervalId;

onMounted(() => {
  let index = 0;
  intervalId = setInterval(() => {
    if (index < props.list.length) {
      elements.value.push(props.list[index]);
      index++;
    } else {
      clearInterval(intervalId);
    }
  }, 400);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <transition-group name="list" tag="ul">
    <li v-for="element in elements" :key="element" class="list-item">
      {{ element }}
    </li>
  </transition-group>
</template>

<style>
.list-enter-active,
.list-leave-active {
  transition: opacity 0.5s;
}
.list-enter, .list-leave-to /* .list-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
