let num = 17;

for(let i = 2; i <= num; i++) {
    if(num % i === 0) {
        console.log("Not Prime");
        return;
    }
}
console.log("Prime");