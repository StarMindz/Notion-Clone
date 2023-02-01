import { displayPopup, hidePopup } from './tagSelector.js';
import filterOptionList from './filter.js';
import createTag from './tag.js';
import createNewInput from './createNewInput.js';
import handleOptionClick from './option.js';

const handleInput = (input = document.getElementById('1')) => {
  // Add 'input' event listener to the input element
  input.addEventListener('input', () => {
    // If the first character is "/", show the popup and filter options
    if (input.textContent[0] === '/') {
      displayPopup(input);
      filterOptionList(input.textContent);
      handleOptionClick(input);
    } else {
      hidePopup();
    }
  });

  // Add 'keydown' event listener to the input element
  input.addEventListener('keydown', (event) => {
    // If 'Enter' key is pressed, prevent the default behavior and create a tag
    if (event.key === 'Enter') {
      event.preventDefault();
      const inputText = input.textContent;

      if (inputText[0] === '/' && inputText[1] === '1') {
        createTag(input, 'h1');
      }

      if (inputText[0] === '/' && inputText[1] === '2') {
        createTag(input, 'h2');
      }

      if (inputText[0] === '/' && inputText[1] === '3') {
        createTag(input, 'h3');
      }

      if (inputText[0] === '/' && inputText[1] === '4') {
        createTag(input, 'h4');
      }

      if (inputText[0] === '/' && inputText[1] === '5') {
        createTag(input, 'h5');
      }

      if (inputText[0] === '/' && inputText[1] === '6') {
        createTag(input, 'h6');
      }

      if (inputText === '') {
        input.removeAttribute('placeholder');
      }

      const nextInput = createNewInput(input, input.id);
      handleInput(nextInput);
    }

    // If 'Backspace' key is pressed and input is empty, remove it and focus on the previous input
    if (event.key === 'Backspace' && input.textContent.length === 0 && input.id !== '1') {
      const prevInput = input.previousElementSibling;
      input.remove();
      prevInput.setAttribute('placeholder', "Type '/' for blocks");
      prevInput.textContent += ' ';
      prevInput.focus();
      const range = document.createRange();
      const selection = window.getSelection();
      range.setStart(prevInput.childNodes[0] || prevInput, prevInput.textContent.length);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  });
};

export default handleInput;
