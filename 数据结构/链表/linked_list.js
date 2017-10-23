/**
 * Created by Thinkpad on 2017/10/16.
 */

// 实现LinkedList（单链表）类：append、insert、removeAt、remove、indexOf、isEmpty、size、getHead、toString、print
function LinkedList() {
    // 节点：元素+下一个节点的地址
    function Node(element, next) {
        this.element = element;
        this.next = null;
    }

    var length = 0,
        head = null;

    this.append = function (element) {
        var node = new Node(element),
            current;
        if (head === null) {// 链表为空，当前节点赋给头节点
            head = node;
        } else {// 链表不为空，遍历至尾节点
            current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    };
    this.removeAt = function (position) {
        if (position > -1 && position < length) {
            var current = head,
                previous;
            // 移除项为第一项
            if (position === 0) {
                head = current.next;
            } else {//移除其他项
                for (var i = 0; i < position; i++) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };
    this.remove = function (element) {
        var index = this.indexOf(element);
        return this.removeAt(index);
    };
    this.insert = function (position, element) {
        if (position >= 0 && position <= length) {// 插入范围合理
            var node = new Node(element),
                current = head,
                previous;
            if (position === 0) {// 插在头节点前面
                node.next = current;
                head = node;
            } else {
                for (var i = 0; i < position; i++) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        } else {
            return false;
        }
    };
    this.toString = function () {
        var current = head,
            str = '';
        while (current) {
            str += current.element + (current.next ? ',' : '');
            current = current.next;
        }
        return str;
    };
    this.indexOf = function (element) {
        var current = head,
            index = 0;
        while (current) {
            if (current.element === element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };
    this.isEmpty = function () {
        return length === 0;
    };
    this.size = function () {
        return length;
    };
    this.getHead = function () {
        return head;
    };
    this.print = function () {
        var current = head;
        for (var i = 0; i < length; i++) {
            console.log(current.element);
            current = current.next;
        }
    };
}

// 实现DoublyLinkedList（双向链表）类
function DoublyLinkedList() {
    // 节点：元素+前驱节点+后继节点
    function Node(element) {
        this.element = element;
        this.prev = null;
        this.next = null;
    }

    var length = 0,
        head = null,
        tail = null;

    this.insert = function (position, element) {
        if (position >= 0 && position <= length) {
            var node = new Node(element),
                current = head,
                previous;
            if (position === 0) {// 头部添加
                if (!head) {// 为空
                    head = node;
                    tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
            } else if (position === length) {// 尾部添加
                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            } else {
                for (var i = 0; i < position; i++) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }
            length++;
            return true;
        } else {
            return false;
        }
    };
    this.removeAt = function (position) {
        if (position > -1 && position < length) {
            var current = head,
                previous;
            if (position === 0) {// 移除第一项
                head = current.next;
                // 只有一项时，更新tail
                if (length === 1) {
                    tail = null;
                } else {
                    head.prev = null;
                }
            } else if (position === length - 1) {// 移除最后一项
                current = tail;
                tail = current.prev;
                tail.next = null;
            } else {
                for (var i = 0; i < position; i++) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                current.next.prev = previous;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };

}