exports.create = async (req, res) => {
    res.send("blog details create sucess") 
    res.end()
};


exports.read = async (req, res) => {
    res.send("blog details read sucess")
    res.end();
 };


exports.delete = async (req, res) => { 
    res.send("blog datails delete sucess")
    res.end()
};


exports.update = async (req, res) => { 
    res.send("blog details update sucess")
    res.end();
};