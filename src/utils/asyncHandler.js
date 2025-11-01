//create a function and export it
//hihger order function //accepts function as a parameter and and can even return a function

const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((err)=>next(err))
    }
}




//for better understaning of higher order functions
// const asyncHandler = ()=>{}// this is normal function
// const asyncHandlers =(fn)=>()=>{}
// const asyncHandler =(fn)=>async()=>{} //now the second function is async


