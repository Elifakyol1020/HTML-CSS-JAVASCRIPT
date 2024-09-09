const correctAnswers=['E','E','E','E'];
const form=document.querySelector('.question-form');
const result=document.querySelector('.result');

form.addEventListener('submit',e=>{
    e.preventDefault();//sayfanın yenilenmemesi için

    let score=0;//başlangıç değeri
    const userAnswer=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];

    userAnswer.forEach((answer,index)=>{
        if(answer===correctAnswers[index]){
            score+=25;
        }
    })
    result.classList.remove('d-none');//divde bulunan class içindeki display:none özelliğini siler.
    let puan=0;
    const bastir=setInterval(() => {//sürekli kod çalışır.
        result.querySelector('span').textContent=`${puan}%`;
        if(puan===score){
            clearInterval(bastir);
        }
        else{
            puan++;
        }
    }, 10)
})
// setTimeout(()=>{//bu kod sadece bir kere çalışır.
//     console.log("elif");
// },2000);
// setInterval(()=>{//sürekli kod çalışır.
//     console.log("elif");
// },1000)
// let i=0;
// const bastır=setInterval(()=>{
//     console.log("elif");
//     i++;
//     if(i==4){
//         clearInterval(bastir);//durdurma metodu
//     }
// },1000)