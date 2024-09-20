const bcrypt = require('bcrypt');

const senhaFornecida = 'senha123'; 
const hashArmazenado = '$2b$10$Xkp/K44ucdBnPmdAFc36RuOwu6ngPYqI53ES.3OXGdydNqb0/BwPK'; 


bcrypt.compare(senhaFornecida, hashArmazenado, (err, result) => {
  if (err) {
    console.error('Que erro?', err);
  } else {
    console.log('Agora vai:', result); 
  }
});
