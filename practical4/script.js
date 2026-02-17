const imageContainer = document.getElementById('image-container');
const modal = document.getElementById('info-modal');
const modalClose = document.getElementById('modal-close');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');

// Gallery data (Replace these with your actual travel photos)
const images = [
    {
        src: 'https://picsum.photos/id/1015/400/300',
        title: 'Mountain Lake',
        description: 'A calm alpine lake surrounded by snow-tipped peaks.'
    },
    {
        src: 'https://picsum.photos/id/1016/400/300',
        title: 'Forest Trail',
        description: 'A quiet path through evergreen woods.'
    },
    {
        src: 'https://picsum.photos/id/1018/400/300',
        title: 'Desert Dunes',
        description: 'Golden dunes under a wide open sky.'
    },
    {
        src: 'https://picsum.photos/id/1019/400/300',
        title: 'Ocean Cliffs',
        description: 'Waves crash against rugged coastal cliffs.'
    },
    {
        src: 'https://picsum.photos/id/1035/400/300',
        title: 'City Skyline',
        description: 'A glowing skyline at dusk.'
    },
    {
        src: 'https://picsum.photos/id/1039/400/300',
        title: 'Countryside',
        description: 'Rolling fields and quiet farm roads.'
    }
];

// Function to load gallery
function loadGallery() {
    images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.title;
        img.classList.add('gallery-item');
        img.addEventListener('click', () => showInfo(index));
        imageContainer.appendChild(img);
    });
}

function showInfo(index) {
    const image = images[index];
    modalImage.src = image.src;
    modalImage.alt = image.title;
    modalTitle.textContent = image.title;
    modalDescription.textContent = image.description;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
}

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
        closeModal();
    }
});

// Initialize
loadGallery();