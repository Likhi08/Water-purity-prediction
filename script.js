document.getElementById("predictionForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values entered by the user
    const ph = parseFloat(document.getElementById("ph").value);
    const turbidity = parseFloat(document.getElementById("turbidity").value);

    // Check if inputs are valid
    if (isNaN(ph) || isNaN(turbidity)) {
        alert("Please enter valid numbers for both pH and Turbidity.");
        return;
    }

    // Prepare input for the model prediction (this is just a mock prediction in the JS code)
    // In reality, you would call a server-side API that runs the model and returns the result.
    const isDrinkable = predictWaterPotability(ph, turbidity);

    // Display the result
    const predictionText = isDrinkable
        ? `The water is drinkable.`
        : `The water is not drinkable.`;

    document.getElementById("predictionText").textContent = predictionText;
});

// Mock prediction function (This should be replaced with an actual API call to a backend model)
function predictWaterPotability(ph, turbidity) {
    // Simulate a simple model decision based on thresholds
    // Example logic: if pH is between 6.5 and 8.5 and turbidity is less than 5, it's drinkable
    if (ph >= 6.5 && ph <= 8.5 && turbidity < 5) {
        return true;
    } else {
        return false;
    }
}