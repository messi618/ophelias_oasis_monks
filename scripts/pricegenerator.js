
const 

// used with combiner class
//starts here
   class pricegenerator
{
    

    //takes in the booking information object 
   constructor ( _reservation, _baserate,_expectedAvgOccupancy)
   {
       //type field var
       this.type = _reservation.type();
       //base rate to charge for rooms per night
       var baserate;
       //initalizing the baserate for the price gen
       baserate = _baserate;
       
       console.log(  _reservation.type());
       
       //changes the rate discount if any based on the type of reservation
            switch (_reservation.type())
       {
           case "Prepaid":
              _reservation.billr= baserate * 0.75;
               break;
           case "sixtydays":
               _reservation.billr= baserate * 0.85;
               break;
           case "Conventional":
               _reservation.billr = baserate;
               break;
           case "Incentive":
               if(_expectedAvgOccupancy < 0.6){
                 _reservation.billr = baserate * .8;
               }else{
                  _reservation.billr = baserate;
               }
               break;
       }
      }
      //allows managers to change the base price 
      setbaserate(_brate){
        return this.baserate = _brate;
      }
     fetchPrice(){
         return this.baserate;
     }
   }
//ends here








