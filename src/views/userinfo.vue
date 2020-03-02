<template>
    <header>
        <div>username</div>
        <div>
            <div class="portrait"></div>
            <div>▶</div>
        </div>
    </header>
</template>
<script>
export default {
}
</script>
<style scope>
header {
    display: flex;
    justify-content: space-between;
    /* flex-direction: row-reverse; */
}
.portrait {
    height: 50px;
    width: 50px;
    margin-right: 20px;
    background-color: aquamarine;
    border-radius: 30%;
}
</style>
