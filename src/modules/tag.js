import { hidePopup } from './tagSelector.js';

const createTag = (input, tag) => {
  input.className = 'input';
  input.classList.add(tag);
  input.textContent = input.textContent.slice(2).trim();

  if (tag === 'p') input.setAttribute('placeholder', 'Paragraph');
  else input.setAttribute('placeholder', `Heading ${tag}`);

  input.focus();
  hidePopup();
};

export default createTag;
