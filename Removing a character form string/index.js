var remove_char = (str, pos) =>
{
    p1 = str.substring(0,pos);
    p2 = str.substring(pos+1,str.length);
    return (p1 + p2);
}
var str = prompt("Enter a string");
var pos = prompt("Enter the index of character you wish to remove");
document.write(`The new String after removing the index ${pos} is ${remove_char(str,pos)}`);