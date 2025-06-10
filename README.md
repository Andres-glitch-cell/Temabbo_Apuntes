<!-- Banner principal animado -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=6C78AF&height=180&section=header&text=Temabbo%20Apuntes&fontSize=38&fontColor=ffffff&animation=fadeIn" />
</p>

<!-- Badges -->
<p align="center">
  <img src="https://img.shields.io/github/stars/Andres-glitch-cell/Temabbo_Apuntes?style=social" />
  <img src="https://img.shields.io/github/forks/Andres-glitch-cell/Temabbo_Apuntes?style=social" />
  <img src="https://visitor-badge.laobi.icu/badge?page_id=Andres-glitch-cell.Temabbo_Apuntes" />
</p>

<!-- Intro -->
<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com/?color=6C78AF&size=25&center=true&vCenter=true&width=1000&lines=💻+Temabbo+Apuntes+para+Habbo;📚+Todo+sobre+bases+de+datos+retro;⚙️+MySQL,+Triggers,+Procedimientos+;✨+phpMyAdmin,+Consultas+y+Optimización" />
</p>

---

## 📌 Contenido

- [Estructura de la Base de Datos](#-estructura-de-la-base-de-datos)
- [Consultas SQL Avanzadas](#-consultas-sql-avanzadas)
- [Procedimientos, Triggers y Funciones](#-procedimientos-triggers-y-funciones)
- [Seguridad y Buenas Prácticas](#-seguridad-y-buenas-prácticas)
- [Uso avanzado de phpMyAdmin](#-uso-avanzado-de-phpmyadmin)
- [Colaboradores Destacados](#-colaboradores-destacados)
- [Sobre los Autores](#-sobre-los-autores)
- [Contribuciones](#-contribuciones)
- [Contacto](#-contacto)
- [Licencia](#-licencia)

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=6C78AF&height=100&section=header&text=🧩%20Estructura%20de%20la%20Base%20de%20Datos&fontSize=30&fontColor=ffffff" />
</p>

## 🧩 Estructura de la Base de Datos

Explicación detallada de las tablas principales, relaciones y claves foráneas.  
Incluye diagramas y ejemplos de esquemas.

- **Usuarios:** Información básica, roles y permisos.
- **Inventario:** Relación de objetos y usuarios.
- **Salas:** Estructura y configuración de habitaciones.

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=6C78AF&height=100&section=header&text=🧮%20Consultas%20SQL%20Avanzadas&fontSize=30&fontColor=ffffff" />
</p>

## 🧮 Consultas SQL Avanzadas

Ejemplos prácticos de consultas complejas:

```sql
-- Obtener los 10 usuarios con más objetos
SELECT usuario_id, COUNT(objeto_id) AS total_objetos
FROM inventario
GROUP BY usuario_id
ORDER BY total_objetos DESC
LIMIT 10;
```

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=6C78AF&height=100&section=header&text=🔧%20Procedimientos%2C%20Triggers%20y%20Funciones&fontSize=30&fontColor=ffffff" />
</p>

## 🔧 Procedimientos, Triggers y Funciones

- **Procedimientos almacenados:** Automatización de tareas frecuentes.
- **Triggers:** Validaciones y auditoría de cambios.
- **Funciones:** Cálculos y transformaciones personalizadas.

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=6C78AF&height=100&section=header&text=🛡%20Seguridad%20y%20Buenas%20Prácticas&fontSize=30&fontColor=ffffff" />
</p>

## 🛡 Seguridad y Buenas Prácticas

- Uso de roles y permisos.
- Prevención de inyecciones SQL.
- Copias de seguridad y restauración.

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=6C78AF&height=100&section=header&text=🖥%20Uso%20avanzado%20de%20phpMyAdmin&fontSize=30&fontColor=ffffff" />
</p>

## 🖥 Uso avanzado de phpMyAdmin

- Exportación e importación de bases de datos.
- Optimización de consultas.
- Gestión visual de relaciones.

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=6C78AF&height=100&section=header&text=👥%20Colaboradores%20Destacados&fontSize=30&fontColor=ffffff" />
</p>

## 👥 Colaboradores Destacados

- [@Andres-glitch-cell](https://github.com/Andres-glitch-cell)
- [@Colaborador2](#)
- ¡Gracias a todos los que han aportado!

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=6C78AF&height=100&section=header&text=🙋%20Sobre%20los%20Autores&fontSize=30&fontColor=ffffff" />
</p>

## 🙋 Sobre los Autores

Proyecto creado por entusiastas de la retro-programación y la gestión de bases de datos para la comunidad Habbo.

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=6C78AF&height=100&section=header&text=🤝%20Contribuciones&fontSize=30&fontColor=ffffff" />
</p>

## 🤝 Contribuciones

¿Quieres colaborar?  
Consulta la [guía de contribución](CONTRIBUTING.md) y abre un Pull Request.

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=6C78AF&height=100&section=header&text=📬%20Contacto&fontSize=30&fontColor=ffffff" />
</p>

## 📬 Contacto

- Email: tuemail@ejemplo.com
- Discord: TuUsuario#1234

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=6C78AF&height=100&section=header&text=📄%20Licencia&fontSize=30&fontColor=ffffff" />
</p>

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más información.
