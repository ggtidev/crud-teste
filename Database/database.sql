USE hospital;

CREATE TABLE Cadastro_Profissionais (
  Nome VARCHAR(255) NOT NULL,
  Especialidade VARCHAR(100) NOT NULL,
  CRM VARCHAR(7) PRIMARY KEY NOT NULL,
  Contato VARCHAR(14),
  Email VARCHAR(255) NOT NULL,
  Data_Contratacao DATE,
  Inicio_Atendimento TIME,
  Fim_Atendimento TIME,
  Status_Cadastro BOOLEAN DEFAULT FALSE,
  Dias_Atendimento SET("segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado", "domingo")
);

INSERT INTO Cadastro_Profissionais VALUES ('Dr. João Silva', 'Cirurgião Geral', '1234567', '11 1234-5678', 'joao.silva@gmail.com', NULL, '08:00', '17:00', TRUE, "segunda-feira,sexta-feira");
INSERT INTO Cadastro_Profissionais VALUES ('Dra. Maria Souza', 'Clínica Médica', '9876543', '12 3456-7890', 'maria.souza@gmail.com', '2022-02-15', NULL, NULL, FALSE, "sábado,domingo");
INSERT INTO Cadastro_Profissionais VALUES ('Dr. Luiz Moreira', 'Anestesiologia', '1111111', '13 4567-8901', 'luiz.moreira@gmail.com', NULL, '07:00', '16:00', TRUE, "terça-feira,quinta-feira");