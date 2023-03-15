/* Homework 7
   Exercise 2 JavaScript code
   -- Character List
*/

// Character list. Each house has a name and a code
const houses = [
   {
     code: "ST",
     name: "Stark"
   },
   {
     code: "LA",
     name: "Lannister"
   },
   {
     code: "BA",
     name: "Baratheon"
   },
   {
     code: "TA",
     name: "Targaryen"
   }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
   switch (houseCode) {
      case "ST":
         return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
      case "LA":
         return ["Tywin", "Cersei", "Jaime", "Tyrion"];
      case "BA":
         return ["Robert", "Stannis", "Renly"];
      case "TA":
         return ["Aerys", "Daenerys", "Viserys"];
      default:
         return []; // Empty array
   }
};

// Function to add option
function option(houses, getCharacters) {
   // Get the HTML elements
   const h = document.getElementById("house");
   const c = document.getElementById("characters");

   // Loop through array to get name
   for (const house of houses) {
      const op = document.createElement("option");
      // Give value (code) and text (name) to option
      op.value = house.code;
      op.textContent = house.name;
      h.appendChild(op);
   }
   
   // Show the list after the user selects a house from the dropdown list
   h.addEventListener("change", event => {
      const houseCode = event.target.value; // Assign code to houseCode
      const characters = getCharacters(houseCode); // Return an array
      c.innerHTML = ""; // Clear the previous list of characters (Empty content)
      // Loop through the return array
      for (const character of characters) {
      const list = document.createElement("li");
      list.textContent = character;
      c.appendChild(list);
      }
   });
}
option(houses, getCharacters);