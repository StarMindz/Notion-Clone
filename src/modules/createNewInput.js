// Create a new input element and insert it after the current input
const createNewInput = (currentInputElement, currentId) => {
  // Create a new div element
  const newInputElement = document.createElement('div');

  // Add the 'input' class to the new element
  newInputElement.classList.add('input');

  // Set attributes for the new element
  newInputElement.setAttribute('contenteditable', true);
  newInputElement.setAttribute('spellcheck', true);
  newInputElement.setAttribute('placeholder', 'Type / for blocks, @ to link docs or people');
  newInputElement.setAttribute('id', `${Number(currentId) + 1}`);

  // Insert the new element after the current input
  currentInputElement.insertAdjacentElement('afterend', newInputElement);

  // Focus on the new input element
  newInputElement.focus();

  // Return the new input element
  return newInputElement;
};

// Export the createNewInput function
export default createNewInput;
