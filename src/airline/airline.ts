import { address } from "../address/address"
import { employee } from "../employee/employee";
export class airline {
    private name: string;
    private address: address;
    constructor(name: string, address: address) {
        this.address = address;
        this.name = name;
    }
    public getName(): string {
        return this.name;
    }
    public getAddress() {
        return this.address;
    }
} 