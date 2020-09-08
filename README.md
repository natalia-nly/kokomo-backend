# KOKOMO 🌴
<hr>

# Developers

Natalia López / Claudi Sánchez

# La aplicación

--
Frontend: https://github.com/natalia-nly/kokomo-frontend/

## Descripción

Facilitar la reserva en locales con aforo limitado

MVP → chiringuitos

## User Stories

[Notion Link](https://www.notion.so/1e08243224c842e29a9b44db892fec01?v=609e57e9cefd4931b2a8eead1ed3812b)

## Backlog

[Notion Link](https://www.notion.so/1e08243224c842e29a9b44db892fec01?v=609e57e9cefd4931b2a8eead1ed3812b)

## Rutas

### Auth

|Método|URL|Descripción|
|---|---|---|
GET | /api/auth/login | Inicio de sesión
POST | /api/auth/login | Redirecciona a home si el usuario está registrado
GET | /api/auth/signup | Registrarse como cliente
POST | /api/auth/signup | Redirecciona a home si el usuario está registrado
GET | /api/auth/signup-local | Registrarse como propiertario de un local
POST | /api/auth/signup-local | Redirecciona a home si el usuario está registrado
GET | /api/auth/logout | Cerrar la sesión
GET | /api/auth/google| Inicio de sesión con Google

### Booking

|Método|URL|Descripción|
|---|---|---|
GET | /api/booking/my-bookings | Ver todas tus reservas
POST | /api/booking/:scheduleId | Crear una reserva
GET | /api/booking/details/:bookingId | Detalle de la reserva
GET | /api/booking/delete/:bookingId | Borrar una reserva

### Profile

|Método|URL|Descripción|
|---|---|---|
GET | /api/profile | Ver el perfil del usuario
GET | /api/profile/edit | Editar perfil
POST | /api/profile/edit | Guardar nuevos detalles
GET | /api/profile/delete | Borrar usuario

### Properties

|Método|URL|Descripción|
|---|---|---|
GET| api/property/create-property | Creación de un local
POST | api/property/create-property | Creación de un local
GET | api/property/:propertyId | Ver el detalle de un local
GET | api/property/edit/:propertyId | Editar una local
POST | api/property/edit/:propertyId | Guardar cambios local
POST | api/property/add-comment/:propertyId | Añadir un comentario

### Search
|Método|URL|Descripción|
|---|---|---|
GET| api/search/category/:name | Buscar locales por categoría
POST| api/search/property/:id | Consultar disponibilidad de un local

## Models

- CUSTOMER: Usuario que hace reservas y/o gestiona locales
- PROPERTY: Local que puede ser reservado
- SCHEDULE: Horarios e inventario de un Local
- BOOKING: Reserva de un usario en un local con un horario determinado para un cierto número de personas

## Links

### Git

https://github.com/natalia-nly/kokomo-frontend/
https://github.com/natalia-nly/kokomo-backend/

### Deploy

--

### Slides

[Slides Link](--)