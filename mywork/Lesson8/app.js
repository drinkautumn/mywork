
// let a = Math.floor(Math.random() * 6) + 5;
// let n = prompt("nhập số n");
// if (n == a) {
//     console.log("true");
// } else {
//     console.log("false");
// }




//Tính tích của các phần tử trong mảng đó
// let numbers = [1, 7, 8, 6, 10, 9];
// let x = 1;
// for(let i = 0; i < numbers.length; i++) {
//     x = x * numbers[i]
// }
// console.log(x);


//Tìm số nhỏ nhất mà chia hết cho 2 trong mảng.
// let numbers = [3, 6, 7, 8, 9, 10];
// for(let i = 1; i < numbers.length; i++) {
//    if (numbers[i] % 2 == 0){
//       console.log(numbers[i])
//       break;
//    }
// }


//Tìm số lớn nhất mà chia hết cho 3 trong mảng
// let numbers = [10, 9, 8, 7, 6, 3];
// for(let i = 1; i < numbers.length; i++) {
//    if (numbers[i] % 3 == 0){
//       console.log(numbers[i])
//       break;
//    }
// }


//Tính giá trị trung bình của mảng.
// let numbers = [1, 7, 8, 6, 10, 9];
// let sum = 0;
// for(let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i]
// }
// let average = sum / numbers.length;
// console.log(average);


//Lọc ra các số nguyên tố trong mảng.
// let numbers = [3, 7, 8, 13, 12, 9];
// for (let i = 0; i < numbers.length; i++) {
//    let text = true;
//    for (let x = 2; x < numbers[i]; x++) {
//       if (numbers[i] % x == 0) {
//          text = false;
//          break;
//       }
//    }
//    if (text == true) {
//       console.log(numbers[i] + ' là só nguyên tố')
//    }
//    else {
//       console.log(numbers[i] + ' không là só nguyên tố');
//    }
// }


//Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.
// let numbers = [10, 9, 8, 7, 6, 3];
// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < 10) {
//         console.log(numbers[i])
//     }else {
//         console.log("Không có số nào trong mảng nhỏ hơn");
//     }
// }


//Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.
// let numbers = [10, 21, 8, 7, 6, 3];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 20) {
//         console.log(numbers[i] + " lớn hơn 20");
//     } else {
//     console.log(numbers[i] + " không lớn hơn 20");
// }
// }


// Nhập vào số n cho đến khi n là 1 số trong mảng s.//
// let n = prompt("nhập số n")
// let numbers = [10, 9, 8, 7, 6, 3];
// for (i = 0; i < numbers.length; i++) {
//     if (numbers[i] == n) {
//         console.log(n + " là số trong mảng");
//         break;
// } else (i = numbers.length)
//     console.log(n + " không phải là số trong mảng");
// }





//Tìm 1 chuỗi đầu tiên có độ dài nhỏ nhất trong mảng.
// let names = [
//     "Ngoc Trinh",
//     "Chi Pu",
//     "Dam Vinh Hung",
//     "Ngoc Trinh @@",
// ];
// let min = names[0];
// for(let i = 0; i < names.length; i++) {
//     if (min > names[i]) min = names[i];
// }
// console.log(min);


//Tìm những chuỗi trong mảng có chứa giá trị text.
// let names = [
//     "Ngoc Trinh",
//     "Chi Pu",
//     "Dam Vinh Hung",
//     "Ngoc Trinh",
// ];
// let text = prompt('Nhập vào chuỗi text: ');
// for (i = 0; i < names.length; i++) {
//     if (names[i] == text) {
//         console.log("Trong mảng có chứa giá trị text là: " + text);
//         break;
//     }
// }


//Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s.
// let names = [
//     "asdzxc",
//     "qweasd",
//     "fghbnm",
// ];
// let newNames = names.map(str => str.substr(0, 3));
// console.log(newNames);


//Tạo ra 1 chuỗi là sự kết hợp của các phần tử trong s. Mỗi phần tử cách nhau bởi dấu ‘-’.
// let names = [
//     "Ngoc Trinh",
//     "Chi Pu",
//     "Dam Vinh Hung",
//     "Ngoc Trinh",
// ];
// let text = names.join("-");
// console.log(text);


