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

async function getEmployee(id){
try{
   const employee = await employees.find((employee) => employee.id);
   
   if(employee.id === id){
       document.write(`Employee found ${employee.id} ${employee.name} <br/>`);
   } else {
       alert('Employee not found');
   }

   const salary = await salaries.find((employeee) => employee.id);

   if(employee.id === id){
       document.write(`The salary is ${salaries[id-1].salary}`);
   }else{
       alert('Salary not defined');
   }
}catch(err){
    console.log(err);
}

}

getEmployee(1);