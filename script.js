// alert("By clicking 'OK' you are confirming that you are 21 or older!");

let drinkData;
let allIng;
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
            // console.log(data);
            drinkData = data;
            $ingredients.empty();
            rendor();
        }
    );
}


function rendor() {
    for (let i=1; i<16; i++) {
        let allIng = drinkData.drinks[0][`strIngredient${i}`]
        // console.log(i);
        // console.log(allIng);
        $ingredients.append(allIng);
    }
    $name.text(drinkData.drinks[0].strDrink);
    $category.text(drinkData.drinks[0].strCategory);
    $ingredients.text(drinkData.drinks[0].strIngredient);
    $instructions.text(drinkData.drinks[0].strInstructions);
    $poster.attr("src", drinkData.drinks[0].strDrinkThumb);
};



// event listener (button)
$getDrinkBtn.on("click", getDrink)

