
(function () {
    BeginIngredient()
  })()
  
  async function BeginIngredient() {
    $('.loader-container').removeClass('d-none')
    var dataBegin = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    var resData = await dataBegin.json()
    console.log(resData)
    displayIngredient(resData)
    $('.loader-container').addClass('d-none')
  }

  function displayIngredient(data) {
    console.log(data.categories)
    const mealsArr = data.meals
    let boxx = ''
    
    mealsArr.forEach(element => {
      boxx += `<div class="col item-container text-center p-2" onclick="showIngredient('${element.strIngredient}')">
              <div class=" overflow-hidden">
                  <div class="text-white">
                  <div><i class="fa-solid fa-drumstick-bite fa-4x"></i></div>
                   <p class="fs-2 mb-2">${element.strIngredient}</p>
                  
                  </div>
                </div>
                </div>
              `
    });
    console.log(boxx)
    $('#ROW').html(boxx)
  }
  function showIngredient(Ingredient) {
    console.log(Ingredient)
    location.href = `./categoryFilter.html?filter=${Ingredient}&type=${'i'}`
    
  }
  