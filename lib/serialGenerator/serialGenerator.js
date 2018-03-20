
// Criamos uma lib para o serial generator e registro ele como módulo serialGenerator.
// A primeira coisa é declarar esse serviço. Depois, na declaração do serviço que 
// em que quero usá-lo (listaTelefonica), preciso adicioná-lo como dependência (lá no app.js).
angular.module("serialGenerator", []);

// Coloco o serviço serialGenerator dentro do módulo serialGenerator.
// Como é do tipo provider, consigo confirar utilizando o serviço config.
angular.module("serialGenerator").provider("serialGenerator", function () {
    
    // provider é útil quando precisamos configurar algum serviço.
    // para isso usamos o service de config, que é 
    // exclusivo para configurar outros services, pois ele
    // é executado antes de executar qualquer outro service
    // e permite que passemos configurações para os novos services
    // que estamos instanciando. 
    // Um exemplo é receber o parâmetro length com o tamanho do serial
    // que quero gerar.

    var _length = 10;

    this.getLength = function () {
        return _length;
    };

    // Permite a configuração do service.
    this.setLength = function (length) {
        _length = length;
    }

    // Retorna um objeto como se fosse a factory.
    // Ele irá retornar o objeto que definirmos em $get.
    this.$get = function () {
        return {    
            // Expõe a opção generate.        
            generate: function () {
                var serial = "";
                while(serial.length < _length) {
                    serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
                }
                return serial;
            }
        };
    };
});