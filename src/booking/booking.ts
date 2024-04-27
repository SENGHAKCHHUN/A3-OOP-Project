import { address } from "../address/address";
import { meal } from "../meal/meal";
import { passenger } from "../passenger/passenger";
export class booking {
    private amount: string;
    private passenger: passenger;
    private seat: string;
    private DepartureLocation: address;
    private ArriveLocation: address;
    private food : Array<object> = [];
    private baggage : Array<object> = [];
    constructor(amount: string, passenger: passenger, seat: string, Departure: address, Arrive: address) {
        this.amount = amount;
        this.passenger = passenger;
        this.seat = seat;
        this.DepartureLocation = Departure;
        this.ArriveLocation = Arrive;
    }
    addFood(meal : any){
        this.food.push(meal)
    }
    addBaggage(){
        this.baggage.push();
    }
}