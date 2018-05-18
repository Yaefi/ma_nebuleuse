(function() {
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
  // {
  //   question: "Les yeux plutôt ?",
  //   choices: ['Bleus','Verts','Marron','Borgne'],
  //   correctAnswer: 0,1,2,3,
  // }, {
  //   question: "What is 8*9?",
  //   choices: [72, 99, 108, 134, 156],
  //   correctAnswer: 0,1,2,3,
  // }, {
  //   question: "What is 1*7?",
  //   choices: [4, 5, 6, 7, 8],
  //   correctAnswer: 0,1,2,3,
  // }, {
  //   question: "What is 8*8?",
  //   choices: [20, 30, 40, 50, 64],
  //   correctAnswer: 0,1,2,3,
  // }
  ];
  
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  
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
})();