const users = {
   gndx:{
      country: 'MX'
   },
   ana: {
      country: 'CO'
   }
}

//Al añadir os singos de interrogación significa: Si es que en users existe bebeloper y si es que bebeloper tiene country, que lo muestre, si no, simplemente entrea undefined.
console.log(users?.bebeloper?.country);