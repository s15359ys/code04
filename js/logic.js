function imply(a,b){
    var result = !a||a&&b;
    return result;}
function nand(a,b){
    var result = !(a&&b);
    return result;}
function nor(a,b){
    var result = !a&&!b;
    return result;}
function exor(a,b){
    var result = !(a==b);
    return result;}