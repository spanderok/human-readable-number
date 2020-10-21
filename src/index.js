
module.exports = function toReadable (number) {
    const N = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const T = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const TT = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if(number == 0) return N[number];
    let res = '';
    let h = Math.floor(number / 100);
    if(h > 0) res += N[h] + ' hundred';
    let t = number % 100;
    if(t == 0) return res;
    if(t >= 10 && t < 20) {
        res += h ? ' ' + T[t % 10] : T[t % 10];
        return res;
    }
    if(t >= 20) {
        res += h ? ' ' + TT[Math.floor(t / 10) - 2] : TT[Math.floor(t / 10) - 2];
        if(t % 10 == 0) return res;
    }
    let n = t % 10;
    res += (t > 20 || h > 0) ? ' ' + N[n] : N[n];
    return res;
}