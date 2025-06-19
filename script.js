const searchbyarea = document.querySelector('#searchbyarea')
const searchbyname = document.querySelector('#searchbyname')
const searchbyingred = document.querySelector('#searchbyingred')
const byarea = document.querySelector('#byarea')
const byname = document.querySelector('#byname')
const byingred = document.querySelector('#byingred')


searchbyarea.addEventListener('click', function (e) {
    byarea.style.display = "block";
    byname.style.display = "none";
    byingred.style.display = "none";
});
searchbyname.addEventListener('click', function (e) {
    byarea.style.display = "none";
    byname.style.display = "block";
    byingred.style.display = "none";
});
searchbyingred.addEventListener('click', function (e) {
    byarea.style.display = "none";
    byname.style.display = "none";
    byingred.style.display = "block";
});


const namesearchForm = document.querySelector('#byname_search')
const namemealGrid = document.querySelector('#byname_results .mealGrid')



namesearchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    namemealGrid.innerHTML = ""
    const search = namesearchForm.elements.searchInput.value;
    namesearchForm.elements.searchInput.value = ''
    console.log(search)
    getRecipebyname(search);
});

const mealnotFound = function (search) {
    const h3 = document.createElement('H3')
    h3.innerHTML = `No meals found for '${search}', Try something else!`
    h3.style.color = 'darkred'
    namemealGrid.append(h3)
}

const getRecipebyname = async (search) => {
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        const data = await res.json()
        const meals = data.meals

        if (!meals) {
            console.log("No meals found!")
            mealnotFound(search)
        }

        else {
            for (let meal of meals) {
                console.log(meal)
                const h4 = document.createElement("H4")
                const img = document.createElement('IMG')
                h4.innerHTML = meal.strMeal
                const src = meal.strMealThumb
                img.src = src;

                const mealCard = document.createElement('div')
                mealCard.classList.add('mealCard')
                mealCard.append(img)
                mealCard.append(h4)

                namemealGrid.append(mealCard)
            }
        }

    } catch (e) {
        console.log("ERROR!!!", e);
    }
};

const areasearchForm = document.querySelector('#byarea_search')
const areamealGrid = document.querySelector('#byarea_results .mealGrid')



areasearchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    areamealGrid.innerHTML = ""
    const search = areasearchForm.elements.searchInput.value;
    areasearchForm.elements.searchInput.value = ''
    console.log(search)
    getRecipebyarea(search);
});

const areanotFound = function (search) {
    const h3 = document.createElement('H3')
    h3.innerHTML = `No meals found in area '${search}', Try something else!`
    h3.style.color = 'darkred'
    areamealGrid.append(h3)
}

const getRecipebyarea = async (search) => {
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${search}`)
        const data = await res.json()
        const meals = data.meals

        if (!meals) {
            console.log("No meals found!")
            areanotFound(search)
        }

        else {
            for (let meal of meals) {
                console.log(meal)
                const h4 = document.createElement("H4")
                const img = document.createElement('IMG')
                h4.innerHTML = meal.strMeal
                const src = meal.strMealThumb
                img.src = src;

                const mealCard = document.createElement('div')
                mealCard.classList.add('mealCard')
                mealCard.append(img)
                mealCard.append(h4)

                areamealGrid.append(mealCard)
            }
        }

    } catch (e) {
        console.log("ERROR!!!", e);
    }
};


const ingredsearchForm = document.querySelector('#byingred_search')
const ingredmealGrid = document.querySelector('#byingred_results .mealGrid')



ingredsearchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    ingredmealGrid.innerHTML = ""
    const search = ingredsearchForm.elements.searchInput.value;
    ingredsearchForm.elements.searchInput.value = ''
    console.log(search)
    getRecipebyingred(search);
});

const ingrednotFound = function (search) {
    const h3 = document.createElement('H3')
    h3.innerHTML = `No meals found for ingredient '${search}', Try something else!`
    h3.style.color = 'darkred'
    ingredmealGrid.append(h3)
}

const getRecipebyingred = async (search) => {
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`)
        const data = await res.json()
        const meals = data.meals

        if (!meals) {
            console.log("No meals found!")
            ingrednotFound(search)
        }

        else {
            for (let meal of meals) {
                console.log(meal)
                const h4 = document.createElement("H4")
                const img = document.createElement('IMG')
                h4.innerHTML = meal.strMeal
                const src = meal.strMealThumb
                img.src = src;

                const mealCard = document.createElement('div')
                mealCard.classList.add('mealCard')
                mealCard.append(img)
                mealCard.append(h4)

                ingredmealGrid.append(mealCard)
            }
        }

    } catch (e) {
        console.log("ERROR!!!", e);
    }
};
const aboutTab = document.querySelector('#aboutTab')
const randomTab = document.querySelector('#randomTab')
const homeTab = document.querySelector('#homeTab')
const random = document.querySelector('#generateRandom')
const about = document.querySelector('#about')
const main = document.querySelector('#main')
const randomDiv = document.querySelector('#randomDiv')

aboutTab.addEventListener('click', (e) => {
    e.preventDefault();
    about.style.display = "block";
    main.style.display = "none";
    randomDiv.style.display = "none";
})
randomTab.addEventListener('click', (e) => {
    e.preventDefault();
    about.style.display = "none";
    main.style.display = "none";
    randomDiv.style.display = "block";
})
homeTab.addEventListener('click', (e) => {
    e.preventDefault();
    about.style.display = "none";
    main.style.display = "block";
    randomDiv.style.display = "none";
})
const randomRecipe = document.querySelector("#randomRecipe")

random.addEventListener('click', (e) => {
    e.preventDefault();
    randomRecipe.innerHTML = ""
    console.log("generate random!")
    getRandom();
})

const getRandom = async () => {
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        const data = await res.json()
        const meal = data.meals


        console.log(meal)
        const h4 = document.createElement("H4")
        const img = document.createElement('IMG')
        h4.innerHTML = meal[0].strMeal
        const src = meal[0].strMealThumb

        img.src = src;

        const mealCard = document.createElement('div')
        mealCard.classList.add('mealCard')
        mealCard.append(img)
        mealCard.append(h4)

        randomRecipe.append(mealCard)
    }


    catch (e) {
        console.log("ERROR!!!", e);
    }
};

