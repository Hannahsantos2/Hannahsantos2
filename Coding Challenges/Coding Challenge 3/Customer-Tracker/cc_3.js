let customers = [
    {
        name: "Johnny Rose",
        email: "johnny.rose@example.com",
        purchases: ["Suit", "Briefcase"]
    },
    {
        name: "Moira Rose",
        email: "moira.rose@example.com",
        purchases: ["Dresses", "Hats"]
    },
    {
        name: "David Rose",
        email: "david.rose@example.com",
        purchases: ["Sweater", "Sunglasses"]
    }
];

customers.push({
    name: "Alexis Rose",
    email: "alexis.rose@example.com",
    purchases: ["Handbags", "Shoes"]
});

customers.shift();
customers[0].email = "moira.rose01@example.com";
customers[1].purchases.push("Skincare Products");

customers.forEach(function(customer) {
    console.log(`Name: ${customer.name}`);
    console.log(`Email: ${customer.email}`);
    console.log(`Total Purchases: ${customer.purchases.length}`);
});