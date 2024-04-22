

let linkedList = null

function printLinkedList(list) {
    if (!list) {
        return;
    }
    console.log(list.data);
    printLinkedList(list.next);
}
function add(list, data) {
    if (!list) {
        console.log(data, "is added");
        return { data, next: null };
    }
    list.next = add(list.next, data);
    return list;
}
printLinkedList(linkedList);
linkedList = add(linkedList, 40);
printLinkedList(linkedList);

console.log(linkedList);