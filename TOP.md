# Проброс GET-параметров в IFRAME

### Подключение

1. Подключите скрипт `https://live.renault.ru/gtm/?top` к целевой странице
   на www.renault.ru (через GTM).
   
   Допустимо подключить скрипт сразу ко всем страницам сайта. В этом случае
   подключить скрипт необходимо только один раз.

2. Для автоматического прокидывания параметров добавьте в начало URL фрейма
   строку `https://live.renault.ru/gtm/blank.html#navigate-to=`. Как-либо
   кодировать сам URL не нужно.
   
   Например, вместо адреса `https://benefits.renault.ru/vitrine/10` следует
   указать следующий:
   
   ```
   https://live.renault.ru/gtm/blank.html#navigate-to=https://benefits.renault.ru/vitrine/10
   ```

3. Для большего контроля над пробрасываемыми параметрами **вместо** изменения
   URL фрейма сделайте следующий вызов:
   
   `RenaultTopFrame.forwardParameters(iframe, targetURL, allowedParameters)`
   
   Например:
   
   ```
   RenaultTopFrame.forwardParameters(
     document.querySelector('.section.iframe iframe'),
     "https://benefits.renault.ru/vitrine/10",
     [ "utm_source", "utm_medium" ]
   )
   ```

   Последний аргумент перечисляет список параметров, разрешенных для пробрасывания.
   Его можно не передавать; в этом случае будут проброшены все параметры.
   
   При создании фрейма на стороне Helios рекомендуется указывать следующий
   URL: `https://live.renault.ru/gtm/blank.html`.
