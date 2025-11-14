//sync
const fs=require('fs')
const { data } = require('react-router-dom')

fs.writeFileSync('hello.txt','hello')

fs.appendFileSync('hello.txt','intro to  js')

a= fs.readFileSync('hello.txt')
// console.log(a)
console.log(a.toString())

fs.renameSync('hello.txt','new-file.txt')
console.log('file successfully')

fs.unlinkSync('new-file.txt')


//async
fs.writeFile('hh.txt','hello',(err,data)=>{
    if(err){
        return console.error(err)
    }
    console.log('Data written succesfully')
})
console.log('success')

fs.appendFile('hh.txt','hello node js',(err,data)=>{
    if(err){
        return console.log(err)
    }
    console.log('data append sucessfully')
})

fs.readFile('hh.txt',(err,data)=>{
    if(err){
        return console.log(err)
    }
    console.log(data.toString())
})

fs.rename('hh.txt','hello.txt',(err,data)=>{
    if(err){
        return console.log(err)
    }
    console.log('rename successfully')
})
fs.unlink('hello.txt',(err,data)=>{
    if(err){
        return console.log(err)
    }
    console.log('delete')
})