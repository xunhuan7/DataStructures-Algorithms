/**
 * Created by Thinkpad on 2017/9/25.
 * 线性表的单链表
 * 适合场景：大小难以预估；查找为n/2，与顺序存储一样；插入和删除为O(1)
 */

function Node(element) {
    this.element = element;
    this.next = null;
}
function LinkedList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    // this.remove = remove;
    this.display = display;
    
    function find(item) {
        var curNode = this.head;
        while(curNode.element != item){
            curNode = curNode.next;
        }
        return curNode;
    }

    function insert(newElement, item) {
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    }

    function display() {
        var curNode = this.head;
        while (!(curNode.next == null)) {
            console.log(curNode.next.element);
            curNode = curNode.next;
        }
    }
}

var cities = new LinkedList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Alma", "Russellville");
cities.display();