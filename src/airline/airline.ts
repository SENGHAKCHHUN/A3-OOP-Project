import { address } from "../address/address"
export class airline{
    private name: string;
    private address : address;
    constructor(name: string, address : address) {
        this.address = address;
        this.name = name;
    }
    getName(): string{
        return this.name;
    }
    getAddress(): address{
        return this.address;
    }
} 