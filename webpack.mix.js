let mix = require('laravel-mix');

mix.js('src/js/main.js', 'dist/main.js')
   .sass('src/scss/main.scss', 'dist/main.css')
   .copy('src/fonts', 'dist/fonts')
   .copy('src/images', 'dist/images')
   .options({
      processCssUrls: false
   })
   .setPublicPath('public');
   

