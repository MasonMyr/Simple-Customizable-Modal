# Customizable-Modal
 Модальное окно с возможноостью надстройки на чистом JS.

Репозиторий позволяет вызвать модальное окно с возможностью настроить отображаемый контент. В проекте используется чистый JS, HTML, CSS.

Минусы - требуется контейнер с ID, мало возможных сценариев из-за ограниченности настроек.

Инструкция:
1. В проекте должен быть контейнер для окна (это должен быть блок с ID);
2. Нужно добавить элемент для вызова функции с кнопкой - пример: <button type="button" onclick="showModal(options)">Show Modal Window</button> (showModal() - функция для вызова, options - настройки для окна);
3. В Html нужно добавить настройки для окна (можно в ваш JS файл). Настройка:
```
<script>
        let options = {
            containerID: 'place', // ID of the container (ID для контейнера)
            title: 'Заголовок вашего окна', // Title of the modal window (Заголовок окна)
            text: 'Текст для окна', // Text to display  in the modal window (Текст окна)
            actionOkButton: {
                text: 'Ok', // text for ok Button (Текст кнопки ОК)
                func: 'ok()' // function for ok button (Функция для кнопки Ок)
            }
        }
</script> 
```


P.S. Если не добавить containerID, то будет ошибка. Вся остальная настройка необязательна, будут пустые поля (для кнопки ОК - будет функция ок + текст ОК, если ничего не внести).

Скриншот окна:

![image](https://github.com/MasonMyr/Simple-Customizable-Modal/assets/72799228/cba87e2f-35e5-4962-869f-2ccd11c4cb49)



