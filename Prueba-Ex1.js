let employees =[{
    id: 1,
    name: 'Linux Torvards',
},{
     id: 2,
     name: 'Bill Gates',
},{
    id: 3,
    name: 'Jeff Bezos',
}];


let salaries = [{
    id: 1,
    salary: 4000,
},{
    id: 2,
    salary: 1000,
},{
   id: 3,
   salary: 2000,
}];


function getEmployee(id){ 
    var employee = employees.find((employee)=>employee.id === id);
    
//      cada vez que no quieres/tienes un valor fijo utilices un parámetro para que pueda obtener cualquier valor
 if(employee){  
    console.log("Employee found" + id + employee.name);
}else{
    console.log("Employee not found");
}
}



function getSalaries(id){
var employee = salaries.find((employee)=>employee.id === id);
    
//      cada vez que no quieres/tienes un valor fijo utilices un parámetro para que pueda obtener cualquier valor
 if(employee){  
    console.log("Employee found" + id + employee.salary);
}else{
    console.log("Employee not found");
}
}

// setTimeout(() => getSalaries(1), 0) //lo pone en una fila después de ejecutar las otras funciones

// getEmployee(2);

function a(){
    console.log(1);
}


function b(){
    var myCallback = (cb) => {
        cb();
        };
 
  return new Promise(myCallback); 
    }

async function b2(){
   
    return b().then(()=> console.log(2));
    
    
}

function c(){
    console.log(3);
}

(async function(){
a();
 await b2();

c();

})();
