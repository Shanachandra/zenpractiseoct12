
function addinput()
{
    
    var input=document.getElementById('input').value
    console.log(input)
    if(input!=null)
    {
        var option=document.createElement('option')
        option.setAttribute('value',input)
        option.innerHTML=input
        // var addoption=`<option value="${input}">${input}</option>`
        var res=document.getElementById('selectoption')
        console.log(res)
        res.append(option)
        
    }
}