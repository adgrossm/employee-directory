const state = {
    count: 0
}

function render() {
    console.log("Current count is: " + state.count)
}
function setState(obj) {
    // [ [count, 2] ] -----> []
    Object.entries(obj).map(([key, value]) => state[key] = value)
    render()
}

render()

state.count = 1;

setState({ count: 2 });


var ar1 = [0,1,2]
var ar2 = ar1
ar2.push(3)

console.log(ar1)
console.log(ar2)