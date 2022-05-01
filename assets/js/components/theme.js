// Imports
// __________________________________________________

// Theme
// __________________________________________________
export const theme = () => {
  const themeBtn = document.querySelector('.js--theme-btn');
  const htmlDataset = document.documentElement.dataset;

  if (htmlDataset.theme === 'dark') {
    themeBtn.classList.toggle('ri-sun-line');
    themeBtn.classList.toggle('ri-moon-line');
  }

  themeBtn.addEventListener('click', e => {
    if (htmlDataset.theme === 'white') {
      htmlDataset.theme = 'dark';
      themeBtn.classList.toggle('ri-sun-line');
      themeBtn.classList.toggle('ri-moon-line');

      WrappedLocalStorage.set('wrapped-theme', 'dark')
    } else {
      htmlDataset.theme = 'white';
      themeBtn.classList.toggle('ri-moon-line');
      themeBtn.classList.toggle('ri-sun-line');
      
      WrappedLocalStorage.set('wrapped-theme', 'white')
    }

  });
};