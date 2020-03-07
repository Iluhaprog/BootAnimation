# BOOT ANIMATION

#### Данный плагин предназаначен для создания анимации при загрузке сайта.

##### Чтобы использовать данный плагин, нужно:
1. В *html*-документе подключить плагин
    >
    `<div class="row" id="loader"></div>`
    >
    ` <script src="/bootAnimation/script.js"></script>`
    >
    `<script src="data.js"></script>`
    >
    `<script>`
    >
    &nbsp;&nbsp;&nbsp;&nbsp; `init(data, "loader");`
    >
    `</script>`

2.  Создать файл __data.js__ в корневой директории;
3.  Перети в __data.js__ и написать
    > 
    `const data = {`
    >
    &nbsp;&nbsp;&nbsp;&nbsp;`column: {`
    >
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`id: "cl1",`
    >  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`speed: 1000,`
    >
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`changeNumber: 50,`
    >
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`contentType: ICON,`
    >
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`arr: [`
    >
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"fas fa-times",`
    >
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"fas fa-heart",`
    >
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"fas fa-skull",`
    >
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"fas fa-angry",`
    >
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"fas fa-robot"`
    >
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`],`
    >
`},`

--------
### Параметры column
#####
#

| Cвойство | Назначение | Oбязательно | Значение | Пример |
|----------|------------|-------------|----------|-------|
| `id`       | Идентификатор колонки в которой происходит анимация | Да | Строка | `id : "cl1",`
| `speed`    | Скорость анимации | Да | Целое число | `speed : 1000,` |
| `changeNumber` | Количество итераций анимации | Да | Целое число | `changeNumber : 10,` |
| `contentType` | Тип контента в колонке (**ICON**, **IMG**, **TEXT**) | Да | `ICON`, `TEXT`, `IMG` | `contentType: ICON` 
| `arr` | Контент внутри элемента колонки | Да | Строка | `arr: ["fas fa-skull"]`
| `optional` | Необязательные параметры | Нет | Объект | `optional : {...}` |
| `fontFamily` | Шрифт | Нет | Строка | `optional : { fontFamily: "Arial" }` |
| `fontSize` | Размер шрифта | Нет | Строка | `optional : { fontSize: "20px" }` |
| `color` | Цвет иконок или текста | Нет | Строка | `optional : { color: "#000" }` |
| `width` | Ширина колонки | Нет | Строка | `optional : { width: "100px" }`|

### Полный пример :
    > `const data = {`
    >
    &nbsp;&nbsp;`column1: {`
    >
    &nbsp;&nbsp;&nbsp;&nbsp;`id: "cl1",`
    >
    &nbsp;&nbsp;&nbsp;&nbsp;`speed: 1000,`
    >
    &nbsp;&nbsp;&nbsp;&nbsp;` changeNumber: 50,`
    >
    &nbsp;&nbsp;&nbsp;&nbsp;` contentType: ICON,`
    >
    &nbsp;&nbsp;&nbsp;&nbsp;` optional : {`
    >
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;` color: "#252525",
    >`
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`width: "65px",`
    >
    &nbsp;&nbsp;&nbsp;&nbsp;`},`
    >
    &nbsp;&nbsp;&nbsp;&nbsp;` arr: [`
    >
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"fas fa-times",`
    >
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`"fas fa-heart",`
    >
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ` "fas fa-skull",`
    >
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ` "fas fa-angry",`
    >
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ` "fas fa-robot"`
    >
    &nbsp;&nbsp;&nbsp;&nbsp;`],`
    >
    &nbsp;&nbsp;`},`
    >
`};`







