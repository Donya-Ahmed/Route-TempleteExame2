//  import {displayHomePage,showDetails} from './main.js'
(function () {
    BeginCategory()
  })()
  
  async function BeginCategory() {
    $('.loader-container').removeClass('d-none')
    var dataBegin = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    var resData = await dataBegin.json()
    console.log(resData)
    displayCategory(resData)
    $('.loader-container').addClass('d-none')
  }

  function displayCategory(data) {
    console.log(data.categories)
    const mealsArr = data.categories
    let boxx = ''
    
    mealsArr.forEach(element => {
      boxx += `<div class="col item-container text-center p-2" onclick="showCategory('${element.strCategory}')">
              <div class=" overflow-hidden rounded position-relative">
                  <div class="overlayWhite">
                   <p class="fs-2 mb-2">${element.strCategory}</p>
                   <p class="">${element.strCategoryDescription.split('.')[0]}</p>
                  
                  </div>
                  <img src="${element.strCategoryThumb}" alt="1" class="w-100 object-fit-cove">
                </div>
                </div>
              `
    });
    console.log(boxx)
    $('#ROW').html(boxx)
  }
  function showCategory(category) {
    console.log(category)
    location.href = `./categoryFilter.html?filter=${category}&type=${'c'}`
    
  }
  