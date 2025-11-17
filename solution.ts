//Problem-01


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

const finalResult=formatValue('shanta');
const finalResult1=formatValue(20);
const finalResult2=formatValue(true);

console.log(finalResult,finalResult1, finalResult2);




//problem-01

/*
function formatValue<T>(input:T){
    if(typeof input === 'string'){
        const result=input.toUpperCase();
        return result;
    }
    else if(typeof input === 'number'){
        const result =input * 10;
        return result;
    }
    else if(typeof input ==='boolean'){
        const result=!input;
        return result;
    };
};

const finalResult=formatValue<string>('shanta');
const finalResult1=formatValue<number>(100);
const finalResult2=formatValue<boolean>(true);
console.log(finalResult, finalResult1, finalResult2);
*/
