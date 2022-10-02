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
        // Create an beast div
        const elem = document.createElement("div");
        elem.className = "beast";

        // Create anchor tag
        const link = document.createElement("a");

        // Set link's content
        link.textContent = beast["name"];
        // link.href = `http://localhost:3000/beasts/${beast['id']}`
        link.href = `beast.html?id=${beast['id']}`;

        // Create image element
        const img = document.createElement("img");
        path = beast.sprite || "default.png";
        img.src = "../server/assets/images/" + path;
        img.alt = beast.name;

        // Set element's content
        elem.appendChild(link);
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
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    // Make a fetch request sending the data
    const response = await fetch("http://localhost:3000/beasts", options);

    if(response.status == 200) {
        alert("Creature created");
        window.location.reload();
    }
}

const form = document.querySelector("#createBeast");
form.addEventListener("submit", createNewBeast);
