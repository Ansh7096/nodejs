

// // const http =require('http');
// // const data= require('./data');
// // http.createServer((req,resp)=>{
// //     resp.writeHead(200,{'content-type':'application\json'});
// //     resp.write(JSON.stringify(data));
// //     resp.end();

// // }).listen(5000);

// //console.log(process.argv[3]);
// const fs= require('fs');
// const input = process.argv;
// if(input[2]=='add')
// fs.writeFileSync(input[3],input[4]);
// else if(input[2]=='remove')
//     fs.unlinkSync(input[3]);
// else 
// console.log('invalid input');

const fs= require('fs');
const path= require('path');
const dirPath= path.join(__dirname,'files');
// for(i=0;i<4;i++)
// {
//     fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple txt file - fbc" );
//     //fs.writeFileSync(`apple${i}.txt`,"a simple txt file - fbc" );
// }
fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>
    {
        console.log("file name is ",item);
    })
    if(err)console.log("Invalid access")
})