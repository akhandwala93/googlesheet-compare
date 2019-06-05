function myFunction() {
  // Open a google spreadsheet 1 by ID
  var ss1= SpreadsheetApp.openById("Enter ID");
  var sss1 = ss1.getSheetByName("Enter name of first sheet")
  
  // Open another spreadsheet 2 by ID
  var ss2 = SpreadsheetApp.openById("Enter ID of second spreadsheet or same");
  var sss2 = ss2.getSheetByName("Enter name of second sheet");
  
  //Numbers are samples
  var startRow1 = 2;  // First row of data to process for spreadsheet 1
  var endRow1 = 3000;  // Number of rows to process for spreadsheet 1
  var startRow2 = 2;  // First row of data to process for spreadsheet 2
  var endRow2 = 3000;  // Number of rows to process for spreadsheet 2
  
  // Enter the full data range for spreasheet 1 (sss1) and spreadsheet 2 (sss2)
  //dataRange var stores data in a 2D array dataRange[row][column]
  var data = sss1.getRange(startRow1, starting column, endRow1, ending column);
  var dataRange = data.getValues();
  
  var data2 = sss2.getRange(startRow2, starting column, endRow2, ending column);
  var dataRange2 = data2.getValues();
  
  for (i= 0; i < dataRange.length; ++i) {
    for (j= 0;j < dataRange2.length; ++j){
      //Comparison done inside the loop. In this case I am comparing column for instance IDs
      if (dataRange[i][0] == dataRange2[j][0]){
          //Do something
          //dataRange2[i][2]="True";
      }
    } 
  }

  //Write data to sheets, be mindfull of the range here as it is going to rewrtie range
  //Data written outside loop, for best practices
    data2.setValues(dataRange2);   
}