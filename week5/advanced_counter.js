function createAdvancedCounter () {
    let count = 0;
    return {
        increment: function () {
            count++;
        },
        decrement: function () {
            count--;
        },
        reset: function () {
            count = 0;
        },
        set: function (value) {
            count = value;
        },
        getCount: function () {
            return count;
        }
    }
}

let testCounter = createAdvancedCounter();
testCounter.increment();
testCounter.getCount();
console.log(testCounter.getCount());

testCounter.decrement();
testCounter.getCount();
console.log(testCounter.getCount());

testCounter.set(5);
testCounter.getCount();
console.log(testCounter.getCount());

testCounter.reset();
testCounter.getCount(); 
console.log(testCounter.getCount());