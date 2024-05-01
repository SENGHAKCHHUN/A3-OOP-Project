import { address } from "../address/address"
import { employee } from "../employee/employee";
export class airline{
    private name: string;
    private address : address;
    private employee: employee[] = [];
    constructor(name: string, address : address) {
        this.address = address;
        this.name = name;
    }
    public getAllsalaryOfEmployees(){
        let salary = 0;
        this.employee.forEach(element => {
            salary += element.getSalary()
        });
        return "The " + this.getName() + " have paid for per month are "+ salary +" $ fro all employees.";
    }
    public addEmployee(employee: employee){
        this.employee.push(employee)
    }

    public getName(): string{
        return this.name;
    }
    public getAddress(){
        return this.address;
    }
} 