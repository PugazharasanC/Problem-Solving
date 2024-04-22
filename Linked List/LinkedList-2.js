// 1 -> 2 -> 3 -> 4 -> 5 -|
//       ^---------------<

function printLinkedList(list) {
    if (!list) {
        return;
    }
    console.log(list.data);
    printLinkedList(list.next);
}