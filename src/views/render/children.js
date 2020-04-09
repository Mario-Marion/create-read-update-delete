export default {
    props: {
        placeholder: {
            type: [String, Number]
        },
        value: {
            type: [Number, String],
            required: true
        }
    },
    render (h) {
        let that = this
        return h(
        'input',
        {
            attrs: {
                type: 'Number',
                value: this.value,
                placeholder: this.placeholder
            },
            on: {
                'input': event => {
                    that.$emit('input', Number(event.target.value))
                }
            }
        })
    }
}
