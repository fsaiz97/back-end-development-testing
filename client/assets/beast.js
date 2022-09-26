async function getBeastData() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const response = await fetch(`http://localhost:3000/beasts/${id}`);
    const beast = await response.json();

    return beast;
}

async function displayBeastData() {
    const beast = await getBeastData();
    //console.log(beast);

    // Add name
    const name = document.querySelector("#name");
    name.textContent = beast.name;

    // Add image
    const

    // Add habitat

    // Add danger rating

    // Add description
}

displayBeastData();
