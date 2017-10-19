/**
 * Created by Thinkpad on 2017/10/16.
 */

// 实现Queue类：enqueue、dequeue、front、isEmpty、clear、size、print
function Queue() {
    var items = [];
    this.enqueue = function (element) {
        items.push(element);
    };
    this.dequeue = function () {
        return items.shift();
    };
    this.front = function () {
        return items[0];
    };
    this.isEmpty = function () {
        return (items.length === 0)
    };
    this.clear = function () {
        items = [];
    };
    this.size = function () {
        return items.length;
    };
    this.print = function () {
        console.log(items.toString());
    };
}

var apply = {

    // 1、实现优先队列类
    PriorityQueue: function () {
        var items = [];

        // 创建队列元素
        function QueueElement(element, priority) {
            this.element = element;
            this.priority = priority;
        }

        // 入队
        this.enqueue = function (element, priority) {
            var queueElement = new QueueElement(element, priority),
                added = false;
            for (var i = 0; i < items.length; i++) {
                if (queueElement.priority < items[i].priority) {//遍历队列，首次发现自己优先级高时，直接插入
                    items.splice(i, 0, queueElement);
                    added = true;
                    break;
                }
            }
            if (!added) {
                items.push(queueElement);
            }
        };
        // 打印队列
        this.print = function () {
            for (var i = 0; i < items.length; i++) {
                console.log(items[i].element + "(" + items[i].priority + ")");
            }
        };
    },
    // 2、击鼓传花
    hotPotato: function (nameList, num) {
        var queue = new Queue();
        for (var i = 0; i < nameList.length; i++) {
            queue.enqueue(nameList[i]);
        }
        var eliminated = "";
        while (queue.size() > 1) {
            for (var j = 0; j < num; j++) {
                queue.enqueue(queue.dequeue());
            }
            eliminated = queue.dequeue();
            console.log(eliminated + "被淘汰");
        }
        return queue.dequeue();
    }
};