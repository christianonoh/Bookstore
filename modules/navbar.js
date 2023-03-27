export const setupNavigation = () => {
  const displayListLink = document.getElementById('displayList');
  const displayAddLink = document.getElementById('displayAdd');
  const displayContactLink = document.getElementById('displayContact');

  // get the content sections
  const listDisplaySection = document.querySelector('.listDisplays');
  const inputDataSection = document.getElementById('inputData');
  const contactSection = document.getElementById('contact');

  // add click event listeners to the navigation links
  displayListLink.addEventListener('click', () => {
    listDisplaySection.classList.remove('hidden');
    inputDataSection.classList.add('hidden');
    contactSection.classList.add('hidden');
  });

  displayAddLink.addEventListener('click', () => {
    listDisplaySection.classList.add('hidden');
    inputDataSection.classList.remove('hidden');
    contactSection.classList.add('hidden');
  });

  displayContactLink.addEventListener('click', () => {
    listDisplaySection.classList.add('hidden');
    inputDataSection.classList.add('hidden');
    contactSection.classList.remove('hidden');
  });
};
export default setupNavigation;
