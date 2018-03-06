angular.module("listaTelefonica").controller('listaTelefonicaCtrl', function ($scope, $filter, uppercaseFilter, contatosAPI) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = contatosAPI.getContatos();
        $scope.operadoras = [
            { nome: "Oi", codigo: 14, categoria: "Celular", preco: 2 },
            { nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1 },
            { nome: "Tim", codigo: 41, categoria: "Celular", preco: 3 },
            { nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1 },
            { nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2 }
        ];
    $scope.adicionarContato = function (contato) {
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