//interface 
var me = {
    name: 'sudip',
    age: 30,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log('we spend', amount);
        return amount;
    },
    dance: function (knowDance) {
        console.log('Can he dance', knowDance);
        return knowDance;
    }
};
var Branch = /** @class */ (function () {
    function Branch(newCount, newName, empCount, empName) {
        this.newEmpCount = newCount;
        this.newEmpName = newName;
    }
    Branch.prototype.registrationNo = function (regN) {
        console.log('Employee Registration details are available');
    };
    Branch.prototype.salary = function (amount) {
        console.log("Annual Salary are", amount);
        return amount;
    };
    Branch.prototype.availability = function (isCount) {
        console.log("Are they available throughout the year ", isCount);
        return isCount;
    };
    return Branch;
}());
var office = new Branch(54, ['suresh', 'ramesh'], 35, ['Ram', 'Shyam', 'Kushal', 'Subodh']);
console.log(office.registrationNo(24));
console.log(office.availability(true));
console.log(office.salary(123));
console.log(office);
var PlayBackSinger = /** @class */ (function () {
    function PlayBackSinger(st, pt, al) {
        this.songTitle = st;
        this.playTime = pt;
        this.album = al;
    }
    return PlayBackSinger;
}());
var singer = new PlayBackSinger("Summer of 69", 306, "Summer");
console.log(singer);
var student1 = {
    firstName: 'Ram',
    lastName: 'thapa',
    attendence: function () {
        console.log("".concat(student1.firstName, "student attendence is upto Marks"));
    },
    progressReport: function () { return "".concat(student1.lastName, " progress report are satisfactory"); }
};
console.log(student1.firstName);
console.log(student1.lastName);
console.log(student1.attendence());
var student2 = {
    firstName: 'shyam',
    lastName: 'pradhan',
    attendence: function () {
        console.log("".concat(student2.firstName, "attendene is low"));
    },
    progressReport: function () {
        return "".concat(student2.lastName, " has shown outstanding performance");
    }
};
console.log(student2.firstName);
console.log(student2.lastName);
console.log(student2.attendence());
console.log(student2.progressReport());
var inputs = [{
        label: "Title",
        placeHolder: "Something text is missing",
        register: 21345,
        required: true
    },
    {
        label: "PlayBakSinger",
        placeHolder: "World Best Singer",
        register: 123,
        required: false
    }
];
console.log(inputs);
