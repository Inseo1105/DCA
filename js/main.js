let img1 = document.querySelector("b1")
let img2 = document.querySelector("b2")
let img3 = document.querySelector("b3")

window.addEventListener("scroll", function() {
    let value = window.scrollY;

    if(value > 1200){
        img1.style.animation="backslide 1s ease-out forwards";
    } else{
        img1.style.animation="slide 1s ease-out";
    }

    if(value > 1000){
        img2.style.animation="slideb 1s ease-out";
    } else{
        img2.style.animation="backslideb 1s ease-out forwards";
    }

    if(value > 1400){
        img3.style.animation="slide 1s ease-out";
    } else{
        img3.style.animation="backslide 1s ease-out forwards";
    }
});

const backToTopButton = document.querySelector(".back-to-top");

// 스크롤 이벤트
window.addEventListener("scroll", function () {  
  if (window.pageYOffset > 200) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Page Up 클릭 이벤트
backToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

    // 눈내리기
    function createSnow(){
        const el = document.createElement("div");
        el.classList.add('snows');
        el.style.marginLeft = randomPostion() + 'px';
        document.body.appendChild(el);
      }
      
      function randomPostion(){
        return Math.floor(Math.random() * window.innerWidth);
      }

      for(let i=0; i<300; i++){
        createSnow();
      }