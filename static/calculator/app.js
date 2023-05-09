// This function sends a calculation to the backend server via a POST request
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

// Perform the calculation and display the result
const result = calculate(num1, num2, operation);

// Send the calculation to the server
sendCalculation({
  num1: num1,
  num2: num2,
  operation: operation,
  result: result,
});


// Call the sendCalculation function when a calculation is performed on your calculator.
// This part depends on the existing code in your calculator app.