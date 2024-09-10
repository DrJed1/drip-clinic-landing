const lang = document.getElementById("lang");
const langUA = document.getElementById("langUA");
const langRU = document.getElementById("langRU");

const freeConsult = document.getElementById("freeConsult");
const mainWebsite = document.getElementById("mainWebsite");
const emergencyCall = document.getElementById("emergencyCall");

const servicesTitle = document.getElementById("servicesTitle");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");

document.getElementById(
  "footer"
).innerHTML = `<p>2019-${new Date().getFullYear()} All rights reserved</p>`;

langUA.style.backgroundColor = "grey";

function Japan() {
  if (i === 0) {
    langRU.style.backgroundColor = "grey";
    langUA.style.backgroundColor = "whitesmoke";
    i++;
    freeConsult.textContent = "Безкоштовна консультація";
    mainWebsite.textContent = "Перейти на основний сайт";
    emergencyCall.textContent = "Екстренний виклик";
    servicesTitle.textContent = "Наші послуги";
    button1.innerHTML = `<img src="/img/button1ua.png"></img>`;
    button2.innerHTML = `<img src="/img/button2ua.png"></img>`;
    button3.innerHTML = `<img src="/img/button3ua.png"></img>`;
    button4.innerHTML = `<img src="/img/button4ua.png"></img>`;
  } else {
    langUA.style.backgroundColor = "grey";
    langRU.style.backgroundColor = "whitesmoke";
    i--;
    freeConsult.textContent = "Бесплатная консультация";
    mainWebsite.textContent = "Перейти на основной сайт";
    emergencyCall.textContent = "Екстренный вызов";
    servicesTitle.textContent = "Наши услуги";
    button1.innerHTML = `<img src="/img/button1.png"></img>`;
    button2.innerHTML = `<img src="/img/button2.png"></img>`;
    button3.innerHTML = `<img src="/img/button3.png"></img>`;
    button4.innerHTML = `<img src="/img/button4.png"></img>`;
  }
}
Japan();

lang.onclick = function changeWindow() {
  if (window.location.pathname === '/ua') {
    window.location.href = './'
    Japan;
  } else {
    window.location.href = 'ua'
    Japan;
  }
};
