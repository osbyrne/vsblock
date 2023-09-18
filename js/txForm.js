const addressesJSONstring = `{
    "0xbd4b98AC7689F5D04cF891b9Ef42140Da015cF6A" : {"holdings": 2, "name": "Fady"},
    "0xf91d05c64a7c58f1b3697f825ad10e15c08cdc01" : {"holdings": 3, "name": "Oscar"},
    "0xd9ae33e40270c51c4dcdbb23a4bac0c8512542c2" : {"holdings": 4, "name": "Romain"},
    "0x3377126b8f8df9f5d875d5bb29a7b411694c906f" : {"holdings": 5, "name": "Charline"},
    "0xf908aea6abaa5451c058873208122bb0094053bd" : {"holdings": 6, "name": "Minnie"},
    "0x07725dfc5af676bec58bf4a7654962585a2b6ee3" : {"holdings": 7, "name": "Mohsen"},
    "0x033c00fd922af40b6683fe5371380831a5b81d57" : {"holdings": 8, "name": "Alexander"}
}`;
    
const addresses = JSON.parse(addressesJSONstring);

function fillSelector(id) {
    for (let key in addresses) {
        var opt = document.createElement('option');
        opt.innerHTML = addresses[key]['name'];
        opt.value = key;
        get(id).appendChild(opt);
    }
}

function fillSelector(id, takenName) {
    for (let key in addresses) {
        let opt = document.createElement('option');
        if (takenName != addresses[key]['name']) opt.innerHTML = addresses[key]['name'];
        opt.value = key;
        get(id).appendChild(opt);
    }
}

function setAmountCap(amountSelect_id, senderAddressSelect_id) {set(amountSelect_id, "max", addresses[getv(senderAddressSelect_id)]["holdings"]);}

function set(id, attributeName, value) {document.getElementById(id).setAttribute(attributeName, value)}

function enforceCap(amountSelect_id) {
    const max = parseInt(get(amountSelect_id).max);
    if (parseInt(getv(amountSelect_id)) >= max) getv(amountSelect_id) = max;
}

function get(id) { return document.getElementById(id); }

function getv(id) {return document.getElementById(id).value; }

function craftTx() {return new Tx(getv("senderAddressSelect"), getv("destinationAddressSelect"), getv("txSendAmount"));}

class Tx { constructor(sender, destination, amount) { this.sender = sender; this.destination = destination; this.amount = amount; } }

function craftURL(destination, tx) {return destination + "?data=" + encodeURIComponent(JSON.stringify(tx))}