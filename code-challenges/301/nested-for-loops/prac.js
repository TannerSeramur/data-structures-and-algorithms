const errands = [
    { store: 'Grocery store',
      items: [ { name: 'Eggs', quantity: 12 }, { name: 'Milk', quantity: 1 }, { name: 'Apples', quantity: 3 }]
    },
    { store: 'Drug store',
      items: [ { name: 'Toothpaste', quantity: 1 }, { name: 'Toothbrush', quantity: 3 }, { name: 'Mouthwash',quantity: 1 } ]
    },
    { store: 'Pet store',
      items: [ { name: 'Cans of food', quantity: 8 }, { name: 'Treats', quantity: 24 }, { name: 'Leash', quantity: 1 } ]
    }
  ]
  
  const howManyTreats = (arr) => {
  return arr[2].items[1].quantity;
  }

  howManyTreats(errands);