<template>
  <div class="home">
    <UserInfo></UserInfo>
    <router-link to="/">SlotPractice</router-link>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import UserInfo from './userinfo.vue'
export default {
  name: 'home',
  components: {
    HelloWorld,
    UserInfo
  }
}
</script>
