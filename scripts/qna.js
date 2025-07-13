// scripts/qna.js

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', function() {
      if (this.classList.contains('active')) {
        // 이미 열려 있으면 닫기만
        this.classList.remove('active');
      } else {
        // 다른 질문은 닫고, 현재 질문만 열기
        document.querySelectorAll('.faq-question').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });
});

window.addEventListener('scroll', function() {
  const extraInfo = document.querySelector('.qna-extra-info');
  const faqContainer = document.querySelector('.faq-container');
  const qnaTitle = document.querySelector('.qna-title');
  if (!extraInfo || !faqContainer || !qnaTitle) return;
  const scrollY = window.scrollY || window.pageYOffset;
  const windowHeight = window.innerHeight;
  const bodyHeight = document.body.offsetHeight;
  // 하단 200px 이내로 스크롤 시 안내만 보이고 FAQ/타이틀 숨김
  if (scrollY + windowHeight >= bodyHeight - 200) {
    extraInfo.classList.remove('hidden');
    faqContainer.classList.add('hidden');
    qnaTitle.classList.add('hidden');
  } else {
    extraInfo.classList.add('hidden');
    faqContainer.classList.remove('hidden');
    qnaTitle.classList.remove('hidden');
  }
}); 