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
   else if(Array.isArray(input)){
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
console.log(person1.getDetails());

const person2 = new Person('Alice', 25);
console.log(person2.getDetails());
*/

//problem-4

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

