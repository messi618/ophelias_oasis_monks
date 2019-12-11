//must create roomsDatabase
//must create managemnt class that holds managment changes
//must create AvgOcc

import  bookingformation from './bookinginformation.js';
import pricegenerator from './pricegenerator.js'


function combine(){
let _ID = 1000;
let _name = document.getElementById("name").value;
let _type = document.getElementById("type").value;
let _email = document.getElementById("email").value;
let _datereserved = document.getElementById("datereserved").value;
let _Arrivaldate = document.getElementById("arrivaldate").value;
let _enddate = document.getElementById("enddate").value;
let roomnumber = roomsDatabase.nextAvailable;
let Baseprice = Managment.Baseprice;
let expectedAvgOcc = roomsDatabase.AvgOcc;
let roomreseveravtioin = roomsDatabase;



_ID++ ;
//let rese = new bookingformation(_ID,_type,_name,_email,_datereserved, _Arrivaldate,_enddate,roomnumber );
let rese = new bookingformation("1001","Prepaid",_name,_email,_datereserved, _Arrivaldate,_enddate,roomnumber );
let gen = new pricegenerator(rese, Baseprice, AvgOcc);
roomreservationin.check();
roomreseveravtioin.add(rese);


gen.setbaserate(220);

console.log(rese.billrate());
console.log(rese.firstname);
console.log(rese.Lastname);
console.log(rese.datereserverd);
console.log(rese.Arrivaldate);
console.log(gen.baserate);
}
combine();