import { gender } from "./src/person/gender";
import { address } from "./src/address/address";
import { passenger } from "./src/passenger/passenger";
import { chef } from "./src/employee/chef";
import { ticket } from "./src/ticket/ticket";
import { booking } from "./src/booking/booking";
import { airline } from "./src/airline/airline";
import { pilot } from "./src/employee/pilot";
import { operationAgent } from "./src/employee/operations_agent";
import { manage } from "./src/employee/manager_flight";
import { flight } from "./src/flight/flight";
import { date } from "./src/date/date";
import { aeroplane } from "./src/aeroplane/aeroplane";
import { attendant } from "./src/employee/attendant";
import { airport } from "./src/airport/airport";
import { meal } from "./src/meal/meal";
import { route } from "./src/route/route";
import { employee } from "./src/employee/employee";

//========== addresss of passenger =========//
let siemreap = new address("Siem reap", "Siem reap");
let kompongThom = new address("Steang sen", "Kompong Thom");
let kandal = new address("kandal", "kandal");

//========== address of airport ==========//
let uk = new address("London", "English");
let us = new address("New york", "USA");
let khmer = new address("Phnom Penh", "Cambodia");
let bakang = new address("Peknag", "Chiness");
let singapore = new address("Singapore", "Singapore");
let batabong = new address("batbong", "bongbat");
let Takeo = new address("Keotah", "Takeo");
// ========= airports ==========//
let airport1 = new airport("Phnom Penh Internation Airport", "Phnom Penh", "Cambodia");
let airport2 = new airport("Uk internation Airport", "London", "England");
let airport3 = new airport("Singapore Internation Airport", "singapore", "singapore")
let airport4 = new airport("Siem Reap Airport", "Phnom Penh", "Cambodia");

//=========== chef ==========//
let chef1 = new chef(1000, "CF1", "cha", "091 66 28 190", gender.Male, "cha@gmail.com");
let chef2 = new chef(1000, "CF1", "Jonh", "091 66 28 191", gender.Female, "jonh@gmail.com");
let chef3 = new chef(1000, "CF1", "Chen", "091 66 28 192", gender.Female, "chen@gmail.com");

//=========== passenger ========== //
let p1 = new passenger("PS1", "chanthou", "+885 96 39 55 09", "chan12@gmail.com", gender.Male, kompongThom, "123m,jfwfw");
let p2 = new passenger("PS2", "Veak", "+885 71 66 29 129", "veak168@gmail.com", gender.Female, siemreap, "42i4f242i4kfw");
let p3 = new passenger("PS3", "Chandy", "+885 96 39 55 091", "dythou168@gmail.com", gender.Male, kompongThom, "12sfjsk3s");
let p4 = new passenger("PS4", "Chhay", "+885 96 39 55 091", "chhay168@gmail.com", gender.Male, kompongThom, "12sfjsk3hts");

//========== add address to passenger ============//
p1.setAddress(kompongThom)
p2.setAddress(siemreap);
p3.setAddress(kompongThom);

//=========== bookings ==========//
let booking1 = new booking("$150", p1, "", khmer, singapore, meal.Halal);
let booking2 = new booking("$222", p2, "", khmer, singapore, meal.Vegetarian);
let booking3 = new booking("$120", p3, "", khmer, singapore, meal.Vegetarian);
let booking4 = new booking("$120", p4, "", khmer, singapore, meal.Kosher);
let booking5 = new booking("$200", p1, "BC3", singapore, uk, meal.Halal)

booking1.addSeat("BC1");
booking2.addSeat("EC21");
booking3.addSeat("EF121");
booking4.addSeat("EF122");

//========== tickets ========== //
let ticket1 = new ticket('TK1', booking1, "00-1-PP-M");
let ticket2 = new ticket("TK2", booking2, "00-2-PP-M");
let ticket3 = new ticket("TK3", booking3, "00-3-PP-M");
let ticket4 = new ticket("TK4", booking4, "00-4-PP-M");
let ticket5 = new ticket("TK5", booking5, "00-439-SP-M");

//========== airline ========== // 
let airline1 = new airline("Phnom Penh Airline", khmer);
let airline2 = new airline("singagore internation airline", singapore);

//========== aeroplane =========//
let aeroplane1 = new aeroplane("G4-43SEF", 123);
aeroplane1.addSeat();
let aeroplane2 = new aeroplane("BO-67-UJS", 300);
aeroplane2.addSeat();

//========== pilot ============//
let pilot1 = new pilot(125, "Pl1", "Jean", "096543216", gender.Male, "jean123@gmail.com");
let pilot2 = new pilot(135, "Pl2", "Meta", "012987678", gender.Male, "meta43@gmail.com");
let pilot3 = new pilot(120, "Pl3", "Monika", "016453456", gender.Female, "monika23@gmail.com");

// ============ operationAgent ===========//
let operationAgent1 = new operationAgent(1111, "OA1", "Bob", "088123456", gender.Male, "Bob123@gmail.com");
let operationAgent2 = new operationAgent(2100, "OA2", "Jecika", "09766456", gender.Female, "jecika44@gmail.com");
let operationAgent3 = new operationAgent(2000, "OA3", "MoMo", "015123096", gender.Female, "momo12@gmail.com");

// ============ manager ===========//
let manager1 = new manage(2500, "MG1", "Roth", "088129866", gender.Male, "roth@gmail.com");
let manager2 = new manage(2500, "MG2", "chen", "097129866", gender.Male, "chen@gmail.com");
let manager3 = new manage(2500, "MG3", "Rifin", "012129446", gender.Male, "rifin@gmail.com");

// ========== date ========//
let date1 = new date("20: 12 : 00", 25, "April", "2024");
let date2 = new date("22: 12 : 00", 25, "April", "2024");
let date3 = new date("24: 00 : 00 ", 25, "April", "2024");

// ========== attendants ========= //
let attendant1 = new attendant(1001, "AD-01", "Lisa", "+885 1239 092", gender.Female, "lisa@airline.come");
let attendant2 = new attendant(1001, "AD-02", "Lina", "+885 1239 093", gender.Female, "lisa@airline.come");
let attendant3 = new attendant(1001, "AD-03", "Lili", "+885 1239 094", gender.Female, "lili@airline.come");
let attendant4 = new attendant(1001, "AD-04", "Livan", "+885 1239 095", gender.Female, "livan@airline.come");
let attendant5 = new attendant(1001, "AD-05", "dana", "+885 1239 096", gender.Female, "dana@airline.come");
let attendant6 = new attendant(1001, "AD-06", "chanvy", "+885 1239 076", gender.Female, "chanvy@airline.come");

// ======== add employee to airline ========== //
airline1.addEmployee(pilot1);
airline1.addEmployee(pilot2);
airline1.addEmployee(pilot3);
airline1.addEmployee(chef1)
airline1.addEmployee(chef2)
airline1.addEmployee(chef3)
airline1.addEmployee(attendant1)
airline1.addEmployee(attendant2)
airline1.addEmployee(attendant3)
airline1.addEmployee(attendant4)
airline1.addEmployee(attendant5)
airline1.addEmployee(attendant6)
airline1.addEmployee(operationAgent1)
airline1.addEmployee(operationAgent2)
airline1.addEmployee(operationAgent3)
airline1.addEmployee(manager1)
airline1.addEmployee(manager2)
airline1.addEmployee(manager3)

// ========== flight ============//
let flight1 = new flight(aeroplane1.getRegistrationNumber(), "PH-PP-S09", manager1);
let flight2 = new flight(aeroplane2.getRegistrationNumber(), "", manager2);

// =========== add passenger to flight ===========//
flight1.addPassenger(booking1, ticket1)
flight1.addPassenger(booking2, ticket2)
flight1.addPassenger(booking3, ticket3)
flight1.addPassenger(booking4, ticket4);
flight2.addPassenger(booking5, ticket5);

// ========== create route ============== //
let route1 = new route("17", khmer, singapore, date1, date2);
let route2 = new route("18", singapore, uk, date2, date3);

// ========== add pilot to flight ==========//
flight1.addPilot(pilot1);
flight1.addPilot(pilot2);
flight1.addPilot(pilot3);
flight2.addPilot(pilot1);
flight2.addPilot(pilot2);
flight2.addPilot(pilot3);

// =========== add attendants to flight ===========//
flight1.addattendant(attendant1);
flight1.addattendant(attendant2);
flight1.addattendant(attendant3);
flight1.addattendant(attendant4);

flight2.addattendant(attendant3);
flight2.addattendant(attendant4);
flight2.addattendant(attendant5);
flight2.addattendant(attendant6);


// ============ add flight to airport =========== //
airport1.addFlight(flight1, route1);
airport1.addFlight(flight2, route2);

console.log(flight1.getAllTypemeal())
console.log(airline1.getAllsalaryOfEmployees())
console.log(p1)
console.log(route1.getArriveDate())