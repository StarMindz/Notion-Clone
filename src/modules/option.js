import createTag from './tag.js';

// Handle click events on options in the popup
const handleOptionClick = (input) => {
  const options = document.querySelectorAll('.tag-item');
  options.forEach((option) => {
    option.addEventListener('click', () => {
      const tag = option.getAttribute('data-type');
      createTag(input, tag);
    });
  });
};

export default handleOptionClick;
