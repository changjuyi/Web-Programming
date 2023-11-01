//change table width
function changTableWidth200px(){
    var table = document.getElementById("Table1");
    table.style.width = "200px";
}

function changTableWidth500px(){
    var table = document.getElementById("Table1");
    table.style.width = "500px";
}

//change the border and the spacing width
function changeTableBorderAndSpacing1px() {
    var table = document.getElementById("Table1");

    // Change the border width
    table.border = "1px";

    // Change the cell spacing (spacing between cells)
    table.cellSpacing = "1";
}

function changeTableBorderAndSpacing10px() {
    var table = document.getElementById("Table1");

    // Change the border width
    table.border = "10px";

    // Change the cell spacing (spacing between cells)
    table.cellSpacing = "10";
}

function changeTableBorderAndSpacing20px() {
    var table = document.getElementById("Table1");

    // Change the border width
    table.border = "20px";

    // Change the cell spacing (spacing between cells)
    table.cellSpacing = "20";
}

//change the table color

function changeTableRowColorLightGreen() {
    var table = document.getElementById("Table1");
    var rows = table.getElementsByTagName("td");

    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        row.style.backgroundColor = "lightgreen";
    }
}

function changeTableRowColorLightBlue() {
    var table = document.getElementById("Table1");
    var rows = table.getElementsByTagName("td");

    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        row.style.backgroundColor = "lightblue";
    }
}

function changeTableRowColorLightGoldenrodYellow() {
    var table = document.getElementById("Table1");
    var rows = table.getElementsByTagName("td");

    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        row.style.backgroundColor = "lightgoldenrodyellow";
    }
}

function changeTableRowColorLightSalmon() {
    var table = document.getElementById("Table1");
    var rows = table.getElementsByTagName("td");

    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        row.style.backgroundColor = "lightsalmon";
    }
}

//reset all
function resetTableStyle() {
    // Get the table element
    var table = document.getElementById("Table1");

    // Reset the table width
    table.style.width = "100%";

    // Reset the table border and spacing width
    table.style.border = "1px solid black";
    table.cellSpacing = "2";

    // Reset the table header (th) styles
    var headerCells = table.getElementsByTagName("th");
    for (var i = 0; i < headerCells.length; i++) {
        headerCells[i].style.backgroundColor = "blue";
        headerCells[i].style.color = "aliceblue";
    }

    // Reset the table data (td) styles
    var dataCells = table.getElementsByTagName("td");
    for (var i = 0; i < dataCells.length; i++) {
        dataCells[i].style.backgroundColor = "yellow";
        dataCells[i].style.color = "black";
    }
}
