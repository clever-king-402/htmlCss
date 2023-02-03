const box = document.getElementById('box')
var select;
box.addEventListener('mouseover',function(event){
    targetId = event.target
    if(targetId.className ==='star'){
        for(var i=1;i<=Number(targetId.id);i++){
            document.getElementById(String(i)).style.color='orange'
        }
    }
});
box.addEventListener("mouseout",function(event){
    targetId = event.target
    if(targetId.className ==='star'){

        if(select===undefined){for(var i=1;i<=Number(targetId.id);i++){
            document.getElementById(String(i)).style.color=''
        }}
        else{
            for(var i=select+1;i<=Number(targetId.id);i++){
            document.getElementById(String(i)).style.color=''
        }
        }
    }
});

box.addEventListener('click',function(event){
    targetId = event.target
    select = Number(targetId.id)
    for(var i=1;i<=select;i++){
            document.getElementById(String(i)).style.color='orange'
        }
    for(var i=select+1;i<=5;i++){
            document.getElementById(String(i)).style.color='grey'
        }
})