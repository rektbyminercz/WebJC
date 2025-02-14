//vypočet copyrightu
const startYear = 2024; // Změň podle potřeby
const currentYear = new Date().getFullYear();
const text = startYear === currentYear ? ` ©  ${currentYear} Jakub Cendelín` : `© Jakub Cendelín ${startYear}–${currentYear}`;
document.getElementById("copyright").textContent = text;