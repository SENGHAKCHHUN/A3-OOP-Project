export class date{
    constructor(
        private time : string,
        private day : number,
        private month : string,
        private year : string,
    ){}
    public getDate(): string{
        return this.time, this.day, this.month, this.year;
    }

}