import { address } from "../address/address";
import { gender } from "./gender";
export class Person {
    public id: string;
    public name: string;
    public tel: string;
    public email: string;
    public sex: gender;
    public address: address[] = [];
    constructor(id: string, name: string, tel: string, email: string, sex: gender) {
        this.id = id;
        this.name = name;
        this.tel = tel;
        this.email = email;
        this.sex = sex;
    }
    public setAddress(location: address) {
        this.address.push(location);
    }
}