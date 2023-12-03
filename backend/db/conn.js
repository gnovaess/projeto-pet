const mysql = require('mysql2');

// Configurações da conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database:'busca_pet',
});

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

// Definir e executar a criação da tabela de usuário
const createUsuarioTable = `
CREATE TABLE IF NOT EXISTS busca_pet.usuario(
  cod_usuario INTEGER AUTO_INCREMENT PRIMARY KEY,
  nome_usuario VARCHAR(60) NOT NULL,
  email_usuario VARCHAR(100) NOT NULL,
  senha VARCHAR(50) NOT NULL,
  cpf VARCHAR(11) NOT NULL,
  telefone VARCHAR(20) NOT NULL
);
`;

connection.query(createUsuarioTable, (err, results) => {
  if (err) {
    console.error('Erro ao criar tabela de usuário:', err);
  } else {
    console.log('Tabela de usuário criada com sucesso');
  }
});

// Definir e executar a criação da tabela de anuncio_perdidos
const createAnuncioPerdidosTable = `
CREATE TABLE IF NOT EXISTS busca_pet.anuncio_perdidos(
  cod_perdidos INT AUTO_INCREMENT PRIMARY KEY,
  data_perdido DATE NOT NULL,
  nome_animal VARCHAR(50) NOT NULL,
  especie_perdidos VARCHAR(20) NOT NULL,
  sexo_perdidos BOOLEAN NOT NULL,
  descricao VARCHAR(400) NOT NULL,
  foto_perdidos BLOB NOT NULL,
  localizacao_aproximada VARCHAR(400),
  cod_usuario INT NOT NULL,
  FOREIGN KEY (cod_usuario) REFERENCES busca_pet.usuario(cod_usuario)
);
`;

connection.query(createAnuncioPerdidosTable, (err, results) => {
  if (err) {
    console.error('Erro ao criar tabela de anuncio_perdidos:', err);
  } else {
    console.log('Tabela de anuncio_perdidos criada com sucesso');
  }
});

// Definir e executar a criação da tabela de anuncio_achados
const createAnuncioAchadosTable = `
CREATE TABLE IF NOT EXISTS busca_pet.anuncio_achados (
  cod_achados INT AUTO_INCREMENT PRIMARY KEY,
  data_achados DATE NOT NULL,
  especie_achados VARCHAR(20) NOT NULL,
  sexo_achados BOOLEAN NOT NULL,
  descricao_achados VARCHAR(400) NULL,
  foto_achados BLOB NOT NULL,
  localizacao_achados VARCHAR(400),
  cod_usuario INT NOT NULL,
  FOREIGN KEY (cod_usuario) REFERENCES busca_pet.usuario(cod_usuario)
);
`;

connection.query(createAnuncioAchadosTable, (err, results) => {
  if (err) {
    console.error('Erro ao criar tabela de anuncio_achados:', err);
  } else {
    console.log('Tabela de anuncio_achados criada com sucesso');
  }
});

// Fechar a conexão após a criação das tabelas
connection.end();