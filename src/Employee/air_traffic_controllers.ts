import { gender } from "../person/gender";
import { employee } from "./employee";
export class airTrafficController extends employee {
    constructor(
        private salary: string,
        id: number, name: string, tel: string, sex: gender, email: string
    ) {
        super(id, name, tel, sex, email);
    }
    getSalary(){
        return this.salary;
    }
}