function totalBasketballScore(freeThrows, midRanges, threePointers) {
    if (typeof freeThrows != 'number' || typeof midRanges != 'number' || typeof threePointers != 'number') {
        console.error('Error: all entries must be of type number')
        return;
    }
    return (freeThrows + (midRanges * 2) + (threePointers * 3));
}

const totalScore = totalBasketballScore(2, 3, 4);
console.log(`Total basketball score: ${totalScore}`);  