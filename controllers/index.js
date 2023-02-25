const awesomeFunction =  (req, res, next)=>{
    res.json('Keyla Rosales');
};

const returnAnotherPerson =  (req, res, next)=>{
    res.json('Aurora Reyna');
};


module.exports = {awesomeFunction, returnAnotherPerson};