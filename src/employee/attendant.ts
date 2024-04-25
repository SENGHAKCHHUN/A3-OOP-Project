import { gender } from "../person/gender";
import { employee } from "./employee";
export class attendant extends employee {
    constructor(
        private salary: string,
        id: string, name: string, tel: string, sex: gender, email: string
    ) {
        super(id, name, tel, sex, email);
    }
    getSalary(){
        return this.salary;
    }
}