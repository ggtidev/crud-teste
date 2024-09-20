import { DataSource } from 'typeorm';
import { Professional } from './src/entity/Professionals';

const dataSource = new DataSource({
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "",
  "password": "",
  "database": "cuida_saude",
  "entities": [Professional],
  "synchronize": true,
  "logging": false
})

dataSource
  .initialize()
  .then(() => console.log('Data Source has been initialized!'))
  .catch((error) =>
    console.error('Error during Data Source initialization', error)
  );

  export default dataSource;