var employees = [
    { "id": "30", "createdAt": "2019-07-09T18:06:41.721Z", "name": "Edmund Fisher", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/seyedhossein1/128.jpg" },
    { "id": "31", "createdAt": "2019-07-09T11:44:07.092Z", "name": "Lenora Price", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/incubo82/128.jpg" },
    { "id": "32", "createdAt": "2019-07-09T20:56:58.884Z", "name": "Clementina Sanford", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/thomasschrijer/128.jpg" },
    { "id": "33", "createdAt": "2019-07-10T07:56:08.182Z", "name": "Willow Windler", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/eitarafa/128.jpg" }
];

var obj = { id: 1, name: 2, age: 3, other: 4 }

// Spread Operator
var otherArray = employees.map((employee) => {
    return {
        ...employee,
        id: +employee.id + 100
    }
})

var otherArray = employees.filter((employee) => {
    if (employee.id % 2 == 0) {
        return true;
    } 
    
    return false;
})

console.log(otherArray == employees)

debugger;

