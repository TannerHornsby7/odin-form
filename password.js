const button = document.getElementById('button');

button.addEventListener('click', () => {
    const pw1 = document.getElementById('first_password')
    const pw2 = document.getElementById('second_password');
    if (!pw1 || !pw2) {
        alert("please enter both passwords");
    }
    else if (pw1.value !== pw2.value) {
        alert("Your passwords do not match!")
    }
    else {
        return;
    }
});
