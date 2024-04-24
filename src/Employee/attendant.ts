import { gender } from "../person/gender";
import { Person } from "../person/person";
class attendant extends Person {
    constructor(
        private salary: string,
        id: number, name: string, tel: string, sex: gender, email: string
    ) {
        super(id, name, tel, email, sex);
    }
    getSalary(){
        return this.salary;
    }
}