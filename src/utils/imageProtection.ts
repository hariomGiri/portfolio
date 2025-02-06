export const setupImageProtection = () => {
  // Disable right-click on images
  document.addEventListener('contextmenu', (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG') {
      e.preventDefault();
    }
  });

  // Disable keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Prevent PrintScreen
    if (e.key === 'PrintScreen') {
      e.preventDefault();
      return false;
    }

    // Prevent Ctrl + S, Ctrl + C, Ctrl + U, Ctrl + P
    if (e.ctrlKey && (e.key === 's' || e.key === 'c' || e.key === 'u' || e.key === 'p')) {
      e.preventDefault();
      return false;
    }
  });

  // Disable drag and drop
  document.addEventListener('dragstart', (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG') {
      e.preventDefault();
    }
  });

  // Additional protection for mobile devices
  document.addEventListener('touchstart', (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG') {
      e.preventDefault();
    }
  }, { passive: false });
}; 