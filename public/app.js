/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const splashScreenHtml = __webpack_require__(1)
const jeuxHtml = __webpack_require__(2)
const questions = __webpack_require__(3)

const contentContainer = document.getElementById("content")

fetch("https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json")
.then(response => response.json())
.then(data => console.log(data))

function afficheJeux() {
    contentContainer.innerHTML = jeuxHtml
    // affiche les questions
    questions()
}

// intro splash
function afficheSplashScreen() {
  contentContainer.innerHTML = splashScreenHtml;

  setTimeout(
    afficheJeux,
    29000
  )
}
afficheSplashScreen()
// fin intro splash


/***/ }),
/* 1 */
/***/ (function(module, exports) {

const  splashScreenHtml  = `
<div class="starwars-demo">
          <img src="https://sylvainkosc.github.io/planete/1love.png" alt="Star" class="star"/>
          <img src="https://sylvainkosc.github.io/planete/nebuleuse.png" alt="Wars" class="wars"/>
    <h2 class="byline" id="byline">Watch out for the black hole</h2>
    <embed id="lecteur"  src="https://sylvainkosc.github.io/rougerouge.mp3" autostart="true" loop="false" hidden="true"></embed>
</div>
<div id="titles">jdojoqdsoklkdq<div id="titlecontent">

    <p>contentk
    k
    k
    k
    k
    k
    </p>

</div></div>
<div id="galaxy">
            <div class="bg"></div>
            <div class="stars-back"></div>
            <div class="stars-middle"></div>
            <div class="stars-front"></div>
            <div class="bg center"></div>
        </div>`

module.exports = splashScreenHtml


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// intro splash
const jeuxHtml = `


<div id="galaxy">
  <div class="bg"></div>
  <div class="stars-back"></div>
  <div class="stars-middle"></div>
  <div class="stars-front"></div>
  <div class="bg center"></div>
</div>




<div class="container-fluid" >
  <div class="row">
    <div class="col-lg-4" style="height:70px; background-color:green"></div>
    <div class="col-lg-4">
      <img class="logolove" src="https://sylvainkosc.github.io/LOVE.png" alt="logo"/>
    </div>
    <div class="offset-lg-2 col-lg-1" style="height:10px; background-color:green"></div>
  </div>
  <div class="row">   
    <div class="offset-6 col-lg-2" style="height:30px; background-color:green"></div>   
  </div>
  <div class="row"><div class="col-lg-4" style="height:200px"></div></div>
  <div class="row">  
    <div class="col-lg-2" id="quiz">
      <div class='button' id='next'><a href='#'>Next</a></div>
      <div class='button' id='prev'><a href='#'>Prev</a></div>
      <div class='button' id='start'> <a href='#'>Start Over</a></div>
    </div>
    <div class="col-lg-3" style="height:50px; background-color:green"></div>
  </div>
  <div class="row">
    <div class="offset-lg-8 col-lg-2" style="height:20px; background-color:green"></div>
  </div>
</div>
`

module.exports = jeuxHtml


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = (function() {
  var questions = [
  {
    field: "gender",
    question: "Vous recherchez ?",
    choices: [
      {label: 'Une femme', value:"female"},
      {label: 'Un homme', value:"male"},
    ]
  },
  {
    field: "eyeColor",
    question: "Les yeux plutot ?",
    choices: [
      {label: 'Bleus', value: "blue"},
      {label: 'Verts', value: "green"},
      {label: 'Marron', value: "brown"},
      {label: 'Rouge', value: "red"},
      {label: 'Jaune', value: "yellow"},
      {label: 'Orange', value: "orange"},
      {label: 'Noir', value: "black"},
    ],
  },
  {
    field: "hairColor",
    question: "Quelle couleur de cheveux preferez vous ?",
    choices: [
      {label: 'Blanc', value: "white"},
      {label: 'Brun tenebreux', value: "black"},
      {label: 'Chatain', value: "brown"},
      {label: 'Chatain roux', value: "auburn"},
      ]
  },
  {
    field: "skinColor",
    question: "Plutôt bronzé ou albinos ? Dites nous tout.",
    choices: [
      {label: 'Pâle/clair', value: "light"},
      {label: 'Rouge, comme les cocos', value: "red" },
      {label: 'Noir', value: "black"},
      {label: 'Mate', value: "brown"},
      {label: 'Bronze', value: "tan"},
      {label: 'Vert, on ne vous jugeras pas' , value:"green"},
      {label: 'Bleu , on en a bien un ou deux , mais on vous conseille plutôt rencontre-un-schtroumph.com', value:"blue"},
      {label: 'Or , il ne nous reste que C3-PO, faudra faire avec', value:"gold"},
    ]
  },
  {
    field: "height",
    question: "Petite taille ou grand gabarit ?",
    choices: [
      {label: 'Quand c est petit , c est mignon.', value: "small"},
      {label: 'La taille moyenne , c est pas mal.',value: "medium"},
      {label: 'Je les prefere grands.', value: "tall"},
    ]
  },
  { field: "mass",
    question: "Et niveau corpulance ?",
    choices: [
      {label: 'Je prefere les fines personnes.', value: "skinny"},
      {label: 'Une corpulance normale me conviens tres bien.', value: "normal"},
      {label: 'La bonne chaire , ya que ça de vrai !', value: "heavy"},
    ]
  },
  {
    field: "died",
    question: "Plutot vivant ou mort ?",
    choices: [
      {label: 'Vivant c est plutot pas mal non ?', value: "alive"},
      {label: 'Sérieusement ?', value: "rip"},
    ]
  },
  ];

  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
console.log(quiz)
  // Display initial question
  displayNext();

  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();

    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {
      return false;
    }
    choose();

    // If no user selection, progress is stopped

      questionCounter++;
      displayNext();

  });

  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();

    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });

  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();

    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });

  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });

  // Creates and returns the div that contains the questions and
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });

    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);

    var question = $('<p>').append(questions[index].question);
    qElement.append(question);

    var field = $('<input id="field" type="hidden" value="' + questions[index].field + '" />');
    qElement.append(field);

    var radioButtons = createCheckboxes(index);
    qElement.append(radioButtons);

    return qElement;
  }



  // ce qu'on veut obtenir
  // <input type="checkbox" name="eyeColor" value="blue" /> Bleus
  // <input type="checkbox" name="eyeColor" value="green" /> Verts


  // Creates a list of the answer choices as radio inputs
  function createCheckboxes(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      var choice = questions[index].choices[i];
      item = $('<li>');
      input = '<input type="checkbox" name="answer" value="' + choice.value + '" /> ';
      input += choice.label
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }

  // Reads the user selection and pushes the value to an array
  function choose() {
    // Récupère valeur du champ hidden avec id="field" (gender, eyeColor, etc.)
    var field = $('#field').val()
    var checked = $('input[name="answer"]:checked')
    var values = []
    checked.each(function() {
      values.push(this.value)
    })
    console.log(field, values )
    // selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }

  // Displays next requested element
  function displayNext() {
    console.log(quiz)
    quiz.fadeOut(function() {
      $('#question').remove();

      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }

        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){

          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }

  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});

    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }

    // score.append('You got ' + numCorrect + ' questions out of ' +
    //              questions.length + ' right!!!');
    // return score;
  }
})


/***/ })
/******/ ]);