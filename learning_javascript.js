 var s = "Hello World!";
 document.write("<br>");
 document.write(s);
   
 var first_name = "Prakash";
 var last_name = "Chenga";

 var full_name = first_name + last_name;
 document.write("<br>");
 document.write(full_name );
 
 var x, y, z;       // How to declare variables
x = 5; y = 6;      // How to assign values
z = x + y;         // How to compute values

document.write("<br>");
document.write("Result= "+ z );


var carName1 = "Volvo XC60"; // Double quotes
var carName2 = 'Volvo XC60'; // Single quotes

var car = carName1 + " " + carName2; 
document.write("<br>");
document.write(car);

document.write("<br>");
document.write("welcome to javascript throgh html");

var a, b, c;     // Declare 3 variables
a = "car";           // Assign the value 5 to a
b = 'bus';           // Assign the value 6 to b
c = a +" "+ b;       // Assign the sum of a and b to c

document.write("<br>");
document.write("the value is =" +c);

document.write("<br>");
document.write(typeof c);

var a, b, c;     // Declare 3 variables
a = 8;           // Assign the value 5 to a
b = 9;  
c = a*b;         // Assign the value 6 to b///c = a +" "+ b;       // Assign the sum of a and b to c

document.write("<br>");

document.write("the value is =" +c);
document.write("<br>");

var x,y,z;

x = 8;
y = 10.9
z = x+y;

document.write("the value is =" +z);
document.write("<br>");

var car,car1,car3;

car1 = "ford";

car2 = "swift";

car3 = car1+car2;

document.write("the new car name is =" + car3);
document.write("<br>");

document.write(typeof car3);

var x = 10;
var y = (x += 5);
document.write("<br>");
document.write("the result =" +y);

var x = 10;
var y = (x ** 5);
document.write("<br>");
document.write("the result =" +y);


var x = 5 + 5;
var y = "5" + 5;
var z = "Hello" + 5;

document.write("<br>");
document.write("the result =" +y);

document.write("<br>");
document.write("the result =" +z);
document.write("<br>");

/*var name ="Prakash";
document.write(typeof name);
document.write("<br>");
document.write((name instanceof(String)));
*/


var a,b,c;

a=200;
b=200;
c=50;

if(a>=b&&a>=c)
{
	document.write("a is greater ="+a);
	document.write("<br>");
}else if(b>=c && b>=a)
{
	document.write("b is greater ="+b);
	document.write("<br>");
}else
{
	document.write("c is greater ="+c);
	document.write("<br>");
}


var name1 = "Prakash";
//Array`
var names = ["Prakash", "Dakshayani","jaanvi","aaradhya"];
document.write(names[4]);

for(var i=0;i<names.length; i++)
{
	document.write("<br>");
document.write(names[i]);
}
	
var nums = [1,30,50,6,7,8,9,10];

for(var i=nums.length-1;i>=0;i--)
{
	document.write("<br>");
document.write(nums[i]);
}

document.write("done");

//Object = JSON

var person = {firstName:"Prakash", lastName:"Chenga",age:36};

document.write("<br>");
document.write(person.firstName);


function substract(a,b)
{

var result=a-b;
return result;
}
document.write("<br>");
//document.write(substract(20,10));
var res1=substract(200,180);
document.write(res1);

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
document.write("<br>");
document.write(pos);


var name = "Dakshayani Kotha";
name = name.replace("Kotha","K");
document.write("<br>");
document.write(name);

document.write("<br>");
document.write("<br>");

//JSON 
var person = {"firstName":"Prakash","lastName":"Chenga","age":36}

document.write("<br>");
document.write(person.firstName +"\t" + person.lastName + "\t" + person.age);

document.write("<br>");
document.write("<br>");

 var family = [
     {"firstName":"Prakash","lastName":"Chenga","age":36},
     {"firstName":"Dakshayani","lastName":"Kotha","age":35},
     {"firstName":"Aaradhya","lastName":"Chenga","age":7},
     {"firstName":"Jaanvi","lastName":"Chenga","age":2}
]

document.write("<br>");
document.write("<br>");

document.write(family[1].firstName + "\t" + family[1].lastName);


document.write("enhanced for loop");
//enhanced for loop
for( p of family){
	
	document.write("<br>");
    document.write(p.firstName +"\t" + p.lastName + "\t" + p.age);
	
}


 var family1 ={ "employees": [
     {"firstName":"Prakash","lastName":"Chenga","age":36},
     {"firstName":"Dakshayani","lastName":"Kotha","age":35},
     {"firstName":"Aaradhya","lastName":"Chenga","age":7},
     {"firstName":"Jaanvi","lastName":"Chenga","age":2}
   ]

 }

 document.write("<br>");
 document.write("<br>");
 for( p of family1.employees){
	document.write("<br>");
    document.write(p.firstName +"\t" + p.lastName + "\t" + p.age);
	
}
 
//Converting a JSON Text to a JavaScript Object
var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';


var obj = JSON.parse(text);
document.write("<br>");
document.write("<br>");
document.write(obj.employees[1].firstName + " " + obj.employees[1].lastName);
 
 
	