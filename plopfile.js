export default function (plop){

    //? --------------- HELPER --------------- 

    plop.setHelper('snakeCase', (text) => {
        return text
            .replace(/([A-Z])/g, '_$1')
            .replace(/\s+/g, '_') 
            .replace(/^_/, '')
            .toLowerCase();
    });    


    //? --------------- ROUTER  --------------- 

    plop.setGenerator('router', {
        description: "Create New Router",
        prompts : [
            {
                type: 'input',
                name: 'FileName',
                message: 'File Name:',
                default: 'router_rt'
            },
            {
                type: 'input',
                name: 'fullRoute',
                message: 'Full Route:',
                default: '/'
            },
            {
                type: 'input',
                name: 'route',
                message: 'Initial Route:',
                default: '/'
            },

        ],
        actions : [ 
            {
                type: 'add',
                path: `${process.cwd()}/{{snakeCase FileName}}_rt.js`,
                templateFile: 'plop-templates/Templates/route.hbs'
            }
        ]
    })
    
    //? ---------------  CONTROLLER --------------- 

    plop.setGenerator('controller', {
        description: "Create New Controller",
        prompts : [
            {
                type: 'input',
                name: 'FileName',
                message: 'File Name:',
                default: 'controller'
            },
            {
                type: 'input',
                name: 'functionCount',
                message: 'How many functions?',
                default: 1,
                validate: (input) => {
                  const val = parseInt(input);
                  return !isNaN(val) && val > 0 ? true : 'Enter a valid number';
                },
            },
            {
                type: 'input',
                name: 'functionNames',  // Changed from functionNamesRaw
                message: 'Enter function names (comma-separated):',
                filter: (input) => {
                  if (typeof input === 'string') {
                    return input
                      .split(',')
                      .map((s) => s.trim())
                      .filter(Boolean);
                  }
                  return input;
                },
                validate: (input, answers) => {
                  const count = parseInt(answers.functionCount);
                  return input.length === count
                    ? true
                    : `Please enter exactly ${count} function name(s)`;
                },
            },    
        ],
        actions : [ 
            {
                type: 'add',
                path: `${process.cwd()}/{{snakeCase FileName}}_ctrl.js`,
                templateFile: 'plop-templates/Templates/controller.hbs'  // Changed template file
            }
        ]
    })
}