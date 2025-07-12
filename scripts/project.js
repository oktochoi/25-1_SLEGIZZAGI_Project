export function setupCategoryMenu() {
    const categoryItems = document.querySelectorAll('.category-list button');
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            categoryItems.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

setupCategoryMenu();

// View More 버튼 기능
const viewMoreBtn = document.querySelector('.view-more');
if (viewMoreBtn) {
  viewMoreBtn.addEventListener('click', function() {
    document.querySelectorAll('.project-card.hidden').forEach(card => {
      card.classList.remove('hidden');
    });
    this.style.display = 'none';
  });
}

