function photo() {
  const timerIdPhoto = setTimeout(() => {
    document.getElementById('photo').style.backgroundColor = 'rgb(188,188,188';
    document.getElementById('photo').innerHTML += '<img src="/Photo.png" alt="Фото">';
  }, 3000);
  setTimeout(timerIdPhoto);
}

const chatElement = document.getElementById('chat');

function chat(arr) {
  let i = 0;
  const timerId = setInterval(() => {
    //
    if (i < arr.length) {
      //
      chatElement.innerHTML += `<div class='message'>${arr[i]}</div>`;
      const messagesList = document.getElementsByClassName('message');
      messagesList[i].animate([
        { transform: 'scale(0,0)' }, { transform: 'scale(1,1)' },
      ], { duration: 400, easing: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)' });
      //
      chatElement.scrollTop = chatElement.scrollHeight;
      i += 1;
    } else {
      setInterval(timerId);
    }
  }, 3000);
  //
  i = 0;
}

function removeMessages() {
  chatElement.innerHTML = '';
}

const startArray = ['Привет, меня зовут Вадим',
  'Это мой сайт-визитка',
  'Здесь я расскажу о себе',
  'Что тебя интересует?',
  '<button onclick="removeMessages(); chat(aboutMeArray);">Немного обо мне</button>'
  + '<br>'
  + '<button onclick="removeMessages(); chat(whyITArray)">Почему я выбрал IT</button>'
  + '<br>'
  + '<button onclick="removeMessages(); chat(contactsArray)">Мои контакты</button>',
];

const aboutMeArray = ['Родился в Октябрьске, Башкортостан, в 3 года семья переехала на Ямал, в 13 лет мы перехали в Красноярск',
  'С октября 2022 года я в Казахстане',
  'Мне 27 лет, 6 лет проработал в нефтяной компании вахтовым методом',
  'Сейчас в процессе увольнения',
  'Увлекаюсь около-IT темами, дизайном, люблю путешествовать',
  'Что еще рассказать?',
  '<button onclick="removeMessages(); chat(whyITArray)">Почему я выбрал IT</button>'
  + '<br>'
  + '<button onclick="removeMessages(); chat(contactsArray)">Мои контакты</button>',
];

const whyITArray = ['Я с детства интересуюсь всем, что связано с компьютерными технологиями',
  'Но в нашей семье уже несколько поколений нефтяников, и после школы я решил продолжить эту традицию',
  'Спустя время я понял, что для меня эта сфера неинтересна',
  'А еще, обычная работа чаще всего привязывает тебя к определенному месту',
  'Что в нынешних условиях не самое лучшее свойство',
  'Я хотел делать то, что мне интересно, жить там, где я хочу, и как минимум не уменьшить свой доход',
  'Поэтому я решил перейти в IT',
  'Что еще рассказать?',
  '<button onclick="removeMessages(); chat(aboutMeArray)">Немного обо мне</button>'
  + '<br>'
  + '<button onclick="removeMessages(); chat(contactsArray)">Мои контакты</button>',
];

const contactsArray = [
  '<a href="https://tlgg.ru/@f_ckin_vadim">Telegram</a>'
  + '<br>'
  + '<a href="https://www.instagram.com/f_ckin_vadim/">Instagram</a>'
  + '<br>'
  + '<a href="mailto:qester94@gmail.com">E-mail</a>',
  'Что еще рассказать?',
  '<button onclick="removeMessages(); chat(aboutMeArray)">Немного обо мне</button>'
  + '<br>'
  + '<button onclick="removeMessages(); chat(whyITArray)">Почему я выбрал IT</button>',
];
