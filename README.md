# Manual Técnico de la Aplicación de Pokémon

## 1. Componentes de Quasar Utilizados

### QLayout

- Contenedor principal para organizar la estructura de la página.
- Divide la página en secciones: encabezado (QHeader), barra lateral (QDrawer) y contenido (QPageContainer).

### QHeader

- Barra de encabezado con título y botones de navegación.

### QDrawer

- Panel lateral para navegación adicional.

### QTabs

- Permite organizar el contenido en pestañas.
- Usado para dividir la navegación en "Inicio" y "Lista de Pokémon".

### QPage

- Contenedor principal para cada vista de la aplicación.

### QCard

- Muestra información estructurada visualmente.
- Usado en la lista de Pokémon y en la vista de detalle.

### QBtn

- Botones interactivos para navegación y acciones.

### QInput

- Campo de entrada de texto para buscar Pokémon por nombre.

### QSelect

- Menú desplegable para seleccionar la cantidad de Pokémon a mostrar (25, 50 o 100).

### QAvatar

- Muestra imágenes o iconos circulares, como la imagen de cada Pokémon en la lista.

### QImg

- Muestra imágenes de Pokémon de manera optimizada.

---

## 2. Documentación de la API

**URL:** [https://pokeapi.co/](https://pokeapi.co/)

**Ejemplo de peticiones:**

```http
GET /api/v2/pokemon?limit=25&offset=0  # Lista de Pokémon (25 elementos)
GET /api/v2/pokemon/{id}/  # Detalles de un Pokémon por ID o nombre
```

**Flujo de la API:**

1. Se obtiene la lista de Pokémon mediante una petición GET.
2. Al seleccionar un Pokémon, se hace otra petición GET para obtener sus detalles y mostrarlos.

---

## 3. Flujo de la Aplicación

### Home Page

- Muestra una imagen de Pokémon con botones para cambiarla.
- Acceso a la lista de Pokémon.

### Lista de Pokémon

- Muestra una lista de Pokémon con opciones de búsqueda y filtrado.
- Al hacer clic en un Pokémon, se accede a su detalle.

### Detalle del Pokémon

- Muestra información detallada como tipo, habilidades y estadísticas.

**Navegación:**

- Flujo intuitivo entre la lista y el detalle de los Pokémon.
