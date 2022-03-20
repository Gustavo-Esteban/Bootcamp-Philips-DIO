function getAdmins(map){

    let admins = [];
    for ([key, value] of map){
        if(value === 'admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('luiz', 'admin');
usuarios.set('stephany', 'admin');
usuarios.set('jorge', 'user');
usuarios.set('natalia', 'admin');

console.log(getAdmins(usuarios))