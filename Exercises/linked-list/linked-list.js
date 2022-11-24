
// No funciona, no se porque!
/* class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

export class LinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const newNode = new Node(value, null, this.tail);
    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
  }

  pop() {
    if (!this.tail) return null;
    
    const oldTailValue = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
    return oldTailValue;
  }

  shift() {
    if (!this.head) return null; // Si no hay nada que eliminar, devolvemos null
    const oldHeadValue = this.head.value;
    this.head = this.head.next; // Como vamos a eliminar el valor head actual, asignamos como nuevo head el siguinte nodo del actual
    if (this.head) {
      this.head.prev = null; // Si existe un nodo, el valor previo del nuevo head será null
    } else {
      this.tail = null; // Si no existe un nodo, el tail será null
    }
    return oldHeadValue;
  }

  unshift(value) {
    const newNode = new Node(value, this.head, null);
    if (this.head) {
      this.head.prev = newNode; // Si existe nodo, el valor anterior del nuevo nodo es el head
    } else {
      this.tail = newNode; // como no hay nodo en la lista, estariamos agregando el primer nodo, por lo tanto, será tanto el tail como el head
    }
    this.head = newNode; // el head será el nuevo nodo
  }

  delete(value) {
    let node = this.head;
    while (node.next !== null) {
      if (node.value === value) {
        node.next.prev = node.prev; // Si el nodo a eliminar es el head, el valor previo del nuevo head será el previo del nodo a eliminar
        node.prev.next = node.next; // Si el nodo a eliminar es el tail, el valor next del nuevo tail será el next del nodo a eliminar
      }
      node = node.next;
    }
  }

  count() {
    let count = 0;
    let node = this.head; // Asignamos el head como el primer nodo
    while (node.next !== node.tail) { // Mientras el nodo exista
      count++;
      node = node.next; // Avanzamos al siguiente nodo
    }
    return count;
  }
} */

class Node {
  constructor(prev = null, next = null, val = null) {
    this.prev = prev;
    this.next = next;
    this.val = val;
  }
}
export class LinkedList {
  constructor() {
    this.tail = new Node();
    this.head = new Node(null, this.tail);
    this.tail.prev = this.head;
  }
  push(val) {
    let newNode = new Node(this.tail.prev, this.tail, val);
    this.tail.prev.next = newNode;
    this.tail.prev = newNode;
  }
  pop() {
    const val = this.tail.prev.val;
    this.tail.prev.prev.next = this.tail;
    this.tail.prev = this.tail.prev.prev;
    return val;
  }
  unshift(val) {
    let newNode = new Node(this.head, this.head.next, val);
    this.head.next.prev = newNode;
    this.head.next = newNode;
  }
  shift() {
    const val = this.head.next.val;
    this.head.next.next.prev = this.head;
    this.head.next = this.head.next.next;
    return val;
  }
  delete(val) {
    let node = this.head;
    while (node.next !== null) {
      if (node.val === val) {
        node.next.prev = node.prev;
        node.prev.next = node.next;
        break;
      }
      node = node.next;
    }
  }
  count() {
    let node = this.head;
    let count = 0;
    while (node.next !== this.tail) {
      count++;
      node = node.next;
    }
    return count;
  }
}
