function getName(node) {
    return node.name
}

function headNode(linkedList, collection) {
    return collection[linkedList]
}

function next(node, collection) {
    return collection[node.next]
}

function nodeAt(index, linkedList, collection) {
    let node = headNode(linkedList, collection)

    for(let i = 0; i < index; i ++) {
        node = next(node, collection)
    }

    return node
}

function addressAt(index, linkedList, collection) {
    if(index === 0) {
        return linkedList
    } else {
        let node = nodeAt(index - 1, linkedList, collection)
        return node.next
    }
}

function indexAt(node, collection, linkedList) {
    let currentNode = headNode(linkedList, collection)
    let index = 0

    while(currentNode.next != node.next) {
        index++
        currentNode = next(currentNode, collection)
    }

    return index
}

function insertNodeAt(index, address, linkedList, collection) {
    let beforeNode = nodeAt(index - 1, linkedList, collection)
    let newNode = collection[address]
    newNode.next = beforeNode.next
    beforeNode.next = address
}

function deleteNodeAt(index, linkedList, collection) {
    let beforeNode = nodeAt(index - 1, linkedList, collection)
    beforeNode.next = addressAt(index + 1, linkedList, collection)
}