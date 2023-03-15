/* Homework 7
   Exercise 3 JavaScript code
   -- Autocomplete
*/

// Country list
const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Autria",
    "Azerbaïjan"
];

// Fuction to complete suggestion
function showSuggestion(countryList) {
    // Get the HTML elements
    const c = document.getElementById("country");
    const s = document.getElementById("suggestions");
    
    // Use input of addEventListener
    c.addEventListener("input", function() {
        const input = c.value;
        // Create an empty array to store the input string
        const suggestArray = [];
        // Filter the country list based on the input string
        // Push a complete word to the array after every input
        for (let i = 0; i < countryList.length; i++) {
            if (countryList[i].toLowerCase().startsWith(input.toLowerCase())) {
                suggestArray.push(countryList[i]);
            }
        }
        // Display the filtered country list as suggestions
        s.innerHTML = ""; // Clear the suggestion list whenever the input text changes
        for (let i = 0; i < suggestArray.length; i++) {
            const suggestion = document.createElement("div");
            suggestion.textContent = suggestArray[i];
            // Add a new class to the element
            suggestion.classList.add("suggestion");
            // Add name to the text box after click
            suggestion.addEventListener("click", function() {
                c.value = suggestArray[i];
                s.innerHTML = ""; // Clear the suggestion list
            });
            s.appendChild(suggestion);
        }
    });
}
showSuggestion(countryList);