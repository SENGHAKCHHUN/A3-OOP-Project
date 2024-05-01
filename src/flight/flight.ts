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
    public addPilot(pilot : pilot){
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
    getRoute(){
        return this.routes;
    }
    addRoute(route: route) {
        this.routes.push(route)
    }
}