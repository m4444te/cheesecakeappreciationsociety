document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const close = document.querySelector('.close');

    function openLightbox(src) {
        lightbox.style.display = 'block';
        lightboxImg.src = src;
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            openLightbox(this.src);
        });
    });

    close.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', function(event) {
        if (event.target !== lightboxImg) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeLightbox();
        }
    });
});
