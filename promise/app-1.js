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
            if (delay > 2200) {
                reject('error: koneksi pedhot su');
            } else {
                resolve(`sukses bos : ${url} ${delay}ms`);
            };
        },delay);
    });
};

requestPromise('google.com')
    .then((response) => {
        console.log('proses 1');
        console.log('succes', response);
        return requestPromise('google.com');
    })
    .then((response) => {
        console.log('proses 2');
        console.log('succes', response);
        return requestPromise('google.com');
    })
    .then((response) => {
        console.log('proses 3');
        console.log('succes', response);
        return requestPromise('google.com');
    })
    .catch((error) => {
        console.log('error', error);
    });