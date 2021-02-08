
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
    
       const employee = employees.find((employee) => employee.id);
       
       if(employee.id === id){
           document.write(`Employee found ${employee.id} ${employee.name} <br/>`);
       } else {
           alert('Employee not found');
       }
    }
    
function getSalaries(id){
    
    const salary = salaries.find((employee) => employee.id);
    
       if(salary.id === id){
           document.write(`The salary is ${salaries[id-1].salary}`);
       }else{
           alert('Salary not defined');
       }
    }


    async function infoEmployee(id){
        
        const infoEmployee = await getEmployee(id);
        const infoSalary = await getSalaries(id);
    }

    infoEmployee(1);