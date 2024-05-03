import { address } from "../address/address";
import { date } from "../date/date";
export class route {
    constructor(
        private numberCode: string,
        private departurePlace: address,
        private arrivePlace: address,
        private departureDate: date,
        private arriveDate: date,
    ) {}
    
    public getdepartureLocation(){
        return this.departurePlace;
    }
    public getDepartureDate(){
        return this.departureDate;
    }
    public getArriveDate(){
        return this.arriveDate;
    }

}