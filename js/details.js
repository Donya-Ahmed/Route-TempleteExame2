const paramsSearch = location.search
const params = new URLSearchParams(paramsSearch)
const id = params.get('id');
(async function () {
    $('.loader-container').removeClass('d-none')
    var dataDetails = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    var resDetails = await dataDetails.json()
    console.log(resDetails)
    displayDetails(resDetails)
    $('.loader-container').addClass('d-none')
})();
function removeEmptyValues(object) {
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            var value = object[key];
            if (value === null || value === undefined || value === '' || value === ' ') {
                delete object[key];
            }
        }
    }
    return object
}
function makeARR(object,key) {
    var z = Object.keys(object).filter(function (k) {
        return k.indexOf(key) == 0;
    }).reduce(function (newData, k) {
        newData[k] = object[k];

        return newData;
    }, {});
    return z
}
function displayDetails(meal) {
    const mealData=meal.meals[0]
    const returnMakeARRM=makeARR(mealData,'strMeasure')
    const newDaMesure = removeEmptyValues(returnMakeARRM)
    const Rcipe1 = Object.values(newDaMesure)

    const returnMakeARRI=makeARR(mealData,'strIngredient')
    const newDaIngragient = removeEmptyValues(returnMakeARRI)
    const Rcipe2 = Object.values(newDaIngragient)
    let Rcipe=[]
    for (let i = 0; i < Rcipe1.length; i++) {
        Rcipe.push(Rcipe1[i]+" "+Rcipe2[i])
        
    }
    console.log(Rcipe)
    let boxTags = ``
    const tags=mealData.strTags
    if(tags!=null){
       const tagsArr=tags.split(',')
       tagsArr.forEach((item) => {
        boxTags += `<span class="Recipes  alert alert-danger p-1">${item}</span>`
    })
    }
    
   
    let boxRecipes = ``
    Rcipe.forEach((item) => {
        boxRecipes += `<span class="Recipes  alert alert-info p-1">${item}</span>`
    })
    let box = `<div class='col-md-4 text-white'>
    <div>
    <img src="${mealData.strMealThumb}" alt="1" class="w-100 object-fit-cover rounded"></div>
     <h3>${mealData.strMeal}</h3>
  </div>
  <div class='col-md-8 text-white'>
 <div class="mb-2">
 <h3>Instructions</h3>
 <p>${mealData.strInstructions}</p>
 </div>
 <div class="mb-2">
 <h3>Area :${mealData.strArea}</h3>

 </div>
 <div class="mb-2">
 <h3>Category :${mealData.strCategory}</h3>

 </div>
 <div class="mb-2">
 <h3>Recipes :</h3>
 <p>${boxRecipes}</p>
 </div>
 <div>
 <h3>Tags :</h3>
 <p>${boxTags}</p>
 </div>
 <div>

 <a class="btn btn-success" href=${mealData.strSource}>Source</a>
 <a class="btn btn-danger" href=${mealData.strYoutube}>Youtube</a>
 </div>
  </div>

  
  
  `

    $('#ROW').html(box)
}

