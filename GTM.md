# GTM-скрипт для Renault IFRAME

### Подключение

Подключение производится без участия разработчика проекта.

1. Подключите скрипт `https://live.renault.ru/gtm/gtm.js` к странице
  на www.renault.ru (через GTM). Для этого:
  
    * Создайте новый `trigger` со следующей конфигурацией:
        - `Название` = '<ВАШ_ПРОЕКТ>_iframe_tag', подставив название вашего проекта
        - `trigger type` = 'Просмотр страницы'
        - `This trigger fires on` = 'Некоторые просмотры страниц'
        - `url` - `contains` - `<ПОСЛЕДНЯЯ ЧАСТЬ URL ВАШЕЙ СТРАНИЦЫ>`
  
    * Создайте новый `Tag` (кнопка `New Tag`), указав в поле `tag type` значение `Пользовательский HTML`,
    в качестве `HTML` следующий код:
    
    ```
    <script src="https://live.renault.ru/gtm/gtm.js" type="text/javascript"></script>
    ```
    
    В качестве Названия установите '<ВАШ_ПРОЕКТ>_iframe_trigger', подставив название вашего проекта
    
    в блоке `triggering` добавьте только что созданный `trigger`.
    
    * Опубликуйте изменения `Submit` -> `Publish`. 

    
  
2. Средствами Helios добавьте на страницу IFRAME со следующим адресом:
  
  ```
  javascript:void(p%3Dwindow.parent.document%2Cs%3Dp.createElement('script')%2Cs.src%3D'%2F%2Flive.renault.ru%2Fgtm%2Fgtm.js'%2Cp.querySelector('head').appendChild(s))
  ```
  
  Примечание: в этом пункте нет опечатки. Вам действительно необходимо
  добавить IFRAME на стороне Helios, и указать для него URL по протоколу
  `javascript:`.

Готово!
