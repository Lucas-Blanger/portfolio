const toggleButton = document.getElementById('toggleLanguage');
toggleButton.addEventListener('click', toggleLanguage);

function toggleLanguage() {
    const baseUrl = 'https://lucas-blanger..github.io/portfolio/';
    const currentPath = window.location.pathname;

    if (currentPath.includes('index.html')) {
        window.location.href = baseUrl + 'index-en.html';
    } else if (currentPath.includes('index-en.html')) {
        window.location.href = baseUrl + 'index.html';
    }
}
