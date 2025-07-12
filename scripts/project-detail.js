// project-detail.js

const projectData = {
  1: {
    title: "2022 웹 프로젝트",
    img: "../img/project/2022-web1.jpeg",
    members: "홍길동, 김철수, 이영희",
    stack: "HTML, CSS, JavaScript",
    descLong: "2021년 웹 프로젝트에 대한 상세 설명입니다. 다양한 웹 기술을 활용하여 멋진 결과물을 만들었습니다.",
    descImg: "../img/project/2022-web1.jpeg"
  },
  2: {
    title: "2021 앱 프로젝트",
    img: "../img/project/2021-app1.jpeg",
    desc: "2021년 앱 프로젝트 요약 설명.",
    members: "박민수, 최지우",
    stack: "Flutter, Firebase",
    descLong: "2021년 앱 프로젝트에 대한 상세 설명입니다. 모바일 환경에 최적화된 앱을 개발하였습니다.",
    descImg: "../img/project/2021-app1.jpeg"
  },
  3: {
    title: "2021 데이터 프로젝트",
    img: "../img/project/2021-data1.jpeg",
    desc: "2021년 데이터 프로젝트 요약 설명.",
    members: "김영수, 이수진",
    stack: "Python, Pandas, Matplotlib",
    descLong: "2021년 데이터 프로젝트에 대한 상세 설명입니다. 데이터 분석과 시각화에 중점을 두었습니다.",
    descImg: "../img/project/2021-data1.jpeg"
  },
  4: {
    title: "2021 게임 프로젝트",
    img: "../img/project/2021-game1.jpeg",
    desc: "2021년 게임 프로젝트 요약 설명.",
    members: "정우성, 한지민",
    stack: "Unity, C#",
    descLong: "2021년 게임 프로젝트에 대한 상세 설명입니다. 창의적인 게임 아이디어를 구현하였습니다.",
    descImg: "../img/project/2021-game1.jpeg"
  },
  5: {
    title: "2023 웹 프로젝트",
    img: "../img/project/2023-web1.jpeg",
    desc: "2023년 웹 프로젝트 요약 설명.",
    members: "홍길동, 김철수, 이영희",
    stack: "HTML, CSS, JavaScript",
    descLong: "2022년 웹 프로젝트에 대한 상세 설명입니다. 다양한 웹 기술을 활용하여 멋진 결과물을 만들었습니다.",
    descImg: "../img/project/2023-web1.jpeg"
  },
  6: {
    title: "2022 앱 프로젝트",
    img: "../img/project/2022-app1.jpeg",
    desc: "2022년 앱 프로젝트 요약 설명.",
    members: "박민수, 최지우",
    stack: "Flutter, Firebase",
    descLong: "2022년 앱 프로젝트에 대한 상세 설명입니다. 모바일 환경에 최적화된 앱을 개발하였습니다.",
    descImg: "../img/project/2022-app1.jpeg"
  },
  7: {
    title: "2023 앱 프로젝트",
    img: "../img/project/2023-app2.jpeg",
    desc: "2023년 앱 프로젝트 요약 설명.",
    members: "김영수, 이수진",
    stack: "Python, Pandas, Matplotlib",
    descLong: "2022년 데이터 프로젝트에 대한 상세 설명입니다. 데이터 분석과 시각화에 중점을 두었습니다.",
    descImg: "../img/project/2023-app2.jpeg"
  },
  8: {
    title: "2023 데이터 프로젝트",
    img: "../img/project/2023-data1.jpeg",
    desc: "2023년 데이터 프로젝트 요약 설명.",
    members: "정우성, 한지민",
    stack: "Python, Pandas, Matplotlib",
    descLong: "2023년 데이터 프로젝트에 대한 상세 설명입니다. 데이터 분석과 시각화에 중점을 두었습니다.",
    descImg: "../img/project/2023-data1.jpeg"
  },
  9: {
    title: "2023 웹 프로젝트",
    img: "../img/project/2023-web1.jpeg",
    desc: "2023년 웹 프로젝트 요약 설명.",
    members: "홍길동, 김철수, 이영희",
    stack: "HTML, CSS, JavaScript",
    descLong: "2023년 웹 프로젝트에 대한 상세 설명입니다. 다양한 웹 기술을 활용하여 멋진 결과물을 만들었습니다.",
    descImg: "../img/project/2023-web1.jpeg"
  },
  10: {
    title: "2023 앱 프로젝트",
    img: "../img/project/2023-app1.jpeg",
    desc: "2023년 앱 프로젝트 요약 설명.",
    members: "박민수, 최지우",
    stack: "Flutter, Firebase",
    descLong: "2023년 앱 프로젝트에 대한 상세 설명입니다. 모바일 환경에 최적화된 앱을 개발하였습니다.",
    descImg: "../img/project/2023-app1.jpeg"
  },
  11: {
    title: "2023 데이터 프로젝트",
    img: "../img/project/2023-data1.jpeg",
    desc: "2023년 데이터 프로젝트 요약 설명.",
    members: "김영수, 이수진",
    stack: "Python, Pandas, Matplotlib",
    descLong: "2023년 데이터 프로젝트에 대한 상세 설명입니다. 데이터 분석과 시각화에 중점을 두었습니다.",
    descImg: "../img/project/2023-data1.jpeg"
  },
  // ... 필요시 더 추가 ...
};

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

if (id && projectData[id]) {
  const titleEl = document.querySelector('.project-detail-title');
  if (titleEl) titleEl.textContent = projectData[id].title;
  const membersEl = document.querySelector('.project-detail-members');
  const stackEl = document.querySelector('.project-detail-stack');
  const descLongEl = document.querySelector('.project-detail-desc-long');
  if (membersEl) membersEl.textContent = projectData[id].members;
  if (stackEl) stackEl.textContent = projectData[id].stack;
  if (descLongEl) descLongEl.textContent = projectData[id].descLong;
  const detailImgEl = document.querySelector('.detail-desc-img');
  if (detailImgEl) detailImgEl.src = projectData[id].descImg;
} 