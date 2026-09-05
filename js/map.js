const mapContainer = document.querySelector('[data-map]');
const mapLoadButton = document.querySelector('[data-map-load]');

if (mapContainer && mapLoadButton) {
    mapLoadButton.addEventListener('click', () => {
        const mapFrame = document.createElement('iframe');

        mapFrame.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2601.850059756427!2d17.390304876845207!3d49.29818341965593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471306f5b74c3435%3A0x989a9d5ce16671e9!2zTVVEci4gVmxhZGltw61yYSBIdXJkw6Fsa292w6E!5e0!3m2!1scs!2scz!4v1688925249566!5m2!1scs!2scz';
        mapFrame.title = 'Mapa ordinace MUDr. Vladimíry Hurdálkové';
        mapFrame.loading = 'lazy';
        mapFrame.referrerPolicy = 'no-referrer-when-downgrade';
        mapFrame.allowFullscreen = true;

        mapContainer.replaceChildren(mapFrame);
    });
}
