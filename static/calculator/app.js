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

// Call the sendCalculation function when a calculation is performed on your calculator.
// This part depends on the existing code in your calculator app.