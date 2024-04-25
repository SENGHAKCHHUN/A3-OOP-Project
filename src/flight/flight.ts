import { address } from "../address/address";
import { date } from "../date/date";
import { attendant } from "../employee/attendant";
import { manage } from "../employee/manager";
import { pilot } from "../employee/pilot";

class flight {
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
    addPilot(pilot : pilot){
        this.pilots.push(pilot);
    }
    addattendant(attendant: attendant){
        this.attendant.push(attendant);
    }
    getManager(){
        return this.manage;
    }
    getCodeShare(){
        return this.codeShare;
    }
}