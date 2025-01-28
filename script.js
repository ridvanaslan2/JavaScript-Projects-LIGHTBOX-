const modal = document.getElementById('lightbox');
const modalImg = document.getElementById('modal-img');

function openModal(img) {
    modal.style.display = 'flex';
    modalImg.src = img.src;
}

function closeModal() {
    modal.style.display = 'none';
    modalImg.src = '';
}
