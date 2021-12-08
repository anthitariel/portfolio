let btn = document.getElementById('btn');
btn.onclick = function() {
    let text = document.querySelector('p.intro');
    text.classList.add('red')
    alert('Привет, мой дружочек Женечка!')
}
