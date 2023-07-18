var crsPrvdrs = ["Meta", "Google", "IBM"];
crsPrvdrs.push("Harvard");

function addCrs(newCrsName, newCrsDscrpt) {
  var crsName = [newCrsName, newCrsDscrpt];
  var txtChoose = [
    'You can choose any "',
    crsName[0],
    '" course from the folowing courses:',
  ];
  crsName = crsName.join(", ");

  console.log(txtChoose.join(""));

  console.log(" ");

  for (i = 0; i < crsPrvdrs.length; i++) {
    if (newCrsName != undefined && newCrsDscrpt != undefined) {
      console.log(crsName, "from " + crsPrvdrs[i]);
    } else {
      console.log("Enter both of a name and description for the course.");
    }
  }
}
addCrs("Front-End Development", "a New course");
// addCrs();
