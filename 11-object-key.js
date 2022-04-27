
let laptop1 = {
    brand: "Apple",
    model: "Macbook Pro",
    "1kg": 1,
    model_name: "MacBook Pro"

}

// Dogru anahtar bilgisi olusturma 
console.log(laptop1.brand, laptop1["brand"])
console.log(laptop1.model, laptop1["model"])
console.log(laptop1["1kg"])

// Anahtar bilgisine yeni deger ekleme
laptop1.brand = "Mac"
laptop1["brand"] = "Mac1"
console.log(laptop1)

// Yeni Bilgi
laptop1.version = "11.11.1"
console.log(laptop1)

// Anahtar Bilgilerine ulasmak (keys) -> Object.keys(item)
keys=Object.keys(laptop1)
console.log(keys)
console.log(Object.keys(laptop1))

// for(const key in keys) console.log(key) -> for ile yapilan

keys.forEach(KeyInfo => {
    console.log(KeyInfo)
    console.log(laptop1[KeyInfo])
});

// Deger Bilgilerine Ulasmak (values) -> Object.values(item)
console.log(
    Object.values(laptop1)
)

let values=Object.values(laptop1)

values.forEach(value => {
    console.log("Value: ",value)
});