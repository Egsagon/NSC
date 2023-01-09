/*
    main.js
*/

// Settings
var toggled = true;

nodes = ['h1', '.anime-info', '.anime-video-options'];

style = `
position: fixed;
top: 50%;
left: 24px;
width: 15px;
height: 15px;
z-index: 99999;
background-color: transparent;
border: 1px solid #fff;
border-radius: 50%;
`

// Remove old buttons
document.querySelectorAll('.cns').forEach((el) => {el.remove()});

// Inject button
btn = document.createElement('button');
btn.setAttribute('style', style);
btn.classList.add('cns');
btn.addEventListener('click', () => {nodes.forEach((node) => {document.querySelector(node).style.visibility = toggled ? 'hidden' : 'unset'});toggled = !toggled});
document.body.appendChild(btn);

// Hide the navbar
document.querySelector('.navbar').style.top = '-100px';