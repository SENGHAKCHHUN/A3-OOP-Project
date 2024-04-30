import { address } from "../address/address";
import { date } from "../date/date";

export class route{
    constructor(
        private numberCode : string,
        private departurePlace: address,
        private arrivePlace: address,
        private departureDate: date,
        private arriveDate: date,
    ){}
    getdepartureLocation() {
        
    }
}