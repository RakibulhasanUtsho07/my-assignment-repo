//multiply
function multiplyValue(value : number , multiplier?: number) : number {
    if (multiplier !== undefined) {
        return value * multiplier
        
    }
    
    return value * 2

}

//input process

function processInput(input : string | number | boolean): string | number {
    if (typeof input === "string") {
        return input.trim().toLowerCase()
        
    } if(typeof input === "number"){
        return input * 10;


    }  if(typeof input  === "boolean"){
        return input ? "Active" : "Inactive"
    }
    return "";
}


// format co-ordinate

function formatCoordinate( coordinate : readonly [number, number, string]): string{
    
    const [latitude, longitude, locationName] = coordinate;
    return `Location : ${locationName}, ${latitude}, ${longitude}`

}

function concatenateArray<T>(...arrays : T[][]): T[]{

    const result : T[] = [];
    for(const arr of arrays){

        result.push(...arr)
    }

    return result

}


interface Course {
    title:string;
    students:number;
    isPublished : boolean

}

function getPopularCourses (courses : Course[], minStudents: number): Course[] {
    return courses.filter(
        (course) => course.isPublished &&  course.students >= minStudents

    )

}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][]{
    return items.map((item) => item[key])

}


class Employee {
    protected name : string;
    private baseSalary : number;

    constructor(name:  string, baseSalary: number){
        this.name = name 
        this.baseSalary = baseSalary
    }
    public getDetails(): string{
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}



class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string){
        super(name, baseSalary)
        this.department = department

    }
    public getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`
    }
}


async function validateAgeAsync(age:number): Promise<string>{
    if(age >= 18){
        return new Promise((resolve) => {
            setTimeout(()=>{
                resolve("Access Granted");
            }, 1000)
        })

    }
    throw new Error ("Access Denied: Must be 18 or older")
}
console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));
    