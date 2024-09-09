# Proyecto Fullstack con Laravel y Angular

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes en tu sistema:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Instrucciones para levantar el proyecto

1. Clonar el repositorio
2. Configurar el entorno de laravel
3. Construir y levantar los contenedores
  Ejecutar el siguiente comando en la raíz del proyecto:
    docker-compose up --build
4. Instalar dependencias
   Ejecutar los siguientes comandos en el contenedor de laravel
     docker-compose exec laravel-backend bash
     composer install
   Ejecutar los siguientes comandos en el contenedor de Angular
     docker-compose exec angular-frontend bash
      npm install
5. Migración de bases de datos
   Ejecutar los siguientes comandos en el contenedor de Laravel
   docker-compose exec laravel-backend bash
    php artisan migrate

6. Iniciar proyecto
   Backend:
       Ejecutar los siguientes comandos
          docker-compose exec laravel-backend bash
           php artisan serve --host=0.0.0.0 --port=8000
   Frontend:
       Ejecutar los siguientes comandos
         docker-compose exec angular-frontend bash
            ng serve --host 0.0.0.0 --port 4200
