var images = [
    'https://img-global.cpcdn.com/recipes/54f89cc3860a7177/640x640sq70/photo.webp',
    'https://pict.sindonews.net/dyn/850/pena/news/2021/12/31/185/644325/resep-bumbu-ayam-bakar-kecap-untuk-malam-tahun-baru-meresap-sampai-ke-dalam-jge.jpg',
    'https://cdn.idntimes.com/content-images/community/2022/05/resep-sambal-paling-enak-resep-sambal-matah-sambal-matah-bali-sambel-matah-bahan-sambal-matah-tips-sambal-matah-9cde86371d7fc78c91ae80a6ffab250e-137dd82ad7bd32e2570eb6fc27660b5c.jpg'
];

var currentImage = 0;

function changeBackground() {
    if (currentImage === images.length) {
        currentImage = 0;
    }var imageUrl = images[currentImage];
    $('.hero').css('background-image', 'url(' + imageUrl + ')');
    currentImage++;
}

// Change background image every 5 seconds (5000 milliseconds)
setInterval(changeBackground, 5000);

// Initial background image
changeBackground();

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};


window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".animate-me");
    const windowHeight = window.innerHeight;

    elements.forEach((element) => {
        const elementOffset = element.getBoundingClientRect().top;

        if (elementOffset < windowHeight / 2) {
            element.style.opacity = 0; // Set opacity menjadi 0 ketika elemen muncul di tengah jendela
        } else {
            element.style.opacity = 1;
        }
    });
});
