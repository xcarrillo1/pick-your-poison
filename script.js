let drinkData;
const $getDrinkBtn = $("#getDrinkBtn");
const $mainContent = $("main");
const $name = $("#name");
const $category = $("#category");
const $ingredients = $("#ingredients");
const $instructions = $("#instructions");
const $poster = $("#poster");



function getDrink(event) {
    event.preventDefault();
    $.ajax({
        url: "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    }).then(
        (data) => {
            console.log(data);
            drinkData = data;
            rendor(); 
        }
    );
}

function rendor() {
    $name.text(drinkData.drinks[0].strDrink);
    $category.text(drinkData.drinks[0].strCategory);
    $ingredients.text(drinkData.drinks[0].strIngredient1);
    $instructions.text(drinkData.drinks[0].strInstructions);
    $poster.attr("src", drinkData.drinks[0].strDrinkThumb);
};

// event listener (button)
$getDrinkBtn.on("click", getDrink)