// O factory é um tipo de service. Geralmente é estático com escopo
// válido para toda a aplicação. Para que funcione, preciso importá-lo
// no index. Depois disso, posso recebê-lo como um depência nos controllers
// e demais componentes. O nome da dependência é a string informada para o 
// factory. Nesse caso, contatosAPI. Dou um return no final (retorno um objeto),
// pois a função do factory é executada (automaticamente).
angular.module("listaTelefonica").factory("contatosAPI", function ($filter, uppercaseFilter, config) {
    var _getContatos = function () {
        // return $http.get("http://localhost:3412/contatos");
        // Usando o objeto config, definido em configValue.js
        // return $http.get(config.baseUrl + "/contatos");
        return [
            { nome: $filter('uppercase')("Pedro"), telefone: "99998888", data: new Date(), cor: "blue" },
            { nome: uppercaseFilter("Ana"), telefone: "99998877", data: new Date(), cor: "yellow" },
            { nome: "Maria", telefone: "99998866", data: new Date(), cor: "red" }
        ];
    };

    var _saveContato = function (contato) {
        // return $http.post(config.baseUrl + "/contatos", contato);
        return angular.copy(contato);
    };

    // funções fábrica sempre retornam um objeto que foi criado.
    return {
        getContatos: _getContatos,
        saveContato: _saveContato
    };

});