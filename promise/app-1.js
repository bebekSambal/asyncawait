// versi callback
// const rekuest = (link, sukses, gagal)=>{
//     const delay = Math.floor(Math.random()* 4500) + 300;
//     setTimeout(()=>{
//         if (delay > 2700){
//             gagal(`gagal: koneksi habizzz ${delay}ms` );
//         } else {
//             sukses(`selamat! ${link} ${delay}`);
//         }
//     },delay);
// };

// rekuest('jancok.com', function(response){
//     console.log('YES!', response);
// }, function(error){
//     console.log('RUNGKAD rek', error);
// });


// versi promise
const requestPromise = (url) =>{
    return new Promise((resolve, reject) =>{
        const delay = Math.floor(Math.random() *4300) +533;
        setTimeout(()=>{
            if (delay > 3700) {
                reject('error: koneksi pedhot su');
            } else {
                resolve(`sukses bos : ${url} ${delay}ms`);
            };
        },delay);
    });
};

requestPromise('google.com')
    .then((response) => {
        console.log('succes', response);
    })
    .catch((error) => {
        console.log('error', error);
    });