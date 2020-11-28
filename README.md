<br />
<p align="center">
  <a href="https://github.com/gferrern/rbServer/">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Servicio ReBag</h3>

  <p align="center">
    Servicio para ReBag escrito en nodeJs con Sequelize
    <br />
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#sobre-el-entorno-desarrollo">Sobre el entorno de desarrollo</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Hola chic@s de GOZEROWASTE, este es el servicio para dar soporte a la aplicación

### Built With

* [docker](https://www.docker.com/)
* [nodejs](https://nodejs.org/en/)
* [sequelize](https://sequelize.org/)


### Prerequisites

Es recomendable tener previamente instalado por lo menos los siguientes programas:
* postman
* visual studio code
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Tenemos que verificar la configuracion del docker (con este comando tendremos un servidor de MySql y phpMyAdmin)
   ```sh
   docker-compose up -d
   ```
   
5. ahora hay que crear una nueva base de datos y migrar datos
   ```sh
   sequelize model:generate
   sequelize controller:generate
   sequelize db:seed:all
   ```
   

Listo!
