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
    // document.addEventListener('keydown', closepopupEsc)
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
        const tourBlock = item.querySelector('.popular-destinations__tour'); // Получаем элемент popular-destinations__tour

        item.addEventListener('mouseenter', function () {
            // Добавляем класс hovered
            this.classList.add('hovered');

            // Добавляем новый класс к блоку popular-destinations__tour
            if (tourBlock) {
                tourBlock.classList.add('hoveredTour'); // Добавьте нужный класс
            }

            // Убираем класс у элемента с рейтингом
            if (ratingNumber) {
                ratingNumber.classList.remove('visible');
            }

            // Показываем текст
            if (hoverText) {
                hoverText.style.display = 'block';
            }
        });

        item.addEventListener('mouseleave', function () {
            // Убираем класс hovered
            this.classList.remove('hovered');

            // Убираем новый класс у блока popular-destinations__tour
            if (tourBlock) {
                tourBlock.classList.remove('hoveredTour'); // Уберите нужный класс
            }

            // Возвращаем класс у элемента с рейтингом
            if (ratingNumber) {
                ratingNumber.classList.add('visible');
            }

            // Скрываем текст
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

        // Функция для валидации email
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

        // Валидация в реальном времени
        emailInput.addEventListener('input', validateEmail);

        // Обработка нажатия кнопки подписки
        subscribeButton.addEventListener('click', (event) => {
            const emailValue = emailInput.value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Проверка перед выполнением действия подписки
            if (!emailPattern.test(emailValue)) {
                validateEmail(); // Проверяем ещё раз перед подпиской
                event.preventDefault(); // Отменяем действие кнопки
            } else {
                // Логика для успешной подписки
                errorMessage.textContent = 'Спасибо за подписку!';
                errorMessage.style.color = 'green'; // Изменяем цвет сообщения
                errorMessage.style.display = 'block';
            }
        });
    });
});




popupCloseButtonMenu.addEventListener('click', closeButtonPopupMenu);
popupOpenButtonMenu.addEventListener('click', openButtonPopupMenu);
popupMenu.addEventListener('mousedown', closeOverlayPopup)