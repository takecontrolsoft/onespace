// Функция за търсене в институции
function filterInstitutions(searchTerm) {
    const cards = document.querySelectorAll('.main-institution-card, .institution-card');
    const term = searchTerm.toLowerCase();
    
    cards.forEach(card => {
        const searchData = card.getAttribute('data-search');
        if (searchData && searchData.toLowerCase().includes(term)) {
            card.style.display = 'block';
        } else if (term === '') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Функция за търсене в банки
function filterBanks(searchTerm) {
    const cards = document.querySelectorAll('.bank-card');
    const term = searchTerm.toLowerCase().trim();

    cards.forEach(card => {
        const bankName = card.querySelector('.bank-name');
        const bankLink = card.querySelector('.bank-link');
        const bankText = (bankName ? bankName.textContent : '') + ' ' + (bankLink ? bankLink.textContent : '');

        if (term === '' || bankText.toLowerCase().includes(term)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// Функция за търсене в удостоверяване
function filterCertification() {
    const searchInput = document.getElementById('certificationSearchInput');
    const searchTerm = searchInput.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.bank-card');

    cards.forEach(card => {
        const name = card.querySelector('.bank-name');
        const description = card.querySelector('p');
        const cardText = (name ? name.textContent : '') + ' ' + (description ? description.textContent : '');

        if (searchTerm === '' || cardText.toLowerCase().includes(searchTerm)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// Функция за търсене в правни линкове
function filterLegalLinks(searchTerm) {
    const normalizedSearchTerm = searchTerm.toLowerCase().trim();
    const legalLinks = document.querySelectorAll('.legal-link');

    legalLinks.forEach(link => {
        const dataSearch = link.getAttribute('data-search') || '';
        const textElement = link.querySelector('.legal-text');
        const linkText = textElement ? textElement.textContent.toLowerCase() : '';

        if (linkText.includes(normalizedSearchTerm) || dataSearch.includes(normalizedSearchTerm)) {
            link.style.display = 'flex';
        } else {
            link.style.display = 'none';
        }
    });

    // Скриване/показване на целите секции
    const legalSections = document.querySelectorAll('.legal-section');
    legalSections.forEach(section => {
        const sectionLinks = section.querySelectorAll('.legal-link');
        const visibleLinks = Array.from(sectionLinks).filter(link => 
            link.style.display !== 'none' && link.style.display !== ''
        );
        
        if (normalizedSearchTerm === '') {
            // При празно търсене показваме всички секции
            section.style.display = 'block';
        } else {
            // При търсене скриваме цялата секция ако няма видими линкове
            section.style.display = visibleLinks.length > 0 ? 'block' : 'none';
        }
    });
}

// Функция за проверка на връзките
function checkLinks() {
    const links = document.querySelectorAll('a[href^="http"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('Отваряне на връзка:', this.href);
        });
    });
}


// Функция за мобилно меню
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const toggleButton = document.getElementById('mobileToggleBtn');
    
    if (mobileMenu && toggleButton) {
        const isActive = mobileMenu.classList.contains('active');
        
        if (isActive) {
            mobileMenu.classList.remove('active');
            toggleButton.innerHTML = '☰';
        } else {
            mobileMenu.classList.add('active');
            toggleButton.innerHTML = '✕';
        }
    }
}

// Затваряне на мобилното меню при клик извън него
function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const toggleButton = document.getElementById('mobileToggleBtn');
    
    if (mobileMenu && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        if (toggleButton) {
            toggleButton.innerHTML = '☰';
        }
    }
}

// Функция за показване/скриване на dropdown менюто за изтегляне
function toggleDownloadDropdown() {
    const dropdown = document.getElementById('downloadMenu');
    const button = document.querySelector('.download-btn');
    const arrow = document.querySelector('.download-arrow');
    
    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
        arrow.innerHTML = '▼';
    } else {
        dropdown.classList.add('show');
        arrow.innerHTML = '▲';
    }
}

// Затваряне на dropdown при клик извън него
function closeDownloadDropdown() {
    const dropdown = document.getElementById('downloadMenu');
    const button = document.querySelector('.download-btn');
    const arrow = document.querySelector('.download-arrow');
    
    if (dropdown && dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
        arrow.innerHTML = '▼';
    }
}

// Инициализация при зареждане на страницата
document.addEventListener('DOMContentLoaded', function() {
    // Добавяме hover ефекти за картите
    const cards = document.querySelectorAll('.institution-card, .bank-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Извикваме функцията за проверка на връзките
    checkLinks();
    
    
    // Добавяме event listener за мобилното меню
    const toggleButton = document.getElementById('mobileToggleBtn');
    if (toggleButton) {
        // Премахваме стария event listener ако има такъв
        toggleButton.removeEventListener('click', toggleMobileMenu);
        // Добавяме новия
        toggleButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMobileMenu();
        });
    }
    
    // Затваряне на мобилното меню при клик извън него
    document.addEventListener('click', function(e) {
        const mobileMenu = document.getElementById('mobileMenu');
        const toggleButton = document.getElementById('mobileToggleBtn');
        
        if (mobileMenu && toggleButton && 
            !mobileMenu.contains(e.target) && 
            !toggleButton.contains(e.target)) {
            closeMobileMenu();
        }
        
        // Затваряне на download dropdown при клик извън него
        const downloadDropdown = document.querySelector('.download-dropdown');
        if (downloadDropdown && !downloadDropdown.contains(e.target)) {
            closeDownloadDropdown();
        }
    });
    
    // Затваряне на мобилното меню при клик на връзка
    const mobileNavTabs = document.querySelectorAll('.mobile-nav-tab');
    mobileNavTabs.forEach(tab => {
        tab.addEventListener('click', closeMobileMenu);
    });
});

// Функция за добавяне на клавиатурни комбинации (ако е необходимо)
document.addEventListener('keydown', function(e) {
    // Можем да добавим специфични клавиатурни комбинации тук
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('.search-box input');
        if (searchInput) {
            searchInput.focus();
        }
    }
});

// Рекламна лента слайдър функционалност
let currentSlide = 0;
let slideInterval;
const slides = [
    {
        title: "🏛️ НАПИ - Национална агенция за приходите",
        subtitle: "Електронни услуги за данъчни декларации и отчети",
        features: [],
        ctaText: "Влезте в НАПИ",
        ctaLink: "https://nap.bg"
    },
    {
        title: "🤖 НСИ Асистент",
        subtitle: "AI помощник за счетоводни задачи и консултации",
        features: [],
        ctaText: "Изпробвайте",
        ctaLink: "https://nsiassistant.bg"
    },    
    {
        title: "🏛️ Единен портал",
        subtitle: "Всички държавни услуги",
        features: [],
        ctaText: "Разгледайте",
        ctaLink: "index.html"
    },
    {
        title: "🏦 Банкови услуги",
        subtitle: "Електронно банкиране",
        features: [],
        ctaText: "Вижте банките",
        ctaLink: "banks.html"
    },
    {
        title: "⚖️ Правни услуги",
        subtitle: "Съдебна система и консултации",
        features: [],
        ctaText: "Правни услуги",
        ctaLink: "legal.html"
    },
    {
        title: "🧮 Счетоводни инструменти",
        subtitle: "Калкулатори и помощници",
        features: [],
        ctaText: "Инструменти",
        ctaLink: "tools.html"
    }
];

// Функции за рекламната лента

// Създаване на слайд
function createSlide(slideData, index) {
    // Определяне на икона според продукта
    let icon = '📢';
    if (slideData.title.includes('НАПИ')) {
        icon = '🏛️';
    } else if (slideData.title.includes('НСИ Асистент')) {
        icon = '🤖';
    } else if (slideData.title.includes('Календар')) {
        icon = '📅';
    } else if (slideData.title.includes('Единен портал')) {
        icon = '🏛️';
    } else if (slideData.title.includes('Банкови')) {
        icon = '🏦';
    } else if (slideData.title.includes('Правни')) {
        icon = '⚖️';
    } else if (slideData.title.includes('Счетоводни')) {
        icon = '🧮';
    }
    
    return `
        <div class="ad-banner-slide ${index === 0 ? 'slide-in' : ''}" data-slide="${index}">
            <div class="ad-banner-content">
                <div class="ad-banner-left">
                    <h3 class="ad-banner-title">${slideData.title}</h3>
                    <p class="ad-banner-subtitle">${slideData.subtitle}</p>
                </div>
                <div class="ad-banner-right">
                    <div class="ad-logo">${icon}</div>
                    <a href="${slideData.ctaLink}" class="ad-cta-button" target="${slideData.ctaLink.startsWith('http') ? '_blank' : '_self'}">
                        ${slideData.ctaText}
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Обновяване на слайдъра
function updateSlider() {
    const adBanner = document.querySelector('.ad-banner');
    if (!adBanner) return;
    
    // Премахваме старите слайдове
    const existingSlides = adBanner.querySelectorAll('.ad-banner-slide');
    existingSlides.forEach(slide => slide.remove());
    
    // Добавяме новите слайдове
    slides.forEach((slideData, index) => {
        const slideElement = document.createElement('div');
        slideElement.innerHTML = createSlide(slideData, index);
        adBanner.appendChild(slideElement.firstElementChild);
    });
    
    updateSliderControls();
}

// Обновяване на контролите
function updateSliderControls() {
    const dotsContainer = document.querySelector('.ad-slider-dots');
    if (!dotsContainer) return;
    
    dotsContainer.innerHTML = '';
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `ad-slider-dot ${index === currentSlide ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    // Обновяваме бутоните
    const prevBtn = document.querySelector('.ad-slider-prev');
    const nextBtn = document.querySelector('.ad-slider-next');
    
    if (prevBtn) prevBtn.disabled = currentSlide === 0;
    if (nextBtn) nextBtn.disabled = currentSlide === slides.length - 1;
}

// Отиване на конкретен слайд
function goToSlide(index) {
    if (index < 0 || index >= slides.length) return;
    
    const slides = document.querySelectorAll('.ad-banner-slide');
    if (slides.length === 0) return;
    
    // Анимация на излизане
    slides[currentSlide].classList.add('slide-out');
    
    setTimeout(() => {
        // Премахваме активния клас от всички слайдове
        slides.forEach(slide => {
            slide.classList.remove('slide-in', 'slide-out');
        });
        
        currentSlide = index;
        
        // Показваме новия слайд
        slides[currentSlide].classList.add('slide-in');
        updateSliderControls();
    }, 250);
}

// Следващ слайд
function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    goToSlide(nextIndex);
}

// Предишен слайд
function prevSlide() {
    const prevIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    goToSlide(prevIndex);
}

// Стартиране на автоматичното превключване
function startSlider() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 3000); // 3 секунди за по-бързо реминаване
}

// Спиране на автоматичното превключване
function stopSlider() {
    clearInterval(slideInterval);
}

// Инициализация на рекламната лента
function initAdBanner() {
    checkAdBannerStatus();
    
    // Създаваме контролите
    const adBanner = document.querySelector('.ad-banner');
    if (adBanner) {
        // Добавяме контроли
        const controlsHTML = `
            <div class="ad-slider-controls">
                <button class="ad-slider-btn ad-slider-prev" onclick="prevSlide()">‹</button>
                <button class="ad-slider-btn ad-slider-next" onclick="nextSlide()">›</button>
                <div class="ad-slider-dots"></div>
            </div>
        `;
        adBanner.insertAdjacentHTML('afterbegin', controlsHTML);
        
        // Обновяваме слайдъра
        updateSlider();
        
        // Добавяме event listener за затваряне
        const closeButton = document.querySelector('.ad-banner-close');
        if (closeButton) {
            closeButton.addEventListener('click', closeAdBanner);
        }
        
        // Добавяме hover ефекти за спиране на автоматичното превключване
        adBanner.addEventListener('mouseenter', stopSlider);
        adBanner.addEventListener('mouseleave', startSlider);
    }
}

// Функция за търсене в министерствата
function filterMinistries() {
    const searchInput = event.target;
    const searchTerm = searchInput.value.toLowerCase();
    const mainMinistries = document.getElementById('mainMinistries');
    const otherMinistries = document.getElementById('otherMinistries');
    
    if (!searchInput || !mainMinistries || !otherMinistries) return;
    
    // Събираме всички редове от двете секции
    const allRows = [...mainMinistries.querySelectorAll('.ministry-row'), ...otherMinistries.querySelectorAll('.ministry-row')];
    
    allRows.forEach(row => {
        const title = row.querySelector('.ministry-title');
        const subtitle = row.querySelector('.ministry-subtitle');
        
        if (title && subtitle) {
            const titleText = title.textContent.toLowerCase();
            const subtitleText = subtitle.textContent.toLowerCase();
            const searchText = titleText + ' ' + subtitleText;
            
            if (searchText.includes(searchTerm)) {
                row.style.display = '';
                row.style.visibility = 'visible';
            } else {
                row.style.display = 'none';
                row.style.visibility = 'hidden';
            }
        }
    });
    
    // При празно търсене показваме всички редове
    if (searchTerm === '') {
        allRows.forEach(row => {
            row.style.display = '';
            row.style.visibility = 'visible';
        });
    }
    
    // Показваме/скриваме заглавията на секциите
    const mainTitle = mainMinistries.previousElementSibling;
    const otherTitle = otherMinistries.previousElementSibling;
    
    if (searchTerm === '') {
        if (mainTitle && mainTitle.tagName === 'H3') {
            mainTitle.style.display = 'block';
        }
        if (otherTitle && otherTitle.tagName === 'H3') {
            otherTitle.style.display = 'block';
        }
    } else {
        // Проверяваме дали има видими редове в всяка секция
        const visibleMainRows = mainMinistries.querySelectorAll('.ministry-row[style*="flex"], .ministry-row:not([style*="none"])');
        const visibleOtherRows = otherMinistries.querySelectorAll('.ministry-row[style*="flex"], .ministry-row:not([style*="none"])');
        
        if (mainTitle && mainTitle.tagName === 'H3') {
            mainTitle.style.display = visibleMainRows.length > 0 ? 'block' : 'none';
        }
        if (otherTitle && otherTitle.tagName === 'H3') {
            otherTitle.style.display = visibleOtherRows.length > 0 ? 'block' : 'none';
        }
    }
}

// Search functionality for useful links
function filterUsefulLinks() {
    const searchInput = document.getElementById('usefulSearchInput');
    const searchTerm = searchInput.value.toLowerCase();
    
    const serviceBlocks = document.querySelectorAll('.service-block');
    const regularLinks = document.querySelectorAll('.link-list > a:not(.service-block a)');
    
    // Filter service blocks
    serviceBlocks.forEach(block => {
        const titleElement = block.querySelector('.service-content a');
        const descriptionElement = block.querySelector('.service-content p');
        
        if (titleElement && descriptionElement) {
            const titleText = titleElement.textContent.toLowerCase();
            const descriptionText = descriptionElement.textContent.toLowerCase();
            const searchText = titleText + ' ' + descriptionText;
            
            if (searchText.includes(searchTerm)) {
                block.style.display = 'flex';
            } else {
                block.style.display = 'none';
            }
        }
    });
    
    // Filter regular links
    regularLinks.forEach(link => {
        const linkText = link.textContent.toLowerCase();
        
        if (linkText.includes(searchTerm)) {
            link.style.display = 'block';
        } else {
            link.style.display = 'none';
        }
    });
    
    // Show/hide service blocks container based on visible blocks
    const serviceBlocksContainer = document.querySelector('.service-blocks-container');
    if (serviceBlocksContainer) {
        const visibleBlocks = serviceBlocksContainer.querySelectorAll('.service-block[style*="flex"], .service-block:not([style*="none"])');
        serviceBlocksContainer.style.display = visibleBlocks.length > 0 ? 'grid' : 'none';
    }
}

