export function formatDate(date) {
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();
  return `${day} de ${month} de ${year}`;
}
