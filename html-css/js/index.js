//Variables
const date = new Date();
const dateWrite = document.querySelector(".date");

//Funcion Condicional para saber que dia de la semana es en texto
const todayFunction = () => {
  if (date.getDay() === 1) {
    return (today = "Mon");
  }
  if (date.getDay() === 2) {
    return (today = "Tue");
  }
  if (date.getDay() === 3) {
    return (today = "Wed");
  }
  if (date.getDay() === 4) {
    return (today = "Thu");
  }
  if (date.getDay() === 5) {
    return (today = "Fri");
  }
  if (date.getDay() === 6) {
    return (today = "Sat");
  }
  if (date.getDay() === 7) {
    return (today = "Sun");
  }
};

//Funcion condicional para saber el mes del año en texto
const monthFunction = () => {
  if (date.getMonth() + 1 === 1) {
    return (month = "Gen");
  }
  if (date.getMonth() + 1 === 2) {
    return (month = "Feb");
  }
  if (date.getMonth() + 1 === 3) {
    return (month = "Mar");
  }
  if (date.getMonth() + 1 === 4) {
    return (month = "Apr");
  }
  if (date.getMonth() + 1 === 5) {
    return (month = "May");
  }
  if (date.getMonth() + 1 === 6) {
    return (month = "Jun");
  }
  if (date.getMonth() + 1 === 7) {
    return (month = "Jul");
  }
  if (date.getMonth() + 1 === 8) {
    return (month = "Aug");
  }
  if (date.getMonth() + 1 === 9) {
    return (month = "Sep");
  }
  if (date.getMonth() + 1 === 10) {
    return (month = "Oct");
  }
  if (date.getMonth() + 1 === 11) {
    return (month = "Nov");
  }
  if (date.getMonth() + 1 === 12) {
    return (month = "Dec");
  }
};

dateWrite.innerHTML = `[${todayFunction()} ${monthFunction()} ${date.getUTCDate()} ${date.getUTCFullYear()}]`;

console.log(today);
console.log(month);
console.log(date.getUTCDate());
console.log(date.getUTCFullYear());
