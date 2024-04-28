import { address } from "../address/address";
import { date } from "../date/date";
import { pilot } from "../employee/pilot";
import { flight } from "../flight/flight";
export class airport extends address {
    private name: string;
    private address: address;
    private flight: flight[] = [];
    constructor(name: string, city: string, country: string) {
        super(city, country);
        this.name = name;
    }
    public getFlight(pilot: pilot, date: date) {
        this.flight.forEach(element => {
            if (element.getDepartureDate() == date) {
                element.getPilots().forEach(pi => {
                    if (pi == pilot) {
                        console.log(element)
                    }
                });
            }
        });
    }
    public getBookingDetail(){
        console.log()
    }
    public addFlight(flight: flight) {
        this.flight.push(flight);
    }
    public getName() {
        return this.name;
    }
    public getAddress(){
        return this.address;
    }
}