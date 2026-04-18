export const authRole=(role)=>{
    return (req,res,next)=>{
        if(role!==req.user.role){
            return res.status(403).json({message:"Access Denied"})
        }
        next()
    }
}