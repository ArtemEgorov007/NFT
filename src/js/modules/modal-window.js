// script.js

// Получаем контейнер модального окна и кнопки
const modalContainer = document.getElementById("modalContainer");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

// Функция для открытия модального окна
function openModal() {
	modalContainer.style.display = "flex"; // Делаем модальное окно видимым
	document.body.classList.add("modal-open"); // Добавляем класс для блокировки прокрутки
}

// Функция для закрытия модального окна
function closeModal() {
	modalContainer.style.display = "none"; // Скрываем модальное окно
	document.body.classList.remove("modal-open"); // Удаляем класс для разблокировки прокрутки
}

// Слушатели событий для кнопок
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

// Закрываем модальное окно при клике за его пределами
modalContainer.addEventListener("click", (event) => {
	if (event.target === modalContainer) {
		closeModal();
	}
});

// Закрываем модальное окно при нажатии клавиши 'Esc'
document.addEventListener("keydown", (event) => {
	if (event.key === "Escape") {
		closeModal();
	}
});

export { openModal, closeModal };
