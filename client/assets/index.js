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
        const elem = document.createElement("li");

        // Set element's content
        elem.textContent = beast["name"];

        // Add the element to the cage
        cage.appendChild(elem);
    }
}

displayBeastData();
