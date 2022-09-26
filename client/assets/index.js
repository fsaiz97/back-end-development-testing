async function getBeastData() {
    // Reach out to the API
    const response = await fetch("http://localhost:3000/beasts");

    // Extract the beast data from the response
    const beasts = await response.json();

    return beasts;
}

async function displayBeastData() {
    // Get the beast data;
    const beasts = await getBeastData();

    // Get a reference to cage
    const cage = document.querySelector("#cage");

    // Loop through the beast data
    for (let beast of beasts) {
        // Create an HTML element
        const elem = document.createElement("div");
        elem.className = "beast";

        // Create image element
        const img = document.createElement("img");
        img.src = "assets/images/0.jpg";
        img.alt = "Monster"
        img.width = "30";

        // Set element's content
        elem.textContent = beast["name"];
        elem.append(img)

        // Add the element to the cage
        cage.appendChild(elem);
    }
}

displayBeastData();

function createNewBeast() {
    e.preventDefault();

    // Extract data into object
    const data = {
        name: e.target.name,
        encounterRate: e.target.encounterRate
    }

    console.log(data);

    // Set the options for the fetch request

    // Make a fetch request sending the data
    //fetch("http://localhost:3000/beasts", )
}
