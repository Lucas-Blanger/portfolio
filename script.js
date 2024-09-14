const toggleButton = document.getElementById('toggleLanguage');
toggleButton.addEventListener('click', toggleLanguage);

function toggleLanguage() {
    const currentUrl = window.location.href;
    
    const filename = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);

    if (filename === 'index.html') {
        window.location.href = currentUrl.replace('index.html', 'index-en.html');
    } else if (filename === 'index-en.html') {
        window.location.href = currentUrl.replace('index-en.html', 'index.html');
    }
}
