const filterOptionList = (searchInput) => {
  // Remove first character of the input string, which is the slash symbol
  const keyword = searchInput.slice(1);
  // Get a list of all the options in the popup
  const optionElements = [...document.querySelectorAll('.tag-item')];
  // Iterate through each option
  optionElements.forEach((option) => {
    // Get the title of the option
    const title = option.getAttribute('data-type');

    // Set the display property of the option element based on whether the title matches the keyword
    option.style.display = title.includes(keyword.toLowerCase()) ? 'flex' : 'none';
  });
};

export default filterOptionList;
