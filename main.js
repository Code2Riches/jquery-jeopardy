let readJeopardyData = async () => {

    let rawJeopardyData = await fetch('jeopardy.json');
    let data = await rawJeopardyData.json();
    // console.log(data);

    let groupedData = _.groupBy(data, 'value')
    // console.log(groupedData.$100);
    // console.log(groupedData.$200);
    // console.log(groupedData.$400);
    // console.log(groupedData.$600);
    // console.log(groupedData.$800);

    return groupedData
    //console.log(groupedData)
}

readJeopardyData();

let gridDiv = document.querySelector('#jeopardy')

let buttonList100 = document.querySelectorAll('.btn.btn-100')
let buttonList200 = document.querySelectorAll('.btn.btn-200')
let buttonList400 = document.querySelectorAll('.btn.btn-400')
let buttonList600 = document.querySelectorAll('.btn.btn-600')
let buttonList800 = document.querySelectorAll('.btn.btn-800')

let displayArea = document.querySelector('#display-area')

let inputBox = document.querySelector('#input-box')
let submitButton = document.querySelector('#submit-button')

let forLoops = async () => {
    let dataStream = await readJeopardyData();

    let randomNumber = Math.ceil(Math.random() * dataStream.$100.length); // How to handle for $200 & others? Inside for loop?

    for (let i = 0; i < buttonList100.length; i++) {
        let button100 = buttonList100[i];

        let questionObject = dataStream.$100[randomNumber] //Linked to submitButton - How to unlink/make global?

        button100.addEventListener("click", () => {
        console.log(questionObject)
        displayArea.innerText = questionObject.question
        });

        submitButton.addEventListener('click', () => {
            // console.log('WTF?!')
            if(inputBox.value === questionObject.answer){
                console.log('Correct!')
            } else {
                console.log("Wrong - Go try Wheel of Fortune!")
            }
        });
    }

    for (let i = 0; i < buttonList200.length; i++) {
        let button200 = buttonList200[i];

        let questionObject = dataStream.$200[randomNumber]

        button200.addEventListener("click", () => {
        console.log(questionObject)
        displayArea.innerText = questionObject.question
        });

        submitButton.addEventListener('click', () => {
            // console.log('WTF?!')
            if(inputBox.value === questionObject.answer){
                console.log('Correct!')
            } else {
                console.log("Wrong - Go try Wheel of Fortune!")
            }
        });
    }

    for (let i = 0; i < buttonList400.length; i++) {
        let button400 = buttonList400[i];

        button400.addEventListener("click", () => {
        console.log(button400.classList);
        console.log(button400.id);
        });
    }

    for (let i = 0; i < buttonList600.length; i++) {
        let button600 = buttonList600[i];

        button600.addEventListener("click", () => {
        console.log(button600.classList);
        console.log(button600.id);
        });
    }

    for (let i = 0; i < buttonList800.length; i++) {
        let button800 = buttonList800[i];

        button800.addEventListener("click", () => {
        console.log(button800.classList);
        console.log(button800.id);
        });
    }

};


forLoops()