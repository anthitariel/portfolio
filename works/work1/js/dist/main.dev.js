"use strict";

var btn = document.getElementById('btn');

btn.onclick = function () {
  var text = document.querySelector('p.intro');
  text.classList.add('red');
};