import { address } from "../address/address";
import { date } from "../date/date";
import { pilot } from "../employee/pilot";
import { flight } from "../flight/flight";
import { passenger } from "../passenger/passenger";
import { route } from "../route/route";

export class airport extends address {
    private name: string;
    private address: address;
    private flight: flight[] = [];
    protected booking: passenger[] = [];
    constructor(name: string, city: string, country: string) {
        super(city, country);
        this.name = name;
    }
    public addPassenger(passenger: passenger) {
        this.booking.push(passenger);
    }
    public getFlight(pilot: pilot, date: Date): flight[] {
        return this.flight;
    }

    public addFlight(flight: flight, route: route) {
        let confrim = false;
        this.flight.forEach(element => {
            element.getRoute().forEach(element => {
                if (route == element) {
                    confrim = true;
                }
            })
        });
        if (!confrim) {
            flight.addRoute(route);
            this.flight.push(flight);
        } else {
            console.log("This route have already flight with the same time.")
        }
    }

    public getName() {
        return this.name;
    }
    public getAllFlight() {
        return this.flight;
    }
    public getAddress() {
        return this.address;
    }
    public getAllPassenger(){
        this.flight.forEach(element => {
            console.log(element.getBooking())
        });
    }
}