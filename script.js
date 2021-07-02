function CalcularAnuncios() {
//Variáveis
investimento = Number(document.getElementById('money').value);
vInicial = investimento * 30;
minCompartilhar = 56;
fimAlcance = vTotal = vInicial;

//Resultado começa vazio
alcance.innerHTML = ` `;

//Validação de Dados (pega qualquer valor invalido)
  if (investimento < 1 ) {
    alert(`Informe um valor maior que R$ 1 real`);
  }
  else if (Number.isInteger(investimento) == false) {
    alert(`O valor informado deve ser inteiro`);
  }
  else {
    //Calcular os Anuncios
    for (var compartilhar = 0; fimAlcance >= minCompartilhar && compartilhar < 4;compartilhar++){
      fimAlcance -= minCompartilhar;
      vTotal += 40;
    }
    //Resultado
    alcance.innerHTML += `<br>Você alcançará ${vTotal} visualizações`;
  }
}
