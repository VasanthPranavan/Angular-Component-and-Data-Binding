export class Employee {
    employeeId:number;
    firstName: string;
    lastName: string;
    dept: string;
    city: string;
    email: string;

    constructor(employeeId: number, firstName: string, lastName : string, dept: string, city:string,email: string){
        this.employeeId=employeeId;
        this.firstName=firstName;
        this.lastName=lastName;
        this.dept=dept;
        this.city=city;
        this.email=email;

    }
}
