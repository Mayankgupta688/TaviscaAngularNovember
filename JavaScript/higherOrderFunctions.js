

var arrayData = [10, 20, 30, 40];

for (var i = 0; i < arrayData.length; i++) {
    arrayData[i] += 5
}

debugger;

var otherArray = arrayData.map((data) => {
    return data
})

console.log(otherArray == arrayData)

console.log(arrayData)