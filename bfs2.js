var isCousins = function(root, x, y) {
    
};

    //    1                1 
    //  /   \            /  \
    // 2     3          2    3
    //  \   / \        / \  / \
    //   4  5 6       4 5  6 7
    //                /\ /\ /\ /\ 
                null
//root = [1,2,3,null,4,null,null]  
// queue = {}push and shift 
// stackArr = {} push pop 


root = {val: 1, left: {val: 2, left: {val: 4, left: null, right: null}, right: {val: 5, left: null, right: null}}, right: {val: 3, left: {val: 6, left: null, right: null}, right: {val: 7, left: null, right: null}}}


// let q = [root]
// while (q.length > 0) {
//     node = q.shift()
//     if (node.left) q.push(node.left)
//     if (node.right) q.push(node.right)
// }

// [1] -> [X]+[2,3] -> [2,3]
// [2] -> [X,3]+[4,5] -> [3,4,5]
// [3] -> [X,4,5]+[6,7] -> [4,5,6,7]
// [4] -> [X,5,6,7]+[] -> [5,6,7]
// [5] -> [X,6,7]+[] -> [6,7]


let q = [root], len
while (q.length > 0) {
    len = q.length
    for (let i = 0; i < len; i++) {
        node = q.shift()
        if (node.left) q.push(node.left)
        if (node.right) q.push(node.right)
    }
    //checks if only one answer found
}

var isCousins = function(root, x, y) {
    let q = [root], node, ans
// let node = undefined 
// let ans = undefined 
    for (let len = q.length; !ans; len = q.length) {
        for (let i = 0; i < len; i++) {
            node = q.shift();
            for (let n of [node.left, node.right]) {
                if (n) {
                    if (n.val === x || n.val === y) {
                        if (ans === node.val) return false
                        if (ans) return true
                        ans = node.val
                    }
                    q.push(n)
                }
            }
        }
    }
    return false
}