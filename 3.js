// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

const faturamentoDiario = [
  {"dia": 1, "valor": 22174.16},
  {"dia": 2, "valor": 24537.66},
  {"dia": 3, "valor": 0},
  {"dia": 4, "valor": 0},
  {"dia": 5, "valor": 26139.61},
  {"dia": 6, "valor": 0},
  {"dia": 7, "valor": 26742.66},
  {"dia": 8, "valor": 0},
  {"dia": 9, "valor": 0},
  {"dia": 10, "valor": 42889.22},
  {"dia": 11, "valor": 46251.17},
  {"dia": 12, "valor": 11191.47},
  {"dia": 13, "valor": 0},
  {"dia": 14, "valor": 0},
  {"dia": 15, "valor": 3847.48},
  {"dia": 16, "valor": 373.78},
  {"dia": 17, "valor": 2659.75},
  {"dia": 18, "valor": 48924.24},
  {"dia": 19, "valor": 18419.26},
  {"dia": 20, "valor": 0},
  {"dia": 21, "valor": 35240.18},
  {"dia": 22, "valor": 43829.16},
  {"dia": 23, "valor": 18235.68},
  {"dia": 24, "valor": 4355.06},
  {"dia": 25, "valor": 13327.10},
  {"dia": 26, "valor": 0},
  {"dia": 27, "valor": 0},
  {"dia": 28, "valor": 25681.83},
  {"dia": 29, "valor": 1718.12},
  {"dia": 30, "valor": 0}
];

function calcularFaturamento(faturamento) {
  const diasValidos = faturamento.filter(dia => dia.valor > 0);

  const menor = Math.min(...diasValidos.map(dia => dia.valor));
  const maior = Math.max(...diasValidos.map(dia => dia.valor));
  const soma = diasValidos.reduce((total, dia) => total + dia.valor, 0);
  const media = soma / diasValidos.length;

  const menorDia = diasValidos.find(dia => dia.valor === menor).dia;
  const maiorDia = diasValidos.find(dia => dia.valor === maior).dia;

  const diasAcimaDaMedia = diasValidos.filter(dia => dia.valor > media).length;

  return {
      menorValor: menor,
      maiorValor: maior,
      menorDia,
      maiorDia,
      diasAcimaDaMedia
  };
}

const resultado = calcularFaturamento(faturamentoDiario);
console.log(`Menor valor de faturamento: ${resultado.menorValor.toFixed(2)} no dia ${resultado.menorDia}`);
console.log(`Maior valor de faturamento: ${resultado.maiorValor.toFixed(2)} no dia ${resultado.maiorDia}`);
console.log(`Número de dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);
