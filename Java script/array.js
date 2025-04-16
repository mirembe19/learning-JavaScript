const complexArray = [
    {
      id: 1,
      name: "John Doe",
      contact: {
        email: "johndoe@example.com",
        phone: "555-1234"
      },
      address: {
        street: "123 Main St",
        city: "Springfield",
        zip: "12345"
      },
      hobbies: ["reading", "swimming", "hiking"],
      orders: [
        {
          orderId: "A123",
          amount: 150.5,
          items: [
            { productId: "P001", name: "Laptop", quantity: 1, price: 1000 },
            { productId: "P002", name: "Mouse", quantity: 1, price: 25.5 }
          ]
        },
        {
          orderId: "B456",
          amount: 50.75,
          items: [
            { productId: "P003", name: "Keyboard", quantity: 1, price: 30.25 },
            { productId: "P004", name: "Headphones", quantity: 1, price: 20.5 }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Jane Smith",
      contact: {
        email: "janesmith@example.com",
        phone: "555-5678"
      },
      address: {
        street: "456 Oak St",
        city: "Shelbyville",
        zip: "67890"
      },
      hobbies: ["painting", "yoga", "traveling"],
      orders: [
        {
          orderId: "C789",
          amount: 200.0,
          items: [
            { productId: "P005", name: "Smartphone", quantity: 1, price: 200 }
          ]
        }
      ]
    },
    {
      id: 3,
      name: "Sam Johnson",
      contact: {
        email: "samjohnson@example.com",
        phone: "555-9101"
      },
      address: {
        street: "789 Pine St",
        city: "Capital City",
        zip: "11223"
      },
      hobbies: ["gaming", "cycling", "movies"],
      orders: [
        {
          orderId: "D101",
          amount: 300.0,
          items: [
            { productId: "P006", name: "Tablet", quantity: 1, price: 300 }
          ]
        }
      ]
    }
  ];
   
  //find the zip
  console.log(complexArray[0].address.zip)
  //find tablet
  console.log(complexArray[2].orders[0].items[0].name);

  