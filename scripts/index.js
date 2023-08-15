const stack = new Stack;


function addToStack () {
    let input = document.querySelector('#item-stack');
    let texto = input.value;
    stack.push(texto);
    showStack();
    input.value = '';
}

function removeFromStack () {
    stack.pop();
    showStack();
}

function showStack () {
    removeID('list-stack');

    const stackDiv = document.getElementById('stack');
    const list = document.createElement('ul');
    
    list.setAttribute('id', 'list-stack');

    stack.nodes.forEach(node => {
        let item = document.createElement('li');
        item.innerHTML = node.value;
        list.appendChild(item);
    });

    stackDiv.appendChild(list);
}

function peekStack () {
    removeID('peek-text');
    const stackDiv = document.getElementById('stack');
    const text = document.createElement('h3');
    text.setAttribute('id', 'peek-text')
    text.innerHTML = stack.peek();
    stackDiv.append(text);
}

