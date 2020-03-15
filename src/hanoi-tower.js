module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let hanoi = {};
    let tempDiskNumber = Math.pow(2,disksNumber)-1;
    let tempSpeed = tempDiskNumber / (turnsSpeed/3600);
    hanoi['turns'] = tempDiskNumber;
    hanoi['seconds'] = tempSpeed;
    return hanoi;
    //throw 'Not implemented';
}