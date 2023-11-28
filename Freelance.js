function renderTable(data) {
    const tbody = document.querySelector('#freelance tbody');  // Get the table body element
    tbody.innerHTML = ''; // Clear existing content

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${item.name}</td><td>${"$"+ item.price}</td><td>${item.occupcation}</td>`;
        tbody.appendChild(row);
    });  
}

const data = [
    {name: "Alice", price: 30, occupcation: "writer"},
    {name: "Bob", price: 50, occupcation: "teacher"},
];
renderTable(data)

const freelancers = [
    {name: "Alice", price: 30, occupcation: "writer"},
    {name: "Bob", price: 50, occupcation: "teacher"},
    {name: "Carol", price: 70, occupcation: "programmer"},
    {name: "Pimp Name Slickback", price: 150, occupcation: "pimping"},
    {name: "Barney", price: 80, occupcation: "babysitter"},
    {name: "Sponge Bob", price: 70, occupcation: "cook"},
    {name: "Peter", price: 40, occupcation: "life coach"},
    {name: "Kit kat", price: 70, occupcation: "dancer"},
    {name: "Ganstalicous", price: 90, occupcation: "rapper"},
    ];
console.log(freelancers);

let dataIndex = 2;
const updateInterval = 1000;


setInterval(() => {
   
    if (dataIndex < freelancers.length) {
     
        const newItem = freelancers[dataIndex];

        
        const tbody = document.querySelector('#freelance tbody');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${newItem.name}</td><td>${"$"+ newItem.price}</td><td>${newItem.occupcation}</td>`;
        tbody.appendChild(newRow);

        dataIndex++;

        const sum = data.concat(freelancers.slice(0, dataIndex)).reduce((acc, item) => acc + item.price, 0);

        // Display the updated sum in the designated cell
        const sumCell = document.getElementById('avgCell');
        sumCell.textContent = "$" + Math.ceil(sum / freelancers.length);
    }
}, updateInterval);