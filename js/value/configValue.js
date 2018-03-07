// Permite configurar um objeto de valores (configurações)
// com escopo global, acessível em qualquer ponto da aplicação.
// Nos módulos que quiser usá-lo, basta usar a injeção de 
// dependência.
angular.module("listaTelefonica").value("config", {
    baseUrl: "http://localhost:3412"
});