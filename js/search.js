
//  import {displayHomePage,showDetails} from './main.js'
 async function getDataName(name){
 
    var dataBegin = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    var resData = await dataBegin.json()
     console.log(resData)
     displayHomePage(resData)


 }
 function searchName(name) {
    getDataName(name);
 }
 async function getDataLetter(Letter){
 
    var dataBegin = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${Letter}`)
    var resData = await dataBegin.json()
     console.log(resData)
     displayHomePage(resData)


 }
 function searchLetter(Letter) {
    getDataLetter(Letter);
 }
 function displayHomePage(data) {
    console.log(data.meals)
    const mealsArr=data.meals
   let boxx=''
    mealsArr.forEach(element => {
        boxx+=`<div class="col item-container" onclick="showDetails(${element.idMeal})">
        <div class=" overflow-hidden rounded position-relative">
            <div class="overlayWhite d-flex p-4 align-items-center">
             <p class="fs-3">${element.strMeal}</p>
            
            </div>
            <img src="${element.strMealThumb}" alt="1" class="w-100 object-fit-cove">
          </div>
          </div>
        `
    });
    console.log(boxx)
    $('#ROW').html(boxx)
} 
 function showDetails(id){
  console.log(id)
  location.href=`./details.html?id=${id}`
 }