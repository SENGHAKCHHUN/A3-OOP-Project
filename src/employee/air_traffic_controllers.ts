import { gender } from "../person/gender";
import { employee } from "./employee";
export class airTrafficController extends employee {
    constructor(
        salary: number, id: string, name: string, tel: string, sex: gender, email: string
    ) {
        super(salary, id,  name, tel, sex, email);
    }
}