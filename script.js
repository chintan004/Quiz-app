const quizDB= [
    {
        question: "Q1: What is the full form of HTML?",
        a: "hello TO My land",
        b: "Hey Text Markup Language",
        c: "HyperText Markup Language",
        d: "Hypertext Markup Language",
        ans:"ans4"
    },{
        question: "Q2: Which features of oops desribed the reusability of code?",
        a: "Abstrction",
        b: "Encapsulation",
        c: "Ploymorphism",
        d: "Inheritance",
        ans:"ans4"
    },{
        question: "Q3: Which among the following features is not in the general definition of OOPs?",
        a: "Modularity",
        b: "Efficient Code",
        c: "Code resuability",
        d: "Duplicate or Redundant Data",
        ans:"ans4"
    },{
        question: "Q4: A single program of OOPs contains classes?",
        a: "Only 1",
        b: "Only 99",
        c: "only 100",
        d: "Any number",
        ans:"ans4"
    }

]; 

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showscore = document.querySelector('#showscore');
let questionCount = 0;
let score= 0;
const loadQuestion=()=>{
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c; 
    option4.innerText = questionList.d;
}
loadQuestion();

const getcheckanswer=()=>{
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectall=()=>{
    answers.forEach((curAnsElem)=> curAnsElem.checked=false);
}


submit.addEventListener('click', ()=>{
    const checkedanswer = getcheckanswer();
    console.log(checkedanswer);

    if(checkedanswer === quizDB[questionCount].ans){
         score++;
    };
    questionCount++;

    deselectall();
   
    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showscore.innerHTML = `
            <h3>you scored ${score}/${quizDB.length} </h3>
            <button class="btn" onclick="location.reload()">play again</button>
        `;

        showscore.classList.remove('scorearea');

    }
});