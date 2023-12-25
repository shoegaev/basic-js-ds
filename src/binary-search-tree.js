const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null
  }

  root() {
    return this.rootNode
  }

  add(data) {
    this.rootNode = addData(this.rootNode, data)
    function addData(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node
      }
      if (data < node.data) {
        node.left = addData(node.left, data)
      } else {
        node.right = addData(node.right, data)
      }
      return node;
    }
  }

  has(data) {
    function hasData(node, data) {
      if (!node) {
        return false
      }
      if (node.data === data) {
        return true
      }
      if (data < node.data) {
        return hasData(node.left, data)
      } else {
        return hasData(node.right, data)
      }
    }
    return hasData(this.rootNode, data)
  }

  find(data) {
    function findData(node, data) {
      if (!node || node.data === data) {
        return node
      }
      if (data < node.data) {
        return findData(node.left, data)
      } else {
        return findData(node.right, data)
      }
    }

    return findData(this.rootNode, data)
  }

  remove(data) {
    this.rootNode = deleteData(this.rootNode, data)
    function deleteData(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = deleteData(node.left, data)
        return node
      } else if (node.data < data) {
        node.right = deleteData(node.right, data)
        return node
      } else {

        if (!node.right && !node.left) {
          return null
        }

        if (!node.left) {
          node = node.right
          return node
        }
        if (!node.right) {
          node = node.left
          return node
        }

        let minFromrightBranch = node.right;
        while (minFromrightBranch.left) {
          minFromrightBranch = minFromrightBranch.left
        }
        node.data = minFromrightBranch.data;
        node.right = deleteData(node.right, minFromrightBranch.data)

        return node
      }
    }
  }

  min() {
    if (!this.rootNode) {
      return null
    }
    function findMin(node) {
      if (node.left === null) {
        return node
      } else {
        return findMin(node.left)
      }
    }
    return findMin(this.rootNode).data
  }

  max() {
    if (!this.rootNode) {
      return null
    }
    function findMax(node) {
      if (node.right === null) {
        return node
      } else {
        return findMax(node.right)
      }
    }
    return findMax(this.rootNode).data
  }
}

module.exports = {
  BinarySearchTree
};
let a = new BinarySearchTree()
console.log(a.root)

a.add(1)
// console.log(a)
// console.log('добавили только 1 и ищем 2 в дереве --- ')
// console.log(a.has(2))

a.add(2)
// console.log(a)
// console.log('добавили и 1 и 2 и ищем 2 в дереве --- ')
// console.log(a.has(2))

console.log(a.root)

