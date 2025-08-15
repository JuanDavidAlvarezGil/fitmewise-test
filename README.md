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

## 📝 License

This project is for **technical test purposes only**.
