<!-- Estilos personalizados -->
<style>
  /* Contenedor general centrado */
  .banner-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin-top: 40px;
  }

  /* Estilo para cada banner "título" */
  .banner-title {
    background: linear-gradient(135deg, #6C78AF, #8B93D6);
    color: white;
    font-weight: 700;
    font-size: 24px;
    padding: 15px 40px;
    border-radius: 30px;
    box-shadow: 0 4px 15px rgba(108, 120, 175, 0.6);
    position: relative;
    overflow: hidden;
    cursor: default;
    width: fit-content;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  /* Animación wave al pasar mouse */
  .banner-title:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 30px rgba(108, 120, 175, 0.9);
  }

  /* Animación de fondo */
  .banner-title::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center, rgba(255,255,255,0.15) 20%, transparent 80%);
    animation: waveMove 4s linear infinite;
    pointer-events: none;
    border-radius: 30px;
  }

  @keyframes waveMove {
    0% { transform: rotate(0deg) translate(0, 0); }
    100% { transform: rotate(360deg) translate(0, 0); }
  }
</style>

<!-- Contenedor de banners estilizados -->
<div class="banner-container">
  <div class="banner-title">Bases de Datos Retro + MySQL</div>
  <div class="banner-title">Optimización y Seguridad de Datos</div>
  <div class="banner-title">Triggers y Procedimientos Almacenados</div>
  <div class="banner-title">phpMyAdmin y Consultas Avanzadas</div>
</div>

<!-- Badges y animaciones -->
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

📚 Este repositorio contiene documentación útil y práctica sobre las bases de datos usadas en servidores Habbo Retro, estructuradas en MySQL y administradas con phpMyAdmin. Aquí encontrarás:

- 📦 Tablas esenciales (`users`, `items`, `rooms`, etc.)  
- 🛠 Consultas SQL de ejemplo  
- 🧠 Lógica detrás del sistema de relaciones y economía  
- 🔧 Triggers y procedimientos almacenados  
- 🚀 Buenas prácticas para rendimiento y seguridad

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

Aquí puedes listar los temas cubiertos, por ejemplo:

- Estructura de las tablas en una base de datos retro  
- Relaciones entre usuarios, ítems, salas y más  
- Consultas frecuentes  
- Explicación de triggers comunes (ej. al comprar, al intercambiar)  
- Procedimientos almacenados para mantenimiento automático  
- Buenas prácticas de diseño y seguridad

---

## 🛠️ Tecnologías Utilizadas

- **MySQL** o **MariaDB**  
- **phpMyAdmin**  
- **Visual Studio Code**  
- **HeidiSQL** (opcional)  

---

## 🎨 Capturas & Demos

*(Aquí podrías agregar imágenes o GIFs de la base de datos, phpMyAdmin o ejemplos reales.)*

---

## 🧑‍💻 Lenguajes

- SQL  
- Markdown  

---

## 🚀 Comenzando

Para usar esta base de datos en tu servidor local:

1. Clona el repositorio  
2. Importa el archivo `.sql` a tu gestor de base de datos  
3. Asegúrate de que tus archivos PHP se conectan correctamente a esta base  
4. ¡Personaliza según tus necesidades!

---

## 🧩 Estructura de la Base de Datos

Una base de datos de Habbo Retro generalmente contiene:

- `users`: datos de los usuarios  
- `items`: todos los muebles y objetos  
- `user_items`: qué ítems tiene cada usuario  
- `rooms`: información de salas  
- `catalog_items`: objetos que se pueden comprar  
- `bans`, `permissions`, `logs`, etc.

---

## 🧮 Consultas SQL Avanzadas

Aquí puedes mostrar consultas interesantes como:

```sql
-- Obtener los 10 usuarios con más créditos
SELECT username, credits FROM users ORDER BY credits DESC LIMIT 10;

-- Listar usuarios que no han iniciado sesión en 30 días
SELECT username, last_online FROM users WHERE last_online < NOW() - INTERVAL 30 DAY;
