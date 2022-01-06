

//interface 


interface Person {
    name: string
    age :number

    speak( a: string) : void;
    spend(b : number) : number;
    dance (c : boolean) : boolean

}

let me : Person = {
    name : 'sudip',
    age : 30,

    speak(text : string): void{
        console.log(text);
    },

    spend(amount : number ): number{
        console.log('we spend', amount);
        return amount;
    },

    dance(knowDance : boolean) : boolean {
    console.log( 'Can he dance', knowDance);
    return knowDance;
    }
}


//---------------------------------------------------

interface Office{
    empCount : number
    empName : string[]


    registrationNo(regN : number):void;
    salary(amount:number):number;
    availability(count :boolean) : boolean;

}

class Branch implements Office {
    empCount : number
    empName : string[]
    newEmpCount : number
    newEmpName : string[]

    constructor(newCount : number, newName: string[], empCount : number, empName :string[]){
        this.newEmpCount= newCount
        this.newEmpName = newName
    }

    registrationNo(regN: number):void {
        console.log('Employee Registration details are available')
    }

    salary(amount: number): number {
        console.log("Annual Salary are", amount);
            return amount;
    }

    availability(isCount : boolean): boolean {
        console.log("Are they available throughout the year ", isCount)
        return isCount;
    }
}

let office = new Branch(54, ['suresh', 'ramesh'], 35, ['Ram', 'Shyam', 'Kushal', 'Subodh']);


console.log(office.registrationNo(24));
console.log(office.availability(true));
console.log(office.salary(123));
console.log(office);


//------------------------------------------------>


interface Singer {
    songTitle :string
    playTime : number
    album : string

    
}

class PlayBackSinger implements Singer{
    songTitle :string
    playTime : number
    album : string

    constructor(st: string, pt : number , al : string){
        this.songTitle = st
        this.playTime = pt
        this.album = al
    }

}

const singer = new PlayBackSinger("Summer of 69", 306, "Summer" );

console.log(singer)

//---------------------------------------------------

interface Student{
    firstName : string
    lastName : string
    
    attendence():void;
    progressReport :() => string

}

let student1 : Student ={
    firstName : 'Ram',
    lastName : 'thapa',

    attendence() :void {
        console.log(`${student1.firstName}student attendence is upto Marks`)
    },

    progressReport : (): string =>
    { return `${student1.lastName} progress report are satisfactory` }
} 
console.log(student1.firstName);
console.log(student1.lastName);
console.log(student1.attendence());

let student2 : Student= {
    firstName : 'shyam',
    lastName : 'pradhan',
    
    attendence (): void{

        console.log(`${student2.firstName}attendene is low`)
    },

    progressReport : (): string =>
    {
        return `${student2.lastName} has shown outstanding performance`
    }


}
console.log(student2.firstName);
console.log(student2.lastName);
console.log(student2.attendence());
console.log(student2.progressReport());

//-------------------------------------------------------

interface Input{
    label : string
    placeHolder : string
    register : any
    type ? : string
    required : boolean
}

let inputs : Array<Input> = [{
    label : "Title",
    placeHolder : "Something text is missing",
    register : 21345,
    required : true,
},
 {
    label : "PlayBakSinger",
    placeHolder : "World Best Singer",
    register : 123,
    required : false,

 }
];

console.log(inputs);

