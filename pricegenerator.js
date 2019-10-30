

class reservation
{
   constructor (_type,_firstname,_lastname,_datereserved, _Arrivaldate,_enddate,roomnumber ){
      this.billr = 0.0;
      this.choice = _type;
      this.firstname = _firstname;
      this.Lastname = _lastname;
      this.roomnumber= roomnumber;
      this.datereserverd = _datereserved;
      this.Arrivaldate = _Arrivaldate;
      this.enddate = _enddate;
   }
   billrate(){
     return this.billr;
   }
     type() {
       return this.choice;
   }
   roomnumber(){
     return roomnumber;
   }
}
class hotelrooms {
  constructor() {

  }
}

class pricegenerator
{
   constructor ( _reservation, _baserate,_expectedAvgOccupancy)
   {
        var baserate;
       baserate = _baserate;
       console.log(  _reservation.type());
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
      setbaserate(_brate){
        return this.baserate = _brate;
      }
   }

let rese = new reservation("Incentive","martin","Phillip","10/24/2019","11/12/2019","1/1/2020");

let gen = new pricegenerator(rese, 150, 0.5);
//let roomreseveravtioin = new (rese);


gen.setbaserate(220);

console.log(rese.billrate());
console.log(rese.firstname);
console.log(rese.Lastname);
console.log(rese.datereserverd);
console.log(rese.Arrivaldate);
console.log(gen.baserate);
