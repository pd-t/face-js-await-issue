export type mytype = string | number
export type hidden = mytype 


function getPromise(): Promise<hidden> {
    return new Promise((resolve, reject) => {
        // Do something asynchronous
        setTimeout(() => {
            // Resolve or reject the promise
            resolve('Data');
        }, 1000);
    });
}

function my_function(input: string): string {
    return input
}

const result = my_function(await getPromise())
console.log(result)
