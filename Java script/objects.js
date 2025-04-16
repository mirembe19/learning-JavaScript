const n =7;
 //n=10
 console.log(n)
 
 const v ={age: "ten"}
 v.age ="three"
 console.log(v)


 const y= {name:"elijah"};
 y.age=13
 console.log(y)
 

 const userProfile = {

    userInfo: {
  
      firstName: "John",
  
      lastName: "Doe",
  
      email: "johndoe@example.com",
  
      address: {
  
        street: "123 Main St",
  
        city: "Springfield",
  
        state: "IL",
  
        zipCode: "62701"
  
      }
  
    },
  
    preferences: {
  
      theme: "dark",
  
      notifications: {
  
        email: true,
  
        sms: false
  
      },
  
      language: "en"
  
    },
  
    orders: [
  
      {
  
        orderId: "1001",
  
        date: "2025-02-28",
  
        items: [
  
          {
  
            productId: "P001",
  
            productName: "Laptop",
  
            quantity: 1,
  
            price: 1200
  
          },
  
          {
  
            productId: "P002",
  
            productName: "Mouse",
  
            quantity: 1,
  
            price: 20
  
          }
  
        ]
  
      },
  
      {
  
        orderId: "1002",
  
        date: "2025-02-15",
  
        items: [
  
          {
  
            productId: "P003",
  
            productName: "Keyboard",
  
            quantity: 1,
  
            price: 50
  
          }
  
        ]
  
      }
  
    ]
  
  };
  
   
  
  console.log(userProfile.userInfo.firstName);
  console.log(userProfile.userInfo.address.street);

  const grades= {
    math :80,
    sst :70,
    english :70,
    finalGrade: function(){
        return this.math + this.sst + this.english;
    }
  }
 console.log(grades.finalGrade()) ; 

 
  