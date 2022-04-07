/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
const Projects = [
  {
    class: 'project1',
    name: 'Project number One',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. <br><br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/proj_1.png',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScripts'],
    liveVersion: 'See Live',
    source: 'See source',
    crossimg: './images/close.png',
  },

  {
    class: 'project2',
    name: 'Project number Two',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. <br><br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/Proj_2.png',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScripts'],
    liveVersion: 'See Live',
    source: 'See source',
    crossimg: './images/close.png',
  },

  {
    class: 'project3',
    name: 'Project number Three',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. <br><br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/Proj_3.png',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScripts'],
    liveVersion: 'See Live',
    source: 'See source',
    crossimg: './images/close.png',
  },

  {
    class: 'project4',
    name: 'Project number Four',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. <br><br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/Proj_4.png',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScripts'],
    liveVersion: 'See Live',
    source: 'See source',
    crossimg: './images/close.png',
  },

  {
    class: 'project5',
    name: 'Project number Five',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. <br><br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/Proj_5.png',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScripts'],
    liveVersion: 'See Live',
    source: 'See source',
    crossimg: './images/close.png',
  },

  {
    class: 'project6',
    name: 'Project number Six',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. <br><br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/Proj_6.png',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScripts'],
    liveVersion: 'See Live',
    source: 'See source',
    crossimg: './images/close.png',
  },
];

const showPop = (projectNum) => {
  const Project = Projects[projectNum];

  let inPop = `<div class="${Project.class}">
    <div class="popup-container">
      <img class="popup-close" onclick="hidePop()" src="${Project.crossimg}" alt="close cross">
      <div class="popup-header">
        <h3 class="popup-proj1">${Project.name}</h3>
        <ul class="popup-box">`;
  Project.technologies.forEach((tech) => {
    inPop += `<li class="popup-work-list">${tech}</li>`;
  });
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
          <button class="popup-live-btn" type="button"><a href="https://emiliazm.github.io/Portfolio/">"${Project.liveVersion}"</a><img src="./images/download-blue.png" alt="download"></button>
          <button class="popup-source-btn" type="button"><a href="https://github.com/emiliazm/Portfolio">"${Project.source}"</a><img src="./images/github-blue.png" alt="gitHub icon"></button>
          </div>
      </div>
    </div>
  </div>
  `;

  const overlay = document.querySelector('#popup-modal');
  const pops = document.querySelector('.popup');
  const popCont = document.querySelector('#popCont');
  const popToProjects = document.createElement('div');
  popToProjects.setAttribute('id', 'popCont');
  popToProjects.innerHTML = inPop;
  if (popCont) { pops.removeChild(popCont); }
  pops.appendChild(popToProjects);
  overlay.style.display = 'block';
  pops.style.display = 'block';
};

const hidePop = () => {
  document.querySelector('.popup').style.display = 'none';
  document.querySelector('#popup-modal').style.display = 'none';
};

const title = document.querySelector('.projects .title');
let inDiv = '';

Projects.forEach((Project, i) => {
  inDiv += `<div class="${Project.class}">
    <img class="imgArticle art" src="${Project.image}" alt="First Project">
    <div class='info info${i + 1}';`;
  inDiv += `">
        <h3 class="proj-name project-name">${Project.name}</h3>
        <ul class="box">`;
  Project.technologies.forEach((tech) => {
    inDiv += `<li class="work-list">${tech}</li>`;
  });
  inDiv += `
        </ul>
        <button class="see" type="button" onclick="showPop(${i})">See this project <img src="./images/blue-arrow.png" alt="arrow"><img src="./images/white-arrow.png" alt="white arrow"></button>
    </div>
    </div>
    <div class="back-center"></div>
    <div class="back-left"></div>
    <div class="back-bottom"></div>
    <div class="back-right"></div>
  `;
});

const divToProjects = document.createElement('div');
divToProjects.setAttribute('class', 'gridP');
divToProjects.innerHTML = inDiv;

title.after(divToProjects);

// contact validation.

const getBut = document.querySelector('.form .getBut');
const form = document.querySelector('.form');
const formName = document.querySelector('.input-name');
const formEmail = document.querySelector('.input-email');
const formMessage = document.querySelector('.input-textarea');

const inForm = '';
const divToContact = document.createElement('div');
divToContact.setAttribute('class', 'error');
divToContact.innerHTML = inForm;
getBut.after(divToContact);

const errorMsg = document.createElement('p');
errorMsg.setAttribute('class', 'error-message');
const textnode = document.createTextNode('** Email does not seem to comply with the format.  Please doble-check it is in lower case.');
errorMsg.appendChild(textnode);

divToContact.appendChild(errorMsg);
