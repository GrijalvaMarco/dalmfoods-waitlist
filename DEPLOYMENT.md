# 🚀 Guía Rápida de Deployment

## Pasos Rápidos para Subir a DirectAdmin

### 1. Configurar EmailJS (5 minutos)

1. Crea cuenta en [EmailJS](https://www.emailjs.com/)
2. Agrega un servicio de email (Gmail recomendado)
3. Crea un template de email
4. Copia: Service ID, Template ID, y Public Key

📖 **Guía detallada:** Ver [EMAILJS_SETUP.md](file:///Users/administrador/.gemini/antigravity/brain/391cba19-f4cb-450f-b2c0-26781fa8f636/EMAILJS_SETUP.md)

### 2. Configurar Variables de Entorno

Crea el archivo `.env.local` en la raíz del proyecto:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
```

### 3. Construir el Proyecto

```bash
npm install
npm run build
```

Esto generará la carpeta `out/` con tu sitio estático.

### 4. Subir a DirectAdmin

1. Accede a DirectAdmin → **File Manager**
2. Ve a `public_html`
3. Sube **TODO el contenido** de la carpeta `out/` (no la carpeta en sí)
4. Asegúrate de que `index.html` esté en la raíz de `public_html`

### 5. Probar

Visita tu dominio y prueba el formulario de contacto.

---

## Estructura de Archivos en DirectAdmin

```
public_html/
├── index.html          ← Página principal
├── _next/              ← Assets de Next.js
│   ├── static/
│   └── ...
├── waitlist.html       ← Página del formulario
├── success.html        ← Página de éxito
├── favicon.ico
└── ... otros archivos
```

---

## Troubleshooting Rápido

### El formulario no envía emails
- Verifica las credenciales de EmailJS en `.env.local`
- Revisa la consola del navegador (F12)

### Error 404 en rutas
Crea `.htaccess` en `public_html`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Las imágenes no cargan
- Verifica que la carpeta `public/` se subió completa
- Limpia caché del navegador (Ctrl + Shift + R)

---

## Comandos Útiles

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Construir para producción
npm run build

# Probar build localmente
npx serve out
```

---

## Notas Importantes

- ✅ **No necesitas Node.js** en tu hosting DirectAdmin
- ✅ **EmailJS es gratis** hasta 200 emails/mes
- ✅ El sitio es **100% estático** (HTML, CSS, JS)
- ⚠️ Cada cambio requiere **rebuild y re-upload**

---

## Próximos Pasos

1. [ ] Configurar EmailJS
2. [ ] Crear `.env.local`
3. [ ] Hacer build (`npm run build`)
4. [ ] Subir carpeta `out/` a DirectAdmin
5. [ ] Probar formulario en producción

¡Listo! 🎉
