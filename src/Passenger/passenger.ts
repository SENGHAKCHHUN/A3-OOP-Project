import { Person } from "../Person/person";
import { gender } from "../Person/gender";
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
        address: address[] = [],
        passport : string,
        ticket : string,
    ) {
        super(id, name, tel, email, sex);
        this.passport = passport;
        this.ticket = ticket;
    }
}