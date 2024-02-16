const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;


if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
}


darkModeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});


function enableDarkMode() {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
}


function disableDarkMode() {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', null);
}
// for form
function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name && email) {
        alert("Form submitted!\nName: " + name + "\nEmail: " + email);
    } else {
        alert("Please fill in all fields.");
    }
}