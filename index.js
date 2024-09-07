//change navbar style on scroll

window.addEventListener("scroll" , () =>{
    document.querySelector("nav").classList.toggle("window-scroll", window.scrollY > 0)
})


const faqs =document.querySelectorAll(".faq ");
faqs.forEach(faq => {
    faq.addEventListener("click",()=>{
        faq.classList.toggle("open");

        const icon = faq.querySelector(".faq-icon i");
        if(icon.className === "fa-solid fa-plus"){
            icon.className = "fa-solid fa-minus"
        }
        else{
            icon.className ="fa-solid fa-plus";
        }
    })
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 35,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
        breakpoints:{
            600:{
                slidesPerView: 2
            }
        }
  });

