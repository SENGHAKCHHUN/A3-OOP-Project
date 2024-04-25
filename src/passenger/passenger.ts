import { Person } from "../person/person";
import { gender } from "../person/gender";
import { address } from "../address/address";
export class passenger extends Person {
    private passport: string;
    private ticket: string;
    constructor(
        id: number,
        name: string,
        tel: string,
        email: string,
        sex: gender,
        address: address,
        passport : string,
        ticket : string,
    ){
        super(id, name, tel, email, sex);
        this.passport = passport;
        this.ticket = ticket;
    }
}