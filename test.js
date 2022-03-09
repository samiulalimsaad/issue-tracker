const issue = [
    {
        assignedTo: "aaaaaaaa",
        description: "aaaa",
        id: "53870020",
        severity: "Low",
        status: "Open",
    },
];

console.log(issue);

issue.find((v) => v.id === "53870020").status = "aaaa";

console.log(JSON.stringify(issue));

// let array = [
//     { id: 1, name: "One" },
//     { id: 2, name: "Two" },
//     { id: 3, name: "Three" },
// ];
// let array2 = [...array];
// array2.find((a) => a.id == 2).name = "Not Two";
// console.log(array2);
