# social-h4ck-front con AngularJs

## Requisitos 

npm y node instalados en cualquier sistema operativo

Luego de verificar lo anterior se deben instalar los siguientes paquetes:

`$ npm -g install bower` y `$ npm -g install grunt grunt-cli`

## Instalación

1) En el directorio en donde se encuentra el archivo `package.json` ejecutar los siguientes comandos :

`$ bower install` y `npm install`

Sí cuando se ejecuta el comando bower install nos pregunta que version de angular queremos elegir para diferentes proyectos, se debe elegir la opcion donde aparezca la dependencia "angular-google-maps": "~2.2.1". 

## Contruccion y desarrollo

Ejecute `grunt` para construir y `grunt serve` para previsualizar los cambios en tiempo real. Siempre que haga un cambio en un archivo en plugin livereload recarga la pagina automaticamente.

## Proceso de desarrollo de la prueba

Primeramente se hizo una investigación acerca de como instalar y usar la api Google Maps para Angular así como la inyección de las dependencias para la misma para que pudiera renderizar los mapas segun la longitud y latitud proporcionados en json. Se utilizaron con frecuencia las directivas ng-repeat con filters para el listado de información proveniente del data.json. Para el responsive el trabajo fue realizado con Bootstrap 3.  
