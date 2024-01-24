let text = document.getElementById('homepage-text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let sec = document.querySelector('.sec');
let secHeader = document.querySelector('.sec h2');
let secParagraphs = document.querySelectorAll('.sec p');
let socialMediaCards = document.querySelectorAll('.additional-card');
let infoCards = document.querySelectorAll('.info-card');

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      sec.classList.add('in-view');
    } else {
      sec.classList.remove('in-view');
    }
  });
}, { threshold: 0.5 });

observer.observe(sec);

let cardObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('card-popup');
      } else {
        entry.target.classList.remove('card-popup');
      }
    });
  }, { threshold: 0.5 }); 
  
socialMediaCards.forEach(card => {
    cardObserver.observe(card);
});

let infoCardObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        } else {
            entry.target.classList.remove('in-view');
        }
    });
}, { threshold: 0.5 });

infoCards.forEach(card => {
    infoCardObserver.observe(card);
});

let textContent = "Desa Gunungsari";
let index = 0;
let speed = 100;

function typeEffect() {
    if (index < textContent.length) {
        text.innerHTML += textContent.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    }
}

window.addEventListener('load', () => {
    typeEffect();
});

window.addEventListener('scroll', () => {
  let value = window.scrollY;

  if (value < 500) {
    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
  }
});

function redirectToWhatsApp() {
    window.location.href = "https://api.whatsapp.com/send?phone=6282136686986&text=Assalamu'alaikum,%20saya%20mau%20tanya%20tentang%20Desa%20Gunungsari";
}

function toggleMobileMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.classList.toggle('show-mobile-menu');
}

document.querySelectorAll('.mobile-menu a').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelector('.mobile-menu').classList.remove('show-mobile-menu');
  });
});
