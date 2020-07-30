//  1. Создать массив, длину и элементы которого задаёт пользователь. Затем отсортировать массив по возрастанию.
//     Затем, удалить элементы из массива с 2 по 4 (включительно!). По мере изменений, выводить содержимое
//     массива на страницу.
//  ------------------------------------------------------------------------------------------------------

let volumeUser = +prompt("Введите длинну масива:");
if (!isNaN(volumeUser)) {
    let arrUser = [];
    while (arrUser.length < volumeUser) {
        let varUser = +prompt("Введите числовой элемент массива,  осталось : " + (volumeUser-arrUser.length));
        if (!isNaN(varUser)) {
            arrUser.push(varUser);
        } else {
            alert("Введите числовое значение элемента масива");
        }
    }
    document.writeln( arrUser.join(" | ")+" <br>");
    arrUser.sort();
    document.writeln(arrUser.join(" | ") + "<br>");
    arrUser.splice(1,3);
    document.writeln(arrUser.join(" | "));

} else {
    alert("Введите числовую длинну масива");
    location.reload(true);
}