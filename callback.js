// // Fungsi yang menerima callback
// function doSomethingAsync(callback) {
//     // Menjalankan operasi asynchronous, misalnya, setTimeout untuk simulasi
//     setTimeout(function() {
//       console.log("Operasi selesai!");
//       // Memanggil callback setelah operasi selesai
//       callback();
//     }, 1000);
//   }
  
//   // Fungsi callback
//   function onComplete() {
//     console.log("Callback dipanggil setelah operasi selesai.");
//   }
  
//   // Memanggil fungsi doSomethingAsync dengan callback onComplete
//   doSomethingAsync(onComplete);
  
  // ------------------ contoh lain callback funct :



  function hello(callback){
    setTimeout(function(){
      console.log('hello, wait 3x');
      callback(); // memanggil callback harus di dalam fungsi setTimeout
    },3000);
  }

  function wait(){
console.log('good job,thx for wait');
  };


  /* output sblm callback :
  good job,thx for wait
  hello, wait 3x
  */

  hello(wait);
  //wait();

  /* output setelah ada callback :
  hello, wait 3x
good job,thx for wait
  */