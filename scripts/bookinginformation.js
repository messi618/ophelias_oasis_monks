  class bookingformation
{
  // done
  // book the customer
   constructor (_ID,_type,_firstname,_email,_datereserved, _Arrivaldate,_enddate,roomnumber ){
      this.billr = 0.0;
      this.ID = _ID;
      this.choice = _type;
      this.firstname = _firstname;     
      this.roomnumber= roomnumber;
      this.datereserverd = _datereserved;
      this.Arrivaldate = _Arrivaldate;
      this.enddate = _enddate;
      this.email = _email;
   }
    //show bil
   billrate(){
     return this.billr;
   }
     type() {
       return this.choice;
   }
   roomnumber(){
     return roomnumber;
   }
    AvailabilityCheck(){
        //AvailbilityChecker.Check()
    }
    Checkpaid(){
      //
    }
}

