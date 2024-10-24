const popupOpenButtonMenu = document.querySelector('.header__menu');
const popupCloseButtonMenu = document.querySelector('.popup__close-button-menu');
const popupMenu = document.querySelector('.popup');
const hover = document.querySelector('.popular-destinations_wrapper-laptop ');



 

const closeOverlayPopup = function (evt) {
    if (evt.currentTarget === evt.target) {
        closePopup(evt.target);
    };
};


function openPopup(popup) {
    popup.classList.add('popup_opened');
};



function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
        const popupClosed = document.querySelector('.popup_opened');
        closePopup(popupClosed);
    };
};

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc)

}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc)
}

const openButtonPopupMenu = function () {
    openPopup(popupMenu);
    document.addEventListener('keydown', closePopupEsc)

};




const closeButtonPopupMenu = function () {
    closePopup(popupMenu);
};


document.addEventListener('DOMContentLoaded', () => {
    const carouselItems = document.querySelectorAll('.carousel-item__laptop');

    carouselItems.forEach(item => {
        const ratingNumber = item.querySelector('.popular-destinations__rating');
        const hoverText = item.querySelector('.hover-text');
        const tourBlock = item.querySelector('.popular-destinations__tour'); 

        item.addEventListener('mouseenter', function () {
            this.classList.add('hovered');

            if (tourBlock) {
                tourBlock.classList.add('hoveredTour'); 
            }
            if (ratingNumber) {
                ratingNumber.classList.remove('visible');
            }

            if (hoverText) {
                hoverText.style.display = 'block';
            }
        });

        item.addEventListener('mouseleave', function () {
            this.classList.remove('hovered');

            if (tourBlock) {
                tourBlock.classList.remove('hoveredTour'); 
            }
            if (ratingNumber) {
                ratingNumber.classList.add('visible');
            }
            if (hoverText) {
                hoverText.style.display = 'none';
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const emailSections = document.querySelectorAll('.email');

    emailSections.forEach(section => {
        const emailInput = section.querySelector('.email-input');
        const subscribeButton = section.querySelector('.email-more');
        const errorMessage = section.querySelector('.error-message');

        function validateEmail() {
            const emailValue = emailInput.value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(emailValue)) {
                errorMessage.textContent = 'Пожалуйста, введите корректный адрес электронной почты.';
                errorMessage.style.display = 'block';
            } else {
                errorMessage.textContent = '';
                errorMessage.style.display = 'none';
            }
        }

        emailInput.addEventListener('input', validateEmail);

        subscribeButton.addEventListener('click', (event) => {
            const emailValue = emailInput.value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(emailValue)) {
                validateEmail(); 
                event.preventDefault(); 
            } else {
            }
        });
    });
});




popupCloseButtonMenu.addEventListener('click', closeButtonPopupMenu);
popupOpenButtonMenu.addEventListener('click', openButtonPopupMenu);
popupMenu.addEventListener('mousedown', closeOverlayPopup)