// const queue = [];

function processData(input) {
    const queue = [];

    function innerFunction(){
        const queries = input.split('\n')
        for (let query of queries){
            let fullQuery = query.split(' ');
            let command = fullQuery[0];
            let value = fullQuery[1];
            switch(command){
                case "1":
                    enqueue(value);
                    continue;
                case "2":
                    dequeue();
                    continue;
                case "3":
                    peekQueue();
                    continue;
                default:
                    continue;
            }
        } 

    }

    function enqueue(value){
        queue.push(value);
    };
    
    function dequeue(){
        queue.shift()
    };
    
    function peekQueue(){
        console.log(queue[0])
    };

   return innerFunction();
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});