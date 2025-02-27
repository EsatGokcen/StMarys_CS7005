function createAdvancedCounter (value) {
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