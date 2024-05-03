import { baggage } from "../baggage/baggage";
import { booking } from "../booking/booking";
export class ticket{
    private ticketCode : string;
    private bookingReferenceNumber : booking;
    private baggage : baggage[] = [];
    constructor(ticketCode : string, bookingReferenceNumber : booking, bagCode : string){
        this.ticketCode = ticketCode;
        this.bookingReferenceNumber = bookingReferenceNumber;
        this.baggage;
    }
    public getBooking(){
        return this.bookingReferenceNumber;
    }
    public addBag(beg : baggage){
        this.baggage.push(beg)
    }
    public getTicketCode(){
        return this.ticketCode;
    }
}