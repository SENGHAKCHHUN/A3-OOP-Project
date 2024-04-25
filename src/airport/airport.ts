import { address } from "../address/address";
import { pilot } from "../employee/pilot";
import { flight } from "../flight/flight";

export class airport extends address{
    private name: string;
    address: address;
    flight: flight [] = [];

    constructor(name: string, city: string, country: string) {
        super(city, country);
        this.name = name;
    }

    getFlight(pilot: pilot, date: Date): flight[] {
        return this.flight;
    }

    addFlight(flight: flight) {
        this.flight.push(flight);
    }

    getName(){
        return this.name;
    }

}
