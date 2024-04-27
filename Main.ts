import { gender } from "./src/person/gender";
import { address } from "./src/address/address";
import { passenger } from "./src/passenger/passenger";
import { chef } from "./src/employee/chef";
import { ticket } from "./src/ticket/ticket";
import { booking } from "./src/booking/booking";
import { airline } from "./src/airline/airline";
import { pilot } from "./src/employee/pilot";
import { operationAgent } from "./src/employee/operations_agent";
import { manage } from "./src/employee/manager";
import { co_pilot } from "./src/employee/co_pilot";
import { cabinCrew } from "./src/employee/cabin_crew";
import { flight } from "./src/flight/flight";
import { date } from "./src/date/date";
import { time } from "./src/date/time";
import { aeroplane } from "./src/aeroplane/aeroplane";
import { attendant } from "./src/employee/attendant";
import { airport } from "./src/airport/airport";
import {meal} from "./src/meal/meal";

//========== addresss of passenger =========//
let siemreap = new address("Siem reap", "Siem reap");
let kompongThom = new address("Steang sen", "Kompong Thom");
let Kandal = new address("kandal", "kandal");

//========== address of airport ==========//
let uk = new address("London", "English");
let us = new address("New york", "USA");
let khmer = new address("Phnom Penh", "Cambodia");
let bakang = new address("Peknag", "Chiness");
let singapore = new address("Singapore", "Singapore");

//=========== chef ==========//
let chef1 = new chef("1000$", "CF1", "cha", "091 66 28 190", gender.Male, "cha@gmail.com");
let chef2 = new chef("1000$", "CF1", "Jonh", "091 66 28 191", gender.Famle, "jonh@gmail.com");
let chef3 = new chef("1000$", "CF1", "Chen", "091 66 28 192", gender.Famle, "chen@gmail.com");

//=========== passenger ========== //
let p1 = new passenger("PS1", "chanthou", "+885 96 39 55 09", "chan12@gmail.com", gender.Male, kompongThom, "123m,jfwfw");
let p2 = new passenger("PS2", "Veak", "+885 71 66 29 129", "veak168@gmail.com", gender.Famle, siemreap, "42i4f242i4kfw");
let p3 = new passenger("PS3", "Chandy", "+885 96 39 55 091", "dythou168@gmail.com", gender.Male, kompongThom, "12sfjsk3s");

//=========== bookings ==========//
let booking1 = new booking("$150", p1, "BC1", khmer, uk);
let booking2 = new booking("$222", p2, "EC21", khmer, us);
let booking3 = new booking("$120", p3, "EF121", khmer, bakang);

// ============ add food to passenger ============
booking1.addFood(meal.Halal)
booking1.addFood(meal.Vegetarian)


//========== tickets ========== //
let ticket1 = new ticket('TK1', booking1);
let ticket2 = new ticket("TK2", booking2);
let ticket3 = new ticket("TK3", booking3)

//========== airline ========== // 
let airline1 = new airline("Phnom Penh Airline", khmer);
let airline2 = new airline("chiness internation airline", bakang);

//========== aeroplane =========//
let aeroplane1 = new aeroplane("G4-43SEF", 123);
aeroplane1.addSeat();
let aeroplane2 = new aeroplane("BO-67-UJS", 300);
aeroplane2.addSeat();

// ========= airports ==========//
let airport1 = new airport("Phnom Penh Internation Airport", "Phnom Penh", "Cambodia");
let airport2 = new airport("Uk internation Airport", "London", "England");
let airport3 = new airport("Singapore Internation Airport", "singapore", "singapore")

//========== pilot ============//
let pilot1 = new pilot("125$", "Pl1", "Jean", "096543216", gender.Male, "jean123@gmail.com");
let pilot2 = new pilot("135$", "Pl2", "Meta", "012987678", gender.Male, "meta43@gmail.com");
let pilot3 = new pilot("120$", "Pl3", "Monika", "016453456", gender.Famle, "monika23@gmail.com");

// ============ operationAgent ===========//
let operationAgent1 = new operationAgent("1111$", "OA1", "Bob", "088123456", gender.Male, "Bob123@gmail.com");
let operationAgent2 = new operationAgent("2100$", "OA2", "Jecika", "09766456", gender.Famle, "jecika44@gmail.com");
let operationAgent3 = new operationAgent("2000$", "OA3", "MoMo", "015123096", gender.Famle, "momo12@gmail.com");

// ============ manager ===========//
let manager1 = new manage("2500$", "MG1", "Roth", "088129866", gender.Male, "roth@gmail.com");
let manager2 = new manage("2500$", "MG2", "chen", "097129866", gender.Male, "chen@gmail.com");
let manager3 = new manage("2500$", "MG3", "Rifin", "012129446", gender.Male, "rifin@gmail.com");

// ========= co-pilot ===========//
let copilot1 = new co_pilot("100", "C_PL1", "Cha", "01512345", gender.Male, "cha@gmail.com");
let copilot2 = new co_pilot("100", "C_PL2", "Nea", "01512345", gender.Male, "nea@gmail.com");
let copilot3 = new co_pilot("100", "C_PL3", "nana", "01512345", gender.Male, "nana@gmail.com");

// ======== cabinCrew ===========//
let cabinCrew1 = new cabinCrew("100", "CC1", "jing", "0123456789", gender.Male, "jing@gmail.com");
let cabinCrew2 = new cabinCrew("100", "CC1", "srey nang", "0153450089", gender.Famle, "sreynang@gmail.com");
let cabinCrew3 = new cabinCrew("100", "CC1", "jing", "0961233215", gender.Male, "jing@gmail.com");

// ========== time ============//
let time1 = new time("02", "30 p.m.");
let time2 = new time("03", "30 p.m.");
let time3 = new time("04", "30 p.m.");

// ========== date ========//
let date1 = new date(time1, 25, "April", "2024");
let date2 = new date(time2, 25, "April", "2024");
let date3 = new date(time3, 25, "April", "2024");

// ========== attendants ========= //
let attendant1 = new attendant("$1001", "AD-01", "Lisa", "+885 1239 092", gender.Famle, "lisa@airline.come");
let attendant2 = new attendant("$1001", "AD-02", "Lina", "+885 1239 093", gender.Famle, "lisa@airline.come");
let attendant3 = new attendant("$1001", "AD-03", "Lili", "+885 1239 094", gender.Famle, "lili@airline.come");
let attendant4 = new attendant("$1001", "AD-04", "Livan", "+885 1239 095", gender.Famle, "livan@airline.come");
let attendant5 = new attendant("$1001", "AD-05", "dana", "+885 1239 096", gender.Famle, "dana@airline.come");
let attendant6 = new attendant("$1001", "AD-06", "chanvy", "+885 1239 076", gender.Famle, "chanvy@airline.come");

// ========== flight ============//
let flight1 = new flight(aeroplane1.getregistrationNumber(), "", khmer, singapore, date1, date2, manager1);
let flight2 = new flight(aeroplane2.getregistrationNumber(), aeroplane1.getregistrationNumber(), singapore, uk, date2, date3, manager2);

// ========== add pilot to flight ========== //
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
flight1.addattendant(attendant5);
flight1.addattendant(attendant6);
flight2.addattendant(attendant1);
flight2.addattendant(attendant2);
flight2.addattendant(attendant3);
flight2.addattendant(attendant4);
flight2.addattendant(attendant5);
flight2.addattendant(attendant6);

//========== add address to passenger ============//
p1.setAddress(kompongThom)
p2.setAddress(siemreap);
p3.setAddress(kompongThom);

//============ add flight to aeroplane ===========//
aeroplane1.addFlight(flight1);

//============ add flight to airport ============//
airport1.addFlight(flight1);

// console.log(airport1.getFlight(pilot1, date1))