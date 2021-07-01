### Informações Técnicas:

IDE utilizada: Atom;
Linguagens utilizadas: Programação Java Script, Marcação HTML, Estilo CSS;
Maiores dificuldades: desenvolvimento da lógica da calculadora;
Maiores facilidades: desenvolvimento do site e scripts;
Tempo dedicado: 2h página, 4h lógica, 1,5h script;

## Desafio
Baseados em dados de análise de anúncios anteriores, a agência tem os seguintes dados:

a cada 100 pessoas que visualizam o anúncio 12 clicam nele.
a cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.
cada compartilhamento nas redes sociais gera 40 novas visualizações.
30 pessoas visualizam o anúncio original (não compartilhado) a cada R$ 1,00 investido.
o mesmo anúncio é compartilhado no máximo 4 vezes em sequência

(1ª pessoa -> compartilha -> 2ª pessoa -> compartilha - > 3ª pessoa -> compartilha -> 4ª pessoa)

## Para desenvolver a calculadora eu pensei da seguinte maneira:

### 1) Desenvolver uma relação entre visualizações, cliques e compartilhamento:

Regra de 3: 100 visualizações = ? compartilhamentos

20 cliques = 3 compartilhamentos
12 cliques = x compartilhamentos

x = 12 * 3 / 20 = 1,8 compartilhamentos

100 visualizações -> 12 cliques -> 1,8 compartilhamentos

Regra de 3:  ? visualizações = 1 compartilhamento

1,8 compartilhamento = 100 visualizações
1 compartilhamento   = x visualizações

x = 100 / 1,8 = 55,5555556 ≅ 56 visualizações

56 visualizações publi original -> 1 compartilhamento -> 40 novas visualizações

### 2) Calculando com investimento base de 1 real:

Para cada 1 real investido =  30 visualizações no publi original

Ou seja, com 1 real investido só teremos 30 visualizações no publi original,
porque pra ele ser compartilhado nas redes sociais pelo menos 1 vez,
seria necessário no mínimo 56 visualizações.

### 3) Algoritmo para a calculadora:

Agora possuímos os seguintes dados:
Um post só pode ser compartilhado no máximo 4 vezes;

vInicial = investimento * 30
minVisualizacao = 56
fimAlcance = vTotal = vInicial;

para (inteiro i = 0; fimAlcance > 56 e i < 4; i++){
      fimAlcance = vInicial - 56;
      vTotal = vTotal + 40;
}
