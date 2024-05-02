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
    ) { }
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
    getBooking() {
        return this.passengers;
    }
    getAllTypemeal() {
        let foodList = [];
        this.passengers.forEach(element => {
            let run = true;
            if (element.getMeal() !== undefined) {
                if (foodList.length !== 0) {
                    for (let i = 0; i < foodList.length; i++) {
                        if (String(foodList[i]) !== String(element.getMeal()) && run) {
                            foodList.push(element.getMeal())
                            run = false;
                        }
                    }
                } else if (foodList.length == 0) {
                    foodList.push(element.getMeal());
                }
            }
        });
        const removeDups = (foodList: number[]) : number[] => {
            let unique: number[] = [];
            for (let i = 0; i < foodList.length; i++) {
                if (unique.indexOf(foodList[i]) === -1) {
                    unique.push(foodList[i]);
                }
            }
            return unique;
        }
        foodList = removeDups(foodList);
        
        return "The flight number " + this.flightNumber + "have " + foodList.length + " types of meal. "
    }
}