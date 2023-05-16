
// FILE READ AND WRITE


const fs= require ('fs');

const getNewId = (array)=>{

    if(array.length > 0){
        return array[array.length -1 ].d +1
    }else{
        return 1;
    }
// Create New Date
    const newDate = () => new Date().toString();


    function mustBeInArray(array, id){
        return new Promise((resolve, reject)=>{
            //Promise is a function. If the promise is fulfiled, it is resolved, otherwise, it is rejeted
            const row = array.find(r => r.id == id)
            if (!row) {

                reject({
                    message: 'Id not found',
                    status: 404
                })

            }
            resolve(row)
        });
    }

    function writeJSONFile(fileName, content){
        fs.writeFileSync(fileName, JSON.stringify(content), 'utf8', (err)=>{

            if(err){
            console.log("Helper file writeJSONfil: "+ err);
            }           
        });
    }
    
    module.exports = {
        getNewId,
        newDate,
        mustBeInArray,
        writeJSONFile


    }
}
