class Bag {
    constructor (bagEl) {
        this.items = []
        this._MAX_LIMIT = 120
        this.totalAmount = this.items.length
        this.bagEl = document.querySelector(`${bagEl}`)
        this._isBagFull
        this._exceeded
        this.clearBag
        this._alreadyIn
        this.updateBag
        this.updateSlots
        this.updateTotalAmount()
        this.addToBag
        this.bringToBag
        this.removeFromBag
        this.moveItem
        this.createSlot
    }
    
    _isBagFull() { 
        if (this.totalAmount === this.getMaxLimit) {return true}
        else if (this.totalAmount >= this.getMaxLimit) {return true}
        else {return false}
    }
    _exceeded() {
        //this.setMaxLimit = 0
        alert('Your bag is full!')
    }
    
    clearBag() {
        this.items = []
        this.updateTotalAmount()
        while (this.bagEl.firstChild) {
            this.bagEl.removeChild(this.bagEl.lastChild);
        }
    }

    bringToBag(item) {

        const div = document.createElement('div')
        const p_name = document.createElement('p')
        const p = document.createElement('p')
        const img = document.createElement('img')
        const removeBtn = document.createElement('button')
        
        this.bagEl.appendChild(div)
        div.appendChild(img)
        div.appendChild(p_name)
        div.appendChild(p)
        div.appendChild(removeBtn)


        img.src = item.image
        p_name.innerText = item.name
        p.innerText = item._quantity
        console.log(item.name)
        removeBtn.innerText = 'remove from bag'

        //removeBtn.addEventListener('click', removeFromBag(this))

        //item.floorClear()
    }


    addToBag(item, quantity = item.getQuantity) { //ADD SOME ITEM IN SOME AMOUNT TO THE BAG

        this.updateTotalAmount()

        const addItem = () => { // AVOID ADDING MORE THAN THE MAX_LIMIT
            if(this.totalAmount + quantity > this.getMaxLimit) {
                this._exceeded()
            } else {
                let mult = quantity
                for (let x = 0; x < mult; x++) {

                    this.items.push(item)
                }
                this.updateTotalAmount()
            }
        }

        let arr = this.items
        function isAlreadyIn (){
            for (var i in arr) {
                if (arr[i].name == item.name) {
                    return true;
                } 
                else {
                    return false
                }
            }
        }
        
        if(this._isBagFull() == true) {
            this._exceeded()
        } else {
            if(isAlreadyIn() == true) {
                if (item._isStackable == true) {
                    // const arr = this.items
                    for (var i in arr) {
                        
                        if (arr[i]._quantity < arr[i]._maxPackSize) {
                            if (arr[i].name == item.name) {
                                arr[i]._packSize += item._quantity;
                                break;
                            }
                        }
                        else {
                            alert('maxPackSize exceeded!')
                        }
                    }
                } else {
                    addItem()
                }
            } else {
                addItem()
            }
        }
        //createEl(item)
    }
    _alreadyIn(item, arr) {

        if (item.isStackable == true) {
            for (var i in arr) {
                
                if (arr[i].quantity > item.packSize) {
                    if (arr[i].name == item.name) {
                        arr[i].quantity += item.quantity;
                        break;
                    }
                }
                else {
                    newItemSlot(item)
                }
            }
        } else {
            newItemSlot(item)
        }
    }
    // updateBag() {
    //     if (this.items.length == 0) {
    //         //delete all children
    //     }
    //     this.items.forEach(item => {
    //         createEl(item)
    //     })
    // }
    updateTotalAmount() {
        this.totalAmount = this.items.length
    }

    get isBagFull () {return this._isBagFull()}
    get getMaxLimit() {return this._MAX_LIMIT}
    /**
     * @param {number} value
     */
    set setMaxLimit(value) {return this._MAX_LIMIT = value}
}