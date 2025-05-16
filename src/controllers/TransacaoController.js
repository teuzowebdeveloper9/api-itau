let  db = []

export const PostTransacao = (req, res) => {
  const valor = req.body ;

 

  const data = new Date();

  
  const response = {
    valor: valor,
    data: data.toISOString()
  }
  
  db.push(response);

  return res.status(201).json(response);
};

console.log(db)