import { gender } from "../person/gender";
import { Person } from "../person/person";
export abstract class employee extends Person {
    constructor(
        id: string, name: string, tel: string, sex: gender, email: string
    ) {
        super(id, name, tel, email, sex);
    }
    abstract getSalary(): void;
}
