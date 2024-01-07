"use-strict";
let q1 = {
  question: "The fastest animal",
  option: ["(a) dog", "(b) snake", "(c) cheetah"],
  ans: function () {
    return this.option[2];
  },
};
let q2 = {
  question: "The most populated country in the world",
  option: ["(a) Usa", "(b) China", "(c) India"],
  ans: function () {
    return this.option[1];
  },
};
let q3 = {
  question: "Who is the first man to walk on the moon",
  option: ["(a) Neil Amstrong", "(b) Bills Gates", "(c) Charles Babbagge"],
  ans: function () {
    return this.option[0];
  },
};
let q4 = {
  question: "The largest desert in the world is known as ",
  option: ["(a) Everest", "(b) Sahara", "(c) Kilo mani"],
  ans: function () {
    return this.option[1];
  },
};
let q5 = {
  question: "Who is Known as the father of computer",
  option: ["(a) Charles Babbage", "(b) Elon Musk", "(c) Mark zuckerberg"],
  ans: function () {
    return this.option[0];
  },
};
let q6 = {
  question: "The Largest animal on land",
  option: ["(a) giraffe", "(b) Buffallo", "(c) Africa elephant"],
  ans: function () {
    return this.option[2];
  },
};
let q7 = {
  question: "Which country is the largest in Africa by landmass",
  option: ["(a) Nigeria", "(b) South-Africa", "(c) Algeria"],
  ans: function () {
    return this.option[2];
  },
};
let q8 = {
  question: "Who was the first woman to win a Nobel Prize (in 1903)",
  option: ["(a) Marie curie", "(b) mary slessor", "(c) jenifer lopez"],
  ans: function () {
    return this.option[0];
  },
};
let q9 = {
  question: "Worship of Krishna is observed by which Religious Faith",
  option: ["(a) Hinduism", "(b) Islam", "(c) Christainity"],
  ans: function () {
    return this.option[0];
  },
};
let q10 = {
  question: "Riyadh is the capital of this Middle-Eastern country.",
  option: ["(a) UAE", "(b) Qatar", "(c) Saudi Arabia"],
  ans: function () {
    return this.option[2];
  },
};

const allQuestions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
const question_space = document.querySelector(".question-para");
const ans_space = document.querySelectorAll(".ans");
const scoreBox = document.querySelectorAll(".score");
//function to display questions and answer randomly in the browser
let random = Math.floor(Math.random() * allQuestions.length);
let randomQuestion;

function displayQuestion() {
  randomQuestion = allQuestions[random];

  question_space.innerText = `${allQuestions[random].question}?`;
  for (let [i, x] of ans_space.entries()) {
    x.innerText = `${allQuestions[random].option[i]}`;
  }
  return allQuestions.length;
}
displayQuestion();
let oop;
let w = 0;
let winpoint = 0;
for (let i = 0; i < ans_space.length; i++) {
  ans_space[i].addEventListener("click", () => {
    if (ans_space[i].textContent === randomQuestion.ans()) {
      oop = displayQuestion();
      if (oop === 1) {
        clearGameUI();
      } else {
        gameEngine();
        scoreBox[w++].style.backgroundColor = "green";
        winpoint++;
      }
    } else if (ans_space[i].textContent !== randomQuestion.ans()) {
      oop = displayQuestion();
      if (oop === 1) {
        clearGameUI();
      } else {
        gameEngine();
        scoreBox[w++].style.backgroundColor = "red";
      }
    }
  });
}
function gameEngine() {
  allQuestions.splice(allQuestions.indexOf(randomQuestion), 1);
  random = Math.floor(Math.random() * allQuestions.length);
  displayQuestion();
}
function clearGameUI() {
  alert(`game over ${winpoint>=5? `great`: 'you lose'} , you score ${winpoint + 1}  out of 10`);
  question_space.innerText = null;
  for (let [i, x] of ans_space.entries()) {
    x.innerText = null;
  }
  for (let y of scoreBox) {
    y.style.backgroundColor = 'transparent'
  }
}
const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ab74cadf7bmsha9b70794acdd7aap1ff578jsn03d64d09218c',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};
 async function getMovie(){
  try {
    const response = await fetch(url, options);
    const result = await response;
    const final = await result.json()
    console.log(final.d);
  } catch (error) {
    console.error(error);
  }
  }
 getMovie()

 

