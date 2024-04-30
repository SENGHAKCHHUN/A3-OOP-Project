import { attendant } from "../employee/attendant";
import { manage } from "../employee/manager_flight";
import { pilot } from "../employee/pilot";
import { route } from "../route/route";

export class flight {
    constructor(
        private flightNumber: string,
        private codeShare: string,
        private manage: manage,
        private attendant: attendant[] = [],
        private pilots: pilot[] = [],
        private routes: route[] = [],
    ) {
    }
    addPilot(pilot: pilot) {
        this.pilots.push(pilot);
    }
    addattendant(attendant: attendant) {
        this.attendant.push(attendant);
    }
    getManager() {
        return this.manage;
    }
    getCodeShare() {
        return this.codeShare;
    }
    getPilots() {
        return this.pilots;
    }
    getAtendant() {
        return this.manage;
    }
    getRoute(){
        return this.routes;
    }
    addRoute(route: route) {
        this.routes.push(route)
    }
}