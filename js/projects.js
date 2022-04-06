/* eslint-disable linebreak-style */
const Projects = [
  {
    class: 'project1',
    name: 'Project number One',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. <br><br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/proj_1.png',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScripts'],
    liveVersion: 'See Live',
    source: 'See source',
    crossimg: './images/close.png',
  },

  {
    class: 'project2',
    name: 'Project number Two',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. <br><br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/proj_2.png',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScripts'],
    liveVersion: 'See Live',
    source: 'See source',
    crossimg: './images/close.png',
  },

  {
    class: 'project3',
    name: 'Project number Three',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. <br><br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/proj_3.png',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScripts'],
    liveVersion: 'See Live',
    source: 'See source',
    crossimg: './images/close.png',
  },

  {
    class: 'project4',
    name: 'Project number Four',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. <br><br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/proj_4.png',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScripts'],
    liveVersion: 'See Live',
    source: 'See source',
    crossimg: './images/close.png',
  },

  {
    class: 'project5',
    name: 'Project number Five',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. <br><br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/proj_5.png',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScripts'],
    liveVersion: 'See Live',
    source: 'See source',
    crossimg: './images/close.png',
  },

  {
    class: 'project6',
    name: 'Project number Six',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. <br><br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/proj_6.png',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScripts'],
    liveVersion: 'See Live',
    source: 'See source',
    crossimg: './images/close.png',
  },
];

const title = document.querySelector('.projects .title');
let inDiv = '';

Projects.forEach((Project) => {
  inDiv += `<div class="${Project.class}">
    <img class="imgArticle art" src="${Project.image}" alt="First Project">
    <div class="info">
        <h3 class="proj-name project-name">${Project.name}</h3>
        <ul class="box">`;
  Project.technologies.forEach((tech) => { inDiv += `<li class="work-list">${tech}</li>`; });
  inDiv += `
        </ul>
        <button class="see" type="button">See this project <img src="./images/blue-arrow.png" alt="arrow"><img src="./images/white-arrow.png" alt="white arrow"></button>
    </div>
    </div>
    `;
});

const divToProjects = document.createElement('div');
divToProjects.innerHTML = inDiv;

title.after(divToProjects);

// END
// popup window

const popup = document.querySelector('.projects .see');
let inPop = '';

Projects.forEach((Project) => {
  inPop += `<div class="${Project.class}">
    <div class="popup-container">
      <img class="popup-close" src="${Project.crossimg}" alt="close cross">
      <div class="popup-header">
        <h3 class="popup-proj1">${Project.name}</h3>
        <ul class="popup-box">`;
  Project.technologies.forEach((tech) => { inDiv += `<li class="popup-work-list">${tech}</li>`; });
  inPop += `
        </ul>
      </div>
      <div class="popup-pictures">
        <div class="popup-bigImages">
          <img src="${Project.image}" alt="First Project" width="100%">
        </div>
        <div class="popup-smallImages">
          <img src="${Project.image}" alt="First Project" width="25%" height="auto">
          <img src="${Project.image}" alt="First Project" width="25%" height="auto">
          <img src="${Project.image}" alt="First Project" width="25%" height="auto">
          <img src="${Project.image}" alt="First Project" width="25%" height="auto">
        </div>
      </div>
      <div class="popup-text">
          <p>"${Project.description}"</p>
          <div class="popup-bottoms">
          <button class="popup-live-btn" type="button"><a href="https://emiliazm.github.io/Portfolio/">"${Project.liveVersion}"</a><img src="./images/download-blue.png" alt="download"><img src="./images/download.png" alt="download-white"></button>
          <button class="popup-source-btn" type="button"><a href="https://github.com/emiliazm/Portfolio">"${Project.source}"</a><img src="./images/github-blue.png" alt="gitHub icon"><img src="./images/github-white.png" alt="gitHub icon white"></button>
          </div>
      </div>
    </div>
  </div>
  `;
});

const popToProjects = document.createElement('div');
popToProjects.innerHTML = inPop;

// popup.after(popToProjects);
function showPop(popProject) {
  console.log('showPop');
}

const popUp = document.querySelector('.popup');
const pressSeeButtom = document.querySelectorAll('.see');
pressSeeButtom.addEventListener('click', () => showPop(''));

// const pops = document.querySelector('.popup');
// document.querySelectorAll('.see').forEach((bSee) => bSee.addEventListener('click', () => {
//   console.log('hola')
//   pops.style.display = 'block';
// }));

// document.querySelectorAll('.popup-close').forEach((bCross) => bCross.addEventListener('click', () => {
//   pops.style.display = 'none';
// }));