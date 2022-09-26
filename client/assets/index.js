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
        img.src = "../server/" + beast.sprite || "assets/images/default.png";
        img.alt = beast.name;

        // Set element's content
        elem.textContent = beast["name"];
        elem.append(img)

        // Add the element to the cage
        cage.appendChild(elem);
    }
}

displayBeastData();

async function createNewBeast(e) {
    e.preventDefault();

    // Extract data into object
    const data = {
        name: e.target.name.value,
        encounterRate: e.target.encounterRate.value
    }

    // Set the options for the fetch request
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application.json"
        },
        body: JSON.stringify(data)
    }

    // Make a fetch request sending the data
    const response = await fetch("http://localhost:3000/beasts", options);

    if(response.status == 200) {
        alert("Creature created");
    }
}

const form = document.querySelector("#createBeast");
form.addEventListener("submit", createNewBeast);
