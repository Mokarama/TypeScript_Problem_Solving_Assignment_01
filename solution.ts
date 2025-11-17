// Problem-01


/*
function formatValue(input:string | number | boolean){
    if(typeof input === 'string'){
        const result=input.toUpperCase();
        return result;
    }
    else if(typeof input === 'number'){
        const result=input * 10;
        return result;
    }
    else if(typeof input === 'boolean'){
        const result= !input;
        return result;
    };
};

console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(true));
*/



//problem-2

/*
function getLength(input:string | number[]):number{
   if(typeof input === 'string'){
    return input.length;
   }
    else {
    return input.length;
   }  
};

console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));

*/



//problem-3


/*
class Person{
        name:string;
        age:number;

    constructor(name:string, age:number){
            this.name=name;
            this.age=age;
    }
    getDetails(){
        console.log(`'Name:${this.name}, Age: ${this.age}'`);
    }
}


const person1 = new Person('John Doe', 30);
person1.getDetails();

const person2 = new Person('Alice', 25);
person2.getDetails();
*/

//problem-4

/*
type Item={
    title:string;
    rating:number;
};

function filterByRating(items: Item[]):Item[]{
    const rating= items.filter(item => item.rating >=4);
    return rating;
}

const books:Item[] = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));

*/


//problem-5

type User={
    id:number;
    name:string;
    email:string;
    isActive:boolean;
};


const filterActiveUsers=(users:User[])=>{
    const activeUsers:User[]=users.filter((user: { isActive: boolean }) => user.isActive === true);
    return activeUsers;
};
const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

console.log(filterActiveUsers(users));

