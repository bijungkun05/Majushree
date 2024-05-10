import member from "../model/member.model.js";



//get member 
export const getMember =async (req,res)=>
    {
        console.log(req.user)
        try{
            if (req.user.role !== "admin")
                {
                    return res.status(401).json({msg:"not allowed"});
                }

            const Member= await member.find();
            res.status(200).json(Member);
            
        }catch(error)
        {
            console.log("error:",error);
            res.status(500).json(error);
        }
    };

    //create Member 
    export const createMember = async (req, res) => {
        try {
            const MemberData = new member(req.body);
            if(!MemberData)
                {
                    return res.status(404).json({msg: "member data not found"});
                }
            const savedMember = await MemberData.save();
            res.status(200).json(savedMember);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
    

        //get Member by id
        export const getMemberById =async(req,res)=>
            {
                try{
                    const id =req.params.id;
                    const memberExist =await member.findById(id);
                    if(!memberExist)
                        {
                            return res.status(404).json({msg: "member not found"})
                        }
                        res.status(200).json(memberExist);

                }catch(error)
                {
                    res.status(500).json( {error: error.message});
                }
            }

            //update member
            export const updateMember =async (req,res)=>
            {
                try{
                    const id =req.params.id;
                    const MemberExist =await member.findById(id);
                    if(!MemberExist)
                        {
                            return res.status(401).json({msg: "member not found"});
                        }
                        const updateData = await member.findByIdAndUpdate(id, req.body, {new: true});
                        res.status(200).json(updateData);


                }catch(error){
                    res.status(500).json({error: error.message});
                }

            }

            //delete member
            export const deleteMember = async (req,res)=>
                {
                    try{
                        const id =req.params.id;
                        const MemberExist =await member.findById(id); 
                        if(!MemberExist)
                            {
                                return res.status(401).json({msg: "member not found"});

                            }
                            await member.findByIdAndDelete(id);
                            res.status(200).json({msg:"member deleted sucessfully"});
                    }catch (error)
                    {

                    }
                }