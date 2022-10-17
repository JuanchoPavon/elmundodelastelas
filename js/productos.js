const { createApp } = Vue
createApp({
    data() {
        return {
            url: "https://my-json-server.typicode.com/Camila-Murias/Api-Prod-elmundodelastelas/db",
            automotor: [],
            hogar: [],
            muebles: [],
        }
    },

    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.automotor = data.automotor
                    console.log(this.automotor)
                    this.hogar = data.hogar
                    console.log(this.hogar)
                    this.muebles = data.muebles
                    console.log(this.muebles)
                })
        }
    },

    created() {
        this.fetchData(this.url)
    },
}).mount('#app')