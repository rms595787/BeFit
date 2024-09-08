const toggleSwitch = document.getElementById('modeToggle');
const body = document.body;
const navbar = document.querySelector('.navbar');
const modeText = document.getElementById('modeText');
const icon = document.getElementById('icon');

toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        navbar.classList.remove('light-mode');
        navbar.classList.add('dark-mode');
        modeText.textContent = "Dark";
        icon.classList.remove('sun');
        icon.classList.add('moon');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        navbar.classList.remove('dark-mode');
        navbar.classList.add('light-mode');
        modeText.textContent = "Light";
        icon.classList.remove('moon');
        icon.classList.add('sun');
    }
});
