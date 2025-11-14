const fs=require('fs')

const {data}=require('react-router-dom')

fs.writeFileSync('hello.txt',"hello")

fs.appendFileSync('hello.txt','hi node js')

a=fs.readFileSync('hello.txt')
console.log(a.toString())

fs.renameSync('hello.txt','hi.txt')

fs.unlinkSync('hi.txt')

// async
 fs.writeFile('hi.txt','hello',(err,data)=>{
    if(err){
        return console.log(err)
    }
    console.log('data successfully')
 })

 fs.appendFile('hi.txt','hello node js',(err,data)=>{
    if(err){
        return console.log(err)
    }
    console.log('append data')
 })
 fs.readFile('hi.txt',(err,data)=>{
    if(err){
        return console.log(err)
    }
   console.log((data.toString()))
 })
 fs.rename('hi.txt','async.txt',(err,data)=>{
    if(err){
        return console.log(err)
    }
    console.log('rename')
 })