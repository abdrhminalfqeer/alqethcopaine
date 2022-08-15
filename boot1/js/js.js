let i22=document.querySelector('.i22') 


 window.onscroll =   function(){

  if (this.scrollY >=400) {
   i22.classList.add("i33")
  
  } else{
   
    i22.classList.remove("i33")
  }

}     
i22.onclick=function () {
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })

}