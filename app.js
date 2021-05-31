var fs = require('fs');
var input = fs.readFileSync('input.txt').toString();
var x = Number(input)
var obj=new Object();

obj.checkLeap = function()
{
    if((0 == input % 4) && (0 != input % 100) || (0 == input % 400))
    {
        console.log("Yes");
    }
    else
    {
         console.log("No");
    }
};
obj.checkLeap();