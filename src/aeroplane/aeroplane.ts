import { flight } from "../flight/flight";
export class aeroplane {
    private registrationNumber: string;
    
    private numberOfSeat: number;
    private seat: Array<object> = [];
    private flight: flight[] = [];
    constructor(registrationNumber: string, numberOfSeats: number) {
        this.numberOfSeat = numberOfSeats;
        this.registrationNumber = registrationNumber;
    }
    public getRegistrationNumber() {
        return this.registrationNumber;
    }
    public getFlight() {
        return this.flight;
    }
    public addFlight(flight: flight) {
        this.flight.push(flight);
    }
    public addSeat() {
        for (let i = 0; i < this.numberOfSeat; i++) {
            if (i < 20) {
                let obj = {};
                obj["id"] = "BC" + (i + 1);
                obj["type"] = "Business Class";
                this.seat.push(obj);
            }
            else if (i >= 20 && i < 100) {
                let obj = {};
                obj["id"] = "EC" + (i + 1);
                obj["type"] = "Economy Classic";
                this.seat.push(obj);
            }
            else if (i > 100) {
                let obj = {};
                obj["id"] = "EF" + (i + 1);
                obj["type"] = "Economy Flex";
                this.seat.push(obj);
            }
        }
    }
}