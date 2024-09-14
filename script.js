const toggleButton = document.getElementById('toggleLanguage');
toggleButton.addEventListener('click', toggleLanguage);

function toggleLanguage() {
    const currentPath = window.location.pathname; 
    
    if (currentPath.includes('index.html')) {
        window.location.pathname = currentPath.replace('index.html', 'index-en.html');
    } else if (currentPath.includes('index-en.html')) {
        window.location.pathname = currentPath.replace('index-en.html', 'index.html');
    }
}
