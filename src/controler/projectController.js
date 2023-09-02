exports.create = async (req, res) => {
    res.send("project create sucess") 
    res.end()
};


exports.read = async (req, res) => {
    res.send("project read sucess")
    res.end();
 };


exports.delete = async (req, res) => { 
    res.send("project delete sucess")
    res.end()
};


exports.update = async (req, res) => { 
    res.send("project update sucess")
    res.end();
};