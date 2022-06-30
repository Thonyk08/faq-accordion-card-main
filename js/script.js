const question = document.querySelectorAll(".question");
/* const answer = document.querySelector(".answer");
const arrow = document.querySelector(".arrow");
 */



let arr = Array.prototype.slice.call(question);


question.forEach(quest => {
    quest.addEventListener("click", function(e) {
        // console.log(e);
        for (var i=0; i < arr.length; ++i ){
            arr[i].nextElementSibling.classList.add("hidden");
            arr[i].firstElementChild.classList.remove("rotate");
            arr[i].classList.remove("selected");
        }
      
        e.target.nextElementSibling.classList.toggle("hidden");
        e.target.firstElementChild.classList.toggle("rotate");
        e.target.classList.toggle("selected");
        
    })
});



