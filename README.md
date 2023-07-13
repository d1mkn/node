# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list" <br>
https://i.imgur.com/e7wwTz1.png

# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6 <br>
https://i.imgur.com/mzeNU5w.png

# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22 <br>
https://i.imgur.com/OkDd2Wp.png

# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH <br>
https://i.imgur.com/IY5Z8Cu.png
