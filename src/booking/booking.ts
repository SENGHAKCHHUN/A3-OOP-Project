import { address } from "../address/address";
import { airport } from "../airport/airport";
import { meal } from "../meal/meal";
import { passenger } from "../passenger/passenger";
export class booking {
    constructor(
        private amount: string,
        private passenger: passenger,
        private seat: string,
        private departureLocation: address,
        private arriveLocation: address,
        private food?: meal,
    ) {
    }
    public addSeat(seatCode: string) {
        this.seat = seatCode;
    }
    public getMeal(){
        return this.food;
    }
    public getPassenger(){
        return this.passenger;
    }
}