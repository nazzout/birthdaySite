const giftImg = document.querySelector('.gift-img');

giftImg.addEventListener('touchstart', function() {
    this.classList.add('active');
});

giftImg.addEventListener('touchend', function() {
    this.classList.remove('active');
});