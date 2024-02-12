document.addEventListener('DOMContentLoaded', function() {
    const screen = document.querySelector('.screen');
    const buttons = document.querySelectorAll('.buttons button');
  
    let currentNumber = '0';
    let prevNumber = '';
    let operation = '';
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const value = button.textContent;
  
        if (!isNaN(value) || value === '.') {
          if (currentNumber === '0' && value !== '.') {
            currentNumber = '';
          }
          currentNumber += value;
        } else if (value === 'C') {
          currentNumber = '0';
          prevNumber = '';
          operation = '';
        } else if (value === '=') {
          if (prevNumber !== '') {
            currentNumber = eval(prevNumber + operation + currentNumber).toString();
            prevNumber = '';
            operation = '';
          }
        } else if (value === '√') {
          currentNumber = Math.sqrt(parseFloat(currentNumber)).toString();
        } else if (value === 'x²') {
          currentNumber = (parseFloat(currentNumber) ** 2).toString();
        } else if (value === 'x³') {
          currentNumber = (parseFloat(currentNumber) ** 3).toString();
        } else if (value === 'x^y') {
          prevNumber = currentNumber;
          currentNumber = '0';
          operation = '^';
        } else if (value === 'sin') {
          currentNumber = Math.sin(parseFloat(currentNumber)).toString();
        } else if (value === 'cos') {
          currentNumber = Math.cos(parseFloat(currentNumber)).toString();
        } else if (value === 'tan') {
          currentNumber = Math.tan(parseFloat(currentNumber)).toString();
        } else if (value === 'log') {
          currentNumber = Math.log10(parseFloat(currentNumber)).toString();
        } else if (value === 'ln') {
          currentNumber = Math.log(parseFloat(currentNumber)).toString();
        } else if (value === 'π') {
          currentNumber = Math.PI.toString();
        } else {
          if (prevNumber !== '') {
            currentNumber = eval(prevNumber + operation + currentNumber).toString();
            prevNumber = currentNumber;
            operation = value;
          } else {
            prevNumber = currentNumber;
            operation = value;
            currentNumber = '0';
          }
        }
  
        screen.textContent = currentNumber;
      });
    });
  });
  