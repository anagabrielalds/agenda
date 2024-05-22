// Função para obter o nome do mês
export const getMonthName = (month) => {
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return months[month];
};

// Função para obter os dias do mês
export const getDaysOfMonth = (month, year) => {
  const daysOfMonth = [];
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  for (let i = 1; i <= daysInMonth; i++) {
    daysOfMonth.push(i);
  }
  return daysOfMonth;
};

// Função para obter o primeiro dia da semana
export const getFirstDayOfWeek = (month, year) => {
  return new Date(year, month, 1).getDay();
};

// Função para obter o número de semanas no mês
export function getWeeksInMonth(mes, ano) {
  const primeiroDiaDoMes = new Date(ano, mes, 1);
  const ultimoDiaDoMes = new Date(ano, mes + 1, 0);

  const primeiraLinha = 7 - primeiroDiaDoMes.getDay();
  const linhasCompletas = Math.floor(
    (ultimoDiaDoMes.getDate() - primeiraLinha) / 7
  );
  const ultimaLinha =
    (ultimoDiaDoMes.getDate() - primeiraLinha) % 7 > 0 ? 1 : 0;

  return 1 + linhasCompletas + ultimaLinha; // 1 para a primeira linha
}
