import { address } from "../address/address";
import { passenger } from "../passenger/passenger";
export class booking{
    private amount : string;
    private passenger : passenger;
    private seat : string;
    private DepartureLocation : address;
    private ArriveLocation : address;
    constructor(amount : string, passenger : passenger, seat : string, Departure: address, Arrive : address){
        this.amount = amount;
        this.passenger = passenger;
        this.seat = seat;
        this.DepartureLocation = Departure;
        this.ArriveLocation = Arrive;
    }
}