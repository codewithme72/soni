const febHolidays = [
  "Dear Baby, happy birthday to the love of my life!",
  "Please celebrate this special day, feel the love and joy!",
  "Dost bhi tum, pyaar bhi tum 😊 Happy Birthday!",
  "Ek bhi tum aur hazar bhi tum 🤩 wishing you endless happiness!",
  "Dukh me tum aur khushi me tum 🤨 you're my everything!",
  "Jindagi ke safar me kaafi ho tum ❤ Happy Birthday!",
  "Maine shiddat se chaha hai tumhe, Happy Birthday my love! ❤️",
  "You're my everything ✔ wishing you a perfect birthday!",
  "You are my soulmate ✨💕 Happy Birthday to my forever person!",
  "And of course... wait baby.....",
  "My future wife 🤭 Happy Birthday to my partner in everything!",
  "I will always be there for you, especially on your special day!",
  "No matter how far we are 🥰 I’m celebrating your day with you!",
  "I promise I will never multi-thread on you, Happy Birthday!",
  "You're the prettiest, cutest, funniest,",
  "Sweetest girl alive. 🤞✍ Wishing you the happiest birthday!",
  "In one word, you're just perfect. 😍 Happy Birthday my love!",
  "I'm the happiest man alive 🥰 thanks to you, my birthday girl!",
  "I'm so grateful I met you ❤️ celebrating you today and always!",
  "I'll always do my best to keep you happy 🥺 especially today!",
  "Main humesa tumhare sath hun 🤞✔ Happy Birthday my soulmate!",
  "Kabhi khud ko akela mat samjhna 💓 I'm here for you always!",
  "You are the most special person in my life 🥰 Happy Birthday!",
  "I don't want to lose you 😒 this birthday is all about you!",
  "And trust me I don't want anyone else 🥰 you're my only one!",
  "There's no one better than you ❤️ Happy Birthday my queen!",
  "You're the best baby!! 💖 Have the happiest birthday ever!",
  "Or should I say, I miss you when",
  "something really good happens 🤨 like celebrating your birthday!",
  "Acche lagte hai wo pal jo tumhare",
  "sath bitaye hain virtually or offline 💓 happy birthday love!",
  "There are some hardships 😢 but birthdays remind us of joy!",
  "We overcame most of them 🥰 and I’m so thankful for you!",
  "It made me realize how important you are in my life ❤️",
  "This complete love cycle is just for you 😘 Happy Birthday!",
  "My  love, my private variable Happy Birthday!",
  "Please take care of yourself and your happiness ❤",
  "I'm binary in love; you're the one and only '1' in my life.",
  "Thanks to God for helping us, ki hum logo ko milaya 🙏",
  "You're the love of my life,",
  "I love you so much  Happy Birthday to the love of my life!"
];

const ulEl = document.querySelector("ul");
const d = new Date();
let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
let activeIndex = daynumber;
const rotate = -360 / febHolidays.length;
init();
function init() {
  febHolidays.forEach((holiday, idx) => {
    const liEl = document.createElement("li");
    liEl.style.setProperty("--day_idx", idx);
    liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
      }</time><span>${holiday}</span>`;
    ulEl.append(liEl);
  });
  ulEl.style.setProperty("--rotateDegrees", rotate);
  adjustDay(0);
}
function adjustDay(nr) {
  daynumber += nr;
  ulEl.style.setProperty("--currentDay", daynumber);
  const activeEl = document.querySelector("li.active");
  if (activeEl) activeEl.classList.remove("active");
  activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
  const newActiveEl = document.querySelector(
    `li:nth-child(${activeIndex + 1})`
  );
  document.body.style.backgroundColor = window.getComputedStyle(
    newActiveEl
  ).backgroundColor;
  newActiveEl.classList.add("active");
}
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      adjustDay(-1);
      break;
    case "ArrowDown":
      adjustDay(1);
      break;
    default:
      return;
  }
});
