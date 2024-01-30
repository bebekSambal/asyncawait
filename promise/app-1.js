const rekuest = (link, sukses, gagal)=>{
    const delay = Math.floor(Math.random()* 4500) + 300;
    setTimeout(()=>{
        if (delay > 2700){
            gagal(`gagal: koneksi habizzz ${delay}ms` );
        } else {
            sukses(`selamat! ${link} ${delay}`);
        }
    },delay);
};

rekuest('jancok.com', function(response){
    console.log('YES!', response);
}, function(error){
    console.log('RUNGKAD rek', error);
});