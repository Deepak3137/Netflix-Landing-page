
const question = document.querySelectorAll(".ques");
const fnt = document.querySelectorAll(".ques i");

for(let i=0; i<question.length; i++){
  question[i].addEventListener("click" , ()=> {
    if(question[i].style.height === "auto"){
      question[i].style.height = "75px";
      fnt[i].style.transform = "rotate(0deg)";
    }
    else{
      question[i].style.height = "auto";
      fnt[i].style.transform = "rotate(45deg)";
      for(let j=0; j<question.length; j++){
        if(i===j)continue;
        question[j].style.height = "75px";
        fnt[j].style.transform = "rotate(0deg)";
      }
    }
  });
}