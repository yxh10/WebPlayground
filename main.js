import './style.css'

let sections = document.querySelectorAll('section');
let numOfSectiions = sections.length;
let nav = document.querySelector('.dal-dictionary-definitions nav');
let navLinks = document.querySelectorAll('a');

let navHeight = nav.offsetHeight;

console.log('active');

const dictionaries = document.querySelector('#dal-dctionaries');

window.addEventListener('scroll', (event) => {
  let currentPos = window.pageYOffset;
  console.log('window pageYOffset ' + currentPos);
  console.log('window scrollY ' + window.scrollY);
  console.log(sections);
  
  for(let i = 0; i < numOfSectiions; i++) {
    let section = sections[i];
    let sectionRect = section.getBoundingClientRect();

    let sectionTop = getElementTop(section);
    let sectionbottom = sectionTop + sectionRect.height;
    
    if (currentPos >= sectionTop && currentPos <= sectionbottom) {
      navLinks.forEach(element => {
        element.classList.remove('active');
      });

      nav.querySelector(`a[href="#${section.id}"]`).classList.add('active');
    }

    console.log(section);
  }
});


function getElementTop(element) {
  let sectionRect = element.getBoundingClientRect();
  return sectionRect.top + window.scrollY - navHeight;
}
navLinks.forEach(element => {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    let sectionId = element.getAttribute('href').replace('#', '');
    let section = document.getElementById(sectionId);
    let sectionTop = getElementTop(section);

    window.scroll({ top: sectionTop, behavior: 'smooth' });
  });
})

