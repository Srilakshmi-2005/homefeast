document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let location = document.getElementById("location").value;
    let specialty = document.getElementById("specialty").value;

    if (name && location && specialty) {
        document.getElementById("registerMessage").innerText = Thank you, ${name}! You have registered as a cook in ${location}.;
        addFoodItem(name, specialty);
    }
});

function addFoodItem(name, dish) {
    let foodContainer = document.getElementById("foodContainer");

    let foodItem = document.createElement("div");
    foodItem.className = "food-item";
    foodItem.innerHTML = <h3>${dish}</h3><p>Prepared by: ${name}</p>;

    foodContainer.appendChild(foodItem);
}


