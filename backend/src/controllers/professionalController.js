const Professional = require('../models/professionalModel');

//Listagem de profissionais cadastrados
exports.listProfessionals = async (req, res) => {
    try {
        const professionals = await Professional.find()
        res.json(professionals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

//TALVEZ MUDAR PRO CRM ------------------------------------
//Visualização detalhada do profissional
exports.professionalDetails = async (req, res) => {
    try {
        const professional = await Professional.findById(req.params.id);
        if (professional === null){
            return res.status(404).json({ message: "Profissional não encontrado" });
        }
        res.json(professional);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

//Cadastro de profissionais
exports.createProfessional = async (req, res) => {
    const { crm } = req.body;

    try {
        const professionalExist = await Professional.findOne( { crm });
        if (professionalExist) {
            return res.status(400).json({ message: 'CRM já cadastrado. '});
        }

        const professional = new Professional(req.body);
        const newProfessional = await professional.save();
        res.status(201).json({ message: 'Profissional cadastrado com sucesso!'});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

//Atualização de profissionais
exports.updateProfessional = async (req, res) => {
    const { crm } = req.body;

    try {
        // Verifica se já existe um profissional com o mesmo CRM
        const professionalExist = await Professional.findOne({ crm });
        if (professionalExist) {
            return res.status(400).json({ message: 'CRM já cadastrado.' });
        }

        // Atualiza o profissional
        const upProfessional = await Professional.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (upProfessional === null) {
            return res.status(404).json({ message: "Profissional não encontrado." });
        }

        res.json({ message: "Perfil do profissional atualizado com sucesso!", upProfessional });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

//Deletar profissional
exports.deleteProfessional = async (req, res) => {
    const id = req.params.id;

    try { 
        const professional = await Professional.findById(id);
        if(professional === null) {
            return res.status(404).json({ message: "Profissional não encontrado."});
        }
        const crm = professional.crm; 

        await Professional.findByIdAndDelete(req.params.id);
        res.json({ message: `O Profissional de CRM ${crm} foi deletado com sucesso.`})
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};