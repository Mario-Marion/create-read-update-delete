<template>
    <div>
        <children :name="user"></children>
    </div>
</template>
<script>

import children from './child'

export default {
    components: { children },
    data() {
        return {
            user: {
                name: 'mike'
            }
        }
    }
}
</script>
<style scoped>

</style>
