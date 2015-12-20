// Elements to inject
 var mySVGsToInject = document.querySelectorAll('img.lumi');

 // Options
 var injectorOptions = {
   evalScripts: 'once',
   pngFallback: 'assets/png',
   each: function (svg) {
     // Callback after each SVG is injected
     console.log('SVG injected: ' + svg.getAttribute('id'));
   }
 };

 // Do the injection
 SVGInjector(mySVGsToInject, injectorOptions, function (totalSVGsInjected){
    console.log('We injected ' + totalSVGsInjected + ' SVG(s)!');

 });
