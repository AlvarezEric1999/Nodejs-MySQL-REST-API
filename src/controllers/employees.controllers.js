

import { poolConections } from "../db.js";


export const getEmployees =  async(req,res) => {
    try{
        const [rows ] = await poolConections.query('SELECT * FROM employee')
        res.json(rows)

    }catch(error){
        return res.status(500).json({message:"something goes wrong "})
    }
};

// 


export const getEmploye = async(req,res) => {
    const {id} = req.params
    const [rows] = await poolConections.query('SELECT * FROM employee WHERE id = ?',[id])
    if(rows.length <= 0 ) return res.status(404).json({
        message:'employee not found '
    })
    
    res.json(rows[0])

}




export const PostEmployees = async(req,res)=>{
    

    try {
        

        const {name,salary} = req.body
        const [rows ] = await poolConections.query('INSERT INTO employee (name ,salary ) VALUES (?,?)',[name,salary])  
        res.send({
            id:rows.insertId,
            name,
            salary,
        });


    } catch (error) {
        
        res.status(500).json({
            message: "something goes wrong",
    })
    }
   
};


export const PutEmployees = async(req,res)=>{ 

try {
    
    const {id } = req.params; 
    const {name, salary } = req.body;
    const [ result ] = await poolConections.query('UPDATE employee SET name =IFNULL(?,name) ,salary = IFNULL(?,salary) WHERE id = ? ', [name,salary,id])
        
    if(result.affectedRows <= 0 ) return res.status(404).json({message:'employee not found '})
    const [rows ] = await poolConections.query('SELECT * FROM employee WHERE id = ?',[id])
        res.json(rows[0])

} catch (error) {
    res.status(500).json({
        message:"something goes wrong"
    })
}


};


 




export const DeleteEmployees = async(req,res)=>{
    const {id} = req.params
    const [result] = await poolConections.query('DELETE FROM employee WHERE id = ?',[id]);
    
        if(result.affectedRows <= 0 ) return res.status(404).json({message:'employe not found '})

    res.sendStatus(204)

};