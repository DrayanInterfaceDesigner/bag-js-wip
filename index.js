const bag = new Bag('#bag');


bag.setMaxLimit = 10
console.log('FULL?: ' + bag._isBagFull())
console.log('MAX LIMIT: '+bag.getMaxLimit)
console.log(`Items in the bag: ${bag.totalAmount}`)
console.log('Bag Items: ' + bag.items)

const item1 = new Item()

const btn = document.querySelector('#btn')
btn.addEventListener('click', ()=> {
    if(bag._isBagFull()) return
    bag.addToBag(item1)
    bag.bringToBag(item1)
    console.clear()
    
    console.log('FULL?: ' + bag._isBagFull())
    console.log('MAX LIMIT: '+bag.getMaxLimit)
    console.log(`Items in the bag: ${bag.totalAmount}`)
    console.log('Bag Items: ' + bag.items)
})

const btnClear = document.querySelector('#btnClear')
btnClear.addEventListener('click', ()=> {
    bag.clearBag()
    console.clear()
    console.log('FULL?: ' + bag._isBagFull())
    console.log('MAX LIMIT: '+bag.getMaxLimit)
    console.log(`Items in the bag: ${bag.totalAmount}`)
    console.log('Bag Items: ' + bag.items)
})