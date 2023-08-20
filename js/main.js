
let boxLeft = `<div class="leftSide d-flex">
<div id="list" class="bg-dark text-white ">
    <ul class="list-unstyled">
        <li class="mb-3 li-animate li-animate1"><a href="./search.html" class="text-decoration-none text-white fs-5 ">Search</a></li>
        <li class="mb-3  li-animate li-animate2"><a href="./category.html" class="text-decoration-none text-white fs-5">Categories</a></li>
        <li class="mb-3   li-animate li-animate3"><a href="./area.html" class="text-decoration-none text-white fs-5">Area</a></li>
        <li class="mb-3 li-animate li-animate4"><a href="./ingradient.html" class="text-decoration-none text-white fs-5">Ingradients</a></li>
        <li class="mb-3 li-animate li-animate5"><a href="./contact.html" class="text-decoration-none text-white fs-5">Contact Us</a></li>

    </ul>

</div>
<div id="menu" class="text-dark  d-flex align-items-center bg-white px-3">
<i class="fa-solid fa-bars fs-1 spanii"></i>

</div>

</div>`
$('#LeftSideNav').html(boxLeft)


const widthList=$('#list').innerWidth()
$('#menu').click(function () {
   
    if($(".leftSide").css("left")=="0px"){
        $(".spanii").removeClass('fa-x')
        $(".spanii").addClass('fa-bars')
        $('.li-animate').removeClass('animate__slideInLeft')
        $(".leftSide").animate({left: `-${widthList}`});
        
    }
    else{
        $(".spanii").removeClass('fa-bars')
        $(".spanii").addClass('fa-x')
        $('.li-animate').addClass('animate__slideInLeft')
       $(".leftSide").animate({left: 0});
    }   
 })

// export function displayHomePage(data) {
//     console.log(data.meals)
//     const mealsArr=data.meals
//    let boxx=''
//     mealsArr.forEach(element => {
//         boxx+=`<div class="col item-container" onclick="showDetails(${element.idMeal})">
//         <div class=" overflow-hidden rounded position-relative">
//             <div class="overlayWhite d-flex p-4 align-items-center">
//              <p class="fs-3">${element.strMeal}</p>
            
//             </div>
//             <img src="${element.strMealThumb}" alt="1" class="w-100 object-fit-cove">
//           </div>
//           </div>
//         `
//     });
//     console.log(boxx)
//     $('#ROW').html(boxx)
// } 
// export function showDetails(id){
//   console.log(id)
//   location.href=`./details.html?id=${id}`
// }
