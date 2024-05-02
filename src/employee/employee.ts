import { gender } from "../person/gender";
import { Person } from "../person/person";
export class employee extends Person {
    constructor(
    private salary: number, id: string, name: string, tel: string, sex: gender, email: string
    ) {
        super(id, name, tel, email, sex);
    }
    getSalary(): number {
        return this.salary;
    }
}
