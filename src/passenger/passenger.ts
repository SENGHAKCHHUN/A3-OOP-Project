import { Person } from "../person/person";
import { gender } from "../person/gender";
import { address } from "../address/address";
import { flight } from "../flight/flight";

export class passenger extends Person {
    private passport: string;
    private trip : flight[] = []
    constructor(
        id: string,
        name: string,
        tel: string,
        email: string,
        sex: gender,
        address: address,
        passport : string,
    ){
        super(id, name, tel, email, sex);
        this.passport = passport;
    }
    addFlightToPassenger(flight : flight){
        this.trip.push(flight);
    }
}