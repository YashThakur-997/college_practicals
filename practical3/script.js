// Array of image URLs (fetched from Picsum Photos API)
function getImageUrls(count) {
    const urls = [];
    for (let i = 0; i < count; i++) {
        urls.push(`https://picsum.photos/300/200?random=${i + 1}`);
    }
    return urls;
}

// Function to dynamically add images to the gallery
function loadGallery() {
    const gallery = document.querySelector('.gallery');

    const images = getImageUrls(9); // Get 9 random image URLs
    
    images.forEach((imageUrl, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = `Gallery Image ${index + 1}`;
        
        galleryItem.appendChild(img);
        gallery.appendChild(galleryItem);
    });
}

// Load gallery when page loads
document.addEventListener('DOMContentLoaded', loadGallery);