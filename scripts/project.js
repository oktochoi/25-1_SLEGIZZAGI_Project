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

// project-detail.html의 View More 버튼 클릭 시 project.html로 이동
const detailViewMoreBtn = document.querySelector('.project-detail-view-more-text');
if (detailViewMoreBtn) {
  detailViewMoreBtn.addEventListener('click', function() {
    window.location.href = 'project.html';
  });
}

// project-detail.html의 '프로젝트 홈으로' 버튼 클릭 시 project.html로 이동
const homeBtn = document.querySelector('.project-detail-view-more-home');
if (homeBtn) {
  homeBtn.addEventListener('click', function() {
    window.location.href = 'project.html';
  });
}

// project.html에서 카드 클릭 시 project-detail.html로 이동 (이벤트 위임 방식, data-id 전달)
if (window.location.pathname.includes('project.html')) {
  document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.querySelector('.project-card-container');
    if (cardContainer) {
      cardContainer.addEventListener('click', function(e) {
        const card = e.target.closest('.project-card');
        if (card) {
          const id = card.dataset.id;
          window.location.href = `project-detail.html?id=${id}`;
        }
      });
    }
  });
}

// 카테고리 필터링 기능
if (window.location.pathname.includes('project.html')) {
  document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-list button');
    const cards = document.querySelectorAll('.project-card');

    categoryButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        const selected = this.textContent.trim().toUpperCase();
        categoryButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        cards.forEach(card => {
          const cardCats = card.dataset.category ? card.dataset.category.split(',').map(s => s.trim().toUpperCase()) : [];
          if (selected === 'ALL' || cardCats.includes(selected)) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.project-card');
  const viewMoreContainer = document.querySelector('.view-more-container');
  if (viewMoreContainer) {
    if (cards.length < 7) { // 6개 이하일 때 숨김
      viewMoreContainer.style.display = 'none';
    } else {
      viewMoreContainer.style.display = '';
    }
  }
});

