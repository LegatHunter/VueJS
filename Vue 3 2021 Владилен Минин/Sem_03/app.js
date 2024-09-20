Vue.createApp({
    data: () => ({
        myHtml: '<h1>Vue3 App </h1>',
        title: 'Я есть Грут',
        person: {
            firstName: 'John',
            lastName: 'Doe',
            age: 33,
        },
        items: [1,2,3,4,5,6],
    })

}).mount('#app')