

let settings = {
    userName: "loremIpsum",
    password: "BadPassword",
    isActive: false,
    ip: "127.0.0.1",
    serverName: "kodluyoruz.org"
}

//obje icindeki bilgileri tek seferde cikarilmasi
/*
let userName = settings.userName
console.log(userName)


let {userName: user,password,isActive,ip,serverName} =settings

console.log(user,password,isActive,ip,serverName)

console.log(user)
*/

// --- DESTRUCTURING ---
let {userName: userName2,password: password2,isActive: isActive2, ...newSettings} =settings

console.log(settings)

let settings2= {...settings}
settings2.userName="Degisen Bilgi"
console.log("setting: ",settings," settings2: ",settings2)

let score=[100,200,300,400]

let[score1,score2, ...otherScore]= score
console.log(score1,score2,otherScore)


let a=[,pronoun,,name]=["Merhaba","benim","adım","Mehmet"]

console.log(a)
