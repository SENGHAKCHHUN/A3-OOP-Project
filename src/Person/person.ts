import { gender } from "./gender";
import { address } from "../address/address";
export class Person{
    id : number;
    name : string;
    tel : string;
    email : string;
    sex : gender;
    address : address[] = [];
    constructor(id : number, name : string, tel : string, email : string, sex : gender){
        this.id = id;
        this.name = name;
        this.tel = tel;
        this.email = email;
        this.sex = sex;
    }
    setAddress(location: address){
        this.address.push(location);
    }
}