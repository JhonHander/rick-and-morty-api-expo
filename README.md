# 🚀 Rick and Morty App  

Aplicación en **React Native** con **Expo** que consume la API de [Rick and Morty](https://rickandmortyapi.com/) para mostrar una lista de personajes con su nombre, estado, especie, tipo y género.  

## 📸 Capturas de Pantalla  

<p align="center">
  <img src="https://github.com/user-attachments/assets/3f4177cb-4273-4f02-91d7-fe11243a59ed" alt="rick-and-morty1" width="250" style="margin-right: 10"/>
  <img src="https://github.com/user-attachments/assets/e376c5f0-36e3-4f5e-bfe8-80280ef66a66" alt="rick-and-morty2" width="250" style="margin-right: 10"/>
  <img src="https://github.com/user-attachments/assets/fd51c5e8-2f10-4015-b44e-789efd01a98a" alt="rick-and-morty3" width="250" style="margin-right: 10"/>
</p>

## 🛠 Tecnologías Utilizadas  
- ⚛️ **React Native**  
- 🚀 **Expo**  
- 🔗 **API de Rick and Morty**  
- 📜 **FlatList** para renderizado eficiente  
- 🛑 **SafeAreaContext** (`SafeAreaProvider` y `SafeAreaView`) para manejar áreas seguras en dispositivos móviles  

## 📦 Instalación y Ejecución  

1. Clona este repositorio:  
   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   cd tu-repo
   ```
2. Instala las dependencias:  
   ```bash
   npm install
   ```
3. Inicia el proyecto en Expo:  
   ```bash
   npx expo start
   ```
   Luego, escanea el código QR con la app de Expo Go o ejecuta en un emulador.

## 🚀 Funcionalidades
- ✅ Lista de personajes con su información básica
- ✅ Consumo de API con fetch
- ✅ Renderizado eficiente con FlatList
- ✅ Modal con información adicional del personaje (origen, ubicación y cantidad de episodios)
- ✅ Cierre del modal al hacer tap fuera del contenido
- ✅ Carga de personajes por página, agregando nuevos personajes a la lista existente con el operador spread
