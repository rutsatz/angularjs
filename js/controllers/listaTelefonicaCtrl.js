angular.module("listaTelefonica").controller('listaTelefonicaCtrl', function ($scope, $filter, uppercaseFilter, contatosAPI, operadorasAPI, serialGenerator) {
    $scope.app = "Lista Telefonica";

    // $scope.contatos = contatosAPI.getContatos();
    // Força uma mensagem de erro, simulando o .error de callback
    // quando a chamada a API falhar.
    $scope.error = "Não foi possível carregar os dados";

    $scope.operadoras = operadorasAPI.getOperadoras();
    $scope.adicionarContato = function (contato) {
        contato.serial = serialGenerator.generate();
        $scope.contatos.push(contatosAPI.saveContato(contato));
        delete $scope.contato;
        // Seta os campos do form para intocados.
        $scope.contatoForm.$setPristine();
    };
    $scope.apagarContatos = function (contatos) {
        // Aplica um filtro para a lista de contato, retornanado somente os não selecionados, e adiciona na lista de contatos do scope.
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
    };
    $scope.isContatoSelecionado = function (contatos) {
        // Analisa contato a contato e retorna true se algum estiver selecionado (some será true).
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };
});