# Renault IFRAME script

### Подключение

1. Добавьте следующий скрипт в раздел `<head>` вашей страницы:
  
  ```html
  <script src="https://live.renault.ru/gtm/iframe.js"></script>
  ```

2. Добавьте следующий вызов после загрузки страницы:
  
  ```javascript
  RenaultFrame.resize();
  ```
  
  Например:
  
  ```javascript
   window.addEventListener('DOMContentLoaded', function () {
       RenaultFrame.resize();
   }, false);
  ```

3. Вызывайте `RenaultFrame.resize()` каждый раз, когда высота вашей страницы
  меняется.

### Использование

##### Изменение размера фрейма

- `RenaultFrame.resize()` автоматически подберет и установит нужный размер
  фрейма. Этот вызов нужно делать при каждом изменении размера страницы.
  
- `RenaultFrame.resize(height)` установит заданную высоту фрейма. Высоту
  необходимо передать в пикселях.
  
  Например: `RenaultFrame.resize(1160);`

##### Скролл на странице

- `RenaultFrame.scroll()` проскроллит до самого верха страницы.

- `RenaultFrame.scroll(position)` проскроллит до указанной позиции. Позицию
  необходимо передавать в пикселях от верхней границы фрейма (то есть,
  вашей страницы).
  
  Например: `RenaultFrame.scroll(650);`

- `RenaultFrame.scroll(element)` проскроллит до указанного элемента
  на странице.
  
  Например: `RenaultFrame.scroll( document.querySelector('h1') );`

Во всех вариантах скролла можно передать `true` последним аргументом, чтобы
совершить гладкий (анимированный) скролл.

Например: `RenaultFrame.scroll(document.querySelector('h1'), true);`
