'use strict'
/*
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



const getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

      if(employees.find(employee => employee.id === id)){ //parametro y la condicion que queremos que cuumpla y parámetro id porque es lo que queremos que varíe 
        resolve("Employee n" + id + " "+employees[id-1].name);   //para que respete las posiciones de los [indices]que empieza por 0
      } else{
        reject('Not found');
      }

      });
         
      };
    

const getSalario = (id) => {

    return new Promise((resolve, reject) => {

        if(salaries.find(employee => employee.id === id)){
            resolve("Employee n" + id + " "+ salaries[id-1].salary);   
        }else{
            reject("Employee salary not defined");
        }
    });
};

getEmpleado(2)
.then((employee) => {
console.log(employee); 
return getSalario(employee);//aqui el parámetro recibe un objeto employee para que actue de acuerdo
})
.then(salary => {
console.log(salary); //encadenamos promesas
});

/*
getSalario(3)
    .then(salary => {
        console.log(salary);
    });
*/



 


