import {clients} from "./data.js"


let clientsDataAll = [];
clientsDataAll = clients;
// console.log(clientsDataAll);

const cardContainer = document.querySelector("main");


function cardsDisplay() {
    cardContainer.innerHTML = clients.map ((client) => {
        let websitesDataAll = [];
        let adminDataAll = [];
        for (let i = 0; i < client.websites.length; i++) {
            let websiteWay = client.websites[i].adress;
            let adminWay = client.websites[i].admin;
            websitesDataAll+adminDataAll.push(`
            <div>${websiteWay}</div>
            <div>${adminWay}</div>
            `);
        }

return `
<li class="card">
<h2>${client.name}</h2>
<p><b>Skills</b> ; ${client.skills}</p>
<div>${websitesDataAll.join("")}</div>
<div>${adminDataAll.join("")}</div>
</li>
`
}
    ).join("");
}

cardsDisplay();
