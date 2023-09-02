exports.create = async (req, res) => {
    res.send("service create sucess") 
    res.end()
};


exports.read = async (req, res) => {
    res.send("service read sucess")
    res.end();
 };


exports.delete = async (req, res) => { 
    res.send("service delete sucess")
    res.end()
};


exports.update = async (req, res) => { 
    res.send("service update sucess")
    res.end();
};