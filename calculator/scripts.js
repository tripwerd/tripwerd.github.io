const display = document.getElementById('display');

function appendNumber(number) {
	display.value += number;
}

function appendOperator(operator) {
	display.value += operator;
}

function clearDisplay() {
	display.value = '';
}

function calculateResult() {
  try {
    const result = eval(display.value);
    display.value = result;

    const matches = display.value.match(/(\d+)([+\-*/])(\d+)/);
    if (matches) {
      const num1 = parseInt(matches[1]);
      const operation = matches[2];
      const num2 = parseInt(matches[3]);

      sendCalculation({
        num1: num1,
        num2: num2,
        operation: operation,
        result: result,
      });
    }
  } catch (error) {
    alert('Invalid input');
  }
}

async function sendCalculation(calculation) {
  try {
    const response = await fetch('http://localhost:3000/calculate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(calculation),
    });

    if (!response.ok) {
      throw new Error('An error occurred while sending the calculation.');
    }

    const result = await response.json();
    console.log('Calculation saved with _id:', result._id);
  } catch (err) {
    console.error(err);
  }
}
