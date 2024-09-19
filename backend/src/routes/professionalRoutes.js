const professionalController = require('../controllers/professionalController');

module.exports = router => {
    //Todos os profissionais cadastrados
    router.get('/api/profissionais', professionalController.listProfessionals);

    //Visualizar o profissional detalhadamente
    router.get('/api/profissional/:id', professionalController.professionalDetails);

    //Cadastrar profissional
    router.post('/api/cadastrar', professionalController.createProfessional);

    //Atualizar perfil do profissional
    router.put('/api/profissional/:id', professionalController.updateProfessional)

    //Deletar perfil do profissional
    router.delete('/api/profissional/:id', professionalController.deleteProfessional)
}