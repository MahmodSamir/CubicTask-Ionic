## Cubic Ionic Registration Page Task

This is a simple Angular, Ionic framework Registration page

## Demo
<h4>On Browser</h4>

 [Click to watch browser demo video on google drive](https://drive.google.com/file/d/1fiV9zhkIC1BAJk2Ntd17Le0XCC0bmQ85/view?usp=sharing)
  
<h4>On Android Emulator</h4>

[Click to watch android emulator video on google drive](https://drive.google.com/file/d/1Z-t-Wg-z8jaOZAl_Xp_D7Q7_Vw4V7-wI/view?usp=sharing)

<h4>On Real-Android device</h4>

[Click to watch real-android device video on google drive](https://drive.google.com/file/d/19sGjwUtHtb6UEhRKzK33HClj7OF51up0/view?usp=sharing)

<h4>Check on responsivness</h4>

[Click to watch responsivness checking video on google drive](https://drive.google.com/file/d/1oAIiM7j5PhFAwUJRzOx3SNAUwDyxL75Q/view?usp=sharing)

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
## Code Snippets
 - Real-time validation if field controller get touched or value changed or value invalid
  ![validation](https://github.com/MahmodSamir/CubicTask-Ionic/assets/63668000/147cf624-47ba-48c2-8415-75e8dbf2b05f)
- Switch Langugae button
  ![switchLang](https://github.com/MahmodSamir/CubicTask-Ionic/assets/63668000/7c5806e8-cf5b-464f-9a6f-ae144914ccaa)
- Google-map tag centered with marker options
  ![googleMap](https://github.com/MahmodSamir/CubicTask-Ionic/assets/63668000/d7302320-a518-4cf2-a07a-daf73b7431c5)
- Google-map script with API key in index.html
  ![mapScript](https://github.com/MahmodSamir/CubicTask-Ionic/assets/63668000/893e5e91-f226-465f-88dc-906ea69aeb63)
- Translations between Arabic and English
  ![translation](https://github.com/MahmodSamir/CubicTask-Ionic/assets/63668000/a9e33b1f-f02d-458e-8043-7ca01e3b24cb)
- Validators on Fields
  ![validators](https://github.com/MahmodSamir/CubicTask-Ionic/assets/63668000/2723d351-52a4-4011-b050-c75569638438)
- Fetch API branches converting from Object to Array and get Zizinia branch coordinates to display on google-map
  ![api-maps](https://github.com/MahmodSamir/CubicTask-Ionic/assets/63668000/c368f811-34ab-4541-8559-582d5ffc6ba2)
- Switch language method 
  ![switch](https://github.com/MahmodSamir/CubicTask-Ionic/assets/63668000/de82a8bf-1217-4081-b1ca-cda1b502cebc)
- On form submitting check if form valid to show success message
  ![successForm](https://github.com/MahmodSamir/CubicTask-Ionic/assets/63668000/ab729530-d569-4880-addb-31d73dbb6881)
- Responsive design
  ![responsive](https://github.com/MahmodSamir/CubicTask-Ionic/assets/63668000/48b207e4-c6bd-4dd7-85ee-a45b3d7fc5e1)

## Application Screenshots
- Form UI EN
  ![formEN](https://github.com/MahmodSamir/CubicTask-Ionic/assets/63668000/8b95117a-e217-407b-8416-496172183898)
- Form UI AR
  ![formAR](https://github.com/MahmodSamir/CubicTask-Ionic/assets/63668000/1ab307d8-93d6-4649-9bad-17598e25ff2e)
- Form fields invalid messages EN
  ![errorEN](https://github.com/MahmodSamir/CubicTask-Ionic/assets/63668000/03a27370-d429-493b-9676-d1abba01ac5a)
- Form fields invalid messages AR
  ![errorAR](https://github.com/MahmodSamir/CubicTask-Ionic/assets/63668000/04a3b948-84d8-4258-9e8d-3c4a96643367)
- Branches dropdown menu  <br/>
  ![branches](https://github.com/MahmodSamir/CubicTask-Ionic/assets/63668000/c82cae1a-047b-4e0d-bf84-cf55931e3fd6)
- google map pinned with Zizinia branch latlng
  ![map](https://github.com/MahmodSamir/CubicTask-Ionic/assets/63668000/c0847d0b-3a1a-4f0a-8a49-04f02076e497)
