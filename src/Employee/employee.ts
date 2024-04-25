import { gender } from "../person/gender";
import { Person } from "../person/person";
export class employee extends Person {
    constructor(
        id: number, name: string, tel: string, sex: gender, email: string
    ) {
        super(id, name, tel, email, sex);
    }
}
