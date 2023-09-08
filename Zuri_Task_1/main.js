const date = new Date();

const today = date.toDateString();

const time = date.toLocaleTimeString();

document.getElementById('time').innerHTML = today + '' + time