const names = ['Justin','Sarah','Christopher'];

for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

names.array.forEach(name => {
    console.log(name);
});

names.forEach(myfunction);

function myfunction(name) {
    console.log(name);
}

for(let name of names) {
    console.log(name);
}