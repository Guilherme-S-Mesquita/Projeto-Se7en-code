
const btnDarkModeToggle = document.getElementById('btn-dark-mode');
let currentTheme = localStorage.getItem('theme') || 'light';


applyTheme(currentTheme);


btnDarkModeToggle.addEventListener('click', () => {
  
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    localStorage.setItem('theme', currentTheme);
 
    applyTheme(currentTheme);
});


function applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
}
function updateButtonText(theme) {
    btnDarkModeToggle.textContent = theme === 'light' ? 'Dark' : 'Light';
}

if(currentTheme = 'dark'){
    
}
