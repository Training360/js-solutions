const handleClick = () => {
  const buttons = document.querySelectorAll('button.button');
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', () =>
      // eslint-disable-next-line no-console
      console.log(buttons[i].textContent));
  }
};
