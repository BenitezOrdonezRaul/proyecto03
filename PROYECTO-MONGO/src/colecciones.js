
//Colección de los discos y vinilos de la tienda.


db.discos.insertOne (

    {
        tipo: "CD",
        nombre: "What's Going On",
        _id: ObjectId(),
        lanzamiento: new Date ("21-05-1971"),
        género: ["Soul", "Pop", "Rhythm & Blues", "Funk"],
        artista: "Marvin Gaye",
        formato: "Álbum",
        discográfica: "Tamla",
        estadodeconservación: "Nuevo",
        precio: 20,
        stock: true
    }

)

db.discos.insertMany ( [

    {
        tipo: "Vinilo",
        nombre: "Abbey Road",
        _id: ObjectId(),
        lanzamiento: new Date ("26-09-1969"),
        género: ["Pop", "Rock and roll"],
        artista: "The Beatles",
        formato: "Álbum",
        discográfica: "Apple Records",
        estadodeconservación: "Bueno",
        precio: 39.99,
        stock: true
    },

    {tipo: "CD", nombre: "Pet Sounds", _id: ObjectId(), lanzamiento: new Date ("1966-05-16"), género: ["Pop", "Pop rock"], artista: "The Beach Boys", formato: "Álbum", discográfica: "Capitol Records", estadodeconservación: "Nuevo", precio: 29.99, stock: true},
    {tipo: "CD", nombre: "Blue", _id: ObjectId(), lanzamiento: new Date ("1971-06-21"), género: ["Folk", "Folk rock"], artista: "Joni Mitchell", formato: "Álbum", discográfica: "Reprise Records", estadodeconservación: "Nuevo", precio: 19.99, stock: true},
    {tipo: "CD", nombre: "Songs in the Key of Life", _id: ObjectId(), lanzamiento: new Date ("1976-09-26"), género: ["Soul", "Rhythm & Blues", "Pop", "Funk", "Jazz"], artista: "Stevie Wonder", formato: "Álbum", discográfica: "Tamla", estadodeconservación: "Nuevo", precio: 10.99, stock: true},
    {tipo: "CD", nombre: "Nevermind", _id: ObjectId(), lanzamiento: new Date ("1991-09-24"), género: ["Grunge", "Rock"], artista: "Nirvana", formato: "Álbum", discográfica: "DGC Records", estadodeconservación: "Nuevo", precio: 19.99, stock: true},
    {tipo: "CD", nombre: "Purple Rain", _id: ObjectId(), lanzamiento: new Date ("1984-06-25"), género: ["Pop rock", "Funk"], artista: ["Prince", "The Revolution"], formato: "Álbum", discográfica: "Warner Bros Records", estadodeconservación: "Nuevo", precio: 19.99, stock: false},
    {tipo: "CD", nombre: "Rumours", _id: ObjectId(), lanzamiento: new Date ("1977-02-04"), género: ["Pop", "Rock"], artista: "Fleetwood Mac", formato: "Álbum", discográfica: "Warner Bros Records", estadodeconservación: "Nuevo", precio: 19.99, stock: false},
    {tipo: "CD", nombre: "Revolver", _id: ObjectId(), lanzamiento: new Date ("1966-08-05"), género: ["Pop", "Rock"], artista: "The Beatles", formato: "Álbum", discográfica: ["Parlophone", "Capitol Records"], estadodeconservación: "Nuevo", precio: 24.99, stock: true},
    {tipo: "CD", nombre: "Thriller", _id: ObjectId(), lanzamiento: new Date ("1982-11-30"), género: ["Pop", "Rock"], artista: "Michael Jackson", formato: "Álbum", discográfica: "Epic Records", estadodeconservación: "Nuevo", precio: 15.99, stock: true},
    {tipo: "CD", nombre: "Let It Bleed", _id: ObjectId(), lanzamiento: new Date("1969-05-12"), género: "Rock", artista: "The Rolling Stones", formato: "Álbum", discográfica: ["Decca Records", "London Records"], estadodeconservación: "Nuevo", precio: 19.99, stock: false},
    {tipo: "CD", nombre: "I Never Loved a Man the Way I Love You", _id: ObjectId(), lanzamiento: new Date ("1967-03-10"), género: "Soul", artista: "Aretha Franklin", formato: "Álbum", discográfica: "Atlantic Records", estadodeconservación: "Nuevo", precio: 15.99, stock: true},
    {tipo: "CD", nombre: "Exile on Main Street", _id: ObjectId(), lanzamiento: new Date("1972-05-12"), género: "Rock", artista: "The Rolling Stones", formato: "Álbum", discográfica: ["Rolling Stones Records", "Virgin Records"], estadodeconservación: "Nuevo", precio: 20.99, stock: false},
    {tipo: "CD", nombre: "Kid A", _id: ObjectId(), lanzamiento: new Date ("2000-10-02"), género: ["Electrónica", "Rock"], artista: "Radiohead", formato: "Álbum", discográfica: ["EMI", "Parlophone", "Capitol Records"], estadodeconservación: "Nuevo", precio: 14.99, stock: true},
    {tipo: "CD", nombre: "Born to Run", _id: ObjectId(), lanzamiento: new Date ("1975-08-25"), género: "Rock", artista: "Bruce Springsteen", formato: "Álbum", discográfica: "Columbia Records", estadodeconservación: "Nuevo", precio: 19.99, stock: true},
    {tipo: "CD", nombre: "The White Album", _id: ObjectId(), lanzamiento: new Date ("1968-11-22"), género: ["Rock", "Pop"], artista: "The Beatles", formato: "Álbum", discográfica: "Apple Records", estadodeconservación: "Nuevo", precio: 19.99, stock: true},
    {tipo: "CD", nombre: "Kind of Blue", _id: ObjectId(), lanzamiento: new Date ("1959-08-17"), género: "Jazz", artista: "Miles Davis", formato: "Álbum", discográfica: "Columbia Records", estadodeconservación: "Nuevo", precio: 19.99, stock: true},
    {tipo: "CD", nombre: "Back to Black", _id: ObjectId(), lanzamiento: new Date ("2006-10-30"), género: ["Soul", "Rhythm & Blues"], artista: "Amy Winehouse", formato: "Álbum", discográfica: "Island", estadodeconservación: "Nuevo", precio: 9.99, stock: true},
    {tipo: "CD", nombre: "Lemonade", _id: ObjectId(), lanzamiento: new Date ("2006-04-23"), género: ["Rhythm & Blues", "Pop", "Hip hop", "Rock", "Soul", "Funk", "Country"], artista: "Beyoncé", formato: "Álbum", discográfica: ["Parkwood Entertainment", "Columbia Records"], estadodeconservación: "Nuevo", precio: 19.99, stock: true},
    {tipo: "CD", nombre: "Innervisions", _id: ObjectId(), lanzamiento: new Date ("1973-08-03"), género: ["Pop", "Rock", "Funk", "Soul"], artista: "Stevie Wonder", formato: "Álbum", discográfica: "Tamla", estadodeconservación: "Nuevo", precio: 13.99, stock: false},
    {tipo: "CD", nombre: "Rubber Soul", _id: ObjectId(), lanzamiento: new Date ("1965-12-03"), género: ["Pop", "Rock"], artista: "The Beatles", formato: "Álbum", discográfica: "Parlophone", estadodeconservación: "Nuevo", precio: 19.99, stock: true},
    {tipo: "CD", nombre: "Off the Wall", _id: ObjectId(), lanzamiento: new Date ("1979-08-10"), género: ["Pop", "Rhythm & Blues", "Disco"], artista: "Michael Jackson", formato: "Álbum", discográfica: "Epic", estadodeconservación: "Nuevo", precio: 10.99, stock: true},
    {tipo: "CD", nombre: "Blonde on Blonde", _id: ObjectId(), lanzamiento: new Date ("1966-05-16"), género: "Rock", artista: "Bob Dylan", formato: "Álbum", discográfica: "Columbia Records", estadodeconservación: "Nuevo", precio: 15.99, stock: true},
    {tipo: "CD", nombre: "Remain in Light", _id: ObjectId(), lanzamiento: new Date ("1980-10-08"), género: "Punk", artista: "Talking Heads", formato: "Álbum", discográfica: "Sire", estadodeconservación: "Nuevo", precio: 9.99, stock: true},
    {tipo: "CD", nombre: "OK Computer", _id: ObjectId(), lanzamiento: new Date ("1997-05-21"), género: "Rock", artista: "Radiohead", formato: "Álbum", discográfica: ["Parlophone", "Capitol Records"], estadodeconservación: "Nuevo", precio: 19.99, stock: false},
    {tipo: "CD", nombre: "Sign O’ the Times", _id: ObjectId(), lanzamiento: new Date ("1987-03-21"), género: ["Rock", "Rhythm & Blues"], artista: "Prince", formato: "Álbum", discográfica: "Warner Bros Records", estadodeconservación: "Nuevo", precio: 19.99, stock: true},
    {tipo: "CD", nombre: "Legend", _id: ObjectId(), lanzamiento: new Date ("1984-05-08"), género: "Reggae", artista: ["Bob Marley", "The Wailers"], formato: "Álbum", discográfica: "Island", estadodeconservación: "Nuevo", precio: 9.99, stock: true},
    {tipo: "CD", nombre: "Let It Be", _id: ObjectId(), lanzamiento: new Date("1970-08-05"), género: ["Pop", "Rock"], artista: "The Beatles", formato: "Álbum", discográfica: ["Apple Records"], estadodeconservación: "Nuevo", precio: 19.99, stock: true},
    {tipo: "CD", nombre: "Bohemian Rhapsody", _id: ObjectId(), lanzamiento: new Date ("1975-10-31"), género: ["Rock"], artista: "Queen", formato: "Single", discográfica: ["EMI", "Elektra Records", "Parlophone", "Hollywood Records"], estadodeconservación: "Nuevo", precio: 9.99, stock: true},
    {tipo: "CD", nombre: "(I Can't Get No) Satisfaction", _id: ObjectId(), lanzamiento: new Date ("1965-06-06"), género: "Rock and roll", artista: "The Rolling Stones", formato: "Single", discográfica: ["London Records", "Decca Records"], estadodeconservación: "Nuevo", precio: 9.99, stock: true},
    {tipo: "CD", nombre: "Waterloo Sunset", _id: ObjectId(), lanzamiento: new Date ("1967-05-05"), género: "Rock", artista: "The Kinks", formato: "Single", discográfica: "RCA Records", estadodeconservación: "Nuevo", precio: 5.99, stock: true},
    {tipo: "CD", nombre: "Good Vibrations", _id: ObjectId(), lanzamiento: new Date ("1966-10-10"), género: ["Pop", "Rock", "Rhythm & Blues"], artista: "The Beach Boys", formato: "Single", discográfica: "Capitol Records", estadodeconservación: "Nuevo", precio: 6.99, stock: false},
    {tipo: "CD", nombre: "Like a Rolling Stone", _id: ObjectId(), lanzamiento: new Date ("1965-07-20"), género: ["Rock", "Folk"], artista: "Bob Dylan", formato: "Single", discográfica: "Columbia Records", estadodeconservación: "Nuevo", precio: 9.99, stock: true},
    {tipo: "CD", nombre: "The Times They Are a-Changin'", _id: ObjectId(), lanzamiento: new Date ("1963-10-24"), género: "Folk", artista: "Bob Dylan", formato: "Single", discográfica: "Columbia Records", estadodeconservación: "Nuevo", precio: 9.99, stock: true},
    {tipo: "CD", nombre: "Hey Jude", _id: ObjectId(), lanzamiento: new Date ("1968-08-26"), género: ["Pop", "Rock"], artista: "The Beatles", formato: "Single", discográfica: "Apple Records", estadodeconservación: "Nuevo", precio: 9.99, stock: true},
    {tipo: "CD", nombre: "No Woman, No Cry", _id: ObjectId(), lanzamiento: new Date ("1975-12-05"), género: "Reggae", artista: ["Bob Marley", "The Wailers"], formato: "Single", discográfica: "Island", estadodeconservación: "Nuevo", precio: 6.99, stock: true},
    {tipo: "CD", nombre: "See Emily Play", _id: ObjectId(), lanzamiento: new Date ("1967-06-10"), género: "Rock", artista: "Pink Floyd", formato: "Single", discográfica: ["Columbia Records", "EMI", "Tower Records"], estadodeconservación: "Nuevo", precio: 12.99, stock: true},
    {tipo: "CD", nombre: "Here, There and Everywhere", _id: ObjectId(), lanzamiento: new Date ("1966-06-14"), género: ["Rock", "Pop"], artista: "The Beatles", formato: "Single", discográfica: "Parlophone", estadodeconservación: "Nuevo", precio: 10.99, stock: true},
    {tipo: "CD", nombre: "Smells Like Teen Spirit", _id: ObjectId(), lanzamiento: new Date ("1991-09-10"), género: ["Grunge", "Rock"], artista: "Nirvana", formato: "Single", discográfica: "DGC Records", estadodeconservación: "Nuevo", precio: 9.99, stock: false},
    {tipo: "CD", nombre: "Strawberry Fields Forever", _id: ObjectId(), lanzamiento: new Date ("1967-02-13"), género: ["Pop", "Rock"], artista: "The Beatles", formato: "Single", discográfica: ["Parlophone", "Capitol Records"], estadodeconservación: "Nuevo", precio: 12.99, stock: true},
    {tipo: "CD", nombre: "Dreams", _id: ObjectId(), lanzamiento: new Date ("1977-03-24"), género: "Rock", artista: "Fleetwood Mac", formato: "Single", discográfica: "Warner Bros Records", estadodeconservación: "Nuevo", precio: 4.99, stock: true},
    {tipo: "CD", nombre: "Creep", _id: ObjectId(), lanzamiento: new Date ("1993-04-17"), género: "Rock", artista: "Radiohead", formato: "Single", discográfica: "Parlophone", estadodeconservación: "Bueno", precio: 9.99, stock: true},
    {tipo: "CD", nombre: "Imagine", _id: ObjectId(), lanzamiento: new Date ("1971-11-10"), género: "Rock", artista: "John Lennon", formato: "Single", discográfica: "Apple Records", estadodeconservación: "Nuevo", precio: 9.99, stock: true},
    {tipo: "CD", nombre: "Respect", _id: ObjectId(), lanzamiento: new Date ("1965-08-15"), género: "Soul", artista: ["Aretha Franklin", "Otis Redding"], formato: "Single", discográfica: ["Stax Records", "Atco Records"], estadodeconservación: "Nuevo", precio: 7.99, stock: true},
    {tipo: "CD", nombre: "Jhonny B. Goode", _id: ObjectId(), lanzamiento: new Date ("1958-03-12"), género: "Rock and roll", artista: "Chuck Berry", formato: "Single", discográfica: "Chess Records", estadodeconservación: "Nuevo", precio: 5.99, stock: true},
    {tipo: "CD", nombre: "What'd I Say", _id: ObjectId(), lanzamiento: new Date ("1959-07-13"), género: ["Soul", "Rhythm & Blues"], artista: "Ray Charles", formato: "Single", discográfica: "Atlantic Records", estadodeconservación: "Nuevo", precio: 4.99, stock: true},
    {tipo: "CD", nombre: "Yesterday", _id: ObjectId(), lanzamiento: new Date ("1965-08-06"), género: "Bolero", artista: "The Beatles", formato: "Single", discográfica: "Parlophone", estadodeconservación: "Nuevo", precio: 9.99, stock: false},
    {tipo: "CD", nombre: "Blowin’ in the Wind", _id: ObjectId(), lanzamiento: new Date ("1963-08-13"), género: "Folk", artista: "Bob Dylan", formato: "Single", discográfica: "Columbia Records", estadodeconservación: "Nuevo", precio: 9.99, stock: true},
    {tipo: "CD", nombre: "I want to hold your hand", _id: ObjectId(), lanzamiento: new Date ("1963-11-29"), género: ["Pop", "Rock"], artista: "The Beatles", formato: "Single", discográfica: "Parlophone", estadodeconservación: "Nuevo", precio: 12.99, stock: true},
    {tipo: "CD", nombre: "Maybellene", _id: ObjectId(), lanzamiento: new Date ("1955-08-15"), género: "Rock and roll", artista: "Chuck Berry", formato: "Single", discográfica: "Chess Records", estadodeconservación: "Nuevo", precio: 4.99, stock: true},
    {tipo: "CD", nombre: "Let It Be", _id: ObjectId(), lanzamiento: new Date ("1970-03-06"), género: ["Pop", "Rock", "Gospel"], artista: "The Beatles", formato: "Single", discográfica: "Apple Records", estadodeconservación: "Nuevo", precio: 12.99, stock: true},
    {tipo: "CD", nombre: "Magical Mystery Tour", _id: ObjectId(), lanzamiento: new Date ("1967-11-27"), género: ["Psicodelia", "Pop"], artista: "The Beatles", formato: "EP", discográfica: ["Capitol Records", "Parlophone"], estadodeconservación: "Nuevo", precio: 15.99, stock: true},
    {tipo: "CD", nombre: "Hormoaning", _id: ObjectId(), lanzamiento: new Date ("1992-02-05"), género: ["Grunge", "Rock"], artista: "Nirvana", formato: "EP", discográfica: "Geffen Records", estadodeconservación: "Nuevo", precio: 9.99, stock: true},
    {tipo: "CD", nombre: "Blew", _id: ObjectId(), lanzamiento: new Date ("1989-10-08"), género: "Grunge", artista: "Nirvana", formato: "EP", discográfica: "Tupelo", estadodeconservación: "Nuevo", precio: 9.99, stock: true},
    {tipo: "CD", nombre: "Teenage Kicks", _id: ObjectId(), lanzamiento: new Date ("1978-08-12"), género: ["Pop", "Rock"], artista: "The Undertones", formato: "EP", discográfica: "Good Vibrations", estadodeconservación: "Nuevo", precio: 9.99, stock: true},
    {tipo: "CD", nombre: "Airbag / How Am I Driving?", _id: ObjectId(), lanzamiento: new Date("1998-04-21"), género: "Rock", artista: "Radiohead", formato: "EP", discográfica: "Capitol Records", estadodeconservación: "Nuevo", precio: 9.99, stock: true},
    {tipo: "CD", nombre: "Itch", _id: ObjectId(), lanzamiento: new Date ("1994-06-01"), género: "Rock", artista: "Radiohead", formato: "EP", discográfica: "EMI", estadodeconservación: "Nuevo", precio: 12.99, stock: true},
    {tipo: "CD", nombre: "My Iron Lung", _id: ObjectId(), lanzamiento: new Date ("1994-10-24"), género: "Rock", artista: "Radiohead", formato: "EP", discográfica: ["Parlophone", "Capitol Records"], estadodeconservación: "Nuevo", precio: 9.99, stock: false},
    {tipo: "CD", nombre: "Souvenir of Their Visit to America", _id: ObjectId(), lanzamiento: new Date ("1964-03-23"), género: "Rock and roll", artista: "The Beatles", formato: "EP", discográfica: "Vee-Jay", estadodeconservación: "Nuevo", precio: 10.99, stock: true},
    {tipo: "CD", nombre: "Long Tall Sally", _id: ObjectId(), lanzamiento: new Date ("1964-06-19"), género: "Rock and roll", artista: "The Beatles", formato: "EP", discográfica: "Parlophone", estadodeconservación: "Nuevo", precio: 10.99, stock: true},
    {tipo: "CD", nombre: "Wouldn's It Be Nice", _id: ObjectId(), lanzamiento: new Date ("1966-05-16"), género: "Pop", artista: "The Beach Boys", formato: "EP", discográfica: "Capitol Records", estadodeconservación: "Nuevo", precio: 9.99, stock: true},
    {tipo: "CD", nombre: "The Blue Room EP", _id: ObjectId(), lanzamiento: new Date("1999-08-05"), género: "Rock", artista: "Coldplay", formato: "EP", discográfica: "Parlophone", estadodeconservación: "Nuevo", precio: 12.99, stock: true},
    {tipo: "CD", nombre: "Yesterday", _id: ObjectId(), lanzamiento: new Date ("1966-04-03"), género: "Rock", artista: "The Beatles", formato: "EP", discográfica: "Parlophone", estadodeconservación: "Nuevo", precio: 15.99, stock: true},
    {tipo: "Vinilo", nombre: "Wish You Were Here", _id: ObjectId(), lanzamiento: new Date ("1975-09-12"), género: "Rock", artista: "Pink Floyd", formato: "Álbum", discográfica: ["Harvest", "EMI"], estadodeconservación: "Regular", precio: 25.99, stock: true},
    {tipo: "Vinilo", nombre: "Creep", _id: ObjectId(), lanzamiento: new Date ("1993-03-14"), género: "Rock", artista: "Radiohead", formato: "Single", discográfica: "Parlophone", estadodeconservación: "Bueno", precio: 30.99, stock: true},
    {tipo: "Vinilo", nombre: "Jhonny B. Goode", _id: ObjectId(), lanzamiento: new Date ("1958-03-12"), género: "Rock and roll", artista: "Chuck Berry", formato: "Single", discográfica: "Chess Records", estadodeconservación: "Malo", precio: 15.99, stock: true},
    {tipo: "Vinilo", nombre: "What'd I Say", _id: ObjectId(), lanzamiento: new Date ("1959-07-13"), género: ["Soul", "Rhythm & Blues"], artista: "Ray Charles", formato: "Single", discográfica: "Atlantic Records", estadodeconservación: "Malo", precio: 15.99, stock: true},
    {tipo: "Vinilo", nombre: "The Times They Are a-Changin'", _id: ObjectId(), lanzamiento: new Date ("1963-10-24"), género: "Folk", artista: "Bob Dylan", formato: "Single", discográfica: "Columbia Records", estadodeconservación: "Regular", precio: 20.99, stock: true},
    {tipo: "Vinilo", nombre: "Stairway to Heaven", _id: ObjectId(), lanzamiento: new Date ("1970-12-03"), género: "Rock", artista: "Led Zeppelin", formato: "Single", discográfica: "Atlantic Records", estadodeconservación: "Bueno", precio: 30.99, stock: false},
    {tipo: "Vinilo", nombre: "Thriller", _id: ObjectId(), lanzamiento: new Date ("1982-11-30"), género: ["Pop", "Rock"], artista: "Michael Jackson", formato: "Álbum", discográfica: "Epic Records", estadodeconservación: "Bueno", precio: 30.99, stock: true},
    {tipo: "Vinilo", nombre: "Waterloo", _id: ObjectId(), lanzamiento: new Date ("1976-06-16"), género: "Pop", artista: "ABBA", formato: "Álbum", discográfica: ["Universal Music", "Polar Music", "PolyGram"], estadodeconservación: "Regular", precio: 23.99, stock: true},
    {tipo: "Vinilo", nombre: "A Day at the Races", _id: ObjectId(), lanzamiento: new Date ("1976-12-10"), género: ["Rock", "Pop"], artista: "Queen", formato: "Álbum", discográfica: ["EMI", "Elektra Records"], estadodeconservación: "Bueno", precio: 35.99, stock: true},
    {tipo: "Vinilo", nombre: "Pearl", _id: ObjectId(), lanzamiento: new Date ("1971-01-11"), género: ["Rock", "Soul"], artista: "Janis Joplin", formato: "Álbum", discográfica: "Columbia Records", estadodeconservación: "Regular", precio: 25.99, stock: true},
    {tipo: "Vinilo", nombre: "Airbag / How Am I Driving?", _id: ObjectId(), lanzamiento: new Date("1998-04-21"), género: "Rock", artista: "Radiohead", formato: "EP", discográfica: "Capitol Records", estadodeconservación: "Malo", precio: 20.99, stock: true},
    {tipo: "Vinilo", nombre: "Itch", _id: ObjectId(), lanzamiento: new Date ("1994-06-01"), género: "Rock", artista: "Radiohead", formato: "EP", discográfica: "EMI", estadodeconservación: "Bueno", precio: 25.99, stock: true},
    {tipo: "Vinilo", nombre: "Love You Live", _id: ObjectId(), lanzamiento: new Date ("1977-09-23"), género: "Rock", artista: "The Rolling Stones", formato: "Álbum", discográfica: ["Rolling Stones Records", "Atlantic Records"], estadodeconservación: "Bueno", precio: 30.99, stock: true},
    {tipo: "Vinilo", nombre: "Like a Rolling Stone", _id: ObjectId(), lanzamiento: new Date ("1965-07-20"), género: ["Rock", "Folk"], artista: "Bob Dylan", formato: "Single", discográfica: "Columbia Records", estadodeconservación: "Malo", precio: 19.99, stock: true},
    {tipo: "Vinilo", nombre: "Magical Mystery Tour", _id: ObjectId(), lanzamiento: new Date ("1967-11-27"), género: ["Psicodelia", "Pop"], artista: "The Beatles", formato: "EP", discográfica: ["Capitol Records", "Parlophone"], estadodeconservación: "Malo", precio: 25.99, stock: true},
    {tipo: "Vinilo", nombre: "Hormoaning", _id: ObjectId(), lanzamiento: new Date ("1992-02-05"), género: ["Grunge", "Rock"], artista: "Nirvana", formato: "EP", discográfica: "Geffen Records", estadodeconservación: "Regular", precio: 20.99, stock: true},
    {tipo: "Vinilo", nombre: "Imagine", _id: ObjectId(), lanzamiento: new Date ("1971-10-11"), género: "Rock", artista: "John Lennon", formato: "Single", discográfica: "Apple Records", estadodeconservación: "Regular", precio: 30.99, stock: true},
    {tipo: "Vinilo", nombre: "I Never Loved a Man the Way I Love You", _id: ObjectId(), lanzamiento: new Date ("1967-03-10"), género: "Soul", artista: "Aretha Franklin", formato: "Álbum", discográfica: "Atlantic Records", estadodeconservación: "Bueno", precio: 25.99, stock: true},

] )






//Colección del merch de la tienda.


db.merchandise.insertOne (

    {
        tipoproducto: "Camiseta",
        _id: ObjectId(),
        nombre: "Camiseta Logo The Beatles",
        color: ["Blanco"],
        artista: "The Beatles",
        tamaño: "Grande",
        rebaja: false,
        stock: 15,
        precio: 20.00,

    }

)

db.merchandise.insertMany ( [

    {
        tipoproducto: "Sudadera",
        _id: ObjectId(),
        nombre: "Sudadera Logo The Beatles",
        color: ["Negro"],
        artista: "The Beatles",
        tamaño: "Grande",
        rebaja: false,
        stock: 20,
        precio: 35.00,

    },

    {tipoproducto: "Camiseta", _id: ObjectId(), nombre: "Camiseta AC/DC", color: ["Negro"], artista: "AC/DC", tamaño: "Grande", rebaja: false, stock: 2, precio: 10.99},
    {tipoproducto: "Camiseta", _id: ObjectId(), nombre: "Camiseta The Rolling Stones Classic Tongue", color: ["Blanco"], artista: "The Rolling Stones", rebaja: false, tamaño: "Grande", stock: 5, precio: 15.05},
    {tipoproducto: "Camiseta", _id: ObjectId(), nombre: "Camiseta Guns N' Roses Design: Appetite for Destruction", color: ["Negro"], artista: "Guns N' Roses", tamaño: "Grande", rebaja: true, stock: 5, precio: 17.05},
    {tipoproducto: "Camiseta", _id: ObjectId(), nombre: "Camiseta Guns N' Roses Design: Aero Force ", color: ["Negro"], artista: "Guns N' Roses", tamaño: "Grande", rebaja: true, stock: 2, precio: 21},
    {tipoproducto: "Camiseta", _id: ObjectId(), nombre: "Camiseta Linkin Park", artista: "Linkin Park", color: ["Amarillo"], tamaño: "Grande", rebaja: false, stock: 2, precio: 22},
    {tipoproducto: "Camiseta", _id: ObjectId(), nombre: "Camiseta Green Day Design: Longview Doodle", color: ["Blanco"], artista: "Green Day", tamaño: "Grande", rebaja: false, stock: 5, precio: 25},
    {tipoproducto: "Camiseta", _id: ObjectId(), nombre: "Camiseta Bob Marley Face", artista: "Bob Marley", color: ["Negro"], tamaño: "Grande", rebaja: true, stock: 2, precio: 15.05},
    {tipoproducto: "Camiseta", _id: ObjectId(), nombre: "Camiseta Nirvana Design: Vestibule", artista: "Nirvana", color: ["Negro"], tamaño: "Grande", rebaja: false, stock: 2, precio: 21},
    {tipoproducto: "Camiseta", _id: ObjectId(), nombre: "Camiseta The Beatles Abbey Road", artista: "The Beatles", color: ["Negro"], tamaño: "Grande", rebaja: false, stock: 5, precio: 25},
    {tipoproducto: "Camiseta", _id: ObjectId(), nombre: "Camiseta The Beatles Abbey Road", artista: "The Beatles", color: ["Azúl"], tamaño: "Grande", rebaja: false, stock: 5, precio: 27},
    {tipoproducto: "Camiseta", _id: ObjectId(), nombre: "Camiseta Beatles Hamburg 1962 Poster", artista: "The Beatles", color: "Negro", tamaño: "Grande", rebaja: false, stock: 2, precio: 20},
    {tipoproducto: "Sudadera", _id: ObjectId(), nombre: "Sudadera AC/DC", color: ["Negro"], artista: "AC/DC", tamaño: "Grande", rebaja: false, stock: 0, precio: 30.99},
    {tipoproducto: "Sudadera", _id: ObjectId(), nombre: "Sudadera The Rolling Stones Classic Tongue", color: ["Blanco"], artista: "The Rolling Stones", rebaja: false, tamaño: "Grande", stock: 2, precio: 35.05},
    {tipoproducto: "Sudadera", _id: ObjectId(), nombre: "Sudadera Guns N' Roses Design: Top Hat", color: ["Negro"], artista: "Guns N' Roses", tamaño: "Grande", rebaja: false, stock: 3, precio: 37.05},
    {tipoproducto: "Sudadera", _id: ObjectId(), nombre: "Sudadera Guns N' Roses Design: Aero Force ", color: ["Negro"], artista: "Guns N' Roses", tamaño: "Grande", rebaja: true, stock: 2, precio: 31},
    {tipoproducto: "Sudadera", _id: ObjectId(), nombre: "Sudadera Green Day Design: American Idiot", color: ["Negro"], artista: "Green Day", tamaño: "Grande", rebaja: false, stock: 2, precio: 35},
    {tipoproducto: "Sudadera", _id: ObjectId(), nombre: "Sudadera The Beatles Abbey Road", artista: "The Beatles", color: ["Negro"], tamaño: "Grande", rebaja: false, stock: 2, precio: 35},
    {tipoproducto: "Sudadera", _id: ObjectId(), nombre: "Sudadera The Beatles Abbey Road", artista: "The Beatles", color: ["Blanco"], tamaño: "Grande", rebaja: false, stock: 2, precio: 37},
    {tipoproducto: "Chapa", _id: ObjectId(), nombre: "Chapita Guns N' Roses Design: Lyrics & Logos", artista: "Guns N' Roses", color: ["Negro"], tamaño: "Pequeño", rebaja: false, stock: 50, precio: 5},
    {tipoproducto: "Chapa", _id: ObjectId(), nombre: "Chapita John Lennon 440459", artista: "John Lennon", color: ["Blanco"], tamaño: "Pequeño", rebaja: false, stock: 50, precio: 5},
    {tipoproducto: "Chapa", _id: ObjectId(), nombre: "Set Chapitas The Rolling Stones", artista: "The Rolling Stones", color: ["Multicolor"], tamaño: "Pequeño", rebaja: false, stock: 30, precio: 10},
    {tipoproducto: "Chapa", _id: ObjectId(), nombre: "Set Chapitas The Beatles", artista: "The Beatles", color: ["Multicolor"], tamaño: "Pequeño", rebaja: false, stock: 30, precio: 10},
    {tipoproducto: "Llavero", _id: ObjectId(), nombre: "Llavero Pink Floyd The Dark Side of The Side", artista: "Pink Floyd", color: ["Negro"], tamaño: "Pequeño", rebaja: false, stock: 20, precio: 10},
    {tipoproducto: "Llavero", _id: ObjectId(), nombre: "Llavero AD/DC Devil Angus", artista: "AD/DC", color: ["Negro"], tamaño: "Pequeño", rebaja: true, stock: 15, precio: 5},
    {tipoproducto: "Llavero", _id: ObjectId(), nombre: "Llavero John Lennon 345976", artista: "John Lennon", color: ["Verde"], tamaño: "Pequeño", rebaja: false, stock: 20, precio: 8},
    {tipoproducto: "Llavero", _id: ObjectId(), nombre: "Llavero The Rolling Stones Design UK & US", artista: "The Rolling Stones", color: ["Blanco"], tamaño: "Pequeño", rebaja: false, stock: 20, precio: 8},
    {tipoproducto: "Llavero", _id: ObjectId(), nombre: "Llavero The Beatles Design Apple Logo", artista: "The Beatles", color: ["Negro"], tamaño: "Pequeño", rebaja: false, stock: 15, precio: 7},
    {tipoproducto: "Llavero", _id: ObjectId(), nombre: "Llavero Nirvana Design Smiley Logo", artista: "Nirvana", color: ["Negro"], tamaño: "Pequeño", rebaja: false, stock: 15, precio: 12},
    {tipoproducto: "Taza", _id: ObjectId(), nombre: "Taza Pink Floyd", artista: "Pink Floyd", color: ["Negro"], tamaño: "Mediano", rebaja: true, stock: 5, precio: 15},
    {tipoproducto: "Taza", _id: ObjectId(), nombre: "Taza John Lennon War Is Over", artista: "John Lennon", color: ["Blanco"], tamaño: "Mediano", rebaja: false, stock: 20, precio: 12},
    {tipoproducto: "Taza", _id: ObjectId(), nombre: "Taza The Beatles LIVERPOOL", artista: "The Beatles", color: ["Blanco"], tamaño: "Mediano", rebaja: false, stock: 15, precio: 10},
    {tipoproducto: "Taza", _id: ObjectId(), nombre: "Taza Led Zeppelin 141007", artista: "Led Zeppelin", color: ["Negro"], tamaño: "Mediano", rebaja: false, stock: 10, precio: 9},
    {tipoproducto: "Taza", _id: ObjectId(), nombre: "Taza The Black Eyed Peas", artista: "The Black Eyed Peas", color: ["Blanco"], tamaño: "Mediano", rebaja: false, stock: 10, precio: 7},

])