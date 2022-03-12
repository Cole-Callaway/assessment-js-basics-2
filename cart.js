///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]


// const priceArr = [9.99, 8.99, 7.99]
//CODE HERE
// let totalValue = 0
// const summedPrice = (acc, item) => {
//     return acc + item
// }
const totalPrice = cart.reduce((acc, elem) => acc + elem.price, 0)
console.log(totalPrice)


// const totalPrice = cart.reduce(summedPrice, totalValue)
// console.log(summedPrice(totalPrice))
// const totalPrice = cart.reduce(sum, totalSum) => {
    // sum.price = sum.price * 5
// }
// console.log(totalPrice)



// const totalPriceTwo = priceArr.reduce((acc , elem) => acc + elem)
// console.log(totalPriceTwo)
//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPriceTwo = ( cartTotal, couponValue, tax) => {
    cartTotal = +cartTotal
    couponValue = -couponValue
    tax = +tax
    return cartTotal - couponValue * tax
}

const grandTotal = calcFinalPriceTwo(26.97, 5, .6)
console.log(`your total is ${grandTotal}`)

const calcFinalPrice = cart.map(grand => grand.price + (grand.price * .6 ) - 4)
console.log(calcFinalPrice)

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
Customer name: so we can have a name for the order, Customer address: so we can know where the order is going, Ordered items: so we can know what the customer ordered, Customer Rating: lets the customer leave a rating  
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    name: 'mike',
    address: '805 Linden AVE',
    orderedItems: ["pizza", "soda", "garlic bread"],
    customerRating: 9
}