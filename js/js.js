// 1. Объединить массивы.
// let arr1 = [1, 2, 3];
// let arr2= [4, 5, 6];
// let arrConcat = arr1.concat(arr2);
// alert(arrConcat);

// 2. Сделать 3, 2, 1.
// let arr = [1, 2, 3];
// arr.reverse();
// alert(arr);
// console.log(arr, typeof arr);

// 3. Добавить в конец.
// let arr = [1, 2, 3];
// arr.push(4, 5, 6);
// alert(arr);

// 4. Добавить в начало.
// let arr = [1, 2, 3];
// arr.unshift(4, 5, 6);
// alert(arr);

// 5. Вывести первый элемент.
// let arr = ['js', 'css', 'jq'];
// alert(arr.slice(0, 1));

// 6. Вывести последний элемент.
// let arr = ['js', 'css', 'jq'];
// alert(arr.slice(-1);

// 7. Записать в новый массив 1, 2, 3.
// let arr = [1, 2, 3, 4, 5];
// let arr1 = arr.slice(0, 3);
// alert(arr1);

// 8. Записать в новый массив 4, 5.
// let arr = [1, 2, 3, 4, 5];
// let arr1 = arr.slice(-2);
// alert(arr1);

// 9. Преобразовать в массив 1, 4, 5.
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1,2);
// alert(arr);

// 10. Записать в новый массив 2, 3, 4.
// let arr = [1, 2, 3, 4, 5];
// let arr1 = arr.slice(1, 4);
// alert(arr1);

// 11. Сделать из него массив [1, 2, 3, ‘a’, ‘b’, ‘c’, 4, 5].
// let arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0 , 'a', 'b', 'c');
// alert(arr);

// 12. Сделать из него массив [1, ‘a’, ‘b’, 2, 3, 4, ‘c’, 5, ‘e’].
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, 'a', 'b');
// arr.splice(6, 0, 'c');
// arr.splice(8, 0 , 'e');
// alert(arr);

// 13. Отсортировать.
// let arr = [3, 4, 1, 2, 7];
// function compare (a, b) {
//     if (a > b) return 1;
//     if (a === b) return 0;
//     if (a < b) return -1;
// }
// arr.sort(compare);
// alert(arr);

// 14. Найти сумму чисел.
// let arr = [5, 6, 7, 8, 9];
// let result = arr.reduce((sum, current) => sum + current, 0);
// alert(result);

// 15. Сделать массив квадратов чисел.
// let arr = [5, 6, 7, 8, 9];
// let result = arr.map(item => item**2)
// alert(result);

// 16. Оставить отрицательные.
// let arr = [1, -3, 5, 6, -7, 8, 9, -11];
// let result = arr.filter(item => item < 0);
// alert(result);

// 17. Оставить четные.
// let arr = [1, -3, 5, 6, -7, 8, 9, -11];
// let result = arr.filter(item => item % 2 === 0);
// alert(result);

// 18. Оставить строки короче 5 символов.
// let arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
// let result = arr.filter(item => item.length < 5);
// alert(result);

// 19. Оставить подмассивы.
// let arr = [1, 2, [3, 4], 5, [6, 7]];
// let result = arr.filter(item => Array.isArray(item));
// // alert(result);
// console.log(result);

// 20. Количество отрицательных чисел.
// let arr = [5, -3, 6, -5, 0, -7, 8, 9];
// let result = arr.filter(item => item < 0);
// console.log(result.length);