exports.create = async (req, res) => {
    res.send("product create sucess") 
    res.end()
};


exports.read = async (req, res) => {
    res.send("product read sucess")
    res.end();
 };


exports.delete = async (req, res) => { 
    res.send("product delete sucess")
    res.end()
};


exports.update = async (req, res) => { 
    res.send("product update sucess")
    res.end();
};