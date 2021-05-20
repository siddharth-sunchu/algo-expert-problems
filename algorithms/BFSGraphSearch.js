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

// console.log(adjacencyList);


const bfs = (origin, destination) => {


    const queue = [origin];
    const visitedNodes = new Set();
    visitedNodes.add(origin);

    while(queue.length > 0) {

        const currentOrigin = queue.shift();

        const children = adjacencyList.get(currentOrigin);

        children.forEach((eachDestinations) => {

            if(eachDestinations === destination) {
                console.log('We found ', destination, ' through BFS');
            }

            if(!visitedNodes.has(eachDestinations)) {
                console.log(eachDestinations, 'currentDestination');
                queue.push(eachDestinations);
                visitedNodes.add(eachDestinations);
            }
        })

    }
};

bfs('PHX', 'BKK');


