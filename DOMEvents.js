// const newLocal = 'input[type="checkbox"]';
// const newLocal = 'select';
// var a = document.querySelector(newLocal)

// a.onchange = (e)=> { // oninput text box
//     console.log(e.target.value)
// }

// a.onchange = (e)=> { // check box
//     console.log(e.target.checked)
// }

// a.onchange = (e)=> { // select
//     console.log(e.target.value)
// }

document.onkeypress = function (e) {
    console.log(e)
}

/**
 * onkeydown: nhận event nhấn phím xuống
 * onkeyup: nhận event khi nhấn phím xuống rồi thả phím ra
 * onkeypress: nhận event khi nhấn phím, có thể ấn giữ
 * e.which: để hiển thị mã của phím khi nhấn
 */