const toggleButton = document.getElementById('toggleLanguage');
toggleButton.addEventListener('click', toggleLanguage);

function toggleLanguage() {
    const currentUrl = window.location.href;
    if (currentUrl.includes('/index.html')) {
        window.location.href = currentUrl.replace('/index.html', '/index-en.html');
    } else if (currentUrl.includes('/index-en.html')) {
        window.location.href = currentUrl.replace('/index-en.html', '/index.html');
    }
}