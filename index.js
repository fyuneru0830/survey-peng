
Survey
.StylesManager
.applyTheme("modern");

var json = {
title: "American History",
showProgressBar: "bottom",
showTimerPanel: "top",
maxTimeToFinishPage: 1000,
maxTimeToFinish: 25000,
firstPageIsStarted: true,
startSurveyText: "abcs",

pages: [
    {
        questions: [
            {
                type: "html",
                html: "You are about to start quiz by history. <br/>You have 10 seconds for every page and 25 seconds for the whole survey of 3 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready."
            }
        ]
    },  
    
],
completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

//add the question in array
var questionQ1Array=[
    {
        questions: [
            {
                type: "radiogroup",
                name: "libertyordeath",
                title: "Who said 'Give me liberty or give me death?'",
                choicesOrder: "random",
                choices: [
                    "John Hancock", "James Madison", "Patrick Henry", "Samuel Adams"
                ],
                correctAnswer: "Patrick Henry"
            }
        ]
    }, 
    {
        maxTimeToFinish: 15,
        questions: [
            {
                type: "radiogroup",
                name: "magnacarta",
                title: "What is the Magna Carta?",
                choicesOrder: "random",
                choices: [
                    "The foundation of the British parliamentary system", "The Great Seal of the monarchs of England", "The French Declaration of the Rights of Man", "The charter signed by the Pilgrims on the Mayflower"
                ],
                correctAnswer: "The foundation of the British parliamentary system"
            }
        ]
    },
    {
        questions: [
            {
                type:"html",
                html:"<audio src=\"1.mp3\" autoplay></audio>",
            },
            {
                type: "radiogroup",
                name: "civilwar",
                
                title: "When was the Civil War? ",
                choices: [
                    "1750-1800", "1800-1850", "1850-1900", "1900-1950", "after 1950"
                ],
                correctAnswer: "1850-1900"
            }
        ]
    },
]
//shuffle the page
console.log(json);
const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

questionQ1Array = shuffle(questionQ1Array);

Array.prototype.push.apply(json.pages, questionQ1Array);
console.log(json);

//---------------------
window.survey = new Survey.Model(json);
survey
.onComplete
.add(function (sender) {
    document
        .querySelector('#surveyResult')
        .textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
});

var app = new Vue({
el: '#surveyElement',
data: {
    survey: survey
}
});