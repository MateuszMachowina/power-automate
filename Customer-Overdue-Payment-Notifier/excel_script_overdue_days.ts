function main(workbook: ExcelScript.Workbook) {
    const sheet = workbook.getActiveWorksheet();

    // select B2 to B1000
    const maxRows = 1000;
    const columnBRange = sheet.getRange(B2:B${maxRows});
    const columnBValues = columnBRange.getValues();

    // find last row
    let lastRow = 2; // start row 2
    for (let i = 0; i < columnBValues.length; i++) {
        if (columnBValues[i][0] === "" || columnBValues[i][0] === null) {
            break;
        }
        lastRow = i + 2;
    }

    // how many rows to fill
    const rowsToFill = lastRow - 1; // from J2 to J[lastRow]

    if (rowsToFill > 0) {
        const fillRange = sheet.getRangeByIndexes(1, 9, rowsToFill, 1); // J2 = (1,9)
        fillRange.setFormulaR1C1("=TODAY()-R[0]C[-8]");
    }
}