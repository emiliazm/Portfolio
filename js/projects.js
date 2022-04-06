/* eslint-disable linebreak-style */
const Projects = [
  {
    class: 'project1',
    name: 'Project One',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/proj_1.png',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScripts'],
    liveVersion: 'See live',
    source: 'See source',
  },

  {
    class: 'project2',
    name: 'Project Two',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/proj_2.png',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScripts'],
    liveVersion: 'See live',
    source: 'See source',
  },

  {
    class: 'project3',
    name: 'Mili\'s Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/proj_3.png',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScripts'],
    liveVersion: 'See live',
    source: 'See source',
  },

  {
    class: 'project4',
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/proj_4.png',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScripts'],
    liveVersion: 'See live',
    source: 'See source',
  },

  {
    class: 'project5',
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/proj_5.png',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScripts'],
    liveVersion: 'See live',
    source: 'See source',
  },

  {
    class: 'project6',
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/proj_6.png',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScripts'],
    liveVersion: 'See live',
    source: 'See source',
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
