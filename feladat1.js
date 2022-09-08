let tomb = [];

for (let i = 0 ; i < 10 ; i++)
{
    tomb.push(Math.random()*100);
}
tomb.sort((a,b) => a-b);
console.log(tomb);