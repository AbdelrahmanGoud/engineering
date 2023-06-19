let val_1 = 11;
let cahVal_1 = document.querySelector(".count-sec-6-1");
cahVal_1.innerHTML = val_1;

function changeColor1() {
  let icon_1 = document.getElementById("icon-1");
  let style = window.getComputedStyle(icon_1);

  if (style.getPropertyValue("color") === "rgb(255, 196, 0)") { 
    icon_1.style.color = ""; 
    cahVal_1.style.color = '#888';
    val_1--;

  } else {
   icon_1.style.color = "#ffc400"; 
    cahVal_1.style.color = '#ffc400';
    val_1++;
  }

  cahVal_1.innerHTML = val_1;
}
let val_2 = 17;
let cahVal_2 = document.querySelector(".count-sec-6-2");
cahVal_2.innerHTML = val_2;

function changeColor2() {
  let icon_2 = document.getElementById("icon-2");
  let style = window.getComputedStyle(icon_2);

  if (style.getPropertyValue("color") === "rgb(255, 196, 0)") { 
    icon_2.style.color = ""; 
    cahVal_2.style.color = '#888';
    val_2--;

  } else {
   icon_2.style.color = "#ffc400"; 
    cahVal_2.style.color = '#ffc400';
    val_2++;
  }

  cahVal_2.innerHTML = val_2;
}

let val_3 = 21;
let cahVal_3 = document.querySelector(".count-sec-6-3");
cahVal_3.innerHTML = val_3;

function changeColor3() {
  let icon_3 = document.getElementById("icon-3");
  let style = window.getComputedStyle(icon_3);

  if (style.getPropertyValue("color") === "rgb(255, 196, 0)") { 
    icon_3.style.color = ""; 
    cahVal_3.style.color = '#888';
    val_3--;

  } else {
   icon_3.style.color = "#ffc400"; 
    cahVal_3.style.color = '#ffc400';
    val_3++;
  }

  cahVal_3.innerHTML = val_3;
}

let showDate=new Date();
let dispalyDate=showDate.getFullYear();
document.querySelector(".serv-foot").innerHTML=`Copyright ${dispalyDate}. All rights reserved.`;
$(".arrow-up").fadeOut(10)
window.onscroll=()=>{
  if(scrollY>=5) 
  {
    $(".arrow-up").fadeIn(100)
     $(".head").hide()
     $(".navbar").addClass("fixed-top")
  }       
  else
  {
    $(".arrow-up").fadeOut(100)
    $(".head").show()  
    $(".navbar").removeClass("fixed-top") 
  }
}

$(".arrow-up").click(function(){
$("body,html").animate({scrollTop:"0"},1000)          
})

$(document).ready(function(){
  $(".lodspanir").fadeOut(1000,function(){
    $("body").css({overflow:"auto"});
  });
});