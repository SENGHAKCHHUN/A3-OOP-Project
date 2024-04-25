import { booking } from "../booking/booking";

export class ticket{
    private ticketCode : string;
    private bookingReferenceNumber : booking;
    constructor(ticketCode : string, bookingReferenceNumber : booking){
        this.ticketCode = ticketCode;
        this.bookingReferenceNumber = bookingReferenceNumber;
    }
    getBooking(){
        return this.bookingReferenceNumber;
    }
    getPassenger(){
        return this.bookingReferenceNumber
    }
}