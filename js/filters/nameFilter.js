angular.module("listaTelefonica").filter("name", function () {
    // O primeiro parâmetro sempre é a entrada que desejamos
    // transformar.
    return function (input) {

        // Coloca as primeiras letras em maíusculo.
        var listaDeNomes = input.split(" ");

        // A função map executa para cada um dos itens do array
        // e retorna um novo array com os dados do return.
        var listaDeNomesFormatada = listaDeNomes.map(function (nome) {
            // Exceção para da e de. Não aplica o filtro.
            // Usa RegExp para validar.
            if( /(da|de)/.test(nome)) return nome;
            return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
        });

        // join coloca algo entre os elementos do array, um " ".
        return listaDeNomesFormatada.join(" ");
    };
});