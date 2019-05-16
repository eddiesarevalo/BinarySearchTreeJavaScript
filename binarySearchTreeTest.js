function binarySearchTreeExamples(){

  function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }

  function BinarySearchTree(){
    this.root = null;
  }

  BinarySearchTree.prototype.push = function(value){
    let newNode = new Node(value);
    let currentNode = this.root;

    if(this.root === null){
      this.root = newNode;
      return;
    }

    while(currentNode){
      if(value < currentNode.value){
        if(currentNode.left === null){
          currentNode.left = newNode;
          break;
        }
        else{
          currentNode = currentNode.left;
        }
      }
      else{
        if(currentNode.right === null){
          currentNode.right = newNode;
          break;
        }
        else{
          currentNode = currentNode.right;
        }
      }
    }
  }

  BinarySearchTree.prototype.breadthFirstTraversalRecursive = function(){
    let height = getHeight(this.root);
    for(let i = 0; i <= height; i++){
      printLevel(this.root, i);
    }

    function getHeight(root){
      if(root === null){
        return 0;
      }

      let lHeight = getHeight(root.left);
      let rHeight = getHeight(root.right);

      if(lHeight > rHeight){
        return lHeight + 1;
      }
      else{
        return rHeight + 1;
      }
    }

    function printLevel(root, level){
      if(root === null){
        return;
      }
      if(level === 1){
        console.log(root.value);
      }
      if(level > 1){
        printLevel(root.left, level -1);
        printLevel(root.right, level - 1);
      }
    }
  }

  BinarySearchTree.prototype.BreadthFirstTraversalIterative = function(){
    let orderQueue = [];
    orderQueue.push(root);

    while(orderQueue.length > 0){
      let tempNode = orderQueue.shift();
      console.log(tempNode.value);

      if(tempNode.left != null){
          orderQueue.push(tempNode.left);
      }
      if(tempNode.right != null){
        orderQueue.push(tempNode.right);
      }
    }
  }

  BinarySearchTree.prototype.inOrderRecursive = function(){
    let root = this.root;
    inOrder(root);

    function inOrder(root){
      if(root === null){
        return;
      }

      inOrder(root.left);
      console.log(root.value);
      inOrder(root.right);
    }
  }

  BinarySearchTree.prototype.inOrderIterative = function(){
    let stack = [];
    let current = this.root;

    while(current != null || stack.length > 0){
      while(current != null){
        stack.push(current);
        current = current.left;
      }

      current = stack.pop();
      console.log(current.value);

      current = current.right;
    }
  }

  BinarySearchTree.prototype.preOrderRecursive = function(){
    preOrder(this.root);

    function preOrder(root){
      if(root == null){
        return;
      }

      console.log(root.value);
      preOrder(root.left);
      preOrder(root.right);
    }
  }

  BinarySearchTree.prototype.preOrderIterative = function(){
    let stack = [];
    stack.push(this.root);

    while(stack.length > 0){
      let temp = stack.pop();
      console.log(temp.value);

      if(temp.right != null){
        stack.push(temp.right);
      }
      if(temp.left != null){
        stack.push(temp.left);
      }
    }
  }

  BinarySearchTree.prototype.postOrderRecursive = function(){
    postOrder(this.root);

    function postOrder(root){
      if(root == null){
        return;
      }

      postOrder(root.left);
      postOrder(root.right);
      console.log(root.value);
    }
  }

  BinarySearchTree.prototype.postOrderIterative = function(){
    let stack = [];
    let current = this.root;

    while(current != null || stack.length > 0){
      while(current != null){
        stack.push(current);
        stack.push(current);
        current = current.left;
      }

      current = stack.pop();
      if(stack[stack.length-1] == current){
        current = current.right;
      }
      else{
        console.log(current.value);
        current = null;
      }
    }
  }

  let bst = new BinarySearchTree();
  bst.push(4);
  bst.push(2);
  bst.push(6);
  bst.push(1);
  bst.push(3);
  bst.push(5);
  bst.push(7)

  /*
  bst.push(25);
  bst.push(15);
  bst.push(50);
  bst.push(10);
  bst.push(22);
  bst.push(35);
  bst.push(70);
  bst.push(4);
  bst.push(12);
  bst.push(18);
  bst.push(24);
  bst.push(31);
  bst.push(44);
  bst.push(66);
  bst.push(90);
  */

  console.log("Breadth First Traversal Recursive");
  bst.breadthFirstTraversalRecursive();

  console.log("In Order Recursive");
  bst.inOrderRecursive();

  console.log("In Order Iterative");
  bst.inOrderIterative();

  console.log("Pre Order Recursive");
  bst.preOrderRecursive();

  console.log("Pre Order Iterative");
  bst.preOrderIterative();

  console.log("Post Order Recursive");
  bst.postOrderRecursive();

  console.log("Post Order Iterative");
  bst.postOrderIterative();
}

binarySearchTreeExamples();
