
import PNotify from '../node_modules/pnotify/dist/es/PNotify';
import PNotifyButtons from '../node_modules/pnotify/dist/es/PNotifyButtons.js';
import '../node_modules/pnotify/dist/PNotifyBrightTheme.css';

const KEY = '15302072-a81be31270c5e4995077a81d4';

export default function serviseApi(searchValue, pageNumber, callBack) {
  const baseUrl = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchValue}&page=${pageNumber}&per_page=12&key=${KEY}`;
  fetch(baseUrl)
    .then(response => {
      return response.json();
    }) //делаем запрос фетчем по нашему URL - возвращает промис =>в then получаем ответ и
    // преобразовываем с помощью .json в обьект => в следующем then нам приходят уже данные
    // и мы их прокидываем в callback => catch ловит ошибку если она произошла в момент получения данных!
    .then(data => {
      callBack(data);
    //   console.log(data)
      PNotify.success({
        title: 'NEW REUEST',
        text: 'Create new HTTP request',
      });
    })
    .catch(error => {
      console.error(error);
    });
}
