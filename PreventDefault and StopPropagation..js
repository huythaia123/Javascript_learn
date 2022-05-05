/**
 * PreventDefault: ngăn chặn các hành vi mặc định
 *  trong trang web
 * StopPropagation: dùng để ngăn chặn hành vi nổi bọt, lan truyền
 */

// PreventDefault
var ulElement = document.querySelector('ul')

ulElement.onmousedown = (e)=> {
    e.preventDefault()
}

ulElement.onclick = (e)=> {
    console.log(e.target)
}