document.getElementById('scroll-previous-1').addEventListener('click', function() {
    document.getElementById('carousel-container-1').scrollBy({
        left: -250, // Adjust the amount you want to scroll by
        behavior: 'smooth'
    });
});

document.getElementById('scroll-next-1').addEventListener('click', function() {
    document.getElementById('carousel-container-1').scrollBy({
        left: 250, // Adjust the amount you want to scroll by
        behavior: 'smooth'
    });
});

document.getElementById('scroll-previous-2').addEventListener('click', function() {
    document.getElementById('carousel-container-2').scrollBy({
        left: -250, // Adjust the amount you want to scroll by
        behavior: 'smooth'
    });
});

document.getElementById('scroll-next-2').addEventListener('click', function() {
    document.getElementById('carousel-container-2').scrollBy({
        left: 250, // Adjust the amount you want to scroll by
        behavior: 'smooth'
    });
});

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password-input");
    var passwordVisibility = document.getElementById("visibility-icon");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordVisibility.src = "./assets/icons/visibility-on.png";
    } else {
      passwordInput.type = "password";
      passwordVisibility.src = "./assets/icons/visibility-off.png";
    }
}

function validateForm() {
    var emailInput = document.getElementById('email-input').value;
    var usernameInput = document.getElementById('username-input').value;
    var passwordInput = document.getElementById('password-input').value;
    var genderInput = document.getElementById('gender-input').value;
    var ageInput = document.getElementById('age-input').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(emailInput)) {
        document.getElementById('email-error').textContent = 'Email address must contain \'@\' and end with \'.com\'';
        return false;
    } else {
        document.getElementById('email-error').textContent = '';
    }

    if (usernameInput.length < 6) {
        document.getElementById('username-error').textContent = 'Username must be at least 6 characters long'
        return false;
    } else {
        document.getElementById('username-error').textContent = '';
    }

    if (passwordInput.length < 6) {
        document.getElementById('password-error').textContent = 'Password must be at least 6 characters long';
        return false;
    } else {
        document.getElementById('password-error').textContent = '';
    }

    if (genderInput === '') {
        document.getElementById('gender-error').textContent = 'Please select a gender';
        return false;
    } else {
        document.getElementById('gender-error').textContent = '';
    }

    if (ageInput === '') {
        document.getElementById('age-error').textContent = 'Please input your age';
        return false;
    } else {
        document.getElementById('age-error').textContent = '';
    }

    // var registerButton = document.getElementById('register-button');
    window.location.href = 'home.html';
    return true;
}


var playButton = document.getElementById('play-button');
var playButtonValue = 0;

function playOrPause() {
    if(playButtonValue === 0) {
        document.getElementById('play-button').src = './assets/icons/pause.png';
        playButtonValue = 1;
        return true;
    } else {
        document.getElementById('play-button').src = './assets/icons/play.png';
        playButtonValue = 0;
        return true;
    }
}