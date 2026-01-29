// Current Language State
let currentLang = localStorage.getItem('selectedLang') || 'id';

// Function to update content based on selected language
function updateContent() {
    const langData = translations[currentLang];

    // Update text content for elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (langData[key]) {
            // Check if it's an input/textarea placeholder or text content
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = langData[key];
            } else {
                element.textContent = langData[key];
            }
        }
    });

    // Update active state in dropdown if exists
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === currentLang) {
            btn.classList.add('active');
        }
    });
}

// Function to set language
function setLanguage(lang) {
    if (translations[lang]) {
        currentLang = lang;
        localStorage.setItem('selectedLang', lang);
        updateContent();
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateContent();

    // Attach event listeners to language buttons
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});
