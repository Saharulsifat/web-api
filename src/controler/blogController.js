exports.create = async (req, res) => {
    res.send("blog create sucess") 
    res.end()
};


exports.read = async (req, res) => {
    res.send("blog read sucess")
    res.end();
 };


exports.delete = async (req, res) => { 
    res.send("blog delete sucess")
    res.end()
};


exports.update = async (req, res) => { 
    res.send("blog update sucess")
    res.end();
};