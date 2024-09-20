const express = require('express');
const router = express.Router();
const User = require('./models/User');

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        if (user.password === password) {
            return res.status(200).json({ message: 'Login Efetuado', user });
        } else {
            return res.status(401).json({ message: 'Credencial inválida' });
        }
    } catch (error) {
        console.error('Erro no login:', error);
        return res.status(500).json({ message: 'Erro no servidor', error: error.message || error });
    }
});

module.exports = router;
