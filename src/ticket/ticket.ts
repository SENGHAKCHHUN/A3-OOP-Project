import { booking } from "../booking/booking";
export class ticket{
    private ticketCode : string;
    private bookingReferenceNumber : booking;
    constructor(ticketCode : string, bookingReferenceNumber : booking){
        this.ticketCode = ticketCode;
        this.bookingReferenceNumber = bookingReferenceNumber;
    }
    public getBooking(){
        return this.bookingReferenceNumber;
    }
    public getPassenger(){
        return this.bookingReferenceNumber
    }
    public getTicketCode(){
        return this.ticketCode;
    }
    public addbage(){
        this.bookingReferenceNumber.addBaggage();
    }
}