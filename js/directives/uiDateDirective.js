angular.module("listaTelefonica").directive("uiDate", function ($filter) {
    return {

        // Especifica diretivas que preciso acessar. Como vou interagir com o model
        // do controller, pois preciso afetar o scope dele, então preciso do ngModel.
        // Quando digo isso, recebo isso através do quarto parâmetro da função link.
        require: "ngModel",

        // A função link é executada depois do template ter sido processado.
        // Ela permite interagir diretamente com a DOM. (Através do element)
        // É nela que coloco as máscaras de campos. (As mascaras podem ser usadas
        // direto com o ng-model, diferentemente dos filters)
        // Recebo o scope do controller como parâmetro, caso a diretiva não tenha o 
        // scope isolado. Nessa diretiva aqui, o scope não está isolado. Para isolar,
        // eu precisaria adicionar o atributo scope: { }
        // É interessante não interagir com o scope do controller,
        // pois a diretiva perde o sentido de reuso.
        // element encapsula o DOM como um elemento jQuery, que permite a 
        // manipulação através do jQuery. Ele usará o jQueryLight (jqLight), caso o jQuery
        // não estiver disponível.
        // attrs são os atributos do element. (Eles são úteis quando você não isola o escopo)
        link: function (scope, element, attrs, ctrl) {

            var _formatDate = function (date) {
                // Remove tudo que não for dígito, para não formatar uma data
                // que já esteja formatada.
                date = date.replace(/[^0-9]+/g, "");
                if (date.length > 2) {
                    date = date.substring(0, 2) + "/" + date.substring(2);
                }
                if (date.length > 5) {
                    date = date.substring(0, 5) + "/" + date.substring(5, 9);
                }
                return date;
            }

            // Faz o bind da função com o evente keyup do elemento.
            element.bind("keyup", function () {
                ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
                // Preciso renderizar o componente.
                ctrl.$render();
            });

            // É como um interceptor, um gancho com o controller.
            ctrl.$parsers.push(function (value) {
                // Somente atribui ao scope quando o valor já estiver formatado.
                if (value.length === 10) {
                    var dateArray = value.split("/");
                    // Uso o construtor que recebe o ano, mês e dia, pois o formato
                    // 10/10/2002 não funciona. Depois, retorno o tempo em milisegundos.
                    return new Date(dateArray[2], dateArray[1] - 1, dateArray[0]).getTime();
                };
            });

            // Quando abro a tela e já tenho valores carregados no scope,
            // e preciso formatá-los para exibir, o formatter entra em ação.
            ctrl.$formatters.push(function (value) {
                return $filter("date")(value, "dd/MM/yyyy");
            });

        }
    };
});