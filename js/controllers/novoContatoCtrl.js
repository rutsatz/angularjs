angular.module("listaTelefonica").controller('novoContatoCtrl', function ($scope, contatosAPI, serialGenerator, $location, operadoras) {

    // O objeto operadoras é carregado no resolve do ngRoute. Lá eu defini o nome como 
    // operadoras. Então, para acessá-lo, preciso injetá-lo como uma dependência.
    // Porém, também preciso fazer o link, atribuindo-o ao scope.
    $scope.operadoras = operadoras;


    $scope.adicionarContato = function (contato) {
        contato.serial = serialGenerator.generate();
        // $scope.contatos.push(contatosAPI.saveContato(contato));
        delete $scope.contato;
        // Seta os campos do form para intocados.
        // $scope.contatoForm.$setPristine();

        // Volto para a listagem de contatos. (/contatos está definido com o
        // ngRoute).
        $location.path("/contatos");
    };

});