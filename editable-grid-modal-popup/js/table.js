const TABLE_BODY = document.querySelector(".table-body")

function generateTableRows() {
    TABLE_DATA.forEach(
        (rowData) => {
            let row = document.createElement('div');
            // Create Row
            row.classList.add('grid-columns-7');
            TABLE_BODY.appendChild(row);

            // Status Column

            // let statusCol = document.createElement('div');
            // statusCol.classList.add('item');
            // statusCol.innerHTML = "<p>" + rowData.status + "</p>";
            // row.appendChild(statusCol);

            // Date Column

            // Time Column

            // Location Column

            // Conditions Column

            // Signature Column

            // Qualified Driver Column
        }
    )
}

generateTableRows();