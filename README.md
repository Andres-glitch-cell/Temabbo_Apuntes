<!-- Banner principal animado -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=6C78AF&height=180&section=header&text=Temabbo%20Apuntes&fontSize=38&fontColor=ffffff&animation=fadeIn" />
</p>

<!-- Badges mejorados y coloridos -->
<p align="center">
  <!-- GitHub -->
  <img src="https://img.shields.io/github/stars/Andres-glitch-cell/Temabbo_Apuntes?style=for-the-badge&label=Stars&color=6C78AF&logo=github" />
  <img src="https://img.shields.io/github/forks/Andres-glitch-cell/Temabbo_Apuntes?style=for-the-badge&label=Forks&color=43e97b&logo=github" />
  <img src="https://img.shields.io/github/issues/Andres-glitch-cell/Temabbo_Apuntes?style=for-the-badge&label=Issues&color=fc466b&logo=github" />
  <img src="https://img.shields.io/github/license/Andres-glitch-cell/Temabbo_Apuntes?style=for-the-badge&label=License&color=3f5efb" />
  <img src="https://visitor-badge.laobi.icu/badge?page_id=Andres-glitch-cell.Temabbo_Apuntes&style=for-the-badge&color=38f9d7" />
  <!-- Tecnologías -->
  <img src="https://img.shields.io/badge/MySQL-Optimizado-4479A1?style=for-the-badge&logo=mysql&logoColor=white" />
  <img src="https://img.shields.io/badge/phpMyAdmin-Soportado-fbaf3e?style=for-the-badge&logo=phpmyadmin&logoColor=white" />
  <img src="https://img.shields.io/badge/Workbench-Compatible-00758F?style=for-the-badge&logo=mysql&logoColor=white" />
  <!-- Estado y soporte -->
  <img src="https://img.shields.io/badge/Estado-Activo-brightgreen?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Soporte-Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" />
</p>

<!-- Intro animada -->
<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com/?color=6C78AF&size=25&center=true&vCenter=true&width=1000&lines=💻+Temabbo+Apuntes+para+Habbo;📚+Todo+sobre+bases+de+datos+retro;⚙️+MySQL,+Triggers,+Procedimientos+;✨+phpMyAdmin,+Consultas+y+Optimización" />
</p>

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=fc466b&color2=3f5efb&height=100&section=header&text=📌%20Contenido&fontSize=30&fontColor=ffffff&animation=twinkling" />
</p>

## 📌 Contenido

- [🧩 Estructura de la Base de Datos](#-estructura-de-la-base-de-datos)
- [🧮 Consultas SQL Avanzadas](#-consultas-sql-avanzadas)
- [🌈 Consultas SQL en MySQL, phpMyAdmin y Workbench](#-consultas-sql-en-mysql-phpmyadmin-y-workbench)
- [🔧 Procedimientos, Triggers y Funciones](#-procedimientos-triggers-y-funciones)
- [🛡 Seguridad y Buenas Prácticas](#-seguridad-y-buenas-prácticas)
- [🖥 Uso avanzado de phpMyAdmin](#-uso-avanzado-de-phpmyadmin)
- [👥 Colaboradores Destacados](#-colaboradores-destacados)
- [🙋 Sobre los Autores](#-sobre-los-autores)
- [🤝 Contribuciones](#-contribuciones)
- [📬 Contacto](#-contacto)
- [📄 Licencia](#-licencia)

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=43e97b&color2=38f9d7&height=100&section=header&text=🧩%20Estructura%20de%20la%20Base%20de%20Datos&fontSize=30&fontColor=ffffff&animation=fadeIn" />
</p>

## 🧩 Estructura de la Base de Datos

La base de datos está diseñada para gestionar de forma eficiente todos los aspectos de un entorno retro de Habbo.  
Incluye módulos para usuarios, inventario, salas y más, con relaciones lógicas y optimización para consultas rápidas.

- **Usuarios:** Información básica, roles y permisos.
- **Inventario:** Relación de objetos y usuarios.
- **Salas:** Estructura y configuración de habitaciones.

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=fc466b&color2=3f5efb&height=100&section=header&text=💡%20Código%20SQL%20Animado&fontSize=30&fontColor=ffffff&animation=twinkling" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/C%C3%B3digo%20SQL-Optimizado%20y%20Colorido-43e97b?style=for-the-badge&logo=mysql&logoColor=white" />
</p>

<p align="center">
  <img src="https://skillicons.dev/icons?i=mysql,php" height="40" />
</p>

<p align="center">
  <b>💡 Ejemplos prácticos y avanzados para tu base de datos retro 💡</b><br>
  <span>¡Explora consultas, procedimientos y triggers con sintaxis resaltada!</span>
</p>

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=43e97b&color2=38f9d7&height=100&section=header&text=🧮%20Consultas%20SQL%20Avanzadas&fontSize=30&fontColor=ffffff&animation=fadeIn" />
</p>

## 🧮 Consultas SQL Avanzadas

```sql
-- 🎯 Consulta destacada: Top 10 usuarios con más objetos
SELECT usuario_id, COUNT(objeto_id) AS total_objetos
FROM inventario
GROUP BY usuario_id
ORDER BY total_objetos DESC
LIMIT 10;
```

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=00c3ff&color2=ffff1c&height=100&section=header&text=🌈%20Consultas%20SQL%20en%20MySQL%2C%20phpMyAdmin%20y%20Workbench&fontSize=30&fontColor=ffffff&animation=twinkling" />
</p>

## 🌈 Consultas SQL en MySQL, phpMyAdmin y Workbench

### 🔗 JOIN clásico

```sql
-- Obtener el nombre de usuario y el nombre de la sala donde está cada usuario
SELECT usuarios.nombre AS usuario, salas.nombre AS sala
FROM usuarios
INNER JOIN salas ON usuarios.sala_id = salas.id;
```

### 🔍 Subconsulta

```sql
-- Listar usuarios que tienen más de 5 objetos en su inventario
SELECT nombre
FROM usuarios
WHERE id IN (
  SELECT usuario_id
  FROM inventario
  GROUP BY usuario_id
  HAVING COUNT(objeto_id) > 5
);
```

### 🏆 LEFT JOIN

```sql
-- Mostrar todos los usuarios y, si tienen, el nombre de su sala asignada
SELECT usuarios.nombre, salas.nombre AS sala
FROM usuarios
LEFT JOIN salas ON usuarios.sala_id = salas.id;
```

### 📊 Consulta Agregada

```sql
-- Contar cuántos objetos tiene cada usuario
SELECT usuario_id, COUNT(objeto_id) AS total_objetos
FROM inventario
GROUP BY usuario_id
ORDER BY total_objetos DESC;
```

### 🧩 Consulta con ORDER BY y LIMIT

```sql
-- Mostrar los 3 usuarios con más objetos
SELECT usuario_id, COUNT(objeto_id) AS total_objetos
FROM inventario
GROUP BY usuario_id
ORDER BY total_objetos DESC
LIMIT 3;
```

---

> Todas estas consultas funcionan en **phpMyAdmin**, **MySQL Workbench** y cualquier cliente MySQL compatible.

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=fc466b&color2=3f5efb&height=100&section=header&text=🔧%20Procedimientos%2C%20Triggers%20y%20Funciones&fontSize=30&fontColor=ffffff&animation=twinkling" />
</p>

## 🔧 Procedimientos, Triggers y Funciones

- **Procedimientos almacenados:** Automatización de tareas frecuentes.
- **Triggers:** Validaciones y auditoría de cambios.
- **Funciones:** Cálculos y transformaciones personalizadas.

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=43e97b&color2=38f9d7&height=100&section=header&text=🛡%20Seguridad%20y%20Buenas%20Prácticas&fontSize=30&fontColor=ffffff&animation=fadeIn" />
</p>

## 🛡 Seguridad y Buenas Prácticas

- Uso de roles y permisos.
- Prevención de inyecciones SQL.
- Copias de seguridad y restauración.

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=fc466b&color2=3f5efb&height=100&section=header&text=🖥%20Uso%20avanzado%20de%20phpMyAdmin&fontSize=30&fontColor=ffffff&animation=twinkling" />
</p>

## 🖥 Uso avanzado de phpMyAdmin

- Exportación e importación de bases de datos.
- Optimización de consultas.
- Gestión visual de relaciones.

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=43e97b&color2=38f9d7&height=100&section=header&text=👥%20Colaboradores%20Destacados&fontSize=30&fontColor=ffffff&animation=fadeIn" />
</p>

## 👥 Colaboradores Destacados

- [@Andres-glitch-cell](https://github.com/Andres-glitch-cell)
- [@Colaborador2](#)
- ¡Gracias a todos los que han aportado!

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=fc466b&color2=3f5efb&height=100&section=header&text=🙋%20Sobre%20los%20Autores&fontSize=30&fontColor=ffffff&animation=twinkling" />
</p>

## 🙋 Sobre los Autores

Proyecto creado por entusiastas de la retro-programación y la gestión de bases de datos para la comunidad Habbo.

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=43e97b&color2=38f9d7&height=100&section=header&text=🤝%20Contribuciones&fontSize=30&fontColor=ffffff&animation=fadeIn" />
</p>

## 🤝 Contribuciones

¿Quieres colaborar?  
Consulta la [guía de contribución](CONTRIBUTING.md) y abre un Pull Request.

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=fc466b&color2=3f5efb&height=100&section=header&text=📬%20Contacto&fontSize=30&fontColor=ffffff&animation=twinkling" />
</p>

## 📬 Contacto

- Email: tuemail@ejemplo.com
- Discord: TuUsuario#1234

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=43e97b&color2=38f9d7&height=100&section=header&text=📄%20Licencia&fontSize=30&fontColor=ffffff&animation=fadeIn" />
</p>

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más información.
