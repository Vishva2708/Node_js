// const http=require('http')
// http.createServer((request,response)=>{
//     response.write('hello dfghjkl')
//     response.end()
// }).listen(3001)

// const http=require('http')
// const server=http.createServer((req, res) =>{
//     if (req.url === "/") {
//     res.write("This is Home Page");
//   }
//   else if (req.url === "/about") {
//     res.write("This is About Page");
//   }
//   else if (req.url === "/contact") {
//     res.write("This is Contact Page");
//   }
//   else {
//     res.write("404 Page Not Found");
//   }

//   res.end();
// });
// server.listen(3001, () => {
//   console.log("Server running on port 3001");
// });
// const http=require('http')
// http.createServer((req,res)=>{
//     res.write('hello node.js')
//     res.end()
// }).listen(4000)
const http=require("http")
http.createServer((req,res)=>{
  const path=req.url
  const method=req.method
  console.log(path,method)

  if(path.includes('/abc') && method=='GET'){
    res.write("home page")
    res.end()
  }else{
    res.write("contact page")
    res.end()
  }
}).listen(4002)