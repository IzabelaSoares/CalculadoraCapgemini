### Informações Técnicas:

IDE utilizada: Atom;
Linguagens utilizadas: Programação Java Script, Marcação HTML, Estilo CSS; <br>
Maiores dificuldades: desenvolvimento da lógica da calculadora; <br>
Maiores facilidades: desenvolvimento do site e scripts; <br>
Tempo dedicado: 2h página, 4h lógica, 1,5h script; <br>

## Desafio
Baseados em dados de análise de anúncios anteriores, a agência tem os seguintes dados: <br>

a cada 100 pessoas que visualizam o anúncio 12 clicam nele. <br> 
a cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais. <br>
cada compartilhamento nas redes sociais gera 40 novas visualizações. <br>
30 pessoas visualizam o anúncio original (não compartilhado) a cada R$ 1,00 investido. <br>
o mesmo anúncio é compartilhado no máximo 4 vezes em sequência <br>

(1ª pessoa -> compartilha -> 2ª pessoa -> compartilha - > 3ª pessoa -> compartilha -> 4ª pessoa) <br>

## Para desenvolver a calculadora eu pensei da seguinte maneira: 

### 1) Desenvolver uma relação entre visualizações, cliques e compartilhamento:

Regra de 3: 100 visualizações = ? compartilhamentos <br>

20 cliques = 3 compartilhamentos <br>
12 cliques = x compartilhamentos <br>

x = 12 * 3 / 20 = 1,8 compartilhamentos <br>

100 visualizações -> 12 cliques -> 1,8 compartilhamentos <br>

Regra de 3:  ? visualizações = 1 compartilhamento <br>

1,8 compartilhamento = 100 visualizações <br>
1 compartilhamento   = x visualizações <br>

x = 100 / 1,8 = 55,5555556 ≅ 56 visualizações <br>

56 visualizações publi original -> 1 compartilhamento -> 40 novas visualizações <br>

### 2) Calculando com investimento base de 1 real:

Para cada 1 real investido =  30 visualizações no publi original <br>

Ou seja, com 1 real investido só teremos 30 visualizações no publi original, <br>
porque pra ele ser compartilhado nas redes sociais pelo menos 1 vez, <br>
seria necessário no mínimo 56 visualizações. <br>

### 3) Algoritmo para a calculadora:

Agora possuímos os seguintes dados: <br>
Um post só pode ser compartilhado no máximo 4 vezes; <br>

vInicial = investimento * 30 <br>
minVisualizacao = 56 <br>
fimAlcance = vTotal = vInicial; <br>

para (inteiro i = 0; fimAlcance > minVisualizacao e i < 4; i++){ <br>
      fimAlcance = vInicial - minVisualizacao;                   <br>
      vTotal = vTotal + 40;                                      <br>
}
