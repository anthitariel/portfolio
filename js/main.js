const $ = {}
window.$ = $

/* Landing - Button */

let btn = document.getElementById('btn');
btn.onclick = function() {
    let text = document.querySelector('p.intro');
    text.classList.add('red')
}

/* Modal */

$.modal = function() {
    
}
