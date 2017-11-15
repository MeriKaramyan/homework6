const printDiamond = function(height, char) {
    const printRow = function (height, row, char){
        if (row > height) {
            return;
        }

        const rowIndex = row > Math.round(height / 2) ? height - row + 1 : row;
        const charCount = rowIndex * 2 - 1;
        const spaceCount = (height - charCount) / 2;
        console.log(' '.repeat(spaceCount) + char.repeat(charCount));
        printRow(height, row + 1, char);
    };

    printRow(height, 1, char);
};

const printDiamondUsingFor = function(height, char) {
    for (let row = 1; row <= height; row++) {
        const rowIndex = row > Math.round(height / 2) ? height - row + 1 : row;
        const charCount = rowIndex * 2 - 1;
        const spaceCount = (height - charCount) / 2;
        console.log(' '.repeat(spaceCount) + char.repeat(charCount));
    }
};
printDiamondUsingFor(10, '@');
