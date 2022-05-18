type User = {
    name: string;
    age: number;
    occupation: string;
};

const users: User[] = [
    {
        name: 'Wilker',
        age: 25,
        occupation: 'Backend developer'
    },
     {
        name: 'Bob',
        age: 23,
        occupation: 'Product Manager'
    }
];

function logPerson(users: User) {
    console.log(` - ${users.name}, ${users.age}`);
}

console.log('Users:');
users.forEach(logPerson);