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

/*
interface User{
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
*/

//problem-06

/*
interface Book{
    title: string;
    author:string;
    publishedYear:number;
    isAvailable:boolean;
};

function printBookDetails(book:Book){
    console.log(`Title: ${book.title}, Author: ${book.author},Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`)
};

const myBook: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
};


printBookDetails(myBook);
*/


//problem-8
interface Product{
    name:string;
    price: number;
    quantity: number;
    discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  return products
    .map(product => {
      const total = product.price * product.quantity;

      if (product.discount !== undefined) {
        const discountAmount = total * (product.discount / 100);
        return total - discountAmount;
      }

      return total;
    })
    .reduce((acc, curr) => acc + curr, 0);
}

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));


