<template>   
  <div class="contact">
    <span>
      8811
    </span>
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
  name: 'contact',

  props: {},

  components: {},

  setup(props, ctx) {
    const state = reactive({})
    return { ...toRefs(state) }
  }
})
</script>

<style  lang="scss">
.contact  {
  span{
    color: aqua;
  }
}
</style>
