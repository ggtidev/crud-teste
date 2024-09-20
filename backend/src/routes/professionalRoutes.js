const professionalController = require('../controllers/professionalController');

module.exports = router => {
    //Todos os profissionais cadastrados
    router.get('/api/profissionais', professionalController.listProfessionals);

    //Visualizar o profissional detalhadamente
    router.get('/api/profissionais/:id', professionalController.professionalDetails);

    //Cadastrar profissional
    router.post('/api/profissionais', professionalController.createProfessional);

    //Atualizar perfil do profissional
    router.put('/api/profissionais/:id', professionalController.updateProfessional)

    //Deletar perfil do profissional
    router.delete('/api/profissionais/:id', professionalController.deleteProfessional)
}