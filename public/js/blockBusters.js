const section = document.getElementById('blocks');
const original = document.getElementById('block-1');
const disappear = (ev) => {
    id = ev.path[0].id;
    console.log(id)
    block = document.getElementById(`${id}`);
    block.remove();

}
original.addEventListener('mouseover', disappear);

for(let i = 2; i < 101; i++){
    const newBlock = document.createElement('div');
    newBlock.setAttribute('class', 'red-block');
    newBlock.setAttribute('id', `block-${i}`);
    newBlock.addEventListener('mouseover', disappear);
    section.appendChild(newBlock);
}