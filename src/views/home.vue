<template>
  <div class="contact" >
     <span  @click="openmessage">点击222</span>
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
    const openmessage = ()=>{
      ctx.root.$message.info('hhaha')
    }
    return { ...toRefs(state),openmessage }
  }
})
</script>

<style>

</style>