import { address } from "../address/address";
export class airline extends address {
    private name: string;
    constructor(name: string, city: string, country: string) {
        super(city, country);
        this.name = name;
    }
    getName(){
        return this.name;
    }
} 