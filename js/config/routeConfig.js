angular.module("listaTelefonica").config(function ($routeProvider) {
    // Configuro o meu service. 
    // Só funciona se ele for do tipo provider.
    // Ele é executado antes da instanciação dos demais services.

    // Quando eu acessar /contatos, vou para algum lugar. Esse lugar é definido no
    // segundo parâmetro, pelo routeObject. O templateUrl é o mínimo que preciso 
    // informar. O controller posso deixar no html, mas é mais interessante
    // adicioná-lo ao routeObject.
    $routeProvider.when("/contatos", {
        templateUrl: "view/contatos.html",
        controller: "listaTelefonicaCtrl"
    });
    $routeProvider.when("/novoContato", {
        templateUrl: "view/novoContato.html",
        controller: "novoContatoCtrl",
        // No resolve adicionamos dependências necessárias para a página.
        // Ele carrega a página após executar com sucesso as promessas
        // do resolve.
        resolve: {
            // Para pegar os parâmetros da url, preciso usar o $route.
            operadoras: function (contatosAPI, $route) {
                return contatosAPI.getContato($route.current.params.id);
            }
        }
    });
    // Para passar o id como parâmetro, adicionamos /:id .
    $routeProvider.when("/detalhesContato/:id", {
        templateUrl: "view/detalhesContato.html",
        controller: "detalhesContatoCtrl",
        resolve: {
            operadoras: function (operadorasAPI) {
                return operadorasAPI.getOperadoras();
            }
        }
    });
    // quando é inserida uma url inválida, é redirecionado para a url padrão definida
    // por otherwise.
    $routeProvider.otherwise({
        redirectTo: "/contatos"
    });
});