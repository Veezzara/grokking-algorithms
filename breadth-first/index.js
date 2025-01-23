/**
 * @typedef {object} TreeNode
 * @property {string} name
 * @property {boolean} target
 */

/**
 * @type {TreeNode[]}
 */
const data = [
  {
    name: "Claire",
    target: false,
  },
  {
    name: "Tom",
    target: true,
  },
  {
    name: "Johnny",
    target: false,
  },
  {
    name: "Max",
    target: false,
  },
  {
    name: "Alice",
    target: false,
  },
  {
    name: "Peggy",
    target: false,
  },
  {
    name: "Bob",
    target: false,
  },
  {
    name: "Anuj",
    target: false,
  },
];

/**
 * @type {Map<string, string[]>}
 */
const tree = new Map();
tree.set("Max", ["Alice", "Bob", "Claire"]);
tree.set("Bob", ["Anuj", "Peggy"]);
tree.set("Alice", ["Peggy"]);
tree.set("Claire", ["Tom", "Johnny"]);
tree.set("Anuj", []);
tree.set("Peggy", []);
tree.set("Tom", []);
tree.set("Johnny", []);

/**
 * @param {string} name
 */
const getNodeByName = (name) => data.find((item) => item.name === name);

/**
 * @param {string} start
 * @returns {TreeNode}
 */
const findTarget = (start) => {
  const searchQueue = [start];

  while (searchQueue.length) {
    const item = searchQueue.shift();
    const node = getNodeByName(item);

    if (!node) {
      return null;
    }

    if (node.target) {
      return node;
    }

    const neighbors = tree.get(node.name);
    if (neighbors) {
      searchQueue.push(...neighbors);
    }
  }
};

console.log(findTarget("Max"));
