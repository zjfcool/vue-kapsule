<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
function genRandomTree(N = 300, reverse = false) {
    return {
        nodes: [...Array(N).keys()].map((i) => ({ id: i })),
        links: [...Array(N).keys()]
            .filter((id) => id)
            .map((id) => ({
                [reverse ? "target" : "source"]: id,
                [reverse ? "source" : "target"]: Math.round(Math.random() * (id - 1)),
            })),
    };
}
import { onMounted, ref } from "vue";
import VueForceGraph3D from './components/vue-force-graph-3d.vue'
const graphData = ref(genRandomTree());
const graphRef = ref()
onMounted(()=>{
  console.log(graphRef)
})
</script>

<template>
  <VueForceGraph3D
    ref="graphRef"
    :graphData="graphData"
    backgroundColor="#090723"
  ></VueForceGraph3D>
</template>
