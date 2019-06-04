/**
 * A binary Search Tree is a tree of nodes where 
 * A. All nodes have different values
 * B. Left subtree only contains nodes lesser than the node
 * C. Right subtree only contains nodes greater than the node
 * D. Left and right trees must also be binary trees
 * 
 * There are three ways to traverse a binary search tree
 * Inorder: Left, Root, Right,
 * PreOrder: Root, Left, Right,
 * PostOrder: Left, Right, Root
 * 
 * Context provided by https://stackoverflow.com/questions/12880718/how-many-traversals-need-to-be-known-to-construct-a-bst
 * InOrder is required to construct a tree if you do not know it's a binary search tree
 * Otherwise the inOrder is implied as sorting it will give you the inorder
 * 
 * BST below brought to you by https://coderbyte.com/algorithm/determine-if-binary-tree-is-subtree
 */

function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }    
  
  // left tree
  var root = new Node(10);
  var n1 = new Node(4);
  var n2 = new Node(6);
  var n3 = new Node(30);
  
  // setup children
  n1.right = n3;
  root.left = n1;
  root.right = n2;
  
  // right tree
  var root_r = new Node(26);
  var n1_r = new Node(10);
  var n2_r = new Node(3);
  var n3_r = new Node(4);
  var n4_r = new Node(6);
  var n5_r = new Node(3);
  var n6_r = new Node(30);
  
  // setup children
  n3_r.right = n6_r;
  n1_r.left = n3_r;
  n1_r.right = n4_r;
  n2_r.right = n5_r;
  root_r.left = n1_r;
  root_r.right = n2_r;

  //in this context, root starts as root, but becomes the current node as the recursion goes
  function inOrderTraversal(root, nodes){
      if (root & root.left){
          inOrderTraversal(root.left, nodes)
      }

      nodes.push(root.data)

      if (root & root.right) {
        inOrderTraversal(root.right, nodes)
      }

      return nodes;
  }

  function preOrderTraversal(root, nodes){

    nodes.push(root.data)

    if (root & root.left){
        inOrderTraversal(root.left, nodes)
    }

    if (root & root.right) {
      inOrderTraversal(root.right, nodes)
    }

    return nodes;
}