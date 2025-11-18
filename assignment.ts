function formatValue(value: string | number | boolean): string | number | boolean
{
    if (typeof value === "string")
    {
        return value.toUpperCase();
    }
    else if (typeof value === "number")
    {
        let calculatedValue = value * 10;
        return calculatedValue;
    }
    else 
    {
        return !value;
    }
}



function getLength(value: string | any[]): number
{
    if (typeof value === "string")
    {
        return value.length;
    }
    else
    {
        let itemLength = value.length;
        return itemLength;
    }
}




class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) 
    {
        this.name = name;
        this.age = age;
    }

    getDetails()
    {
        return "Name: " + this.name + ", Age: " + this.age;
    }
}



type Item = {
    title: string;
    rating: number | string; 
};

function filterByRating(items: { title: string; rating: number }[]): Item[] 
{
    const highRatedItems = items.filter(item => item.rating >= 4);

    let finalItems: Item[] = highRatedItems.map(item => {
        let formattedRating = item.rating.toFixed(1);
        
        let newItem: Item = { 
            title: item.title, 
            rating: formattedRating
        };
        return newItem;
    });
    
    return finalItems;


}


type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};
function filterActiveUsers(users: User[]): User[] {
    return users.filter(user => user.isActive === true);
}




interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(book: Book): void 
{
    const availableStatus = book.isAvailable ? 'Yes' : 'No';
    
    let outputString = "Title: " + book.title + 
                       ", Author: " + book.author + 
                       ", Published: " + book.publishedYear + 
                       ", Available: " + availableStatus;
                       
    console.log(outputString);
}




function getUniqueValues(arr1: (number | string)[], arr2: (number | string)[]): (number | string)[] {
    const result: (number | string)[] = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== undefined) {
            let exists = false;
            for (let j = 0; j < result.length; j++) {
                if (arr1[i] === result[j]) {
                    exists = true;
                    break;
                }
            }
            if ( !exists )
            {
                result.push( arr1[i]! );
            }
        }
    }
    for ( let i=0;i<arr2.length;i++ )
    {
        if ( arr2[i]!==undefined )
        {
            let exists=false;
            for ( let j=0;j<result.length;j++ )
            {
                if ( arr2[i]===result[j] )
                {
                    exists=true;
                    break;
                }
            }
            if ( !exists )
            {
                result.push( arr2[i]! );
            }
        }
    }
    return result;
}




type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};

function calculateTotalPrice(products: Product[]): number
{
    if (products.length === 0)
    {
        return 0;
    }

    const discountedTotals = products.map(product => {
        let lineTotal = product.price * product.quantity;
        
        if (product.discount)
        {
            let discountFactor = 1 - (product.discount / 100);
            lineTotal = lineTotal * discountFactor;
        }
        
        return lineTotal;
    });
    let finalTotal = discountedTotals.reduce((accumulator, currentTotal) => {
        return accumulator + currentTotal;
    }, 0);
    
    return finalTotal;
}


