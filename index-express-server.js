//servidor creado con el modulo express


const express=require('express') //importamos el modulo


const app= express() //inicializamos el modulo almacenandolo en u a constante

app.get('/',(req,res)=>{  //cuando el clinte colocite acceso a la ruta primcipal el servidor va a escuchar con get
    res.sendFile('./static/index.html',{
        root:__dirname
    }) //luego de escuchar la petición va ha enviar el archivo como respuesta 
   {

   }
})


app.listen(2000) //puerto en el cual va a escuchael servidor 

console.log(`server on port ${2000}`) //feedback de la ejecución