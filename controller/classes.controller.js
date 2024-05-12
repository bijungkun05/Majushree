import classes from "../model/classes.model.js";



//get all classes
export const getClasses =async (req,res)=>
    {
        try{
            const Classes= await classes.find();
            res.status(200).json(Classes);

        }catch(error)
        {
            res.status(500).json(error);
        }
    };
//create classes 
export const createClasses = async (req, res) => {
    try {
        const ClassData = new classes(req.body);
        if(!ClassData)
            {
                return res.status(404).json({msg: "class data not found"});
            }
        const savedClasses = await ClassData.save();
        res.status(200).json(savedClasses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


    //get classes by id
    export const getClassById =async(req,res)=>
        {
            try{
                const id =req.params.id;
                const classExist =await classes.findById(id);
                if(!classExist)
                    {
                        return res.status(404).json({msg: "class not found"})
                    }
                    res.status(200).json(classExist);

            }catch(error)
            {
                res.status(500).json( {error: error.message});
            }
        }

        //update classes
        export const updateClasses =async (req,res)=>
        {
            try{
                const id =req.params.id;
                const ClassesExist =await classes.findById(id);
                if(!ClassesExist)
                    {
                        return res.status(401).json({msg: "Class not found"});
                    }
                    const updateData = await classes.findByIdAndUpdate(id, req.body, {new: true});
                    res.status(200).json(updateData);


            }catch(error){
                res.status(500).json({error: error.message});
            }

        }

        //delete classes
        export const deleteClasses = async (req,res)=>
            {
                try{
                    const id =req.params.id;
                    const ClassExist =await classes.findById(id); 
                    if(!ClassExist)
                        {
                            return res.status(401).json({msg: "Class not found"});

                        }
                        await classes.findByIdAndDelete(id);
                        res.status(200).json({msg:"Class deleted sucessfully"});
                }catch (error)
                {

                }
            }