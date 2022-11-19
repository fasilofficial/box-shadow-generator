const inputsNodeList = document.querySelectorAll('.property input');

function handleUpdate(){
    const box = document.querySelector('.box');
    const hOffset = document.getElementById('h-offset').value;
    const vOffset = document.getElementById('v-offset').value;
    const blurRadius = document.getElementById('blur').value;
    const spread = document.getElementById('spread').value;
    const color = document.getElementById('color').value;
    const normal = document.querySelector('.normal');
    
    let boxShadowValue = box.style.boxShadow;
    box.style.boxShadow = `${hOffset}px ${vOffset}px ${blurRadius}px ${spread}px ${color}`;
    normal.textContent = `box-shadow: ${boxShadowValue}`;
}

inputsNodeList.forEach(input => {
    input.addEventListener('change', handleUpdate);
});
inputsNodeList.forEach(input => {
    input.addEventListener('mousemove', handleUpdate);
});



