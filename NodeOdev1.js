const arguments=process.argv.slice(2);    

function daireAlanHesapla(yaricap){
   console.log(`Yarıçapı ${yaricap} olan dairenin alanı:${Math.PI*(Math.pow(yaricap,2))} şeklinde olmalıdır.`) ;
}




daireAlanHesapla(arguments[0]*1);