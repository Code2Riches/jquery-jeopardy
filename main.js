let readJeopardyData = async () => {
  let rawJeopardyData = await fetch("jeopardy.json");
  let data = await rawJeopardyData.json();

  let groupedData = _.groupBy(data, "value");

  return groupedData;
};
readJeopardyData();
//========================================================

let gridDiv = document.querySelector("#jeopardy");

let buttonList100 = document.querySelectorAll(".btn-100");
let buttonList200 = document.querySelectorAll(".btn-200");
let buttonList400 = document.querySelectorAll(".btn-400");
let buttonList600 = document.querySelectorAll(".btn-600");
let buttonList800 = document.querySelectorAll(".btn-800");

let displayArea = document.querySelector("#display-area");

let questionObject = {};

//========================================================

let fruitLoop = async () => {
  let dataStream = await readJeopardyData(); //Parsed

  // 100
  for (let i = 0; i < buttonList100.length; i++) {
    let button100 = buttonList100[i];

    let randomNumber1 = Math.ceil(Math.random() * dataStream.$100.length);

    button100.addEventListener("click", () => {
      questionObject = dataStream.$100[randomNumber1];
      console.log(questionObject);
      displayArea.innerText = questionObject.question;
    });
  }

  // 200
  for (let i = 0; i < buttonList200.length; i++) {
    let button200 = buttonList200[i];

    let randomNumber2 = Math.ceil(Math.random() * dataStream.$200.length);

    button200.addEventListener("click", () => {
      questionObject = dataStream.$200[randomNumber2];
      console.log(questionObject);
      displayArea.innerText = questionObject.question;
    });
  }

  //400
  for (let i = 0; i < buttonList400.length; i++) {
    let button400 = buttonList400[i];

    let randomNumber4 = Math.ceil(Math.random() * dataStream.$400.length);

    button400.addEventListener("click", () => {
      questionObject = dataStream.$400[randomNumber4];
      console.log(questionObject);
      displayArea.innerText = questionObject.question;
    });
  }

  // 600
  for (let i = 0; i < buttonList600.length; i++) {
    let button600 = buttonList600[i];

    let randomNumber6 = Math.ceil(Math.random() * dataStream.$600.length);

    button600.addEventListener("click", () => {
      questionObject = dataStream.$600[randomNumber6];
      console.log(questionObject);
      displayArea.innerText = questionObject.question;
    });
  }

  // 800
  for (let i = 0; i < buttonList800.length; i++) {
    let button800 = buttonList800[i];

    let randomNumber8 = Math.ceil(Math.random() * dataStream.$800.length);

    button800.addEventListener("click", () => {
      questionObject = dataStream.$800[randomNumber8];
      console.log(questionObject);
      displayArea.innerText = questionObject.question;
    });
  }
};
fruitLoop();

//==========================================================

let yourScore = 0;
let scoreKeeper = document.querySelector("#score");

let inputBox = document.querySelector("#input-box");
let submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click", () => {
  if (inputBox.value === questionObject.answer) {
    console.log("CORRECT!");
    alert("CORRECT!");

    let newScore = Number(questionObject.value.substring(1, 4));
    yourScore = yourScore + newScore;

    scoreKeeper.innerText = `YOUR SCORE = $${yourScore}`;
    console.log(yourScore);

  } else {
    console.log("Wrong - Go try Wheel of Fortune!");
    alert("Wrong - Go try Wheel of Fortune!");
  }
});
