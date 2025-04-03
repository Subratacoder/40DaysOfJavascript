// DAY 6 FUNCTION

// Recursion --> It means a function is calling itself

// function foo() {
//     foo();
// }

// function fetchWater(count) {
//     console.log("Fetching Water...", count);
// if(count == 0){
//     console.log("No more water is left to fetch...");
//     return;
    
// }

//     fetchWater(count - 1)
// }

// fetchWater(5)



/*****************************TASKS***********************************/

// 1.Write a Function to Convert Celsius to Fahrenheit
// Formula: (Celsius * 9/5) + 32 = Fahrenheit

function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32
    console.log(`The fahrenheit value of ${celsius} is -> `, fahrenheit);
    return;
}

celsiusToFahrenheit(45)

// 2.Create a Function to Find the Maximum of Two Numbers

function maxOFTwo(a, b){
    if (a > b) {
        console.log(`a is max`);
    }else{
        console.log(`b is max`);
        
    }
}

maxOFTwo(10, 20)

// 3.Function to Check if a String is a Palindrome

function isPallindrome(str) {
    let cleanStr = "";
    for(i = 0; i <= str.length; i++){
        let char = str[i].toLowerCase();
        if((char >= "a" && char <= "z") || (char >= 0 && char <= 9)){
            cleanStr += char;
        }
    }

    let left = 0;
    let right = cleanStr.length - 1

    while (left < right) {
        if(cleanStr[left] !== cleanStr[right]){
            return false;
        }
        left++;
        right--;
    }

    return true;

}

console.log(isPallindrome("madam"));
