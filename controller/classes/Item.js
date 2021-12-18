class Item {
    constructor(
        name = "Generic Item", 
        quantity = 1, 
        description = 'A perfect generic description.', 
        image = '../../res/images/default.svg', 
        icon = '../../res/icons/default.png',
        isStackable = false,
        maxPackSize = 10)
    {
        this.name = name
        this._quantity = quantity //Item quantity to loop over
        this.description = description
        this.image = image
        this.icon = icon
        this._isStackable = isStackable
        this._packSize = 1
        this._maxPackSize = maxPackSize
        this.update
        this.floorClear // deletes item from the floor after catched
    }

    update() {
        switch(this._quantity) {
            case 0:
                this._packSize = 0
                break;
            case 1:
                this._packSize = 1
                break;
            default: 
                this._packSize = this._packSize
        }
    }

    get getQuantity() {return this._quantity}
    /**
     * @param {number} value
     */
    set setQuantity(value) {return this._quantity = value}
}