var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making an array of countries and print its original order
var countriesToVisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Original Order:", countriesToVisit);
// Print the array in Alphabetical order without modifying the actual array list
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
// Show that  the array is still in the Original Order
console.log("Still in original order:", countriesToVisit);
// Print the array in reversed order without modifying the actual array list
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
// Show that  the array is still in the Original Order
console.log("Still in original order:", countriesToVisit);
// We have changed the original array order now
console.log("Original Array Reversed:", countriesToVisit.reverse());
// Print the array to show that it's back to its original order
console.log("Back to original Order:", countriesToVisit.reverse());
// Print the array to show that its order has been changed in Alphabetical order now
console.log("Sorted in alphabetical order:", countriesToVisit.sort());
// We have changed the original array order in reverse order again
console.log("Original Array Reversed:", countriesToVisit.reverse());
