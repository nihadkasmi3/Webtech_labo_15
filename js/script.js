const address = { street: "Lange Nieuwstraat", number: 14, city: "Antwerpen" };
const person  = { firstName: "Lena", lastName: "Peeters", age: 21 };

const adressCopy = {...address, number:99};

const contact = {...address,...person};

console.log(`Kopie:`,adressCopy);
console.log(`Contact:`, contact);
console.log(`Origineel ongewijzigd:`, address);
