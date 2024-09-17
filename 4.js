// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53
// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  

const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

function calcularPercentuais(faturamento) {
  const totalFaturamento = Object.values(faturamento).reduce((total, valor) => total + valor, 0);
  
  const percentuais = {};
  for (const estado in faturamento) {
      percentuais[estado] = ((faturamento[estado] / totalFaturamento) * 100).toFixed(2) + '%';
  }

  return {
      totalFaturamento,
      percentuais
  };
}

const resultado = calcularPercentuais(faturamentoPorEstado);
console.log(`Faturamento total: R$${resultado.totalFaturamento.toFixed(2)}`);
for (const estado in resultado.percentuais) {
  console.log(`Percentual de ${estado}: ${resultado.percentuais[estado]}`);
}
