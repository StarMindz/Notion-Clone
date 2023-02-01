// Import stylesheet and handle input function
import './style.css';
import handleInput from './modules/handleInput.js';

// Call the handle input function
handleInput();

// Select toggle icon
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});