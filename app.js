const display = document.querySelector('.calculator__display');
const keys = document.querySelector('.calculator__keys');
let current = '0';
let operator = null;
let previous = null;

keys.addEventListener('click', e => {
  if (!e.target.matches('button')) return;
  const key = e.target;
  const action = key.dataset.action;
  const keyContent = key.textContent;

  if (key.classList.contains('number')) {
    current = current === '0' ? keyContent : current + keyContent;
    display.textContent = current;
  }

  if (key.classList.contains('operator')) {
    operator = action;
    previous = parseFloat(current);
    current = '0';
  }

  if (action === 'calculate') {
    const currentNum = parseFloat(current);
    let result = 0;
    switch (operator) {
      case 'add': result = previous + currentNum; break;
      case 'subtract': result = previous - currentNum; break;
      case 'multiply': result = previous * currentNum; break;
      case 'divide': result = previous / currentNum; break;
    }
    current = result.toString();
    display.textContent = current;
    operator = previous = null;
  }

  if (action === 'clear') {
    current = '0';
    operator = previous = null;
    display.textContent = current;
  }
});
