/**
 * Global Site Language Switcher
 */
function switchLanguage(lang) {
  // Update body tag attribute to control CSS visibility
  document.body.setAttribute('data-lang', lang);
  
  // Save preference across session/pages
  localStorage.setItem('userLanguage', lang);
  
  // Sync all language dropdown selectors on the page
  const selectors = document.querySelectorAll('.lang-select');
  selectors.forEach(select => {
    select.value = lang;
  });
}

// Automatically load selected language on page ready
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('userLanguage') || 'en';
  switchLanguage(savedLang);
});
