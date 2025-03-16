//your JS code here. If required.
function seconghigh(arr)
{
If(arr===0 || arr.length<=1)
{
return;
}
Let uniarr=[…new set(arr)];
Uniarr.sort((arr[i],arr[i+1]) => arr[i+1]-arr[i]);
Return uniarr[1];
}


	