document.getElementById('btn-submit').addEventListener('click', function () {
    const EmailField = document.getElementById('user-email');
    const Email = EmailField.value;
    const PasswordField = document.getElementById('user-password')
        ;
    const Password = PasswordField.value;
    console.log(Email, Password);
    if (Email === 'abhishek@gmail.com' && Password === '2580') {
        window.location.href = '/bank.html';
    }
    else {
        alert('password bhul/email bhul')
    }



})