//slide-21

// const $image = document.getElementById('my-image');
// const $urlInput = document.getElementById('url-input');
// const $widthInput = document.getElementById('width-input');
// const $heightInput = document.getElementById('height-input');
// const $borderInput = document.getElementById('border-input');
// const $altInput = document.getElementById('alt-input');

// $urlInput.onchange = function() {
//     $image.src = $urlInput.value;
// };

// $widthInput.oninput = function() {
//     $image.width = $widthInput.value;
// }

// $heightInput.oninput = function() {
//     $image.height = $heightInput.value;
// }

// $borderInput.oninput = function() {
//     $image.style.borderRadius = `${$borderInput.value}px`;
// }

// $altInput.oninput = function() {
//     $image.alt = $altInput.value;
// }


//slide-23

// const $myName = document.getElementById('name');
// const $myAge = document.getElementById('age');
// const $myAddress = document.getElementById('address');
// const $myEmail = document.getElementById('mail');
// const $myPasswork = document.getElementById('passwork');
// const $myId = document.getElementById('my-btn');

// $myId.onclick = function () {
//     let a = $myName.value;
//     let b = $myAge.value;
//     let c = $myAddress.value;
//     let d = $myEmail.value;
//     let e = $myPasswork.value;
//     if (!a || !b || !c || !d || !e) {
//         alert("Vui lòng nhập đầy đủ thông tin");
//     } else if (!isEmailVaild(d)) {
//         alert("Email không hợp lệ");
//     } else {
//         alert("Đăng ký thành công");
//     }
// };


// function isEmailVaild (d) {
//     return String(d)
//         .toLowerCase()
//         .match(
//             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//         );
// };
