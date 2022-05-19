let diviButtons = document.querySelectorAll('.et_pb_button');
let linksNav = document.querySelectorAll('.nav-link')
if (diviButtons) {
    diviButtons.forEach((button, index) => {
        let span = document.createElement('span');
        span.innerHTML = button.textContent;
        button.textContent = '';
        button.appendChild(span);
    });

}
