import Icon from '../images/text.svg';

let tagOpen = false;
let activeBlock = -1;

// Block options array
const blockOptions = [
  { type: 'h1', title: 'Heading 1', description: 'Big Section heading' },
  { type: 'h2', title: 'Heading 2', description: 'Medium Section heading' },
  { type: 'h3', title: 'Heading 3', description: 'Small Section heading' },
  { type: 'h4', title: 'Heading 4', description: 'Big Subsection heading' },
  { type: 'h5', title: 'Heading 5', description: 'Medium Subsection heading' },
  { type: 'h6', title: 'Heading 6', description: 'Small Subsection heading' },
  { type: 'p', title: 'Paragraph', description: 'Normal text' },
];

// Generate HTML for each block option
const createOption = ({ title, description, type }) => {
  const optionHtml = `
    <button class="tag-item" data-type="${type}">
      <img src="${Icon}" alt="big Tee" width="29">
      <div>
        <h4>${title}</h4>
        <p>${description}</p>
      </div>
    </button>
  `;
  return optionHtml;
};

// Create popup
const displayPopup = (currentInput) => {
  if (tagOpen) return;

  const popupHTML = `
    <div class="popup">
      <div class="popup-head">
        <h4>Basic Blocks</h4>
      </div>
      <div class="tag-list" role="listitem">
        ${blockOptions.map(createOption).join('')}
      </div>
    </div>
  `;
  currentInput.insertAdjacentHTML('afterend', popupHTML);
  tagOpen = true;
};

// Remove popup
const hidePopup = () => {
  const popup = document.querySelector('.popup');
  if (popup) {
    popup.remove();
    tagOpen = false;
  }
};

// Handle arrow key navigation and escape key to close popup
document.addEventListener('keydown', (event) => {
  const blockButtons = [...document.querySelectorAll('.tag-item')];
  if (!tagOpen) return;

  switch (event.key) {
    case 'ArrowDown':
      activeBlock = Math.min(activeBlock + 1, blockButtons.length - 1);
      blockButtons[activeBlock].focus();
      break;
    case 'ArrowUp':
      activeBlock = Math.max(activeBlock - 1, 0);
      blockButtons[activeBlock].focus();
      break;
    case 'Escape':
      hidePopup();
      break;
    default:
      break;
  }
});

// Close popup on outside click
document.addEventListener('click', (event) => {
  if (event.target.closest('.popup')) return;
  hidePopup();
});

export { displayPopup, hidePopup };
