class product
{
    private id:number
    proname:string;
    proprice:number;
    readonly quantity:number;//here readonly say only read doent for manupulation and we need to initilixd vlue at the beging



constructor(id:number,proname:string,proprice:number,quantity:number)
    {
        this.id = id;
        this.proname = proname;
        this.proprice = proprice;
        this.quantity=quantity;
    }
    display()
    {
        return `${this.id} ${this.proname} ${this.proprice} ${this.quantity}`;
    }
}
//calling class
let prodcl=new product(123,'lap',1234,12)//sending values using constructor
console.log(prodcl.display())//calling method using instance
