const questions = [
  {
    'que': 'What is the primary purpose of marinating food?',
    'a': 'Adding sweetness',
    'b': 'Enhancing flavor',
    'c': 'Increasing cooking time',
    'd': 'Reducing freshness',
    'correct' : 'b'
  },
  {
    'que': 'Which cooking method is best for retaining nutrients in vegetables?',
    'a': 'Boiling',
    'b': 'Frying',
    'c': 'Grilling',
    'd': 'Steaming',
    'correct' : 'd'
  },
  {
    'que': 'What does "baking" involve?',
    'a': 'Cooking with oil',
    'b': 'Cooking with steam',
    'c': 'Cooking with dry heat in an oven',
    'd': 'Cooking with direct flame',
    'correct' : 'c'
  },
  {
    'que': 'Which spice is known as the "king of spices"?',
    'a': 'Cumin',
    'b': 'Pepper',
    'c': 'Saffron',
    'd': 'Paprika',
    'correct' : 'c'
  },
  {
    'que': 'In baking, what does the term "proofing" refer to?',
    'a': 'Testing for doneness',
    'b': 'Allowing dough to rise',
    'c': 'Adding extra flavor',
    'd': 'Mixing ingredients',
    'correct' : 'b'
  },
  {
    'que': 'What is the main ingredient in the South Indian dish "Idli," known for its soft and fluffy texture?',
    'a': 'Rice flour',
    'b': 'Semolina (Sooji)',
    'c': 'Fermented lentil and rice batter',
    'd': 'Chickpea flour (Besan)',
    'correct' : 'c'
  },
  {
    'que': 'What distinguishes "Chole Bhature" from other Indian bread-based dishes?',
    'a': "It's deep-fried",
    'b': "It's sweet",
    'c': "It's stuffed with potatoes",
    'd': "It's served with yogurt",
    'correct' : 'a'
  },
  {
    'que': 'Which famous Indian dish consists of marinated and grilled chicken or paneer served in a creamy tomato-based sauce?',
    'a': 'Biryani',
    'b': 'Tandoori Chicken',
    'c': 'Rogan Josh',
    'd': 'Chicken Korma',
    'correct' : 'b'
  },
  {
    'que': 'What is the purpose of "blanching" in cooking?',
    'a': 'Adding flavor to a dish',
    'b': 'Grilling meat to perfection',
    'c': 'Preserving food',
    'd': `Partially cooking a food item,  
    usually vegetables and rapidly cooling it in ice water`,
    'correct' : 'd'
  },
  {
    'que': 'What is the main ingredient in the traditional North Indian dish "Sarson da Saag"?',
    'a': 'Spinach',
    'b': 'Mustard greens',
    'c': 'Fenugreek leaves',
    'd': 'Collard greens',
    'correct' : 'b'
  },
  {
    'que': 'What is the main ingredient in the dessert "Rasmalai"?',
    'a': 'Ricotta cheese',
    'b': 'Cottage cheese ',
    'c': 'Khoya',
    'd': 'Greek yogurt',
    'correct' : 'b'
  },
  {
    'que': 'What is the key ingredient in the Korean dish Kimchi?',
    'a': 'Cabbage',
    'b': 'Tofu',
    'c': 'Seaweed',
    'd': 'Rice',
    'correct' : 'a'
  },
  {
    'que': 'In Mexican cuisine, what is the name of the spicy sauce made from chili peppers, vinegar, and spices?',
    'a': 'Salsa',
    'b': 'Guacamole',
    'c': 'Pico de Gallo',
    'd': 'Hot Sauce',
    'correct' : 'd'
  },
  {
    'que': 'Which nut is a key ingredient in classic pesto sauce?',
    'a': 'Almonds',
    'b': 'Walnuts',
    'c': 'Pine Nuts',
    'd': 'Peanuts',
    'correct' : 'c'
  },
  {
    'que': 'What is the purpose of resting meat after cooking?',
    'a': 'Cooling it down',
    'b': 'Enhancing tenderness and juiciness',
    'c': 'Adding flavor',
    'd': 'Speeding up digestion',
    'correct' : 'b'
  }
]

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs =document.querySelectorAll(".options")
var random = Math.floor(Math.random()*total)

const startingMinutes = 3;
let time =startingMinutes * 60;
let refreshIntervalId = setInterval(updateCountdown,1000)
const countdownEl= document.getElementById("countdown");
// setInterval(updateCountdown, 1000);
function updateCountdown(){
  const minutes = Math.floor(time/60);
  let seconds = time %60;
  seconds =  seconds < 10 ? `0` + seconds : seconds;
  countdownEl.innerHTML = `${minutes}: ${seconds}`;
  time--;
  // if (time < 0) { //stop the setInterval whe time = 0 for avoid negative time
    // clearInterval(refreshIntervalId);

}
// }

const loadQuestion = () => {
  if(total === index ){
    return endQuiz();
  }
  reset();
  const data = questions[index];
  quesBox.innerText = `${index+1+")"} ${data.que}`;
  optionInputs[0].nextElementSibling.innerHTML = data.a;
  optionInputs[1].nextElementSibling.innerHTML = data.b;
  optionInputs[2].nextElementSibling.innerHTML = data.c;
  optionInputs[3].nextElementSibling.innerHTML = data.d;
}

const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans === data.correct){
    right++;
  }else{
    wrong++;
  }
  index++;
  loadQuestion();
  return;
}

const getAnswer = () =>{ 
  let answer;
  optionInputs.forEach(
    (input) => {
      if (input.checked){
        answer = input.value;
      }
    }
  )
  return answer;
}

const reset =() =>{
  optionInputs.forEach(
    (input) => {
      input.checked = false;
    }
  )
}

const endQuiz = () =>{
   clearInterval(refreshIntervalId); 
   document.getElementById("box").innerHTML = `
   <h1> Thank you for playing the quiz!!! </h1>
   <h2> You scored ${right} / ${total} ! </h2>
   `
}
loadQuestion();


const endQuizByTimer = () => {
  endQuiz();
}

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? `0` + seconds : seconds;
  countdownEl.innerHTML = `${minutes}:${seconds}`;

  if (time <= 0) {
    // Stop the setInterval when time is 0 to avoid negative time
    clearInterval(refreshIntervalId);
    
    // Call the function to end the quiz
    endQuiz();
  } else {
    time--;
  }
}

