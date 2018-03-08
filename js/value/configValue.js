// Permite configurar um objeto de valores (configurações)
// com escopo global, acessível em qualquer ponto da aplicação.
// Nos módulos que quiser usá-lo, basta usar a injeção de 
// dependência.

// No lugar o value, posso usar o .constant. Ao usar o .constant,
// posso injetar o config nos demais services.
angular.module("listaTelefonica").value("config", {
    baseUrl: "http://localhost:3412"
});