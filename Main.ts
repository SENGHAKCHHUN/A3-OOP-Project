import { gender } from "./src/Person/gender";
import { Person } from "./src/Person/person";
import { address } from "./src/address/address";


// addresss of passenger
let siemreap = new address("Siem reap", "Siem reap");
let kompongThom = new address("Steang sen","Kompong Thom");

// passenger 
let veak = new Person(1, "Veak", "+885 71 66 29 129", "veak168@gmail.com", gender.Famle);
let chanDy = new Person(2, "Chandy", "+885 96 39 55 091", "dythou168@gmail.com", gender.Male);

// add address to passenger
veak.setAddress(siemreap);
chanDy.setAddress(kompongThom)

