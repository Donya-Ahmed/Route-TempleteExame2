
(function () {
    BeginArea()
  })()
  
  async function BeginArea() {
    $('.loader-container').removeClass('d-none')
    var dataBegin = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    var resData = await dataBegin.json()
    console.log(resData)
    displayArea(resData)
    $('.loader-container').addClass('d-none')
  }

  function displayArea(data) {
    console.log(data.categories)
    const mealsArr = data.meals
    let boxx = ''
    
    mealsArr.forEach(element => {
      boxx += `<div class="col item-container text-center p-2" onclick="showArea('${element.strArea}')">
              <div class=" overflow-hidden">
                  <div class="text-white">
                  <div><i class="fa-solid fa-house-laptop fa-4x"></i></div>
                   <p class="fs-2 mb-2">${element.strArea}</p>
                  
                  </div>
                </div>
                </div>
              `
    });
    console.log(boxx)
    $('#ROW').html(boxx)
  }
  function showArea(Area) {
    console.log(Area)
    location.href = `./categoryFilter.html?filter=${Area}&type=${'a'}`
    
  }
  