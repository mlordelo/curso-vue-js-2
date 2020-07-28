new Vue( {
    el: '#desafio',
    data: {
        nome: 'Márcio Lordelo',
        idade: 33,
        linkHtml: '<a href="http://gogle.com">Google Link</a>',
        linkImagem: 'https://vuejs.org/images/logo.png'
    },
    methods: {
        multiplicaIdade: function() {
            return this.idade*3
        },
        numAleatorio: function() {
            return Math.random().toString()
        }
    }
})