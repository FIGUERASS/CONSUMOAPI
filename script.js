
    const botao = document.getElementById("button");
    botao.addEventListener("click", ConsultaCep);


    function ConsultaCep() {
        let cep = document.querySelector('#cep').value;
    
        if (cep.length !==8) {
            alert('CEP INVÁLIDO');
            return;
        }

        let url = `https://viacep.com.br/ws/${cep}/json/`;

        fetch(url).then(function(response){
            response.json().then(MostrarEndereco) 
            })

        };

    function MostrarEndereco(dados) {
        let resultado = document.querySelector('#resultado');
        if (dados.erro) {
            resultado.innerHTML = "Não foi possível localizar endereço!";
        } else {
        resultado.innerHTML = ` <p>Endereço : ${dados.logradouro}</p>
                                <p>Complemento : ${dados.complemento}</p>
                                <p>Bairro : ${dados.bairro}</p>
                                <p>Cidade : ${dados.localidade} - ${dados.uf}</p> `
        }
    }
