const params=location.search
const paramsFilter= new URLSearchParams(params)
const filter=paramsFilter.get('filter');
const type=paramsFilter.get('type');
console.log(type);


(function () {
    BeginFilter('https://www.themealdb.com/api/json/v1/1/filter.php?',filter,type)
  })()
  
  async function BeginFilter(url,cat,typ) {
    $('.loader-container').removeClass('d-none')
   const typeV=typ+"="
    var dataBegin = await fetch(`${url}${typeV}${cat}`)
    var resData = await dataBegin.json()
    console.log(resData)
    displayHomePage(resData)
    $('.loader-container').addClass('d-none')
  }
  
  function displayHomePage(data) {
    console.log(data.meals)
    const mealsArr = data.meals
    let boxx = ''
    mealsArr.forEach(element => {
      boxx += `<div class="col item-container" onclick="showDetails(${element.idMeal})">
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
  function showDetails(id) {
    console.log(id)
    location.href = `./details.html?id=${id}`
  }
  