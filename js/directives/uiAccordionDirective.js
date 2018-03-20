// Não é mais usado. Foi exportado para a lib.
// Quando tenho mais componentes, ou diretivas, e preciso fazer uma comunicação entre eles,
// eu tenho que usar um componente pai que encapsula todos os filhos. Pois somente consigo fazer
// a comunicação.
angular.module("listaTelefonica").directive("uiAccordions", function () {
    return {
        controller: function ($scope, $element, $attrs){
            // Vai manter o estado de todos os accordions. Vai ter os seus scopes.
            var accordions = [];

            // Vou registrar todos os meus accordions. Recebo o scope como parâmetro.
            this.registerAccordion = function (accordion) {
                accordions.push(accordion);
            };

            this.closeAll = function () {
                accordions.forEach( function (accordion) {
                    accordion.isOpened = false;
                });
            }
        }
    };
});

angular.module("listaTelefonica").directive("uiAccordion", function () {
    return {
        templateUrl: "view/accordion.html",

        // O transclude, quando setado para true, pega o conteúdo do corpo
        // do componente lá da view (onde o componente foi declarado.)
        // e coloca esse conteúdo no item
        // definido com o ng-transclude do template.
        transclude: true,

        // Sempre é interessante fechar o escopo da diretiva, para tonar o componente
        // reusável.
        scope: {
            // Mapeado com arroba, logo pega o valor literal do atributo.
            // (que foi definido lá na view)
            // Sempre que eles forem iguais, posso deixar somente arroba.
            // Caso contrário, eu teria @title, sendo o title o nome do 
            // atributo lá na view. Ficaria assim: title: "@atributo".
            title: "@"
        },

        // Uso o ^ pois o uiAccordions está num elemento diferente, o elemento pai.
        // Ao fazer isso, ele injeta o controller desse elemento em ctrl, e a partir
        // disso, posso acessar seus dados.
        require: "^uiAccordions",

        // link é executado antes de renderizar o template.
        link: function (scope, element, attrs, ctrl) {
            // Registro meu accordion passando scope.
            ctrl.registerAccordion(scope);
            scope.open = function () {
                ctrl.closeAll();
                scope.isOpened = true;
            };
        }
    };
});