import { address } from "../address/address";
import { meal } from "../meal/meal";
import { passenger } from "../passenger/passenger";
export class booking {
    constructor(
        private amount: string,
        private passenger: passenger,
        private seat: string,
        private DepartureLocation: address,
        private ArriveLocation: address,
        private food?: meal,
    ) { }
}