# GTM-скрипт для Renault IFRAME

### Подключение

Подключение производится без участия разработчика проекта.

1. Подключите скрипт `https://live.renault.ru/gtm/gtm.js` к странице
  на www.renault.ru (через GTM).
  
2. Средствами Helios добавьте на страницу IFRAME со следующим адресом:
  
  ```
  javascript:void(p%3Dwindow.parent.document%2Cs%3Dp.createElement('script')%2Cs.src%3D'%2F%2Flive.renault.ru%2Fgtm%2Fgtm.js'%2Cp.querySelector('head').appendChild(s))
  ```
  
  Примечание: в этом пункте нет опечатки. Вам действительно необходимо
  добавить IFRAME на стороне Helios, и указать для него URL по протоколу
  `javascript:`.

Готово!
