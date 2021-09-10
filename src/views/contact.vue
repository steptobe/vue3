<template>   
  <div class="contact"></div>
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
  name: 'contact',

  props: {},

  components: {},

  setup(props, ctx) {
    const params = reactive({})
    return { ...toRefs(state) }
  }
})
</script>

<style lang="scss" scoped>
.contact  {
}
</style>
