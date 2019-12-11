
 


const sqlite3 = require('sqlite3').verbose();
let sqlCustmore = `SELECT CustomerName name, 
                  Email email,
                  RoomNumber room,
                  DatesReserved date,
                  ReservationID ID,
                  Password pass
                  FROM Customer`;
 let sqlEmployee = `SELECT EmployeeName name, 
                  AdminStatus AStat,
                  EmployeeId EmpID,
                  Password pass
                  FROM Employee`;
let sqlReservation =`SELECT ReservationID ID,
                  RoomNumber RN,
                  DateReserved DA,
                  ReservationStatus RS,
                  ReservationType RTs,
                  StartDate SD,
                  EndDate ED,
                  AmountOwed AO,                  
                  AmountPaid AP,
                  DatePaid DP                
                  FROM Reservation`;
let sqlRoom = `SELECT  RoomNumber RN,
                  CurrentlyAvailable CA,    
                  Datesreserved DR             
                  FROM Room`;
let sqlAvalRoom = `SELECT  RoomNumber RN,
                  CurrentlyAvailable CA,    
                  Datesreserved DR             
                  FROM Room
                  WHERE CurrentlyAvailable=?`;

 import fs from 'fs';
                  

let vaild = 'F';


// open the database
let db = new sqlite3.Database('../database/Ophelias database.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the Ophelias database.');
});

          
   function addcustomer(name,email,roomnumber,dateRese,ReseID){    
      let x ='INSERT INTO Customer(CustomerName,Email,RoomNumber,DatesReserved,ReservationID) VALUES('+name+','+email+','+roomnumber+','+dateRese+','+ReseID+')';
       db.run(x, [], function(err) {
      if (err) {
          return console.log(err.message);
      }
        // get the last insert id
       console.log(`A row has been inserted with rowid ${this.lastID}`);
    }); 
  }         
  function addEmployee(name,AdminStatus,EmployeeId,password){    
    let x ='INSERT INTO Employee(EmployeeName,AdminStatus,EmployeeID,Password) VALUES('+name+','+AdminStatus+','+EmployeeId+','+password+')';
     db.run(x, [], function(err) {
    if (err) {
        return console.log(err.message);
    }
      // get the last insert id
     console.log(`A row has been inserted with rowid ${this.lastID}`);
  }); 
}   
function EditEmployeeAdStatus(EmployeeID){
  db.all(sqlEmployee, [], (err, rows) => {
    if (err) {
              throw err;
    }
    rows.forEach((row) => {   
             
          if(row.pass == password && row.email == username){
            console.log("logged in");
              return true;
              
          }else{
            console.log("wrong info");
               return false;
              
         }      
    });
  });

}     
 
  function checkEmplogin(username,password){       

   
      db.all(sqlEmployee, [], (err, rows) => {
          if (err) {
                    throw err;
          }
          rows.forEach((row) => {   
                   
                if(row.pass == password && row.name == username){
                  console.log("logged in");
                    return true;
                    
                }else{
                  console.log("wrong info");
                     return false;
                    
               }      
          });
        });
  }
  
  export default  function checkCuslogin(username,password){ 

    let db = new sqlite3.Database('../database/Ophelias database.db', sqlite3.OPEN_READWRITE, (err) => {
      if (err) {
        console.error(err.message);
      }
      console.log('Connected to the Ophelias database.');
    });
          

    db.all(sqlCustmore, [], (err, rows) => {
        if (err) {
                  throw err;
        }
        rows.forEach((row) => {   
                 
              if(row.pass == password && row.email == username){
                console.log("logged in");
                t = true;
                  
              }else{
                console.log("wrong info");
                t =  false;
                  
             }      
        });
      });
      
}
   function getReservation(ID){
    db.all(sqlReservation, [], (err, rows) => {
      if (err) {
                throw err;
      }
      rows.forEach((row) => {    
            if(row.ID == ID){                
                console.log('Reservation ID : '+row.ID+' , Amount paid : $'+row.AP+' , AmountOwed : $'+row.AO+' , date paid '+row.DP+'');
                
            }else{                 
                 console.log("wrong info or Reservation Dose not exist");
                 
           }      
      });
    });


  }
  function deleteCustomre(email){
    db.run(`DELETE FROM Customer WHERE Email=?`, email, function(err) {
      if (err) {
        return console.error(err.message);
      }
        console.log(`Row(s) deleted ${this.changes}`);
      });
}

 function checkNextAvailRoom(){
  let room = 0;
   db.all(sqlRoom, [], (err, rows) => {
    if (err) {
              throw err;
    }
    rows.forEach((row) => {    
          if(row.CA == 'T' ){                
              console.log('Room Number  : '+row.RN+' , Ava? : $'+row.CA+' , Date reserved : $'+row.DR+' ');              
              vaild ='T';    
              room = row.RN     
          }
    });
    if (vaild == 'F'){
        console.log("no rooms are available");    
       }else{
         console.log("room : "+room);
        db.run('UPDATE Room SET CurrentlyAvailable=? WHERE RoomNumber=?', ['F',room], function(err) {
              if (err) {
                       return console.error(err.message);
                      }else{
                            console.log(`Row(s) updated: ${this.changes}`);
                     }
    });
  }
  });
}

 function lookRoomUp(RoomNumber){
  
  db.all(sqlRoom, [], (err, rows) => {
    if (err) {
              throw err;
    }else{

    rows.forEach((row) => {    
          if(row.RN == RoomNumber ){                
              console.log('Room Number : '+row.RN+' , Ava? : $'+row.CA+' , Date reserved : $'+row.DR+' ');
              vaild = 'T';
              return row.RN;
          }
    });
      if (vaild == 'F'){
        console.log("no room matches");
        return 'F';
      }          
    }  
  });

}



 function MakeRoomsAVA(){  
   db.all(sqlRoom, [], (err, rows) => {
    if (err) {
              throw err;
    }
    rows.forEach((row) => {    
          if(row.CA == 'F' ){                
              console.log('Room Number  : '+row.RN+' , Ava? : $'+row.CA+' , Date reserved : $'+row.DR+' ');              
                 
              db.run('UPDATE Room SET CurrentlyAvailable=? WHERE RoomNumber=?', ['T',row.RN], function(err) {
                if (err) {
                         return console.error(err.message);
                        }else{
                              console.log(`Row(s) updated: ${this.changes}`);
                       }
      });
          }
    });    
  });
}

function setreservationDate(Sdate){
  db.all(sqlReservation, [], (err, rows) => {
    if (err) {
              throw err;
    }
    let lastresID = 0;
    rows.forEach((row) => {    
                       
              console.log('Reservation ID : '+row.ID+' , Amount paid : $'+row.AP+' , AmountOwed : $'+row.AO+' , date paid '+row.DP+', Start date : '+row.SD+'');
         
             
          lastresID = row.ID;
    });
    console.log(lastresID);
    db.run('UPDATE Reservation SET StartDate=?  WHERE ReservationID=?', [Sdate,lastresID], function(err) {
      if (err) {
               return console.error(err.message);
              }else{
                    console.log(`Row(s) updated: ${this.changes}`);
             }
  });   

  }); 
}
function createRese(){
  
}
 
setreservationDate('12/12/152');


db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
 
});


