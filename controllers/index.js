const awesomeFunction =  (req, res, next)=>{
    res.json('Awesome person');
};

const returnAnotherPerson =  (req, res, next)=>{
    res.json('Super awesome person');
};


module.exports = {awesomeFunction, returnAnotherPerson};