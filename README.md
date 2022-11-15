# mini-game
Требуется написать игру, в которой компьютер угадывает задуманное пользователем число.

Основа для выполнения работы находится в том же https://github.com/SkillfactoryCoding/php, что и практическая работа по предыдущему модулю:
Компьютер определяет число по алгоритму бинарного поиска, при этом сравнение числа с искомым и запуск итераций поиска выполняет пользователь.

Код кнопки «Меньше»
Код для кнопки «Меньше» пишется по аналогии с кодом кнопки «Больше», только происходит изменение не нижней, а верхней границы поискового диапазона.

Код кнопки «Заново»
При нажатии «Заново»:
- Запрашивается значение максимума и минимума.
- Сбрасывается количество вопросов.
- Пересчитывается answerNumber.
- Тексты меняются на соответствующие началу игры.

Создание разных вариантов текста
Обратите внимание на формирование значения переменной answerPhrase:
Генерируется случайное число от 0 до 1.
В зависимости от числа выбирается значение, которое выводится.
Чтобы получить случайное число от 0 до 2 можно использовать выражение:
Math.round(Math.random() * 2);
Чтобы получить случайное число от 0 до 3 можно использовать выражение:
Math.round(Math.random() * 3);
Далее по аналогии.

Описание формирования текстового представления числа на русском языке
По остатку от деления на 10, 100, 1000 и сравнению с 0 и 20 определить текстовую запись числа.
Отрицательные числа записываются так же как и положительные, только со словом «минус».
0 записывается как 0 и никак больше.
От 20 до 99 текстовая запись числа строится по принципу «Название разряда десятка + название двузначного остатка от деления на 10».
От 101 до 999 текстовая запись числа строится по принципу «Название разряда сотен + название двузначного остатка от деления на 100».
