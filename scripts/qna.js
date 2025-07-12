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