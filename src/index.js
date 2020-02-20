import './styles.css';
import pixabayApiData from './apiService';
import imageList from './template/image-list.hbs';
import '../node_modules/material-design-icons/iconfont/material-icons.css';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basiclightbox.min.css';

const ulListImage = document.querySelector('#image-list');
const searchInput = document.querySelector('#input');
let reSearch;
const classBtn = document.querySelector('#classBtn');
classBtn.addEventListener('click', onClickBtn);
ulListImage.addEventListener('click', originImageShow);

function parseData(data) {
  const rezult = imageList(data);
  //в наш шаблон кидаем наши hits
  ulListImage.insertAdjacentHTML('beforeend', rezult);
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
}

let currentPage = 0;

function onClickBtn(event) {
  if (reSearch !== searchInput.value) {
    currentPage = 0;
    // console.log(`ENTRY`);
  }
  pixabayApiData(searchInput.value, ++currentPage, parseData);
  reSearch = searchInput.value;
//   console.log(`Page number ---- ${currentPage}`);
}

function originImageShow(event) {
  let clickImage = event.target;
  // console.dir(clickImage);
  if (clickImage.tagName === 'IMG') {
    const instance = basicLightbox.create(
      `<img src="${clickImage.dataset.origin}">`,
    );
    instance.show();
  }
}
// instance.close();

const btnToTop = document.querySelector('#fix-button');
btnToTop.addEventListener('click', backToTop);

function backToTop(event) {
  window.scrollTo(pageXOffset, 0);
}
