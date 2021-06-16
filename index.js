   
           function makeCros(x){
            x.classList.toggle("change");
        }
       

       var cross = document.getElementById("menu") ;

       cross.addEventListener("click", function showMenus(){
           document.getElementById("menu-contents").classList.toggle("showMenus");
       }) ;

// //  Automatic hoover active nav li
//  const topStudies = document.querySelectorAll(".top") ;
//  const navli = document.querySelectorAll(".menu-contents ul li");

// //  event listener starting 
// window.addEventListener("scroll", ()=>{
//   let current = "";

//   topStudies.forEach( div =>{
//      const studiesTop = div.offsetTop ;
//     //  console.log(studiesTop);
//      const studiesHeight = div.clientHeight;
//     //  console.log(studiesHeight) ;
//     if(pageYOffset >= studiesTop ){
//       current = div.getAttribute("id");
      
//     }
//   })

// })
