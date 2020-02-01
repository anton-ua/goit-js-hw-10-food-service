import menuList from '../data/menu.json';
import menuTemplate from '../templates/menuTemplate.hbs';

const refs = {
  menu: document.querySelector('.js-menu'),
};

const menuHtml = menuTemplate(menuList);

refs.menu.insertAdjacentHTML('beforeend', menuHtml);
