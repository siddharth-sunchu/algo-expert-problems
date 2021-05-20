const runAllCommands = (input) => {

    const dependencies = new Map();
    const installPackages = new Map();

    let result = '';

    const splitCommandsByNewLine = (str) => str.split("\n");

    const commands = splitCommandsByNewLine(input);

    console.log(commands, 'commands');

    commands.every((eachCommand) => {

        // console.log(eachCommand, 'eachCommand');

        const instructions = eachCommand.split(" ");

        // console.log(instructions, 'instructions');

        if(instructions[0] == 'END') {
            result = result + instructions.join(' ');
            return false;
        } else {
            result = result + instructions.join(' ') + '\n';
            
            if(instructions[0] == 'DEPEND') {
                dependCommand(instructions.splice(1));
            }

            return true;

            // if(instructions[0] == 'INSTALL') {
            //     installCommand(instructions.splice(1));
            // }

            // if(instructions[0] == 'REMOVE') {
            //     removeCommand(instructions.splice(1));
            // }

            // if(instructions[0] == 'LIST') {
            //     listCommand(instructions.splice(1));
            // }
        }
    });

    console.log(dependencies);

    function checkCycle(nodes) {
        const visited = new Set();

    }

    function dependCommand(programs) {
        const currentProgram = programs[0];
        const dependencyList = programs.slice(1);

        if(!dependencies.has(currentProgram)) {
            const dependentPrograms =  new Set([...dependencyList]);
            if(dependentPrograms.size === 1) {
                if(dependencies.has(dependentPrograms)) {

                }
            }
            dependencies.set(currentProgram, new Set([...dependencyList]));
        } else {
            const currentDependecyList = dependencies.get(currentProgram);
            dependencyList.forEach((eachDependentProgram) => {
                if(!currentDependecyList.has(eachDependentProgram)) {
                    currentDependecyList.add(eachDependentProgram);
                }
            })
        }
    };

    function checkChildExist(startNode) {

    }

    const checkDependentList = (package) => {

        let check = false;

        for(let i = 0; i < package.length; i++) {
            for(let [key, value] of dependencies.entries()) {

                if(value.indexOf(package[i]) !== -1) {
                    if(installPackages.has(key)) {
                        check = true;
                        break;
                    }
                };
            };
        }

        return check;

        // dependencies.forEach((value, key) => {
        //     value.forEach((eachDependent) => {
        //         if(package == eachDependent) {
        //             check = true; 
        //         }
        //     })
            
        // });

        // return check;

    };

    const checkReverseExist = (key, list) => {
        let result = true;
        if(list) {
            list.forEach((element) => {
                if(dependencies.has(element)) {
                    const tempList = dependencies.get(element);
                    // console.log(tempList.indexOf(key), key, 'tempList.indexOf(key)')
                    if(tempList.indexOf(key) !== -1) {
                        result = false;
                    }
                }
    
            });
        }


        return result;
    };

    const checkIfPackageNeeded = (packageName) => {

        let check = false;

        for(let [key, value] of dependencies.entries()) {

            if(value.indexOf(packageName) !== -1) {
                check = true;
                break;
            };
        };
        return check;

    }



    // const dependCommand = (list) => {

    //     const key = list[0];

    //     const dependencyList = list.slice(1);
    //     // console.log(key, 'key')
    //     // console.log(dependencyList, 'dependencyList')
    //     // console.log(checkReverseExist(key, dependencyList), 'checkReverseExist(key, dependencyList)')

    //     if(!checkReverseExist(key, dependencyList)) {
    //         result = result + `${dependencyList[0]} depends on ${key},` + ' ignoring command' + '\n';
    //     } else {
    //         dependencies.set(key, dependencyList);
    //     }
    // };

    // const installCommand = (list) => {
    //     const key = list[0];

    //     const dependencyList = dependencies.get(key);

    //     if(installPackages.has(key)) {
    //         result = result + `${key} is already installed` + '\n';
    //     } else {
    //         if(dependencyList) {
    //             dependencyList.forEach((eachPackage) => {
    //                 if(!installPackages.has(eachPackage)) {
    //                     result = result + `Installing ${key}` + '\n';
    //                     installPackages.set(eachPackage, true);
    //                 }
    //             });
    //         }


    //         result = result + `Installing ${key}` + '\n';
    //         installPackages.set(key, true);
    //     };
    // };

    // const listCommand = () => {
    //     installPackages.forEach((value, eachPackage) => {
    //         result = result + `${eachPackage}` + '\n';
    //     });
    // };

    // const removeCommand = (list) => {
    //     const key = list[0];

    //     const dependencyList = dependencies.get(key);

    //     // console.log(key, 'key')
    //     // console.log(installPackages)
    //     // console.log(installPackages.has(key), 'key')

    //     if(!installPackages.has(key)) {
    //         result = result + `${key} is not installed` + '\n';
    //     } else {

    //         if(checkIfPackageNeeded(key)) {
    //             result = result + `${key} is still needed` + '\n';
    //         } else {

    //             result = result + `Removing ${key}` + '\n';
    //             installPackages.delete(key)
    
    //             for(let i = 0; i < dependencyList.length; i++) {
    //                 if(!checkDependentList(dependencyList[i])) {
    //                     dependencyList.forEach((eachPackage) => {
    //                         if(installPackages.has(eachPackage)) {
    //                             installPackages.delete(eachPackage)
    //                             result = result + `Removing ${eachPackage}` + '\n';
    //                         }
    //                     });
    //                 }
    //             }
    
    //         }

    //     }





    // };



    // console.log(commands, 'commands')

    // for(let i = 1; i < commands.length; i++) {
    //     // console.log('TEST', commands[i].split(" "))

    //     // const eachCommands = commands[i].split("/\s+/");
    //     const eachCommands = commands[i].split(" ");
    //     if(eachCommands[0] == 'END') {
    //         result = result + eachCommands.join(' ');
    //         break;
    //     } else {
    //         result = result + eachCommands.join(' ') + '\n';
            
    //         if(eachCommands[0] == 'DEPEND') {
                
    //             dependCommand(eachCommands.splice(1));
    //         }

    //         if(eachCommands[0] == 'INSTALL') {
    //             installCommand(eachCommands.splice(1));
    //         }

    //         if(eachCommands[0] == 'REMOVE') {
    //             removeCommand(eachCommands.splice(1));
    //         }

    //         if(eachCommands[0] == 'LIST') {
    //             listCommand(eachCommands.splice(1));
    //         }
    //     }
    // }

    console.log(result);



};

let input = "22\n" +
"DEPEND TELNET TCPIP NETCARD\n" +
"DEPEND TCPIP NETCARD\n" +
"DEPEND NETCARD TCPIP\n" +
"DEPEND DNS TCPIP NETCARD\n" +
"DEPEND BROWSER TCPIP HTML\n" +
"INSTALL NETCARD\n" +
"INSTALL TELNET\n" +
"INSTALL foo\n" +
"REMOVE NETCARD\n" +
"INSTALL BROWSER\n" +
"INSTALL DNS\n" +
"LIST\n" +
"REMOVE TELNET\n" +
"REMOVE NETCARD\n" +
"REMOVE DNS\n" +
"REMOVE NETCARD\n" +
"INSTALL NETCARD\n" +
"REMOVE TCPIP\n" +
"REMOVE BROWSER\n" +
"REMOVE TCPIP\n" +
"LIST\n" +
"END"
runAllCommands(input);

// https://hackernoon.com/the-javascript-developers-guide-to-graphs-and-detecting-cycles-in-them-96f4f619d563
// https://github.com/chb0github/salesforce/blob/master/Dependencies%20Programming%20Test.pdf
