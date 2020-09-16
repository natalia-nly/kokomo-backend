# KOKOMO 🌴
<hr>

# Developers

Natalia López / Claudi Sánchez

# La aplicación

--
Frontend: https://github.com/natalia-nly/kokomo-frontend/

## Descripción

Facilitar la reserva en locales con aforo limitado. Así, hay una parte de la aplicación dedicado a los Propietarios (owners) de locales (properties), a su gestión y explotación (a través de disponibilidad horaria (schedules) y de espacio), y otra dedicada a los clientes que hacen reservas en dichos locales.

Se ha buscado ser lo más completo a nivel de funcionalidad, permitiendo a los propietarios la gestión completa (Creación, Actualización y Eliminación) de los Locales y de las Reservas en las mismas, permitiendo a los clientes poder cancelar la reserva y un sistema de notificaciones permitiend saber si el propietario ha cancelado una reserva. A fin de evitar problemas, asimismo, no se permite a un propietario borrar un local si existen reservas activas en el mismo.

Por último, no se ha obviado la parte del valor social y de evaluación de la aplicacón, y mediante servicios dedicados se pueden guardar locales favoritos, evaluarlos de 0 a 5 y enviar un comentario para el propietario y el resto de usuarios de la aplicación.

MVP → chiringuitos

## User Stories

[Notion Link](https://www.notion.so/1e08243224c842e29a9b44db892fec01?v=609e57e9cefd4931b2a8eead1ed3812b)

## Backlog

[Notion Link](https://www.notion.so/1e08243224c842e29a9b44db892fec01?v=609e57e9cefd4931b2a8eead1ed3812b)

## Models

- CUSTOMER: Usuario que hace reservas y/o gestiona locales
- PROPERTY: Local que puede ser reservado
- SCHEDULE: Horarios e inventario de un Local
- BOOKING: Reserva de un usario en un local con un horario determinado para un cierto número de personas

## Rutas

Se ha estructurado la API en bloques funcionales:

- Auth: Todos los servicios ligados al Registro, Login & Logout del Usuario
- Booking: Todos los servicios relacionados con el CRUD de bookings
- Profile: Todos los servicios relacionados con la gestión de la cuenta del usuario.
- Properties: Todos los servicios ligados con el CRUD del local.
- Search: Todos los servicios dedicados a buscar dispoibilidad en un Local dependiendo de fecha y sitios disponibles.


### Auth

|Método|URL|Descripción|
|---|---|---|
POST | /api/auth/login | Redirecciona a home si el usuario está registrado
POST | /api/auth/signup | Redirecciona a home si el usuario está registrado
POST | /api/auth/signup-local | Redirecciona a home si el usuario está registrado
GET | /api/auth/logout | Cerrar la sesión
GET | /api/auth/google| Inicio de sesión con Google
GET | /api/auth/google/callback| Inicio de sesión con Google(callback)

### Booking

|Método|URL|Descripción|
|---|---|---|
GET | /api/booking/my-bookings | Ver todas tus reservas
POST | /api/booking/create-booking/:scheduleId | Crear una reserva
GET | /api/booking/my-properties-bookings | Ver todas las reservas en tus locales
GET | /api/booking/details/:bookingId | Detalle de la reserva
POST | /api/booking/delete/:bookingId | Borrar una reserva

### Profile

|Método|URL|Descripción|
|---|---|---|
GET | /api/profile | Ver el perfil del usuario
POST | /api/profile/editTelephone | Guardar nuevos detalles teléfono
POST | /api/profile/editPassword | Guardar nuevos detalles password
GET | /api/profile/delete | Borrar usuario
POST | /api/profile/send-message/:clientId |Envío de mensaje a otro usuario
POST | /api/profile/delete/:messageId |Borar mensaje
POST | /api/profile/add-owner| Añadir característica de owner
GET | /api/profile/favourites | Recuperar los favoritos


### Properties

|Método|URL|Descripción|
|---|---|---|
GET| api/property/| Recuperar todas los locales activos en BBDD
GET| api/property/category/:name| Recuperar todas los locales de la categoría activos en BBDD
POST | api/property/create-property | Creación de un local
GET | api/property/details/:propertyId | Ver el detalle de un local
POST | api/property/edit/:propertyId | Guardar cambios local
GET | api/property/delete/:propertyId | Borrar un local
GET | api/property/love/:propertyId | Añadir favorito un local
POST | api/property/add-comment/:propertyId | Añadir un comentario
POST | api/property/upload | Añadir una imagen a un local

### Search
|Método|URL|Descripción|
|---|---|---|
POST |  api/search/getAvailability | Buscar todos los locales disponibles
GET| api/search/maps | Consultas a la API Google Maps
POST| api/search/getAvailability/:propertyId | Consultar disponibilidad de un local



## Links

### Git

https://github.com/natalia-nly/kokomo-frontend/
https://github.com/natalia-nly/kokomo-backend/

### Deploy

https://kokomo-react.herokuapp.com/

### Slides

[Slides Link](--)