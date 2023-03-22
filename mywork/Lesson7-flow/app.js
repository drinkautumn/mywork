// for( let x = 1; x <= 500; x ++) {
//     console.log(x);
// }


// for (let x = 1; x <= 300; x ++) {
//     if (x % 2 == 0 && x % 3 == 0) {
//         console.log(x);
//     }
// }


// let sum = 0
// for(let count = -30; count <= 50; count+=2) {
//     sum += count;
// }
// console.log(sum);


// let num = prompt("nhập số n");
// {
//     let x = 1;{
//         for(let count = 1; count <= num; count++) {
//             x *= count;
//     }
//     console.log(x);
//     } 
// }


// let a = Number(prompt('nhap so a: '));
// let b = Number(prompt('nhap so b: '));
// let x = Number(prompt('nhap so x: '));
// if (a >= b) {
//     console.error('a bé hơn b!')
// }
// else {
//     while (a < b) {
//         if (a % x == 0) {
//             console.log(a);
//             break;
//         } else {
//             a++;
//         }
//     }
// }


// let n = Number(prompt('nhap so n: '));
// {
//     let sum = 0;

//     if (n < 2) {
//         console.error('vui lòng nhập lại!')
//     }
//     else {
//     for(let i = 1; i <= n ; i++) {
//         sum = sum + 1 / (i * (i + 1));
//      }
//      console.log(sum);
// }
// }


// let n = Number(prompt('nhap so n: '));
// {
//     console.log("Ước của", n ,"là: ");
//     {
//         if (n < 0) {
//             console.error('vui lòng nhập lại!')
//         }
//         else {
//         for(let i = 1; i <= n ; i++) {
//          if (n % i == 0) {
//             console.log(i);
//         } 
//          }
//          }
// }
// }


// let n = prompt('Nhap so n');{
// let text = true;
//     if (n < 2){
//         text = false;
//     }
//     else{
//         for (let i = 2; i < n; i++)
//         {
//             if (n % i == 0){
//                 text = false;
//                 break;
//             }
//         }
//     }
//     if (text == true){
//         console.log(n + " là số nguyên tố ");
//     }
//     else{
//         console.log(n + " không phải là số nguyên tố ");
//     }
// }


// let s = prompt("Chuỗi s");
// let l = prompt("Số l");

// while (s.length < l) {
//     s = '0' + s
// }
// console.log(s);


// let m = prompt("Nhập vào số m:");
// let n = prompt("Nhập vào số n:");
// while (m !== n) {
//   if (m > n) {
//     m -= n;
//   } else {
//     n -= m;
//   }
// }
// console.log('Ước chung lớn nhất là ' + m);


// let m = prompt("Nhập số m:");
// let n = prompt("Nhập số n:");
// let i = 1;
// while (true) {
//   if (i % m == 0 && i % n == 0) {
//     break;
//   } else {
//     i++;
//   }
// }
// console.log('Bội chung nhỏ nhất là: ' + i);


// let n = Number(prompt('nhap so n: '));
// if (n > 11 && n < 2) {
//     console.error('vui lòng nhập lại!')
// }
// else {
//     console.log('bảng cửu chương của số ' + n + ' là: ' );
//     for (let i = 2; i <= 10; i++) {
//         console.log(n * i);
//     }
// }


// let i = prompt('nhập số i')
// let spr = "";
// if (i < 2) {
//     console.error('vui lòng nhập lại!')
// }
// else {
//     for (n = 1; n <= i; n++) {
//         for (m = 1; m <= i; m++) {
//             spr += "* "
//         }
//         spr += "\n"
//     }
// }
// console.log(spr);


// let i = prompt('chiều cao i')
// let j = prompt('chiều rộng j')
// let spr = "";
// if (i < 2 && j < 2) {
//     console.error('vui lòng nhập lại!')
// }
// else {
//     for (n = 1; n <= i; n++) {
//         for (m = 1; m <= j; m++) {
//             spr += "* "
//         }
//         spr += "\n"
//     }
// }
// console.log(spr);


// let i = prompt('nhập số i')
// let spr = "";
// if (i < 3) {
//     console.error('vui lòng nhập lại!')
// }
// else {
//     for (n = 1; n <= i; n++) {
//         for (m = 1; m <= n; m++) {
//             spr += "* "
//         }
//         spr += "\n"
//     }
// }
// console.log(spr);


// let w = prompt('chiều cao w')
// let h = prompt('cân nặng h')
// let BMI = h / (w * w)
// if (BMI < 18.5) {
//     ketQua = "Nhẹ cân";
// } else if (18.5 <= BMI < 23) {
//     ketQua = "Bình Thường";
// } else if (23 <= BMI < 25) {
//     ketQua = "Thừa cân";
// } else if (BMI >= 25) {
//     ketQua = "Béo phì";
// } else {
//     ketQua = "Béo phì";
// }
// console.log(ketQua);


// let a = prompt('Nhập số dự đoán a: ')
// let x = Math.round(20 * Math.random())
// let i = 0;
// if (a == x) {
//     console.log('Đoán đúng');
// }
// else if (a !== x) {
//     console.log('Đoán sai');
// } else if (a > x) {
//     console.log('Nhập lại số dự đoán');
// } else if (a < x) {
//     console.log('Nhập lại số dự đoán');
// }