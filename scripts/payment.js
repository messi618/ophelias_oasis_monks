export default class payment{

    constructor(name){
        this.CardNumber;
        this.name = name;
        this.cvvID;
        this.expdatemonth;
        this.expdateyear;
    }
    setcardnumber(card){
        this.CardNumber = card;
    }
    setCVID(code){
        this.cvID = code;
    }
    setExpdatemonth(month){
        this.expdatemonth = month;
    }
    setExpdateyear(year){
        this.expdateyear = year;
    }
}