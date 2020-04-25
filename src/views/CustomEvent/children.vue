<template>
<div>
    <input       
    id="salad"
    type="checkbox"
    :checked="checkeds"
    @change="$emit('change', $event.target.checked)"
    >
    <label for="salad">{{message}}</label>
</div>

</template>
<script>
export default {
    model: {
        prop: 'checkeds',
        event: 'change'
    },
    props: {
        checkeds: Boolean,
        message: String
    }
}
</script>
