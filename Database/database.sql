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