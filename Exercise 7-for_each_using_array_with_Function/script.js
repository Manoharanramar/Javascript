let arr=['ECE','IT','CSE','EEE']
arr.forEach(val=>{
    const opt=document.createElement('option')
    opt.textContent=val//val = "ECE-><option>ECE</option>
    opt.value=val//value attribute
    document.getElementById('branch').appendChild(opt)
})


/*Exercise:
arr=['ECE','CSE','IT','EEE','MECH','CIVIL']
Add the elements to a list in HTML

Input=[6,-5,7,-2,4,6,-1]
*/