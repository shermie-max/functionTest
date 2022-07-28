function itemPrice(item) {
    if (typeof item != 'string') {
        console.error('Error: entry must be of type string');
        return 0;
    }
    switch (item) {
        case 'computer':
            return '$500';
        case 'mouse':
            return '$10';
        case 'tablet':
            return '$250';
        case 'case':
            return '$25';
        case 'router':
            return '$100';
        default:
            console.log(`Item "${item}" is not in the store`);
            return '$0';
    }
}

const item = 'case';
const price = itemPrice(item);
console.log(`${item} costs ${price}`);  