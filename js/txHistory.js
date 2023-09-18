const data = [
    {
        "sender": "0xbd4b98AC7689F5D04cF891b9Ef42140Da015cF6A",
        "destination": "0x033c00fd922af40b6683fe5371380831a5b81d57",
        "amount": 18
    }, {
        "sender": "0x07725dfc5af676bec58bf4a7654962585a2b6ee3",
        "destination": "0xf908aea6abaa5451c058873208122bb0094053bd",
        "amount": 8
    }, {
        "sender": "0x033c00fd922af40b6683fe5371380831a5b81d57",
        "destination": "0xf91d05c64a7c58f1b3697f825ad10e15c08cdc01",
        "amount": 10
    }, {
        "sender": "0xf908aea6abaa5451c058873208122bb0094053bd",
        "destination": "0x3377126b8f8df9f5d875d5bb29a7b411694c906f",
        "amount": 2
    }, {
        "sender": "0xf91d05c64a7c58f1b3697f825ad10e15c08cdc01",
        "destination": "0xd9ae33e40270c51c4dcdbb23a4bac0c8512542c2",
        "amount": 7
    }, {
        "sender": "0xd9ae33e40270c51c4dcdbb23a4bac0c8512542c2",
        "destination": "0x3377126b8f8df9f5d875d5bb29a7b411694c906f",
        "amount": 3
    }
];

function getTxfromURL() {
    const urlParams = new URLSearchParams(window.location.search);  
    return JSON.parse(decodeURIComponent(urlParams.get('data')));
}

function reciveTx(tx, tableID) {
    if (tx == null) return null;
    data.push({ "sender": tx.sender, "destination": tx.destination, "amount": tx.amount });
}

function addRow(sender, destination, amount, tableID) {
    const table = document.getElementById(tableID);
    const row = document.createElement("tr");

    const senderCell = document.createElement("td");
    senderCell.textContent = sender;
    row.appendChild(senderCell);

    const destinationCell = document.createElement("td");
    destinationCell.textContent = destination;
    row.appendChild(destinationCell);

    const amountCell = document.createElement("td");
    amountCell.textContent = amount;
    row.appendChild(amountCell);

    table.appendChild(row);
}

function addDataToTable(tableID) {
    for (let i = 0; i < data.length; i++) {
        addRow(
            data[i].sender,
            data[i].destination,
            data[i].amount,
            tableID
        )
    }
}

window.onload = function() {
    const table = document.getElementById("myTable");
    const rowCountInput = document.getElementById("rowCount");
  
    function updateRowCount() {
      const rowCount = table.rows.length - 1;
      rowCountInput.value = rowCount;
    }

    updateRowCount();
}