function mobileNav() {
	const navBtnOpen = document.querySelector("#modalOpen");
	const checkbox = document.querySelector("#yourCheckboxId");

	const navOverlay = document.querySelector("#mobileNavOverlay");
	const nav = document.querySelector("#mobileNav");

	let lastScrollTop = 0;

	navBtnOpen.onclick = toggleMobileNav;
	navOverlay.onclick = toggleMobileNav;

	function toggleMobileNav(event) {
		navOverlay.classList.toggle("mobile-nav-overlay--open");
		nav.classList.toggle("mobile-nav--open");
		document.body.classList.toggle("no-scroll");

		if (event.target === navOverlay) {
			checkbox.checked = false;
		}
	}

	// Добавляем слушатель события изменения размера окна
	window.addEventListener("resize", function () {
		const isNavOpen = nav.classList.contains("mobile-nav--open");

		if (window.innerWidth > 1173 && isNavOpen) {
			closeNavigation();
		}
	});

	// Добавляем слушатель события прокрутки страницы
	window.addEventListener("scroll", function () {
		const st = window.pageYOffset || document.documentElement.scrollTop;

		// Проверяем направление прокрутки
		if (st > lastScrollTop) {
			// Скроллим вниз, поэтому закрываем навигацию
			closeNavigation();
		}

		lastScrollTop = st;
	});

	function closeNavigation() {
		navOverlay.classList.remove("mobile-nav-overlay--open");
		nav.classList.remove("mobile-nav--open");
		document.body.classList.remove("no-scroll");
		checkbox.checked = false;
	}
}

export default mobileNav;
