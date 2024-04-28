import { address } from "../address/address";
import { date } from "../date/date";
import { attendant } from "../employee/attendant";
import { manage } from "../employee/manager";
import { pilot } from "../employee/pilot";

export class flight {
    constructor(
        private flightNumber: string,
        private codeShare: string,
        private departurePlace: address,
        private arrivePlace: address,
        private departureDate: date,
        private arriveDate: date,
        private manage: manage,
        private attendant: attendant[] = [],
        private pilots: pilot[] = [],
    ) {
    }
    public getDepartureDate() {
        return this.departureDate;
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
    public getdepartureLocation() {
        return this.departurePlace;
    }
}