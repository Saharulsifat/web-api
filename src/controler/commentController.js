exports.create = async (req, res) => {
    res.send("blog comment create sucess") 
    res.end()
};


exports.read = async (req, res) => {
    res.send("blog comment read sucess")
    res.end();
 };


exports.delete = async (req, res) => { 
    res.send("blog comment detete sucess")
    res.end()
};


exports.update = async (req, res) => { 
    res.send("blog comment update sucess")
    res.end();
};