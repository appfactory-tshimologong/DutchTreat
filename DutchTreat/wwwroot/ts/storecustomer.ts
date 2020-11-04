class StoreCustomer {

    public visits: number = 0;
    private outName: string;

    constructor(private firstName:string, private lastName: string) {
       
    }

    public showName() {
        alert(this.firstName + " " + this.lastName);
    }

    set name(val){
            this.outName = val;
    }

    get name() {
        return this.outName;
    }
}