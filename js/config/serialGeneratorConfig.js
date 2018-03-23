angular.module("listaTelefonica").config(function (serialGeneratorProvider) {
    // Configuro o meu service. 
    // Só funciona se ele for do tipo provider.
    // Ele é executado antes da instanciação dos demais services.
    serialGeneratorProvider.setLength(5);
});