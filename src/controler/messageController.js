exports.create = async (req, res) => {
    res.send("blog massage create sucess") 
    res.end()
};


exports.read = async (req, res) => {
    res.send("blog massage read sucess")
    res.end();
 };


exports.delete = async (req, res) => { 
    res.send("blog massage detete sucess")
    res.end()
};


exports.update = async (req, res) => { 
    res.send("blog massage update sucess")
    res.end();
};