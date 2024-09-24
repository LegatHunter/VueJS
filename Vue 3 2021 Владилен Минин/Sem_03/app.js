Vue.createApp({
    data: () => ({
        myHtml: '<h1>Vue3 App </h1>',
        title: 'Я есть Грут',
        person: {
            firstName: 'John',
            lastName: 'Doe',
            age: 33,
        },
        items: [1,2]
    }),
    methods:  {
        addItem() {
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
        },
        remove(i) {
            this.items.splice(i, 1)
        },
        log (item) {
            console.log(item)
        }
    },
    computed: {
        evenItems (event) {
            return this.items.filter(i => i % 2 === 0)
        }
    }

}).mount('#app')