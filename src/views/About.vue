<template>
  <div class="list">
    <router-link to="/">Home</router-link>
    <MoPaging></MoPaging>
  </div>
</template>
<script>
import MoPaging from '@/components/pagenav.vue'
export default {
  components: { MoPaging }
}
</script>
