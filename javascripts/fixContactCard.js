const contactCard = document.querySelector('.card-contact');
const projectsCard = document.querySelector('.card-projects');
const contactCardBottomLayer = document.querySelector('.card-contact-bottom-layer');

function fixContactCard() {
  if (window.pageYOffset > (contactCard.offsetTop - 20) && window.screen.width < 850) { // 20 is the margin
    contactCard.classList.add('fixed-card');
    contactCardBottomLayer.style.height = `${contactCard.clientHeight + 40}px`; // 40 is the margin * 2
    contactCardBottomLayer.style.visibility = 'visible';
  }
  if (window.pageYOffset < projectsCard.offsetTop && window.screen.width < 850) {
    contactCardBottomLayer.style.visibility = 'hidden';
    contactCard.classList.remove('fixed-card');
  }
}

window.addEventListener('scroll', fixContactCard);
