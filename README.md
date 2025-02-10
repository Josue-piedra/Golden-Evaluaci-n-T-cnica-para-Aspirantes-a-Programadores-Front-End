# SocialPost

Descripción del Proyecto
Este proyecto es una aplicación que permite visualizar, buscar y gestionar publicaciones en una red social.

Tecnologías utilizadas
- Backend: Spring Boot, Spring Data JPA, MySQL
- Frontend: React, React Router, Axios
- Base de Datos: MySQL
- Construcción: Maven, npm

Instrucciones de Instalación y Ejecución

Clonar el repositorio**
 git clone https://github.com/tu-repositorio/socialpost.git

Configurar y ejecutar el Backend (Spring Boot)
Pre-requisitos:
- Java 17
- MySQL instalado y corriendo
- Maven instalado

Configuración de la base de datos

No cosegui la configuracion final de la base de datos ya que me da un error que no pude solucionar 

Configurar y ejecutar el Frontend (React)
Pre-requisitos:
- Node.js instalado
Ejecutar el frontend
cd golden
npm install
npm start

Endpoints Disponibles (Backend)
Estos son  los endpoints, pero al no poder creaur una base de datos no tiene ninguna funcion 

Endpoints de Publicaciones
GET :`/api/posts` : Obtiene todas las publicaciones 
GET :`/api/posts/{id}` Obtiene una publicación por su ID 
GET : `/api/posts/search?q=texto` Busca publicaciones por texto
POST :`/api/posts`  Crea una nueva publicación 

