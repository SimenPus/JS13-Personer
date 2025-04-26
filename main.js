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




// document.getElementById('searchButton').addEventListener('click', function() {
//     const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
//     const resultContainer = document.getElementById('result');
//     resultContainer.innerHTML = ''; // Clear previous results

//     if (!searchTerm) {
//         return;
//     }

//     const filteredPeople = people.filter(person => 
//         person.firstName.toLowerCase().includes(searchTerm) || 
//         person.lastName.toLowerCase().includes(searchTerm)
//     );

//     if (filteredPeople.length === 0) {
//         resultContainer.innerHTML = '<p>Ingen personer funnet.</p>';
//     } else {
//         filteredPeople.forEach(person => {
//             const personDiv = document.createElement('div');
//             personDiv.classList.add('person');
//             personDiv.innerHTML = `
//                 <div class="person-details">
//                     <img src="${person.image}" alt="${person.firstName} ${person.lastName}">
//                     <div class="person-info">
//                         <strong>${person.firstName} ${person.lastName}</strong><br>
//                         <em>${person.jobTitle}</em><br>
//                         ${person.info}<br>
//                         <strong>Privat telefon:</strong> ${person.phonePrivate}<br>
//                         <strong>Jobbtelefon:</strong> ${person.phoneWork}
//                     </div>
//                 </div>
//             `;
//             resultContainer.appendChild(personDiv);
//         });
//     }

//     // Clear input field after search
//     document.getElementById('searchInput').value = '';
// });
