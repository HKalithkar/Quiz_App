//Questions List
let quizData = [
    {
        question: "What does CSS stand for ?",
        options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which of the following is NOT a programming language commonly used in web development?",
        options: ["HTML", "JavaScript", "Python", "PHP"],
        answer: "Python"
    },
    {
        question: "What is the purpose of HTML?",
        options: ["To create dynamic and interactive web pages", "To style the appearance of web pages", "To structure content on web pages", "To provide server-side functionality"],
        answer: "To structure content on web pages"
    },
    {
        question: "Which of the following tags is used to define an unordered list in HTML?",
        options: ["<ul>", "<ol>", "<li>", "<dl>"],
        answer: "<ul>"
    },
    {
        question: "What is the purpose of JavaScript?",
        options: ["To style web pages", "To structure content on web pages", "To provide server-side functionality", "To add interactivity to web pages"],
        answer: "To add interactivity to web pages"
    },
    {
        question: "Which of the following is NOT a valid method to declare a variable in JavaScript?",
        options: ["let", "const", "var", "def"],
        answer: "def"
    },
    {
        question: "What does the 'href' attribute in an anchor (<a>) tag specify?",
        options: ["The hypertext reference of the link", "The height of the link", "The hover effect of the link", "The heading of the link"],
        answer: "The hypertext reference of the link"
    },
    {
        question: "Which of the following is used to add styling to a webpage in CSS?",
        options: ["JavaScript", "HTML", "Python", "CSS"],
        answer: "CSS"
    },
    {
        question: "Which of the following is used to add comments in HTML?",
        options: ["<!-- Comment -->", "// Comment", "/* Comment */", "// Comment //"],
        answer: "<!-- Comment -->"
    },
    {
        question: "Which of the following is a valid way to select an HTML element using CSS?",
        options: ["#elementName", ".elementName", "elementName", "$elementName"],
        answer: "elementName"
    },
    {
        question: "What does the 'src' attribute in an image (<img>) tag specify?",
        options: ["The source code of the image", "The size of the image", "The source file or URL of the image", "The style of the image"],
        answer: "The source file or URL of the image"
    },
    {
        question: "Which of the following is used to add interactivity to a webpage?",
        options: ["HTML", "CSS", "JavaScript", "PHP"],
        answer: "JavaScript"
    },
    {
        question: "What does the term 'HTTP' stand for?",
        options: ["Hyper Transfer Text Protocol", "Hypertext Transfer Protocol", "Hyper Text Transfer Process", "Hypertext Text Protocol"],
        answer: "Hypertext Transfer Protocol"
    },
    {
        question: "Which of the following is used to create a new branch in Git?",
        options: ["git branch", "git add", "git commit", "git merge"],
        answer: "git branch"
    },
    {
        question: "Which of the following is NOT a valid HTTP request method?",
        options: ["GET", "POST", "PULL", "DELETE"],
        answer: "PULL"
    },
    {
        question: "What does the 'id' attribute in HTML provide?",
        options: ["A unique identifier for an element", "A class for an element", "The style for an element", "The name of an element"],
        answer: "A unique identifier for an element"
    },
    {
        question: "What is the purpose of the 'viewport' meta tag in HTML?",
        options: ["To specify the width of the webpage", "To define the visible area of the webpage", "To set the font size of the webpage", "To specify the background color of the webpage"],
        answer: "To define the visible area of the webpage"
    },
    {
        question: "Which of the following is NOT a valid data type in JavaScript?",
        options: ["String", "Boolean", "Integer", "Object"],
        answer: "Integer"
    },
    {
        question: "Which of the following is NOT a valid way to include CSS in an HTML document?",
        options: ["External stylesheet", "Internal stylesheet", "Inline stylesheet", "Embedded stylesheet"],
        answer: "Embedded stylesheet"
    },
    {
        question: "What does the term 'API' stand for in web development?",
        options: ["Advanced Programming Interface", "Application Programming Interface", "Advanced Protocol Interface", "Application Protocol Interface"],
        answer: "Application Programming Interface"
    }    
]

let displayData = []

for(let i=0; i<quizData.length; i++) {
    let x = Math.floor(Math.random() * quizData.length);
    let temp = quizData[i];
    quizData[i] = quizData[x];
    quizData[x] = temp;
}

for(let i=0; i<10; i++) {
    displayData.push(quizData[i]);
}

//Declaring variables
let hideClickDiv = document.getElementById("hide-click");
let questionDiv = document.getElementById("question");
let time;   //Timer
let questionCount = 0;  //To check the question count
let timerField = document.getElementById("timer");  //Timer element
let scoreField = document.getElementById("score");  //Score
let questionField = document.querySelector("#question h2");
let optionsField = document.querySelectorAll("#options button");    //Options
let submitButton = document.getElementById("submit");
let answerField = document.getElementById("answer");
let count = 0;
let scoreNum = 0;

//hide() function
function hide() {
    hideClickDiv.innerHTML = "";
    questionDiv.classList.remove("hidden");
    time = 300;
    timerField.textContent = "Time left: " + time;
    let timeInterval = setInterval(function() {     //Timer
        if(time > 0) {
            time--;
            if(time < 10) {
                timerField.style.color = "red";
            }
            timerField.textContent = "Time left: " + time;
        }
        else {
            clearInterval(timeInterval);
            alert("Time's up");
        }
    }, 1000);
}

//Initial Score
scoreField.textContent = "Score: " + (scoreNum) + " / " + (displayData.length);

//First Question
questionField.textContent = displayData[count].question;
for(let i=0; i<optionsField.length; i++) {
    optionsField[i].textContent = displayData[count].options[i];
}

//Submit button
submitButton.addEventListener("click", () => {
    if(count < displayData.length) {
        count++;
        questionField.textContent = displayData[count].question;
        for(let i=0; i<optionsField.length; i++) {
            optionsField[i].textContent = displayData[count].options[i];
            optionsField[i].style.backgroundColor = "black";
            optionsField[i].removeAttribute("disabled");
        }
    }
    else {
        alert("Quiz Completed");
    }
    submitButton.setAttribute("disabled", "disabled");
    answerField.textContent = "";
});

//Check whether user clicked correct option or wrong
optionsField.forEach( option => {
    option.addEventListener("click", ()=> {
        if(option.textContent == displayData[count].answer) {
            option.style.backgroundColor = "green";
            scoreField.textContent = "Score: " + (++scoreNum) + " / " + (displayData.length);
            answerField.style.color = "green";
            answerField.textContent = "Yes, that's correct"
        }
        else {
            option.style.backgroundColor = "red";
            answerField.style.color = "red";
            answerField.textContent = "No, the correct answer is: " + displayData[count].answer;
        }
        submitButton.removeAttribute("disabled");
        for(let i=0; i<optionsField.length; i++) {
            if(optionsField[i] == option) {
                continue;
            }
            optionsField[i].setAttribute("disabled", "disabled");
        }
    })
}
);