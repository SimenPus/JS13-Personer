<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personer Søk</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Søk etter personer</h1>
        <input type="text" id="searchInput" placeholder="Skriv inn navn...">
        <button id="searchButton">Søk</button>
        <div id="info"></div>
    
    </div>

    <script src="main.js"></script>
</body>
</html>


const people = [
    {
        firstName: "Simen",
        lastName: "Brock-Støa",
        jobTitle: "Student",
        info: "Simen er definisjonen av Aura",
        image: "./bilder/Simen.jpeg",
        phonePrivate: "12345678",
        phoneWork: "98765432"
    },
    {
        firstName: "Simen",
        lastName: "Heien",
        jobTitle: "Student",
        info: "Simen Heien er en råtass med den fete lettsykkelen hans",
        image: "./bilder/Heien.jpeg",
        phonePrivate: "696969420",
        phoneWork: "42069669"
    },
    {
        firstName: "Kais",
        lastName: "Ghææærz",
        jobTitle: "Student",
        info: "Kais kjent for å bo 5 meter unna skolen men fortsatt komme for sent vær dag",
        image: "./bilder/Kais.jpeg",
        phonePrivate: "12345678",
        phoneWork: "98765432"
    },
    {
        firstName: "Eik",
        lastName: "Dedekam",
        jobTitle: "Student",
        info: "Eik er en rik sugardaddy",
        image: "./bilder/Eik.jpeg",
        phonePrivate: "22334455",
        phoneWork: "66778899"
    },
    {
        firstName: "Tobias",
        lastName: "Hauger",
        jobTitle: "Lærer",
        info: "Tobias er mye rart",
        image: "./bilder/Tobias.jpeg",
        phonePrivate: "33445566",
        phoneWork: "77665544"
    },
    {
        firstName: "Nikolai",
        lastName: "Bratberg",
        jobTitle: "Rektor",
        info: "Nikolai er en søt liten gutt med syke fingre",
        image: "./bilder/Niggalai.jpeg",
        phonePrivate: "44556677",
        phoneWork: "66554433"
    }
];


document.getElementById("searchButton").addEventListener("click", function() {
    let inpt = document.getElementById("searchInput").value; 
    let inputLower = inpt.trim().toLowerCase();
    let resultContainer = document.getElementById("info");
    resultContainer.innerHTML = '';

    let found = false;

    people.forEach(element => {
        let fullName = (element.firstName + " " + element.lastName).toLowerCase();

        if (
            inputLower === element.firstName.toLowerCase() ||
            inputLower === element.lastName.toLowerCase() ||
            inputLower === fullName
        ) {
            found = true;

            let bilde = document.createElement("img");
            bilde.src = element.image || "bilder.jpg"; 
            resultContainer.appendChild(bilde);

            let overskrift = document.createElement("h1");
            overskrift.textContent = element.firstName + " " + element.lastName;
            resultContainer.appendChild(overskrift);

            let stilling = document.createElement("p");
            stilling.textContent = "Stilling: " + element.jobTitle;
            resultContainer.appendChild(stilling);

            let info = document.createElement("p");
            info.textContent = element.info;
            resultContainer.appendChild(info);

            let tlf = document.createElement("p");
            tlf.innerHTML = `Privat: ${element.phonePrivate} <br> Jobb: ${element.phoneWork}`;
            resultContainer.appendChild(tlf);
        }
    });

    if (!found) {
        resultContainer.innerHTML = "<p>Ingen personer funnet.</p>";
    }

    document.getElementById("searchInput").value = "";
});

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 600px;
    text-align: center;
}

input {
    width: 80%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

#result {
    margin-top: 20px;
    text-align: left;
}

.person {
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
}

.person img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
}

.person-details {
    display: flex;
    align-items: center;
}

.person-info {
    display: block;
}

img {
    width: 120px;;
}
