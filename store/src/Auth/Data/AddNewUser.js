export const AddNewUser = ({
   email = '', 
   password = '', 
   username = '' 
   }) => {

   fetch('https://fakestoreapi.com/users',{
      method:"POST",
      body:JSON.stringify({
         email,
         username,
         password,
         name:{
            firstname:'Angel',
            lastname:'Lopez'
         },
         address:{
            city:'Managua',
            street:'7835 new road',
            number:3,
            zipcode:'12926-3874',
            geolocation:{
               lat:'-37.3159',
               long:'81.1496'
            }
         },
         phone:'+50583629798'
      })
   })
   .then(res=>res.json())
   .then(json=>console.log(json))
}
