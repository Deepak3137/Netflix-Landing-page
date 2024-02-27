
const question = document.querySelectorAll(".ques");
const fnt = document.querySelectorAll(".ques i");
const answers = document.querySelectorAll('.ans');

for(let i=0; i<question.length; i++){
  question[i].addEventListener("click" , ()=> {
    if(question[i].style.height === `${75+answers[i].clientHeight}px`){
      question[i].style.height = "75px";
      fnt[i].style.transform = "rotate(0deg)";
    }
    else{
      question[i].style.height = `${75+answers[i].clientHeight}px`;
      fnt[i].style.transform = "rotate(45deg)";
      for(let j=0; j<question.length; j++){
        if(i===j)continue;
        question[j].style.height = "75px";
        fnt[j].style.transform = "rotate(0deg)";
      }
    }
  });
}
