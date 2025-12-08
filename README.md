FinTrack Estudiantil

Aplicación web para la gestión simple de finanzas personales orientada a estudiantes.

Proyecto realizado para el curso Ingeniería de Software aplicada al Desarrollo Web,
Universidad Da Vinci de Guatemala.

------------------- 

Descripción del Proyecto

FinTrack Estudiantil es un prototipo de aplicación web orientado a estudiantes que desean llevar un control simple de sus ingresos y gastos.
La plataforma permite registrar movimientos financieros, categorizarlos y visualizar un resumen mensual para facilitar la administración del presupuesto personal.

El proyecto incluye:

Documento técnico con arquitectura, ERD, API y costos.
Prototipo v0 desarrollado en React.
Modelo de base de datos SQL.
Flujo de comunicación propuesto mediante API REST.


Tecnologías Utilizadas

Frontend
React
Vite o Create React App
CSS / Tailwind (opcional)

Backend (propuesto)
Node.js
Express.js

Base de Datos
MySQL o PostgreSQL
Modelo SQL generado desde dbdiagram


Arquitectura General
El proyecto se compone de tres elementos principales:

Cliente (Frontend en React)
Donde el usuario registra y visualiza sus movimientos.

API REST (Backend propuesto)
Controla las operaciones de lectura y registro de movimientos.

Base de Datos SQL
Almacena usuarios, categorías, movimientos y presupuestos.


El diagrama ERD se encuentra en:
/docs/erd.png


API Propuesta

El sistema define tres endpoints principales:


| Método | Ruta                | Descripción                                         |

| ------ | ------------------- | --------------------------------------------------- |

| GET    | `/api/v1/movements` | Obtener todos los movimientos del usuario           |

| POST   | `/api/v1/movements` | Registrar un nuevo movimiento                       |

| GET    | `/api/v1/summary`   | Generar resumen mensual (ingresos, gastos, balance) |


Las capturas de los endpoints se encuentran en:

/docs/endpoints/


Prototipo v0

Incluye:

Formulario para registrar un ingreso o gasto

Lista simple de movimientos (mock o datos de ejemplo)

Interfaz minimalista en React


Ubicación del código:
/frontend/


Capturas del prototipo:
/docs/capturas-prototipo/


Estructura del Repositorio

FinTrack-Estudiantil/

├── frontend/

├── backend/         (opcional)

├── docs/

│   ├── propuesta.pdf

│   ├── erd.png

│   ├── endpoints/

│   └── capturas-prototipo/

├── sql/

│   └── modelo.sql

└── README.md



Documento Técnico


Incluye:

✔ Pitch del proyecto

✔ Arquitectura tecnológica

✔ Diseño técnico (ERD y API)

✔ Planificación y costos



Archivo disponible en:
/docs/propuesta.pdf


🎥 Video del Proyecto

Enlace al video pitch:



Cómo ejecutar el prototipo

cd frontend
npm install
npm run dev   # o npm start, según el setup que elijas
