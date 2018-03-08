// Cria um filtro que recebe um tamanho limite
// para um string e coloca 3 pontinhos no final,
// caso o tamanho exceder o limite.
angular.module("listaTelefonica").filter("ellipsis", function () {
    // Primeiro parametro sempre será a entrada.
    // Os demais parâmetros ajusto conforme a necessidade.
    return function (input, size) {
        // Não faz nada.
        if (input.length <= size) return input;
        
        // (size || 2) age como um código de inicialização,
        // pois se size for undefined, ou null, ele será 
        // evaluado como false, vai fazer o ou e será
        // passado o 2 como parâmetro. inicializado
        // como 2. 
        // É o equivalente a:
        // if( size === undefined ) {
        //   size = 2; 
        // }
        var output = input.substring(0, (size || 2) ) + "...";
        return output;
    };
});