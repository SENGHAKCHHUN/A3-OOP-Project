import { Person } from "../person/person";
import { gender } from "../person/gender";
import { address } from "../address/address";
import { ticket } from "../ticket/ticket";

export class passenger extends Person {
    private passport: string;
    private ticket: string;
    constructor(
        id: string,
        name: string,
        tel: string,
        email: string,
        sex: gender,
        address: address,
        passport : string,
        // ticket : ticket,
    ){
        super(id, name, tel, email, sex);
        this.passport = passport;
    }
}