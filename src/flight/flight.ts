import { booking } from "../booking/booking";
import { attendant } from "../employee/attendant";
import { manage } from "../employee/manager_flight";
import { pilot } from "../employee/pilot";
import { passenger } from "../passenger/passenger";
import { route } from "../route/route";

export class flight {
    constructor(
        private flightNumber: string,
        private codeShare: string,
        private manage: manage,
        private attendant: attendant[] = [],
        private pilots: pilot[] = [],
        private routes: route[] = [],
        private passengers: booking[] = [],
    ) {}
    public addPassenger(booking: booking) {
        this.passengers.push(booking);
    }
    public addPilot(pilot: pilot) {
        this.pilots.push(pilot);
    }
    public addattendant(attendant: attendant) {
        this.attendant.push(attendant);
    }
    public getManager() {
        return this.manage;
    }
    public getCodeShare() {
        return this.codeShare;
    }
    public getPilots() {
        return this.pilots;
    }
    public getAtendant() {
        return this.manage;
    }
    getRoute() {
        return this.routes;
    }
    addRoute(route: route) {
        this.routes.push(route)
    }
    getBooking(){
        return this.passengers;
    }
    getAllTypemeal(){
        let foodList = [];
        this.passengers.forEach(element => {
            if (element.getMeal() !== undefined){
                foodList.push(element.getMeal())
            }
        });
        return "The flight number " + this.flightNumber  + "have " + foodList.length + " types of meal. " 
    }
}