const { createApp } = Vue
createApp({
    data() {
        return {
            automotor: [
                {
                    "nombre": "Cuerina Napa Microperforada",
                    "descripcion": "Tapizado Renault Master.",
                    "imagen": "./imagenes/cuerina-napa.jpeg",
                    "precio": "",
                },
                {
                    "nombre": "Cuerina Bisonte Rojo",
                    "descripcion": "Tapizado Fiat Vivace, incluye bondeado de 3 mm.",
                    "imagen": "./imagenes/cuerina-bisonte.jpeg",
                    "precio": "",
                },
                {
                    "nombre": "Cuerina importada antideslizante",
                    "descripcion": "Tapizado Peugeot Boxer, incluye bondeado de 3 mm.",
                    "imagen": "./imagenes/cuerina-antideslizante.jpeg",
                    "precio": "",
                },
                {
                    "nombre": "BOXER",
                    "descripcion": "Tela rústica macchiato.",
                    "imagen": "./imagenes/rusticomacchiato.JPG",
                    "precio": "",
                },
                
            ],
            muebles: [
                {
                    "nombre": "Cuerina para muebles Glamour",
                    "descripcion": "Tela para tapizado cuerina naútica.",
                    "imagen": "./imagenes/cuerina.glamour.jpeg",
                    "precio": "",
                },
                {
                    "nombre": "Cuerina Talampaya Base Jersey",
                    "descripcion": "Lino antimanchas para mantel, línea central.",
                    "imagen": "./imagenes/cuerina-talampaya-2.jpeg",
                    "precio": "",
                },
                {
                    "nombre": "Cuerina Talampaya Base Jersey",
                    "descripcion": "Tela pana parís con diseño liso.",
                    "imagen": "./imagenes/cuerina-talampaya.jpeg",
                    "precio": "",
                },
                {
                    "nombre": "Cuerina para muebles Talampaya",
                    "descripcion": "Tela rústica macchiato.",
                    "imagen": "./imagenes/cuerina-para-muebles.jpeg",
                    "precio": "",
                },
            ],
            hogar: [
                {
                    "nombre": "CUERINA NAÚTICA",
                    "descripcion": "Tela para tapizado cuerina naútica.",
                    "imagen": "./imagenes/cuerina.jpg",
                    "precio": "",
                },
                {
                    "nombre": "LINO ANTIMANCHAS",
                    "descripcion": "Lino antimanchas para mantel, línea central.",
                    "imagen": "./imagenes/linoamancha.JPG",
                    "precio": "",
                },
                {
                    "nombre": "PANA PARÍS",
                    "descripcion": "Tela pana parís con diseño liso.",
                    "imagen": "./imagenes/panaparis.JPG",
                    "precio": "",
                },
                {
                    "nombre": "BOXER",
                    "descripcion": "Tela rústica macchiato.",
                    "imagen": "./imagenes/rusticomacchiato.JPG",
                    "precio": "",
                },
            ],
        }
    }
}).mount('#app')

