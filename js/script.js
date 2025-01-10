"use strict"


new Swiper('.bestsellers__slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 25,
    grabCurcor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el:'.swiper-pagination',
        clickable: true,
        type: 'bullets',
    },
    
   breakpoints: {
        1024: {
           slidesPerView: 3.2,
           spaceBetween: 25,
        },
        768: {
           slidesPerView: 3,
           spaceBetween: 25,
        },
        424: {
           slidesPerView: 2,
           slidesPerColumn: 1,
        },
    },
    observer: true,
    observeParents: true,
    on: {
        init: function () {
            setTimeout(function () {
                AOS.refreshHard(); // Використовуємо AOS.refreshHard() для більш жорсткого оновлення
            }, 500); // Додаткова затримка
        },
        slideChangeTransitionEnd: function() {
            AOS.refreshHard(); // Оновлюємо після завершення зміни слайдів
        }
    }
});

const isMobile = {
    Android: function (){
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function (){
        return navigator.userAgent.match(/BlackBerry/i);
    },
    IOS: function (){
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function (){
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function (){
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function(){
        return(
            isMobile.Android()||
            isMobile.BlackBerry()||
            isMobile.IOS()||
            isMobile.Opera()||
            isMobile.Windows()
        );
    }
}

//let menuArrows = document.querySelectorAll('.faq-item__head');

addEventListener("DOMContentLoaded", function () {
 const faqItems = document.querySelectorAll(".faq__item");
 if (faqItems.length) {
  faqItems.forEach((item) => {
   const head = item.querySelector(".faq-item__head"),
    content = item.querySelector(".faq-item__content");

   head.addEventListener("click", function () {
    head.classList.toggle("active");
    content.slideToggle(500);
   });
  });
 }
});



 
Element.prototype.slideDown = function(duration = 300) {
 const target = this;
 target.style.removeProperty('display');
 let display = window.getComputedStyle(target).display;

 if (display === 'none') display = 'block';

 target.style.display = display;
 let height = target.offsetHeight;
 target.style.overflow = 'hidden';
 target.style.height = 0;
 target.style.paddingTop = 0;
 target.style.paddingBottom = 0;
 target.style.marginTop = 0;
 target.style.marginBottom = 0;
 target.offsetHeight;
 target.style.boxSizing = 'border-box';
 target.style.transitionProperty = 'height, margin, padding';
 target.style.transitionDuration = duration + 'ms';
 target.style.height = height + 'px';
 target.style.removeProperty('padding-bottom');
 target.style.removeProperty('padding-top');
 target.style.removeProperty('margin-top');
 target.style.removeProperty('margin-bottom');
 window.setTimeout(() => {
  target.style.removeProperty('height');
  target.style.removeProperty('overflow');
  target.style.removeProperty('transition-duration');
  target.style.removeProperty('transition-property');
 }, duration);
};

Element.prototype.slideUp = function(duration = 300) {
 const target = this;
 target.style.transitionProperty = 'height, margin, padding';
 target.style.transitionDuration = duration + 'ms';
 target.style.boxSizing = 'border-box';
 target.style.height = target.offsetHeight + 'px';
 target.offsetHeight;
 target.style.overflow = 'hidden';
 target.style.height = 0;
 target.style.paddingTop = 0;
 target.style.paddingBottom = 0;
 target.style.marginTop = 0;
 target.style.marginBottom = 0;
 window.setTimeout(() => {
  target.style.display = 'none';
  target.style.removeProperty('height');
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  target.style.removeProperty('overflow');
  target.style.removeProperty('transition-duration');
  target.style.removeProperty('transition-property');
 }, duration);
};
 
Element.prototype.slideToggle = function(duration = 300) {
 const target = this;
 if (window.getComputedStyle(target).display === 'none') {
  return target.slideDown(duration);
 } else {
  return target.slideUp(duration);
 }
};





    //if (menuArrows.length > 0) {
    //    for (let index = 0; index < menuArrows.length; index++) {
    //        const menuArrow = menuArrows[index];
    //        menuArrow.addEventListener("click", function(e) {
    //            menuArrow.classList.toggle('_active');
    //        });
    //    }
    //}


const menuLinks = document.querySelectorAll('.list__item[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        // Перевіряємо, чи є у посилання атрибут data-goto і чи існує елемент з таким селектором
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - document.querySelector('header').offsetHeight;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault(); // Зупиняємо стандартну поведінку посилання
        }
    }
}


const iconMenu = document.querySelector(".menu__icon");
if(iconMenu){
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle("menu-open");
    })
}
const menuItem = document.querySelectorAll(".menu__list-mob__item");
if (menuItem) {
    menuItem.forEach(item => {
        item.addEventListener("click", function(e) {
            document.body.classList.remove("menu-open"); // Закриває меню після натискання на пункт меню
        });
    });
}

new Swiper('.inst__slider', {
    loop: document.querySelectorAll('.bestsellers__slider .swiper-slide').length > 1,
        pagination: {
        el:'.inst-pagination',
        clickable: true,
        type: 'bullets',
    },
    navigation: {
        nextEl: '.inst-button-next',
        prevEl: '.inst-button-prev',
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 25,
    watchOverflow: true,
    on: {
        init: function () {
            setTimeout(function () {
                AOS.refreshHard(); // Використовуємо AOS.refreshHard() для більш жорсткого оновлення
            }, 500); // Додаткова затримка
        },
        slideChangeTransitionEnd: function() {
            AOS.refreshHard(); // Оновлюємо після завершення зміни слайдів
        }
    }
});

function toggleLoader(show) {
  const loader = document.querySelector('.spinner');
  loader.style.display = show ? 'block' : 'none';
}

// Маска для номера телефону
const phoneInput = document.getElementById('phone');
// Додаємо маску для вводу номера телефону у форматі "+38 (___) ___ - __ - __"
Inputmask("+38 (999) 999 - 99 - 99").mask(phoneInput);

// Додаємо обробник події для форми при її відправленні
document.querySelector('.form__own-cake').addEventListener('submit', function (event) {
  event.preventDefault(); // Скасовуємо стандартну поведінку форми (перезавантаження сторінки)


  toggleLoader(true); // Показати лоадер

  // Скидаємо стилі попереджень до стандартного стану
  document.querySelector('.warning_user-name').style.display = 'none';
  document.querySelector('.input_user_name').style.borderColor = "#F5EEE0";
  document.querySelector('.warning__phone-number').style.display = 'none';
  document.querySelector('.input__phone').style.borderColor = "#F5EEE0";
  document.querySelector('.warning__textarea').style.display = 'none';
  document.querySelector('.textarea').style.borderColor = "#F5EEE0";

  // Отримуємо значення полів форми, видаляючи зайві пробіли
  const userName = document.querySelector('.input_user_name').value.trim();
  const userPhone = document.querySelector('.input__phone').value.trim();
  const wishes = document.querySelector('.textarea').value.trim();

  // Флаг для перевірки, чи є помилки у формі
  let hasError = false;

  // Перевірка поля імені: якщо порожнє, показуємо попередження
  if (!userName) {
    document.querySelector('.warning_user-name').style.display = 'block';
    document.querySelector('.input_user_name').style.borderColor = "#da003e"; // Підсвічуємо червоним
    hasError = true; // Встановлюємо флаг помилки
  }

  // Перевірка поля телефону
  if (!userPhone) {
    document.querySelector('.warning__phone-number').style.display = 'block';
    document.querySelector('.input__phone').style.borderColor = "#da003e";
    hasError = true;
  }

  // Перевірка поля побажань
  if (!wishes) {
    document.querySelector('.warning__textarea').style.display = 'block';
    document.querySelector('.textarea').style.borderColor = "#da003e";
    hasError = true;
  }

  // Якщо є помилки, зупиняємо подальше виконання функції
  if (hasError) {
    toggleLoader(false); // При помилці приховати лоадер
    return;
  }

  // Підготовка до надсилання форми: замінюємо текст кнопки на спінер
  const submitButton = document.querySelector('.form__submit');
  const buttonText = submitButton.querySelector('.button-text');
  const spinner = submitButton.querySelector('.spinner');

  buttonText.style.display = 'none'; // Ховаємо текст кнопки
  spinner.style.display = 'block'; // Показуємо спінер
  submitButton.disabled = true; // Вимикаємо кнопку

  // Формуємо текст повідомлення для Telegram
  const text =
    'name: ' + userName + '\n' + // Додаємо ім'я
    'phone: ' + userPhone + '\n' + // Додаємо телефон
    'wishes: ' + wishes; // Додаємо побажання

  console.log(text); // Виводимо повідомлення в консоль для перевірки

  // Викликаємо функцію для надсилання повідомлення в Telegram
  sendMessage(text);
});

// Функція для надсилання повідомлення в Telegram
async function sendMessage(text) {
  // Формуємо URL-адресу для API Telegram, вставляємо токен бота
  const url = `https://api.telegram.org/bot${"7752431852:AAH2BpT5p3qrkDXs3HZQJ7ohNU-PvtoIQNw"}/sendMessage`;

  // Об'єкт із параметрами повідомлення
  const obj = {
    chat_id: 878821011, // ID чату, куди буде надіслано повідомлення
    text: text // Текст повідомлення
  };

  try {
    // Надсилаємо POST-запит до API
    const response = await fetch(url, {
      method: "POST", // Метод запиту
      headers: {
        "Content-Type": "application/json" // Вказуємо, що дані у форматі JSON
      },
      body: JSON.stringify(obj) // Перетворюємо об'єкт на JSON
    });

    // Перевіряємо статус відповіді
    if (response.ok) {
      let json = await response.json(); // Отримуємо відповідь у форматі JSON
      console.log("Повідомлення успішно надіслано:", json);

      // Показуємо попап успіху
      const successElement = document.querySelector('.popup-back__success');
      const formElement = document.querySelector('.form__own-cake');

      if (successElement) {
        successElement.classList.add('visible-result'); // Додаємо клас для відображення попапу
        document.body.style.overflow = "hidden"; // Блокуємо прокручування
    }

      // Обробка закриття попапу
      document.querySelectorAll('.popup__close').forEach((okBtn) => {
        okBtn.addEventListener('click', () => {
          if (successElement) {
            successElement.classList.remove('visible-result'); // Ховаємо попап
          }
          if (formElement) {
            formElement.reset(); // Очищаємо форму
            document.body.style.overflow = ""; // Відновлюємо прокручування
          }
        });
      });
    } else {
      // Якщо сервер повернув помилку, кидаємо виключення
      throw new Error(`Помилка HTTP: ${response.status}`);
    }
  } catch (error) {
    // Якщо виникла помилка, показуємо попап із помилкою
    console.error("Помилка під час надсилання повідомлення:", error);

    const failElement = document.querySelector('.popup-back__fail');
    const formElement = document.querySelector('.form__own-cake');

    if (failElement) {
      failElement.classList.add('visible-result');
      document.body.classList.style.overflow = "hidden";
    }

    // Обробка закриття попапу
    document.querySelectorAll('.popup__close').forEach((okBtn) => {
      okBtn.addEventListener('click', () => {
        if (failElement) {
          failElement.classList.remove('visible-result');
        }
        if (formElement) {
          formElement.reset();
          document.body.style.overflow = ""; // Відновлюємо прокручування
        }
      });
    });
  } finally {
    toggleLoader(false); // Приховати лоадер після завершення
  }

  // Скидаємо стан кнопки (повертаємо текст і ховаємо спінер)
  const submitButton = document.querySelector('.form__submit');
  const buttonText = submitButton.querySelector('.button-text');
  const spinner = submitButton.querySelector('.spinner');

  buttonText.style.display = 'block'; // Показуємо текст
  spinner.style.display = 'none'; // Ховаємо спінер
  submitButton.disabled = false; // Активуємо кнопку
}