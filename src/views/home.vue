<template>
  <div class="contact">
      shouye1
  </div>

</template>
<script lang="ts">
import {
  computed,
  watch,
  reactive,
  toRefs,
  defineComponent
} from 'vue'
export default defineComponent({
  name: 'home',

  props: {},

  components: {},

  setup(props, ctx) {
    const state = reactive({})
    return { ...toRefs(state) }
  }
})
</script>

<style>

</style>