const fs = require('fs');




const tours = JSON.parse(fs.readFileSync('dev_data/data/users.json'));


exports.getAllUsers = (req, res) =>{
  res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      data:{
          tours
      }
      
  });

};

exports.getUser = (req, res) =>{
  console.log(req.params);
  const id = req.params.id * 1;
  if(id > tours.length){
      return res.status(404).json({
          starus: 'fail',
          message: 'invalid id'
      });
  }


  const tour = tours.find(el => el.id === id);

  res.status(200).json({
      status: 'success',
      data:{
          tour
      }
      
  });

};

exports.createUser = (req,res)=>{
  //console.log(req.body);
  const newId = tours[tours.length-1].id + 1;
  const newTours = Object.assign({id: newId},req.body);
  tours.push(newTours);
  fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours),err =>{
      res.status(201).json({
          status: 'success',
          data:{
              tours
          }
      });

  })
  

  
}

exports.updateUser = (req,res )=>{

  if(req.params.id *1 > tours.length){
      return res.status(404).json({
          status: 'fail',
          message: 'Invalid Id'
      })

  }

  res.status(200).json({
      status: 'success',
      data:{
          tour:'<update tour here>'
      }
  });

};

exports.deleteUser =(req,res )=>{

  if(req.params.id *1 > tours.length){
      return res.status(404).json({
          status: 'fail',
          message: 'Invalid Id'
      })

  }

  res.status(204).json({
      status: 'success',
      data:null
          
  });

};