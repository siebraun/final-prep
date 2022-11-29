let ingredCount = 3;
let instCount = 3;

function initListeners() {
  $("#addIngred").on("click", (e) => {
    // console.log("hi!");

    $(".formIngredients").append(
      `<input id="ingred$(ingredCount)" placeholder="Ingredient # ${
        ingredCount + 1
      }" type="text">`
    );

    ingredCount++;
    console.log(ingredCount);
  });

  // add instructions
  $("#addInst").on("click", (e) => {
    // console.log("hi!");

    $(".formInstructions").append(
      `<input id="inst$(instCount)" placeholder="Instruction #${
        instCount + 1
      }" type="text">`
    );

    instCount++;
    console.log(instCount);
  });

  // submit the info
  $("#submit").on("click", (e) => {
    let recipeObj = {
      description: "",
      instructions: [],
      ingredients: [],
    };

    e.preventDefault();
    $(".formHolder .formInstructions input").each((idx, instruction) => {
      //   console.log(instruction.value);
      recipeObj.instructions.push({ instructions: instruction.value });
    });

    $(".formHolder .formIngredients input").each((idx, ingredients) => {
      //   console.log(instruction.value);
      recipeObj.ingredients.push({ ingredients: ingredients.value });
    });

    console.log(recipeObj);

    // $(".data").html(recipeObj);
  });
}

$(document).ready(function () {
  initListeners();
});
