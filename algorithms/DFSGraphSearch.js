// Airports
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

// Connections
const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

// The Graph
const adjacencyList = new Map();


// Add Node
function addNode(airport) {
    adjacencyList.set(airport, []);
};

// Add Children or Edges
function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
};


airports.forEach((origin) => {
    addNode(origin);
});

routes.forEach(([origin, destination]) => {
    addEdge(origin, destination);
});

const dfs = (source, destination, visited = new Set()) => {

    visited.add(source);

    const childrens = adjacencyList.get(source);

    for(let i = 0; i < childrens.length; i++) {

        const currentChild = childrens[i];

        if(currentChild === destination) {
            console.log('We Found the ', destination,  'through DFS');
            break;
        } 

        if(!visited.has(currentChild)) {
            console.log('We reached ', currentChild);
            return dfs(currentChild, destination, visited);
        }
    }
};

console.log(adjacencyList)
dfs('PHX', 'BKK')