new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Alertando!!')
        },
        keyDown(event) {
            this.valor = event.target.value
        }
    }
})