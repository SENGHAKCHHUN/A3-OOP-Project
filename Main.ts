import { gender } from "./src/person/gender";
import { Person } from "./src/person/person";
import { address } from "./src/address/address";
import {passenger} from "./src/passenger/passenger";

// addresss of passenger //
let siemreap = new address("Siem reap", "Siem reap");
let kompongThom = new address("Steang sen","Kompong Thom");
let Kandal = new address("kandal","kandal");

// passenger //
let chanthou = new passenger(3, "chanthou", "+885 96 39 55 09", "chan12@gmail.com", gender.Male, kompongThom, "123m,jfwfw", "46-HHKI");
let veak = new passenger(1, "Veak", "+885 71 66 29 129", "veak168@gmail.com", gender.Famle, siemreap, "42i4f242i4kfw", "123");
let chanDy = new passenger(2, "Chandy", "+885 96 39 55 091", "dythou168@gmail.com", gender.Male, kompongThom, "12sfjsk3s", "1278-HS");

// add address to passenger //
veak.setAddress(siemreap);
chanDy.setAddress(kompongThom)
chanthou.setAddress(kompongThom);

console.log(veak)
console.log(chanDy)