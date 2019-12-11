export default class availabilitychecker
{
    // This calls the database and checks availability
    constructor(){
        this.Db = roomsDataBase ;
    } 
    fetchDb(){
        if (Db != null){
            return true;
        }else{
            return false;
        }
    }
    checkAvailability(){
        return this.Db.check()         
    }


}