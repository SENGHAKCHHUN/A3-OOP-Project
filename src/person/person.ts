import { address } from "../address/address";
import { gender } from "./gender";
export abstract class Person {
    private id: string;
    private name: string;
    private tel: string;
    private email: string;
    private sex: gender;
    private address: address[] = [];
    constructor(id: string, name: string, tel: string, email: string, sex: gender) {
        this.id = id;
        this.name = name;
        this.tel = tel;
        this.email = email;
        this.sex = sex;
    }
    setAddress(location: address) {
        this.address.push(location);
    }
}