/*var yok = 5;
let x = 6;
const z = 7;

yok = 6;
x = 7;
//z = 8;

console.log(yok,x,z);

function testVariable(param)
{
    if(param === true)
    {
        console.log("Yoktur!");
    }
    else
    {
        console.log("İnek");
    }
}

testVariable(true); */

function testVariable2(param)
{
    if(param === true)
    {
        var x = 5;
        let y =6;
        const z =7;
    }
    console.log(x);
    console.log(y);
    console.log(z);
}

testVariable2(true);