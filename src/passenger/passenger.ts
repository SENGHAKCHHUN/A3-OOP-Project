import { Person } from "../person/person";
import { gender } from "../person/gender";
import { address } from "../address/address";
import { flight } from "../flight/flight";
import { ticket } from "../ticket/ticket";

export class passenger extends Person {
    private passport: string;
    private trip : ticket[] = []
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
    addFlightToPassenger(ticket: ticket){
        this.trip.push(ticket);
    }
}