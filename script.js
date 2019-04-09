/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age=28;

var fullAge=true;
console.log(fullAge);

var job;
console.log(job);

job='teacher';
console.log(job);
*/

//var firstName='j';
//var age=28;
//console.log(firstName + ' ' + age);
//
//var job,isMarried;
//
//job='teacher';
//isMarried=false;
//
//console.log(firstName + ' is  a ' + job + '. Is Married ' + isMarried);
//
//age='twenty eight';
//job='driver';
//alert(firstName + ' is ' +  age + ' and ' + job);
//
//var lName=prompt('What is his Last Name?')
//console.log(firstName + ' ' + lName );

//var year,yearL,yearM;
//year=2018;
//ageJ=28;
//ageM=26;
//yearL=year-28;
//yearM=year-33;
//console.log(yearL);
//console.log(yearM);
//console.log(year+2);
//
//var johnOlder=ageJ>ageM;
//console.log(johnOlder);

/* CODING CHALLENGE */

//var markMass=78;//kg
//var johnMass=1.69;//meters
//
//var markHeight=92;
//var johnHeight=1.95;
//
//var BMI1= markMass / (markHeight*markHeight);
//var BMI2= johnMass / (johnHeight*johnHeight);
//
//console.log(BMI1,BMI2);
//
//var total=BMI1>BMI2;
//console.log(total);
//console.log("Is Mark's BMI is higher than John's?" + total );

//if/else statements:

//var fName='John';
//var civilStatus='married';
//if(civilStatus === 'married'){
//    console.log(fName + ' Is Married! ');
//}

var fName='John';
var civilStatus='single'; 
if(civilStatus === 'married'){
    console.log(fName + ' Is Married! ');
}else{
    console.log(fName + ' Hopefully  marries soon! ');
}

var isMarried=true;
if(isMarried){
    console.log(fName + ' Is Married! ');
}else{
    console.log(fName + ' Hopefully  marries soon! ');
}

var markMass=78;//kg
var johnMass=1.69;//meters

var markHeight=92;
var johnHeight=1.95;

var BMI1= markMass / (markHeight*markHeight);
var BMI2= johnMass / (johnHeight*johnHeight);

console.log(BMI1,BMI2);

if(BMI1>BMI2){
    console.log(' Mark\'s BMI is higher than John\'s ');
}else{
    console.log(' John\'s BMI is higher than Mark\'s ');
}

//BOOLEAN LOGIC

var fName='John';
var age='16';
if(age<13){
    console.log(fName + ' is a boy. ');
}else{
    console.log(fName + ' is a man. ');
}

//USING elseif LOGIC

var fName='John';
var age = 20;
if(age<13){
    console.log(fName + ' is a boy. ');
}else if(age>=13 && age<20){
     console.log(fName + ' is a teenager. ');
}else if(age>=20 && age<30){
     console.log(fName + ' is a young man. ');
}else{
     console.log(fName + ' is a man. ');
}


//TERNARY OPERATOR AND SWITCH STATEMENT

var age =16;
age>=18? console.log(fName + ' drinks beer '):console.log(fName + ' drinks juice ');

var age=22;
var drink=age>=18?'beer':'juice';
console.log(drink);

if(age>=18){
    console.log(fName + ' drinks beer ');
}else{
    console.log(fName + ' drinks juice ');
}

var job='cop';

switch(job){
    case 'teacher':
        console.log(fName + ' teaches kids how to code. ');
        break;
    case 'driver':
        console.log(fName + ' drives an uber ');
        break;
    case 'designer':
        console.log(fName + ' designs website');
        break;
    default:
        console.log( fName + ' something else ');
}
 age = 32;
switch(true){
    case age<13:
    console.log(fName + ' is a boy ');
    break;
    case age>=13 && age<20:
    console.log(fName + ' is a teenager ');
    break;
    case age>=20 && age <30:
    console.log(fName + ' is a young man ');
    break;
    default:
    console.log(fName + ' is a man ');
}


//TRUTHY AND FALSY VALUES AND EQUALITY OPERATORS

var height=23;
if(height){
    console.log(' variable is defined ');
}else{
    console.log(' variable is undefined ');
}

var height=0;
if(height || height===0){
    console.log(' variable is defined ');
}else{
    console.log(' variable is undefined ');
}

var height='twenty eight';
if(height || height===0){
    console.log(' variable is defined ');
}else{
    console.log(' variable is undefined ');
}

var height='';
if(height || height===0){
    console.log(' variable is defined ');
}else{
    console.log(' variable is undefined ');
}

//EQUALITY OPERATORS

var height='23';
if(height === 23){
    console.log(" The == operator performs type coercion ");
}else{
    console.log(" It does something else ");
}


//CODE CHALLENGE 2

//var John1=110;
//var John2=120;
//var John3=103;
//var Mike1=116;
//var Mike2=94;
//var Mike3=123;
//var Mary1=97;
//var Mary2=134;
//var Mary3=105;
//John = (John1+John2+John3)/3;
//Mike= (Mike1+Mike2+Mike3)/3;
//Mary=(Mary1+Mary2+Mary3)/3;
//console.log(John,Mike,Mary);
//
//if(John>Mike && John>Mary){
//    console.log(" John\'s team wins with " + John + " points. ");
//}else if (Mike >John && Mike>Mary){
//    console.log(" Mike\'s team wins with " + Mike + " points. ");
//}else if (Mary>John && Mary>Mike ){
//    console.log("Mary team wins with " + Mary + " Points. ");
//}else{
//    console.log(there is a draw);
//}

//if(John>Mike){
//    console.log(" John\'s team wins with " + John + " points. ");
//} else if(Mike>John){
//    console.log("Mike\'s team wins with " + Mike + " points. ");
//} else{
//    console.log(" there is a draw ");
//}

//FUNCTIONS

function myFunction(birthYear,x,y){
    return 2018-birthYear;
}
var total=myFunction(1999);
var total1=myFunction(1998);
var total2=myFunction(1997);

console.log(total,total1,total2);

function yearUntilRetirement(year,fName){
   var age= myFunction(year);
    var retirement=65-age;
   console.log(age); //[2018-1990=28]
    console.log(fName + 'retires in ' + retirement + 'years');
}
yearUntilRetirement(1990,'John');


//FUNCTION EXPRESSION

var whatDoYouDo= function(job,fName){
    switch(job){
        case 'teacher':
            console.log(fName + " teaches kids ");
            break;
        case 'driver':
            return fName + " drives uber ";
        case 'designer':
            return fName + " designs website ";
        default:
            return fName + " something else ";
            
    }
}
console.log(whatDoYouDo('cop','John'));


//ARRAYS
var john =['John','Smith',1990,'teacher',false];
var isDesigner= john.indexOf('designer')===-1?'John is not a designer' : 'john is a designer';
console.log(isDesigner);

//CODE CHALLENGE

//function tipCalculator(bill){
//    var percentage;
//    if(bill<50){
//        percentage=.2;//20%
//        }else if (bill>=50 && bill<200){
//           percentage=.15;//15% 
//        }else{
//            percentage=.1;
//        }
//    return percentage*bill;
//}
//console.log(tipCalculator(100));
//
//var bills=[124,48,268];
//var tips=[tipCalculator(bills[0]),
//         tipCalculator(bills[1]),
//         tipCalculator(bills[2])];
//var finalValues=[bills[0]+tips[0],
//                 bills[1]+tips[1],
//                 bills[2]+tips[2]
//                ];
//console.log(tips,finalValues);

// THE ABOVE EXAMPLE USING SWITCH

//INCOMPLETE SHOULD SOLVE

var tipCalculator = function(bill){
    var percentage;
    switch(bill){
        case bill<50:
             percentage=20/100;
            console.log(percentage*bill);
            break;
        case bill>=50 && bill<200:
             percentage=15/100;
             console.log('percentage*bill');
            break;
    
        case bill>200:
            percentage=10/100;
             console.log('percentage*bill');
            break;
        
        
    }
   
}
console.log(tipCalculator(10));

//OBJECTS

var john={
    fName : 'John',
    lName : 'Smith',
    birthYear: 1990,
    family:['J','M','N'],
    job:'Teacher',
    isMarried:'false'
};
console.log(john);
console.log(john.fName);
console.log(john["lName"]);
var x='birthYear';
console.log(john[x]);
john.job='designer';
john.isMarried=false;
console.log(john);


//OBJECTS AND METHODS

var john={
    fName : 'John',
    lName : 'Smith',
    birthYear: 1990,
    family:['J','M','N'],
    job:'Teacher',
    isMarried:'false',
    calcAge:function(){            // calcAge:function(birthYear){return 2018-birthYear;}
        this.age=2018-this.birthYear;     //console.log(john.calcAge(1990));//output:28
    }
};
john.calcAge();
console.log(john);

//CODING CHALLENGE 4

var john={
    fullName: ' John Smith',
    mass:92,
    height:1.95,
    calcBMI:function(){                                    //method attached to the object
        this.bmi= this.mass/(this.height*this.height);
        return this.bmi;
    }
};


var mark={
    fullName: ' Mark Smith',
    mass:94,
    height:1.85,
    calcBMI:function(){
        this.bmi= this.mass/(this.height*this.height);
        return this.bmi;
    }
};

john.calcBMI();   // method call and to calculate bmi
mark.calcBMI();
console.log(john,mark);

if(john.bmi>mark.bmi){
    console.log(john.fullName + " has the highest BMI of " + john.bmi);
}else if(mark.bmi>john.bmi){
    console.log(mark.fullName + " has the highest BMI of " + mark.bmi);
}else{
    console.log(" both have same");
}




//CHALLENGE 5

var john ={
    fullName: ' John Smith ',
    bills:[124,48,268,180,42],
    calcTip:function(){
        this.tips=[];
            this.finalValues=[];
        for(var i=0;i<this.bills.length;i++){
            var percentage;
            var bill=this.bills[i];
            if(bill<50){
                percentage=.2;
            }else if(bill>=50 && bill[i]<200){
                percentage=.15;
            }else {
                percentage=.1;
            }
            this.tips[i]=bill*percentage;
            this.finalValues[i]=bill+bill*percentage;
        }
        
    }
}
john.calcTip();

console.log(john);


//CHALLENGE 5 PART-2

var mark ={
    fullName: ' Mark Smith ',
    bills:[77,375,110,45],
    calcTip:function(){
        this.tips=[];
            this.finalValues=[];
        for(var i=0;i<this.bills.length;i++){
            var percentage;
            var bill=this.bills[i];
            if(bill<100){
                percentage=.2;
            }else if(bill>=100 && bill[i]<300){
                percentage=.1;
            }else {
                percentage=.25;
            }
            this.tips[i]=bill*percentage;
            this.finalValues[i]=bill+bill*percentage;
        }
        
    }
}

function calcAverage(tips){
    var sum=0;
    for(var i=0;i<tips.length;i++){
        sum=sum+tips[i];
    }
    return sum/tips.length;
}

john.calcTip();
mark.calcTip();


john.average=calcAverage(john.tips);
mark.average=calcAverage(mark.tips);
console.log(john,mark);


console.log(this);


calculateAge(1985);

function calculateAge(year){
    console.log(2018-year);
    console.log(this);
}