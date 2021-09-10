<template>
  <div class="home">

  </div>

</template>
<script>
import {
  computed,
  watch,
  reactive,
  toRefs,
  defineComponent
} from '@vue/composition-api'
export default defineComponent({
  name: 'home',

  props: {},

  components: {},

  setup(props, ctx) {
    const params = reactive({})
    return { ...toRefs(state) }
  }
})
</script>

<style>

</style>