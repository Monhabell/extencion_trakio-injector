# 🚀 Code Injector - Extensión para Google Chrome

**Code Injector** es una extensión para Google Chrome que permite inyectar código personalizado (JavaScript y CSS) en cualquier página web. Está diseñada para facilitar tareas como validaciones, pruebas, personalizaciones visuales o educativas directamente desde el navegador.

---

## 📂 Estructura del proyecto

  📁 icons/ → Íconos utilizados por la extensión
  📁 validadores/ → Scripts JS para validaciones personalizadas
  📄 background.js → Script de fondo que maneja eventos generales
  📄 injector.js → Lógica principal de inyección de código
  📄 injector.css → Estilos personalizados que se inyectan en las páginas
  📄 manifest.json → Archivo de configuración de la extensión (manifest v3)
  📄 popup.html → Interfaz del popup mostrado al hacer clic en la extensión
  📄 popup.js → Lógica de la ventana emergente (popup)

---

## 🛠️ Instalación manual

Sigue estos pasos para cargar la extensión en tu navegador:

1. Abre Google Chrome.
2. Navega a `chrome://extensions/`.
3. Activa el **Modo desarrollador** (esquina superior derecha).
4. Haz clic en **"Cargar descomprimida"**.
5. Selecciona la carpeta raíz de este proyecto.

Una vez cargada, la extensión estará disponible en tu barra de herramientas de Chrome.

---

## 🧪 Funcionalidad

- Inyecta código JavaScript o CSS en la pestaña actual.
- Permite cargar validadores personalizados ubicados en la carpeta `/validadores`.
- Ideal para desarrolladores, testers, educadores y usuarios técnicos que necesiten modificar el contenido de forma rápida.

---

## 🧾 Permisos

La extensión solicita los siguientes permisos:

- `"activeTab"`: para acceder a la pestaña actual y modificar su contenido.
- `"scripting"`: para inyectar scripts directamente en las páginas.

---

## ⚙️ Tecnologías utilizadas

- HTML5 + CSS3
- JavaScript
- Manifest V3 (API de extensiones de Chrome)

---

## 📝 Personalización

- Puedes crear tus propios validadores en la carpeta `validadores/` como archivos `.js`.
- Los estilos personalizados deben colocarse en `injector.css`.
- Puedes modificar `popup.html` y `popup.js` para agregar opciones a la interfaz.

---

## 📌 Notas

- Los cambios realizados por la extensión **no son permanentes** y se perderán al recargar la página, a menos que los guardes manualmente.
- Para que los cambios funcionen correctamente, asegúrate de que la extensión tenga acceso al sitio web actual.

---

## 📄 Licencia

Este proyecto está licenciado bajo la licencia MIT.

---

💻 Desarrollado por [Gabriel Monhabell]
