const display = document.querySelector('.calculator__display');
const buttons = document.querySelectorAll('.calculator__button');

let currentValue = '0';

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonValue = button.textContent;

    if (buttonValue === 'C') {
      currentValue = '0';
    } else if (buttonValue === 'CE') {
      currentValue = '0';
    } else if (buttonValue === '=') {
      currentValue = eval(currentValue);
    } else if (buttonValue === '.') {
      if (!currentValue.includes('.')) {
        currentValue += '.';
      }
    } else {
      if (currentValue === '0') {
        currentValue = buttonValue;
      } else {
        currentValue += buttonValue;
      }
    }

    display.textContent = currentValue;
  });
});
