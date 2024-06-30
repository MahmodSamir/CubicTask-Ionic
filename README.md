# Cubic Ionic Registration Page Task

This is a simple Angular, Ionic framework Registration page

## Demo
<h2>On browser</h2>

<h2>On Android Emulator</h2>

<h2>On real-android device</h2>

<h2>Features</h2>

*   Real-time form validation
*   Switch languages en | ar toggle
*   Google-maps integration
*   Responsive Design

## Requirements

- Angular v16.2.14.
- Node v18.20.3.
- npm v10.1.0.
- ionic v7.2.0.

## Run the application

- clone the repository by running
  ```
    git clone https://github.com/MahmodSamir/CubicTask-Ionic.git
  ```
 - test on browser by running
  ```
  ionic serve
  ```
 - test on android real device or emulator by running
  ```
   ionic capacitor run android
  ```
  and select your target device

## Troubleshooting
- ensure google-maps package installed  
    ```
    npm install @angular/google-maps
    ```
   instead of not longer supported package
    ```
    @agm/core 
    ```
- *If you encountered failed to load branches error on android device while it's wokring fine on browser*
   -  http request blocked by default since Android 9 ensure this code added to capacitor.config.ts file to allow it
    ```
    server: {
        androidScheme: 'http',
        cleartext: true,
      },
    ```
