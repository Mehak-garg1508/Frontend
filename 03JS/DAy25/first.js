const cricketQuiz = [
  {
    question: "Who is known as the 'God of Cricket'?",
    options: ["Virat Kohli", "Sachin Tendulkar", "Ricky Ponting", "Brian Lara"],
    answer: "Sachin Tendulkar",
  },
  {
    question: "Which country won the first ever Cricket World Cup in 1975?",
    options: ["India", "West Indies", "Australia", "England"],
    answer: "West Indies",
  },
  {
    question: "Who was the captain of India during the 2011 World Cup victory?",
    options: ["Sourav Ganguly", "MS Dhoni", "Virat Kohli", "Rahul Dravid"],
    answer: "MS Dhoni",
  },
  {
    question: "How many players are there in a cricket team?",
    options: ["9", "10", "11", "12"],
    answer: "11",
  },
  {
    question: "Which bowler has taken the most wickets in Test cricket?",
    options: [
      "Muttiah Muralitharan",
      "Shane Warne",
      "Anil Kumble",
      "James Anderson",
    ],
    answer: "Muttiah Muralitharan",
  },
  {
    question:
      "What is the maximum number of overs in a One Day International match?",
    options: ["20", "40", "50", "60"],
    answer: "50",
  },
  {
    question: "Who scored the first double century in ODI cricket?",
    options: [
      "Rohit Sharma",
      "Virender Sehwag",
      "Sachin Tendulkar",
      "Chris Gayle",
    ],
    answer: "Sachin Tendulkar",
  },
  {
    question: "Which Indian player is known as ‘Captain Cool’?",
    options: ["Virat Kohli", "MS Dhoni", "Sourav Ganguly", "Kapil Dev"],
    answer: "MS Dhoni",
  },
  {
    question: "In which year did India win its first Cricket World Cup?",
    options: ["1983", "1987", "1996", "2003"],
    answer: "1983",
  },
  {
    question: "Which format of cricket is the shortest?",
    options: ["Test", "ODI", "T20", "Super Over"],
    answer: "T20",
  },
  {
    question: "Who holds the record for the fastest century in ODI cricket?",
    options: [
      "AB de Villiers",
      "Corey Anderson",
      "Virat Kohli",
      "Shahid Afridi",
    ],
    answer: "AB de Villiers",
  },
  {
    question: "What does LBW stand for in cricket?",
    options: [
      "Leg Behind Wicket",
      "Leg Before Wicket",
      "Left Bat Wicket",
      "Long Ball Wide",
    ],
    answer: "Leg Before Wicket",
  },
  {
    question: "Who bowled the first ball in the history of IPL?",
    options: [
      "Praveen Kumar",
      "Shoaib Akhtar",
      "Glenn McGrath",
      "Lasith Malinga",
    ],
    answer: "Praveen Kumar",
  },
  {
    question: "Which Indian player has scored the most runs in Test cricket?",
    options: [
      "Virat Kohli",
      "Sachin Tendulkar",
      "Rahul Dravid",
      "Sunil Gavaskar",
    ],
    answer: "Sachin Tendulkar",
  },
  {
    question: "Which cricketer is nicknamed 'The Wall'?",
    options: [
      "Rahul Dravid",
      "Jacques Kallis",
      "Steve Smith",
      "Kane Williamson",
    ],
    answer: "Rahul Dravid",
  },
  {
    question: "What is the color of the ball used in Test matches?",
    options: ["White", "Red", "Pink", "Orange"],
    answer: "Red",
  },
  {
    question: "Who was the first captain of the Indian Test team?",
    options: ["Kapil Dev", "C.K. Nayudu", "Lala Amarnath", "Vijay Hazare"],
    answer: "C.K. Nayudu",
  },
  {
    question: "Which stadium is known as the 'Home of Cricket'?",
    options: ["Eden Gardens", "Melbourne Cricket Ground", "Lord’s", "The Oval"],
    answer: "Lord’s",
  },
  {
    question: "Who has hit the most sixes in international cricket?",
    options: ["Chris Gayle", "Rohit Sharma", "MS Dhoni", "Shahid Afridi"],
    answer: "Rohit Sharma",
  },
  {
    question: "Which team won the ICC T20 World Cup 2024?",
    options: ["India", "Australia", "England", "South Africa"],
    answer: "India",
  },
];

// Selecting 5 random question
function RandomQuestion() {
  const data = new Set();
  while (data.size != 5) {
    const index = Math.floor(Math.random() * cricketQuiz.length);
    data.add(cricketQuiz[index]);
  }
  return [...data];
}

const problem = RandomQuestion();
const original_ans = {};

const form = document.querySelector("form");

problem.forEach((obj, index) => {
  const div_ele = document.createElement("div");
  div_ele.id = "question";
  original_ans[`q${index + 1}`] = obj["answer"];
  // Selecting question
  const para = document.createElement("p");
  para.innerText = `${index + 1}. ${obj["question"]}`;
  div_ele.appendChild(para);
  // Selecting four options
  obj["options"].forEach((data) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = `q${index + 1}`;
    input.value = data;
    label.appendChild(input);
    const textNode = document.createTextNode(data);
    label.appendChild(textNode);
    div_ele.appendChild(label);
    div_ele.appendChild(document.createElement("br"));
  });
  form.appendChild(div_ele);
});

const button = document.createElement("button");
button.type = "submit";
button.className = "btn";
button.textContent = "Submit";
form.appendChild(button);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // Submitting and checking
  const d = new FormData(form);
  let result = 0;
  for (let [key, value] of d.entries()) {
    if (original_ans[key] == value) {
      result++;
    }
  }
  const out = document.getElementById("out");
  out.innerText = `${result} out of 5.`;
});
