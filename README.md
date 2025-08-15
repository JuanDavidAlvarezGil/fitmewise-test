# Aplicación de inicio de sesión y registro de React Native

Este es un proyecto de prueba técnica desarrollado con **React Native EXPO**, **NativeWind 4** para el estilo, e **i18next** para las traducciones.
Incluye pantallas adaptables compatibles tanto con dispositivos móviles como con la web.

## 🚀 Características

- Pantallas de **Inicio de sesión** y **Registro**
- Diseño adaptable con **NativeWind 4**
- Compatibilidad con varios idiomas con **i18next**
- Integración de API con **ReqRes** para simulación de autenticación
- Compatibilidad multiplataforma: Android, iOS, Web

## 📦 Pila tecnológica

- React Native (Expo o CLI)
- NativeWind 4 (TailwindCSS para React Native)
- i18next (localización)
- Consulta RTK (solicitudes API)
- API ReqRes
- Formik para formularios

## 📋 Instalación

```
# Instalar dependencias
npm install

# Iniciar la aplicación
npm run android / ios / web
```

```
npx expo start
```

## 🌐 Ejecutar en la Web (Expo)

Si se usa Expo:

```bash
npx expo start --web
```

## 🔑 DATOS DE EJEMPLO (ReqRes)

# Iniciar sesión
Ejemplo de solicitud:

```
{
"email": "eve.holt@reqres.in",
"password": "cityslicka"
}

```
# Registrarse
Ejemplo de solicitud:

```
{
"email": "eve.holt@reqres.in",
"password": "pistol"
}

```

## 📁 Estructura del proyecto

```
src/
components/ # Componentes de interfaz de usuario reutilizables
atoms/ # Componentes pequeños
molecules/ # Componentes más grandes que integran átomos
organism/ # Componentes más grandes que moléculas, que integran moléculas
features/ # Contiene lógica de API y lógica de segmentos
i18n/ # Contiene todas las cadenas por idioma
modules/session/ # Componente que controla la inactividad temporizador
navigation/ # Componente que gestiona la navegación usando **React Navigation**
Redux/ # Configuración de la tienda
utils/ # Funciones comunes de la aplicación
```

## Decisiones técnicas
Al principio trabajaba con React Native CLI, pero luego me di cuenta de que tendría problemas para exportar a entornos web.
También tuve algunos problemas con la API, ya que me costaba un poco entender que algunos usuarios deben registrarse e iniciar sesión.
También tuve problemas al instalar Native Wind. Después de darle muchas vueltas, descubrí que mi versión de Node era demasiado alta.

## 📝 Licencia

Este proyecto es solo para **pruebas técnicas**.


# React Native Login & Register App

This is a technical test project built with **React Native EXPO** **NativeWind 4** for styling, and **i18next** for translations.  
It includes responsive screens that work for both **mobile** and **web**.

## 🚀 Features

- **Login** and **Register** screens
- Responsive design using **NativeWind 4**
- Multi-language support with **i18next**
- API integration with **ReqRes** for authentication simulation
- Cross-platform support: Android, iOS, Web

## 📦 Tech Stack

- React Native (Expo or CLI)
- NativeWind 4 (TailwindCSS for React Native)
- i18next (localization)
- RTK Query (API requests)
- ReqRes API
- Formik for forms 

## 📋 Installation

```
# Install dependencies
npm install

# Start the app
npm run android / ios / web
```

```
npx expo start
```

## 🌐 Run on Web (Expo)

If using Expo:

```bash
npx expo start --web
```

## 🔑 EXAMPLE DATA (ReqRes)

# Login
Example request:

```
{
  "email": "eve.holt@reqres.in",
  "password": "cityslicka"
}

```
# Register
Example request:

```
{
  "email": "eve.holt@reqres.in",
  "password": "pistol"
}

```

## 📁 Project Structure

```
src/
  components/     # Reusable UI components
    atoms/        # Small components
    molecules/    # Bigger components integrating atoms
    organism/     # Bigger components than molecules, them integrates molecules
  features/       # Contains api logic and slices logic
  i18n/           # Contains all the strings per language
  modules/session/  # Component that controls inactivity timer
  navigation/ # Component that handles navigation using **React Navigation**
  Redux/ # The configuration of the store
  utils/ # Common functions for the app
```


## Technical Desitions 
First I was working with React Native CLI but then I realise that I will have problem to export to web environments
I also had some problems with API because was a little hard for me to undestand that there are some users for register and login
I also had some issues trying to install nativewind, after struggling a lot my brain I found that my node version was too high


## 📝 License

This project is for **technical test purposes only**.
