

// // // // const http =require('http');
// // // // const data= require('./data');
// // // // http.createServer((req,resp)=>{
// // // //     resp.writeHead(200,{'content-type':'application\json'});
// // // //     resp.write(JSON.stringify(data));
// // // //     resp.end();

// // // // }).listen(5000);

// // // //console.log(process.argv[3]);
// // // const fs= require('fs');
// // // const input = process.argv;
// // // if(input[2]=='add')
// // // fs.writeFileSync(input[3],input[4]);
// // // else if(input[2]=='remove')
// // //     fs.unlinkSync(input[3]);
// // // else 
// // // console.log('invalid input');

// // const fs= require('fs');
// // const path= require('path');
// // const dirPath= path.join(__dirname,'crud');
// // // // for(i=0;i<4;i++)
// // // // {
// // // //     fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple txt file - fbc" );
// // // //     //fs.writeFileSync(`apple${i}.txt`,"a simple txt file - fbc" );
// // // // }
// // // fs.readdir(dirPath,(err,files)=>{
// // //     files.forEach((item)=>
// // //     {
// // //         console.log("file name is ",item);
// // //     })
// // //     if(err)console.log("Invalid access")
// // // })
// // const filePath= `${dirPath}/apple.txt`;
// // // fs.writeFileSync(filePath,'hii I am AG');
// // // fs.readFile(filePath,'utf8',(err,item)=>{

// // //     console.log(item);
// // // })
// // fs.appendFile(filePath,' and file name is apple.txt',(err)=>{
// //     if(!err)console.log("file is done");
// // })
// // fs.rename(filePath,`${dirPath}/veg.txt`,(err)=>{
// //     if(!err)console.log("File name is updated");
// // })
// // fs.unlinkSync(`${dirPath}/veg.txt`);
// // let a=10;
// // let b=0;

// // let waitingData= new Promise((resolve,reject)=>{
// //     setTimeout(()=>{
// //         resolve(30);
// //     },2000);
// // })
// // waitingData.then((data)=>{
// //     b=data;
// //     console.log(a+b);
// // })

// //This is the drawback of async programming language

// // console.log("starting up")
// // setTimeout(() => {
// //     console.log("2 second log");
// // }, 2000)
// // setTimeout(() => {
// //     console.log("0 second log");
// // }, 0)
// // console.log("finishing up")
// // // Call stack --> Node API 
// // //      Callback Queue


// // Express Js is a framework of Node JS
// const express= require('express');
// const app= express();
// app.get('',(req,resp)=>{
//     resp.send(`<h1>Hello, this is home page</h1>
//         <a href="/about">Go to About Page</a>
//         <a href="/help">Go to Help Page</a>`);
// });

// app.get('/about',(req,resp)=>{
//     resp.send(`
//         <input type="text" placeholder="Username" value="${req.query.name }"/>
//         <button>Click Me!!!</button>
//         <a href="/">Go to Home Page</a>
//         <a href="/help">Go to Help Page</a>
//         `);
// });
// app.get('/help',(req,resp)=>{
//     resp.send([
//         {
//             name: 'Anshika',
//             email: 'ansh@love.com'
//         },
//         {
//             name: 'Ansh',
//             email: 'anshika@love.com'
//         },
//         {
//             name: 'Agv',
//             email: 'a@love.com'
//         }
//     ]);
// });

// app.listen(5000);

const express= require('express');
const path= require('path');

const app= express();
const publicPath= path.join(__dirname,'public');

app.use(express.static(publicPath));

app.listen(5000);
