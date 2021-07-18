const input = document.querySelector('.input');

input.addEventListener('click', () => {
    let email = document.querySelector('.input-email').value;
    let data = { email }
    let convertData = JSON.stringify(data);

    localStorage.setItem('r&mEmail', convertData);
});