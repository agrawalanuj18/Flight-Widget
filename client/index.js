const { response } = require("express")

const tableBody = document.getElementById('table-body')

const getFlight = () => {
    fetch('http://localhost:8000/flights')
    .then(response => response.json())
    .then(flights => {
        populateTable(flights)
    })
    .catch(err => console.log(err))
}

const populateTable = (flights) => {
    for (const flight of flights) {
    const tableRow = document.createElement('tr')
    const tableIcon = document.createElement('td')
    tableIcon.textContent = "✈"
    tableRow.append(tableIcon)
    tableBody.append(tableRow)}
}