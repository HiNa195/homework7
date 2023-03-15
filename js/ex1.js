/* Homework 7
   Exercise 1 JavaScript code
   -- Interactive Quiz
*/

// List of questions (statement + answer)
const questions = [
    {
      statement: "2+2?",
      answer: "2+2 = 4"
    },
    {
      statement: "In which year did Christopher Columbus discover America?",
      answer: "1492"
    },
    {
      statement:
        "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
      answer: "The E letter"
    }
];

function statement (ques) {
    const x = document.getElementById("content");
    const y = document.createElement("p");
    for (let i = 0; i < ques.length; i++) {
        const s = document.createElement("p");
        // Use innerHTML instead of textContent
        s.innerHTML = `<span style="font-weight: bold;">Question ${i+1}: </span>` + ques[i].statement;
        y.appendChild(s);
        const a = document.createElement("p");
        a.textContent = ques[i].answer;
        const b = document.createElement("button");
        b.id = "button";
        b.innerHTML = "Show Answer";
        y.appendChild(b);
        const e = document.getElementById("button");
        b.addEventListener("click", () => {
            b.insertAdjacentText("afterend", a.textContent);
            b.remove();
        });
        /* Or with target
        b.addEventListener("click", ({target: button}) => {
            button.insertAdjacentText("afterend", a.textContent);
            button.remove();
        // "beforebegin" works as well
        */
    }
    x.appendChild(y);
}
statement(questions);


/* Long version
function statement (ques) {
    const x = document.getElementById("content");
    const y = document.createElement("p");
    for (let i = 0; i < ques.length; i++) {
        const s = document.createElement("p");
        const count = document.createElement("span");
        count.textContent = `Question ${i+1}: `;
        count.style.fontWeight = "bold";
        s.appendChild(count);
        // Insert text using innerHTML instead of textContent
        // Use innerHTML to change the content of an element within the DOM
        // Use textContent is used to modify the text content of a DOM element
        s.innerHTML += ques[i].statement;
        // Or use s.innerHTML += `<p>${ques[i].statement}</p>`;
        // but it will move to next line
        y.appendChild(s);
        const a = document.createElement("p");
        a.textContent = ques[i].answer;
        y.appendChild(a);
    }
    x.appendChild(y);
}
statement(questions);
*/