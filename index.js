

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
const dirPath= path.join(__dirname,'crud');
// // for(i=0;i<4;i++)
// // {
// //     fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple txt file - fbc" );
// //     //fs.writeFileSync(`apple${i}.txt`,"a simple txt file - fbc" );
// // }
// fs.readdir(dirPath,(err,files)=>{
//     files.forEach((item)=>
//     {
//         console.log("file name is ",item);
//     })
//     if(err)console.log("Invalid access")
// })
const filePath= `${dirPath}/apple.txt`;
// fs.writeFileSync(filePath,'hii I am AG');
// fs.readFile(filePath,'utf8',(err,item)=>{

//     console.log(item);
// })
fs.appendFile(filePath,' and file name is apple.txt',(err)=>{
    if(!err)console.log("file is done");
})
fs.rename(filePath,`${dirPath}/veg.txt`,(err)=>{
    if(!err)console.log("File name is updated");
})
fs.unlinkSync(`${dirPath}/veg.txt`);