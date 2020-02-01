const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  switch: document.querySelector('.js-switch-input'),
};

if (localStorage.theme === 'dark') {
  refs.switch.checked = true;
  refs.body.classList = Theme.DARK;
}

refs.switch.addEventListener('change', themeChange);

function themeChange(evt) {
  if (evt.target.checked) {
    refs.body.classList = Theme.DARK;
    localStorage.theme = 'dark';
  } else {
    refs.body.classList = Theme.LIGHT;
    localStorage.theme = 'light';
  }
}
