<!-- Banner principal animado -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=6C78AF&height=180&section=header&text=Temabbo%20Apuntes&fontSize=38&fontColor=ffffff&animation=fadeIn" />
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/Andres-glitch-cell/Temabbo_Apuntes?style=social" />
  <img src="https://img.shields.io/github/forks/Andres-glitch-cell/Temabbo_Apuntes?style=social" />
  <img src="https://visitor-badge.laobi.icu/badge?page_id=Andres-glitch-cell.Temabbo_Apuntes" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com/?color=6C78AF&size=25&center=true&vCenter=true&width=1000&lines=💻+Temabbo+Apuntes+para+Habbo;📚+Todo+sobre+bases+de+datos+retro;⚙️+MySQL,+Triggers,+Procedimientos+;✨+phpMyAdmin,+Consultas+y+Optimización" />
</p>

---

# 🏨 Temabbo Apuntes

📚 Este repositorio contiene apuntes técnicos para administrar y entender las **bases de datos** utilizadas en servidores de tipo **Habbo Hotel Retro**, usando herramientas como:

- 📦 **MySQL / MariaDB**
- 🛠 **phpMyAdmin**
- 🧠 **Consultas SQL y Triggers**
- 🚀 **Optimización y seguridad**

> Ideal para desarrolladores, administradores de retroservers y entusiastas de los sistemas backend de Habbo.

---

## 🧭 Tabla de Contenidos

- [📌 Contenido](#contenido)
- [🛠️ Tecnologías Utilizadas](#tecnologías-utilizadas)
- [🎨 Capturas & Demos](#capturas--demos)
- [🧑‍💻 Lenguajes](#lenguajes)
- [🚀 Comenzando](#comenzando)
- [🧩 Estructura de la Base de Datos](#estructura-de-la-base-de-datos)
- [🧮 Consultas SQL Avanzadas](#consultas-sql-avanzadas)
- [🔧 Procedimientos, Triggers y Funciones](#procedimientos-triggers-y-funciones)
- [🛡 Seguridad y Buenas Prácticas](#seguridad-y-buenas-prácticas)
- [🖥 Uso avanzado de phpMyAdmin](#uso-avanzado-de-phpmyadmin)
- [👥 Colaboradores Destacados](#colaboradores-destacados)
- [🙋 Sobre los Autores](#sobre-los-autores)
- [🤝 Contribuciones](#contribuciones)
- [📬 Contacto](#contacto)
- [📄 Licencia](#licencia)

---

## 📌 Contenido

### 🏗 Introducción a la estructura de las bases de datos de Habbo

Las bases de datos de Habbo Hotel Retro constan principalmente de tablas para:

- Usuarios (`users`)
- Salas (`rooms`)
- Muebles (`items`)
- Inventarios (`user_items`)
- Amigos y relaciones (`friends`)
- Logs y estadísticas

Cada tabla está normalizada para optimizar consultas y minimizar duplicados.

---

## 🧩 Estructura de la Base de Datos

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  credits INT DEFAULT 0,
  duckets INT DEFAULT 0,
  diamonds INT DEFAULT 0,
  look VARCHAR(100) NOT NULL,
  motto VARCHAR(255) DEFAULT '',
  last_online DATETIME DEFAULT CURRENT_TIMESTAMP,
  rank INT DEFAULT 1
);

CREATE TABLE rooms (
  id INT AUTO_INCREMENT PRIMARY KEY,
  owner_id INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  model VARCHAR(50),
  state TINYINT DEFAULT 0,
  allow_pets BOOLEAN DEFAULT FALSE,
  allow_pets_eating BOOLEAN DEFAULT FALSE,
  door_x INT,
  door_y INT,
  door_dir INT,
  password VARCHAR(50),
  score INT DEFAULT 0,
  category INT DEFAULT 0
);

CREATE TABLE items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  base_item INT NOT NULL,
  sprite_id INT NOT NULL,
  name VARCHAR(100),
  description TEXT,
  type VARCHAR(20),
  can_stack BOOLEAN DEFAULT FALSE
);
