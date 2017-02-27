// 1. Count the number of records in the "Current Quarter Details" table.
var numberOfRecords = document.querySelectorAll('tr').length - 1;
console.log(`Number of records: ${numberOfRecords}`);


// 2. Set each dashboard image to different images, one for each season. Make sure you also set the alt="" attribute with an appropriate description. 
var images = document.querySelectorAll('img');  
images[0].src = "https://robohash.org/winter";
images[1].src = "https://robohash.org/spring";
images[2].src = "https://robohash.org/summer";
images[3].src = "https://robohash.org/fall";

// 3. Below each dashboard image, there's a season/quarter name. Below those, there are three dots. Replace those three dots with a randomly generated number formatted as currency, like $12,589.00.
var placeholders = document.querySelectorAll('.placeholder');

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var randomNumber1 = "$" + numberWithCommas(Math.round(Math.random() * 1500000) / 100);
var randomNumber2 = "$" + numberWithCommas(Math.round(Math.random() * 1500000) / 100);
var randomNumber3 = "$" + numberWithCommas(Math.round(Math.random() * 1500000) / 100);
var randomNumber4 = "$" + numberWithCommas(Math.round(Math.random() * 1500000) / 100);

function replaceDots(quarter, text) {
var dots = placeholders[quarter - 1].children[2];
dots.innerText = text;
}

replaceDots(1, randomNumber1);
replaceDots(2, randomNumber2);
replaceDots(3, randomNumber3);
replaceDots(4, randomNumber4);


// 4. Change the currently selected left side menu item from Overview to Reports.
var sideMenu = document.querySelector('.nav-sidebar');
var overview = sideMenu.children[0];
var reports = sideMenu.children[1];
overview.classList.toggle('active');
reports.classList.toggle('active');


// 5. Set the default search input value to "Q4 sales".
var searchBox = document.querySelector('.form-control');
searchBox.value = 'Q4 Sales';


// 6. Add the "table-hover" class to the table. See the Bootstrap table docs.
var table = document.querySelector('.table');
table.classList.add('table-hover');

// 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>
var rows = document.querySelectorAll('tr');
for (var i = 7; i <= 10; i++) {
    rows[i].classList.add('success');
    console.log(rows);
}


// 8. Change the table header names to: ID, First Name, Last Name, Department, Client.
var heading = document.querySelector('thead');
var headingRow = heading.children[0];

rowIDs(0).innerText = 'ID';
rowIDs(1).innerText = 'First Name';
rowIDs(2).innerText = 'Last Name';
rowIDs(3).innerText = 'Department';
rowIDs(4).innerText = 'Client';

function rowIDs(position) {
    return headingRow.children[position];
}


// 9. Make an array of objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]
var rows = document.querySelectorAll('tr');
var rowArray = Array.from(rows);
var objectArray = [];
for (var i = 1; i < rowArray.length; i++) {
    var firstItems = rowArray[i].children[0];
    var noComma = Number(firstItems.innerText.replace(/,/g , ''))
    firstItems.innerText = noComma;

var object = {};
object.id = rowArray[i].children[0].innerHTML;
object.firstName = rowArray[i].children[1].innerHTML;
object.lastName = rowArray[i].children[2].innerHTML;
object.department = rowArray[i].children[3].innerHTML;
object.client = rowArray[i].children[4].innerHTML;
objectArray.push(object);
}

console.log(objectArray);

// 10. Make each word in the table capitalized.
for(var i = 1; i < rowArray.length; i++) {

    allItems(1);
    allItems(2);
    allItems(3);
    allItems(4)

}

function allItems(position) {
    var items = rowArray[i].children[position];

    var item = items.innerText;
    var itemEnding = item.slice(1);
    var capitalFirstLetter = item.charAt(0).toUpperCase();
    items.innerText  = capitalFirstLetter + itemEnding;
}
