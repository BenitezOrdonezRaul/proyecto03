
/*
                CONSULTAS COLECCIÓN DISCOS

                                                        */


//CD's que se vende en la tienda. 

db.discos.find( {tipo: "CD" } )



//Discos de los Beatles que hay en la tienda. 

db.discos.find ( {artista: "The Beatles"} ).pretty()



//CD's de los Beatles que hay en la tienda. 

db.discos.find(

    { $and: [
        {tipo: "CD"},
        {artista: "The Beatles"}
    ]}

).pretty()

/*
{ "_id" : ObjectId("6191bd063592ce9f2ccb16ea"), "tipo" : "CD", "nombre" : "Revolver", "lanzamiento" : ISODate("1966-08-05T00:00:00Z"), "género" : [ "Pop", "Rock" ], "artista" : "The Beatles", "formato" : "Álbum", "discográfica" : [ "Parlophone", "Capitol Records" ], "estadodeconservación" : "Nuevo", "precio" : 24.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb16f1"), "tipo" : "CD", "nombre" : "The White Album", "lanzamiento" : ISODate("1968-11-22T00:00:00Z"), "género" : [ "Rock", "Pop" ], "artista" : "The Beatles", "formato" : "Álbum", "discográfica" : "Apple Records", "estadodeconservación" : "Nuevo", "precio" : 19.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb16f6"), "tipo" : "CD", "nombre" : "Rubber Soul", "lanzamiento" : ISODate("1965-12-03T00:00:00Z"), "género" : [ "Pop", "Rock" ], "artista" : "The Beatles", "formato" : "Álbum", "discográfica" : "Parlophone", "estadodeconservación" : "Nuevo", "precio" : 19.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb16fd"), "tipo" : "CD", "nombre" : "Let It Be", "lanzamiento" : ISODate("1970-08-05T00:00:00Z"), "género" : [ "Pop", "Rock" ], "artista" : "The Beatles", "formato" : "Álbum", "discográfica" : [ "Apple Records" ], "estadodeconservación" : "Nuevo", "precio" : 19.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1704"), "tipo" : "CD", "nombre" : "Hey Jude", "lanzamiento" : ISODate("1968-08-26T00:00:00Z"), "género" : [ "Pop", "Rock" ], "artista" : "The Beatles", "formato" : "Single", "discográfica" : "Apple Records", "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1707"), "tipo" : "CD", "nombre" : "Here, There and Everywhere", "lanzamiento" : ISODate("1966-06-14T00:00:00Z"), "género" : [ "Rock", "Pop" ], "artista" : "The Beatles", "formato" : "Single", "discográfica" : "Parlophone", "estadodeconservación" : "Nuevo", "precio" : 10.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1709"), "tipo" : "CD", "nombre" : "Strawberry Fields Forever", "lanzamiento" : ISODate("1967-02-13T00:00:00Z"), "género" : [ "Pop", "Rock" ], "artista" : "The Beatles", "formato" : "Single", "discográfica" : [ "Parlophone", "Capitol Records" ], "estadodeconservación" : "Nuevo", "precio" : 12.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1710"), "tipo" : "CD", "nombre" : "Yesterday", "lanzamiento" : ISODate("1965-08-06T00:00:00Z"), "género" : "Bolero", "artista" : "The Beatles", "formato" : "Single", "discográfica" : "Parlophone", "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : false }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1712"), "tipo" : "CD", "nombre" : "I want to hold your hand", "lanzamiento" : ISODate("1963-11-29T00:00:00Z"), "género" : [ "Pop", "Rock" ], "artista" : "The Beatles", "formato" : "Single", "discográfica" : "Parlophone", "estadodeconservación" : "Nuevo", "precio" : 12.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1714"), "tipo" : "CD", "nombre" : "Let It Be", "lanzamiento" : ISODate("1970-03-06T00:00:00Z"), "género" : [ "Pop", "Rock", "Gospel" ], "artista" : "The Beatles", "formato" : "Single", "discográfica" : "Apple Records", "estadodeconservación" : "Nuevo", "precio" : 12.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1715"), "tipo" : "CD", "nombre" : "Magical Mystery Tour", "lanzamiento" : ISODate("1967-11-27T00:00:00Z"), "género" : [ "Psicodelia", "Pop" ], "artista" : "The Beatles", "formato" : "EP", "discográfica" : [ "Capitol Records", "Parlophone" ], "estadodeconservación" : "Nuevo", "precio" : 15.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb171c"), "tipo" : "CD", "nombre" : "Souvenir of Their Visit to America", "lanzamiento" : ISODate("1964-03-23T00:00:00Z"), "género" : "Rock and roll", "artista" : "The Beatles", "formato" : "EP", "discográfica" : "Vee-Jay", "estadodeconservación" : "Nuevo", "precio" : 10.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb171d"), "tipo" : "CD", "nombre" : "Long Tall Sally", "lanzamiento" : ISODate("1964-06-19T00:00:00Z"), "género" : "Rock and roll", "artista" : "The Beatles", "formato" : "EP", "discográfica" : "Parlophone", "estadodeconservación" : "Nuevo", "precio" : 10.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1720"), "tipo" : "CD", "nombre" : "Yesterday", "lanzamiento" : ISODate("1966-04-03T00:00:00Z"), "género" : "Rock", "artista" : "The Beatles", "formato" : "EP", "discográfica" : "Parlophone", "estadodeconservación" : "Nuevo", "precio" : 15.99, "stock" : true }
*/



// Discos que sean de los Beatles o de los Rolling Stones. 

db.discos.find(

    { $or: [
        {artista: "The Beatles"},
        {artista: "The Rolling Stones"}
    ]}

).pretty()

/*
{ "_id" : ObjectId("6191bd063592ce9f2ccb16e3"), "tipo" : "Vinilo", "nombre" : "Abbey Road", "lanzamiento" : ISODate("1970-01-01T00:00:00Z"), "género" : [ "Pop", "Rock and roll" ], "artista" : "The Beatles", "formato" : "Álbum", "discográfica" : "Apple Records", "estadodeconservación" : "Bueno", "precio" : 39.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb16ea"), "tipo" : "CD", "nombre" : "Revolver", "lanzamiento" : ISODate("1966-08-05T00:00:00Z"), "género" : [ "Pop", "Rock" ], "artista" : "The Beatles", "formato" : "Álbum", "discográfica" : [ "Parlophone", "Capitol Records" ], "estadodeconservación" : "Nuevo", "precio" : 24.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb16ec"), "tipo" : "CD", "nombre" : "Let It Bleed", "lanzamiento" : ISODate("1969-05-12T00:00:00Z"), "género" : "Rock", "artista" : "The Rolling Stones", "formato" : "Álbum", "discográfica" : [ "Decca Records", "London Records" ], "estadodeconservación" : "Nuevo", "precio" : 19.99, "stock" : false }
{ "_id" : ObjectId("6191bd063592ce9f2ccb16ee"), "tipo" : "CD", "nombre" : "Exile on Main Street", "lanzamiento" : ISODate("1972-05-12T00:00:00Z"), "género" : "Rock", "artista" : "The Rolling Stones", "formato" : "Álbum", "discográfica" : [ "Rolling Stones Records", "Virgin Records" ], "estadodeconservación" : "Nuevo", "precio" : 20.99, "stock" : false }
{ "_id" : ObjectId("6191bd063592ce9f2ccb16f1"), "tipo" : "CD", "nombre" : "The White Album", "lanzamiento" : ISODate("1968-11-22T00:00:00Z"), "género" : [ "Rock", "Pop" ], "artista" : "The Beatles", "formato" : "Álbum", "discográfica" : "Apple Records", "estadodeconservación" : "Nuevo", "precio" : 19.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb16f6"), "tipo" : "CD", "nombre" : "Rubber Soul", "lanzamiento" : ISODate("1965-12-03T00:00:00Z"), "género" : [ "Pop", "Rock" ], "artista" : "The Beatles", "formato" : "Álbum", "discográfica" : "Parlophone", "estadodeconservación" : "Nuevo", "precio" : 19.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb16fd"), "tipo" : "CD", "nombre" : "Let It Be", "lanzamiento" : ISODate("1970-08-05T00:00:00Z"), "género" : [ "Pop", "Rock" ], "artista" : "The Beatles", "formato" : "Álbum", "discográfica" : [ "Apple Records" ], "estadodeconservación" : "Nuevo", "precio" : 19.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb16ff"), "tipo" : "CD", "nombre" : "(I Can't Get No) Satisfaction", "lanzamiento" : ISODate("1965-06-06T00:00:00Z"), "género" : "Rock and roll", "artista" : "The Rolling Stones", "formato" : "Single", "discográfica" : [ "London Records", "Decca Records" ], "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1704"), "tipo" : "CD", "nombre" : "Hey Jude", "lanzamiento" : ISODate("1968-08-26T00:00:00Z"), "género" : [ "Pop", "Rock" ], "artista" : "The Beatles", "formato" : "Single", "discográfica" : "Apple Records", "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1707"), "tipo" : "CD", "nombre" : "Here, There and Everywhere", "lanzamiento" : ISODate("1966-06-14T00:00:00Z"), "género" : [ "Rock", "Pop" ], "artista" : "The Beatles", "formato" : "Single", "discográfica" : "Parlophone", "estadodeconservación" : "Nuevo", "precio" : 10.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1709"), "tipo" : "CD", "nombre" : "Strawberry Fields Forever", "lanzamiento" : ISODate("1967-02-13T00:00:00Z"), "género" : [ "Pop", "Rock" ], "artista" : "The Beatles", "formato" : "Single", "discográfica" : [ "Parlophone", "Capitol Records" ], "estadodeconservación" : "Nuevo", "precio" : 12.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1710"), "tipo" : "CD", "nombre" : "Yesterday", "lanzamiento" : ISODate("1965-08-06T00:00:00Z"), "género" : "Bolero", "artista" : "The Beatles", "formato" : "Single", "discográfica" : "Parlophone", "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : false }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1712"), "tipo" : "CD", "nombre" : "I want to hold your hand", "lanzamiento" : ISODate("1963-11-29T00:00:00Z"), "género" : [ "Pop", "Rock" ], "artista" : "The Beatles", "formato" : "Single", "discográfica" : "Parlophone", "estadodeconservación" : "Nuevo", "precio" : 12.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1714"), "tipo" : "CD", "nombre" : "Let It Be", "lanzamiento" : ISODate("1970-03-06T00:00:00Z"), "género" : [ "Pop", "Rock", "Gospel" ], "artista" : "The Beatles", "formato" : "Single", "discográfica" : "Apple Records", "estadodeconservación" : "Nuevo", "precio" : 12.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1715"), "tipo" : "CD", "nombre" : "Magical Mystery Tour", "lanzamiento" : ISODate("1967-11-27T00:00:00Z"), "género" : [ "Psicodelia", "Pop" ], "artista" : "The Beatles", "formato" : "EP", "discográfica" : [ "Capitol Records", "Parlophone" ], "estadodeconservación" : "Nuevo", "precio" : 15.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb171c"), "tipo" : "CD", "nombre" : "Souvenir of Their Visit to America", "lanzamiento" : ISODate("1964-03-23T00:00:00Z"), "género" : "Rock and roll", "artista" : "The Beatles", "formato" : "EP", "discográfica" : "Vee-Jay", "estadodeconservación" : "Nuevo", "precio" : 10.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb171d"), "tipo" : "CD", "nombre" : "Long Tall Sally", "lanzamiento" : ISODate("1964-06-19T00:00:00Z"), "género" : "Rock and roll", "artista" : "The Beatles", "formato" : "EP", "discográfica" : "Parlophone", "estadodeconservación" : "Nuevo", "precio" : 10.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1720"), "tipo" : "CD", "nombre" : "Yesterday", "lanzamiento" : ISODate("1966-04-03T00:00:00Z"), "género" : "Rock", "artista" : "The Beatles", "formato" : "EP", "discográfica" : "Parlophone", "estadodeconservación" : "Nuevo", "precio" : 15.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb172d"), "tipo" : "Vinilo", "nombre" : "Love You Live", "lanzamiento" : ISODate("1977-09-23T00:00:00Z"), "género" : "Rock", "artista" : "The Rolling Stones", "formato" : "Álbum", "discográfica" : [ "Rolling Stones Records", "Atlantic Records" ], "estadodeconservación" : "Bueno", "precio" : 30.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb172f"), "tipo" : "Vinilo", "nombre" : "Magical Mystery Tour", "lanzamiento" : ISODate("1967-11-27T00:00:00Z"), "género" : [ "Psicodelia", "Pop" ], "artista" : "The Beatles", "formato" : "EP", "discográfica" : [ "Capitol Records", "Parlophone" ], "estadodeconservación" : "Malo", "precio" : 25.99, "stock" : true }
*/



//Todos los discos en formato CD que valgan 15 euros o menos. 

db.discos.find(
    { $and: [
        {tipo: "CD"},
        {precio: {$lte: 15.00}}
    ]}

).pretty()

/*
{ "_id" : ObjectId("6191bd063592ce9f2ccb16e6"), "tipo" : "CD", "nombre" : "Songs in the Key of Life", "lanzamiento" : ISODate("1976-09-26T00:00:00Z"), "género" : [ "Soul", "Rhythm & Blues", "Pop", "Funk", "Jazz" ], "artista" : "Stevie Wonder", "formato" : "Álbum", "discográfica" : "Tamla", "estadodeconservación" : "Nuevo", "precio" : 10.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb16ef"), "tipo" : "CD", "nombre" : "Kid A", "lanzamiento" : ISODate("2000-10-02T00:00:00Z"), "género" : [ "Electrónica", "Rock" ], "artista" : "Radiohead", "formato" : "Álbum", "discográfica" : [ "EMI", "Parlophone", "Capitol Records" ], "estadodeconservación" : "Nuevo", "precio" : 14.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb16f3"), "tipo" : "CD", "nombre" : "Back to Black", "lanzamiento" : ISODate("2006-10-30T00:00:00Z"), "género" : [ "Soul", "Rhythm & Blues" ], "artista" : "Amy Winehouse", "formato" : "Álbum", "discográfica" : "Island", "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb16f5"), "tipo" : "CD", "nombre" : "Innervisions", "lanzamiento" : ISODate("1973-08-03T00:00:00Z"), "género" : [ "Pop", "Rock", "Funk", "Soul" ], "artista" : "Stevie Wonder", "formato" : "Álbum", "discográfica" : "Tamla", "estadodeconservación" : "Nuevo", "precio" : 13.99, "stock" : false }
{ "_id" : ObjectId("6191bd063592ce9f2ccb16f7"), "tipo" : "CD", "nombre" : "Off the Wall", "lanzamiento" : ISODate("1979-08-10T00:00:00Z"), "género" : [ "Pop", "Rhythm & Blues", "Disco" ], "artista" : "Michael Jackson", "formato" : "Álbum", "discográfica" : "Epic", "estadodeconservación" : "Nuevo", "precio" : 10.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb16f9"), "tipo" : "CD", "nombre" : "Remain in Light", "lanzamiento" : ISODate("1980-10-08T00:00:00Z"), "género" : "Punk", "artista" : "Talking Heads", "formato" : "Álbum", "discográfica" : "Sire", "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb16fc"), "tipo" : "CD", "nombre" : "Legend", "lanzamiento" : ISODate("1984-05-08T00:00:00Z"), "género" : "Reggae", "artista" : [ "Bob Marley", "The Wailers" ], "formato" : "Álbum", "discográfica" : "Island", "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb16fe"), "tipo" : "CD", "nombre" : "Bohemian Rhapsody", "lanzamiento" : ISODate("1975-10-31T00:00:00Z"), "género" : [ "Rock" ], "artista" : "Queen", "formato" : "Single", "discográfica" : [ "EMI", "Elektra Records", "Parlophone", "Hollywood Records" ], "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb16ff"), "tipo" : "CD", "nombre" : "(I Can't Get No) Satisfaction", "lanzamiento" : ISODate("1965-06-06T00:00:00Z"), "género" : "Rock and roll", "artista" : "The Rolling Stones", "formato" : "Single", "discográfica" : [ "London Records", "Decca Records" ], "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1700"), "tipo" : "CD", "nombre" : "Waterloo Sunset", "lanzamiento" : ISODate("1967-05-05T00:00:00Z"), "género" : "Rock", "artista" : "The Kinks", "formato" : "Single", "discográfica" : "RCA Records", "estadodeconservación" : "Nuevo", "precio" : 5.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1701"), "tipo" : "CD", "nombre" : "Good Vibrations", "lanzamiento" : ISODate("1966-10-10T00:00:00Z"), "género" : [ "Pop", "Rock", "Rhythm & Blues" ], "artista" : "The Beach Boys", "formato" : "Single", "discográfica" : "Capitol Records", "estadodeconservación" : "Nuevo", "precio" : 6.99, "stock" : false }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1702"), "tipo" : "CD", "nombre" : "Like a Rolling Stone", "lanzamiento" : ISODate("1965-07-20T00:00:00Z"), "género" : [ "Rock", "Folk" ], "artista" : "Bob Dylan", "formato" : "Single", "discográfica" : "Columbia Records", "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1703"), "tipo" : "CD", "nombre" : "The Times They Are a-Changin'", "lanzamiento" : ISODate("1963-10-24T00:00:00Z"), "género" : "Folk", "artista" : "Bob Dylan", "formato" : "Single", "discográfica" : "Columbia Records", "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1704"), "tipo" : "CD", "nombre" : "Hey Jude", "lanzamiento" : ISODate("1968-08-26T00:00:00Z"), "género" : [ "Pop", "Rock" ], "artista" : "The Beatles", "formato" : "Single", "discográfica" : "Apple Records", "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1705"), "tipo" : "CD", "nombre" : "No Woman, No Cry", "lanzamiento" : ISODate("1975-12-05T00:00:00Z"), "género" : "Reggae", "artista" : [ "Bob Marley", "The Wailers" ], "formato" : "Single", "discográfica" : "Island", "estadodeconservación" : "Nuevo", "precio" : 6.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1706"), "tipo" : "CD", "nombre" : "See Emily Play", "lanzamiento" : ISODate("1967-06-10T00:00:00Z"), "género" : "Rock", "artista" : "Pink Floyd", "formato" : "Single", "discográfica" : [ "Columbia Records", "EMI", "Tower Records" ], "estadodeconservación" : "Nuevo", "precio" : 12.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1707"), "tipo" : "CD", "nombre" : "Here, There and Everywhere", "lanzamiento" : ISODate("1966-06-14T00:00:00Z"), "género" : [ "Rock", "Pop" ], "artista" : "The Beatles", "formato" : "Single", "discográfica" : "Parlophone", "estadodeconservación" : "Nuevo", "precio" : 10.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1708"), "tipo" : "CD", "nombre" : "Smells Like Teen Spirit", "lanzamiento" : ISODate("1991-09-10T00:00:00Z"), "género" : [ "Grunge", "Rock" ], "artista" : "Nirvana", "formato" : "Single", "discográfica" : "DGC Records", "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : false }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1709"), "tipo" : "CD", "nombre" : "Strawberry Fields Forever", "lanzamiento" : ISODate("1967-02-13T00:00:00Z"), "género" : [ "Pop", "Rock" ], "artista" : "The Beatles", "formato" : "Single", "discográfica" : [ "Parlophone", "Capitol Records" ], "estadodeconservación" : "Nuevo", "precio" : 12.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb170a"), "tipo" : "CD", "nombre" : "Dreams", "lanzamiento" : ISODate("1977-03-24T00:00:00Z"), "género" : "Rock", "artista" : "Fleetwood Mac", "formato" : "Single", "discográfica" : "Warner Bros Records", "estadodeconservación" : "Nuevo", "precio" : 4.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb170b"), "tipo" : "CD", "nombre" : "Creep", "lanzamiento" : ISODate("1993-04-17T00:00:00Z"), "género" : "Rock", "artista" : "Radiohead", "formato" : "Single", "discográfica" : "Parlophone", "estadodeconservación" : "Bueno", "precio" : 9.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb170c"), "tipo" : "CD", "nombre" : "Imagine", "lanzamiento" : ISODate("1971-11-10T00:00:00Z"), "género" : "Rock", "artista" : "John Lennon", "formato" : "Single", "discográfica" : "Apple Records", "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb170d"), "tipo" : "CD", "nombre" : "Respect", "lanzamiento" : ISODate("1965-08-15T00:00:00Z"), "género" : "Soul", "artista" : [ "Aretha Franklin", "Otis Redding" ], "formato" : "Single", "discográfica" : [ "Stax Records", "Atco Records" ], "estadodeconservación" : "Nuevo", "precio" : 7.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb170e"), "tipo" : "CD", "nombre" : "Jhonny B. Goode", "lanzamiento" : ISODate("1958-03-12T00:00:00Z"), "género" : "Rock and roll", "artista" : "Chuck Berry", "formato" : "Single", "discográfica" : "Chess Records", "estadodeconservación" : "Nuevo", "precio" : 5.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb170f"), "tipo" : "CD", "nombre" : "What'd I Say", "lanzamiento" : ISODate("1959-07-13T00:00:00Z"), "género" : [ "Soul", "Rhythm & Blues" ], "artista" : "Ray Charles", "formato" : "Single", "discográfica" : "Atlantic Records", "estadodeconservación" : "Nuevo", "precio" : 4.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1710"), "tipo" : "CD", "nombre" : "Yesterday", "lanzamiento" : ISODate("1965-08-06T00:00:00Z"), "género" : "Bolero", "artista" : "The Beatles", "formato" : "Single", "discográfica" : "Parlophone", "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : false }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1711"), "tipo" : "CD", "nombre" : "Blowin’ in the Wind", "lanzamiento" : ISODate("1963-08-13T00:00:00Z"), "género" : "Folk", "artista" : "Bob Dylan", "formato" : "Single", "discográfica" : "Columbia Records", "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1712"), "tipo" : "CD", "nombre" : "I want to hold your hand", "lanzamiento" : ISODate("1963-11-29T00:00:00Z"), "género" : [ "Pop", "Rock" ], "artista" : "The Beatles", "formato" : "Single", "discográfica" : "Parlophone", "estadodeconservación" : "Nuevo", "precio" : 12.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1713"), "tipo" : "CD", "nombre" : "Maybellene", "lanzamiento" : ISODate("1955-08-15T00:00:00Z"), "género" : "Rock and roll", "artista" : "Chuck Berry", "formato" : "Single", "discográfica" : "Chess Records", "estadodeconservación" : "Nuevo", "precio" : 4.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1714"), "tipo" : "CD", "nombre" : "Let It Be", "lanzamiento" : ISODate("1970-03-06T00:00:00Z"), "género" : [ "Pop", "Rock", "Gospel" ], "artista" : "The Beatles", "formato" : "Single", "discográfica" : "Apple Records", "estadodeconservación" : "Nuevo", "precio" : 12.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1716"), "tipo" : "CD", "nombre" : "Hormoaning", "lanzamiento" : ISODate("1992-02-05T00:00:00Z"), "género" : [ "Grunge", "Rock" ], "artista" : "Nirvana", "formato" : "EP", "discográfica" : "Geffen Records", "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1717"), "tipo" : "CD", "nombre" : "Blew", "lanzamiento" : ISODate("1989-10-08T00:00:00Z"), "género" : "Grunge", "artista" : "Nirvana", "formato" : "EP", "discográfica" : "Tupelo", "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1718"), "tipo" : "CD", "nombre" : "Teenage Kicks", "lanzamiento" : ISODate("1978-08-12T00:00:00Z"), "género" : [ "Pop", "Rock" ], "artista" : "The Undertones", "formato" : "EP", "discográfica" : "Good Vibrations", "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1719"), "tipo" : "CD", "nombre" : "Airbag / How Am I Driving?", "lanzamiento" : ISODate("1998-04-21T00:00:00Z"), "género" : "Rock", "artista" : "Radiohead", "formato" : "EP", "discográfica" : "Capitol Records", "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb171a"), "tipo" : "CD", "nombre" : "Itch", "lanzamiento" : ISODate("1994-06-01T00:00:00Z"), "género" : "Rock", "artista" : "Radiohead", "formato" : "EP", "discográfica" : "EMI", "estadodeconservación" : "Nuevo", "precio" : 12.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb171b"), "tipo" : "CD", "nombre" : "My Iron Lung", "lanzamiento" : ISODate("1994-10-24T00:00:00Z"), "género" : "Rock", "artista" : "Radiohead", "formato" : "EP", "discográfica" : [ "Parlophone", "Capitol Records" ], "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : false }
{ "_id" : ObjectId("6191bd063592ce9f2ccb171c"), "tipo" : "CD", "nombre" : "Souvenir of Their Visit to America", "lanzamiento" : ISODate("1964-03-23T00:00:00Z"), "género" : "Rock and roll", "artista" : "The Beatles", "formato" : "EP", "discográfica" : "Vee-Jay", "estadodeconservación" : "Nuevo", "precio" : 10.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb171d"), "tipo" : "CD", "nombre" : "Long Tall Sally", "lanzamiento" : ISODate("1964-06-19T00:00:00Z"), "género" : "Rock and roll", "artista" : "The Beatles", "formato" : "EP", "discográfica" : "Parlophone", "estadodeconservación" : "Nuevo", "precio" : 10.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb171e"), "tipo" : "CD", "nombre" : "Wouldn's It Be Nice", "lanzamiento" : ISODate("1966-05-16T00:00:00Z"), "género" : "Pop", "artista" : "The Beach Boys", "formato" : "EP", "discográfica" : "Capitol Records", "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb171f"), "tipo" : "CD", "nombre" : "The Blue Room EP", "lanzamiento" : ISODate("1999-08-05T00:00:00Z"), "género" : "Rock", "artista" : "Coldplay", "formato" : "EP", "discográfica" : "Parlophone", "estadodeconservación" : "Nuevo", "precio" : 12.99, "stock" : true }
*/

// Disco que se llamaba Exile On...

db.discos.find(
        {nombre: {$regex: /^Exile On.*/, $options: 'i'}
    }
).pretty()

/*
{
        "_id" : ObjectId("6191bd063592ce9f2ccb16ee"),
        "tipo" : "CD",
        "nombre" : "Exile on Main Street",
        "lanzamiento" : ISODate("1972-05-12T00:00:00Z"),
        "género" : "Rock",
        "artista" : "The Rolling Stones",
        "formato" : "Álbum",
        "discográfica" : [
                "Rolling Stones Records",
                "Virgin Records"
        ],
        "estadodeconservación" : "Nuevo",
        "precio" : 20.99,
        "stock" : false
}
*/



//Todos los EP en CD que valgan 9.99. 

db.discos.find( {precio: {$eq: 9.99} } ).pretty()



// Todos los discos en CD que no sean de Pop o de Rock. 

db.discos.find(
    {$and:[
        {tipo: "CD"},
        {género: {$nin: ["Pop", "Rock", "Pop rock"] } }
    ]}

).pretty()

/*
{ "_id" : ObjectId("6191bd063592ce9f2ccb16e5"), "tipo" : "CD", "nombre" : "Blue", "lanzamiento" : ISODate("1971-06-21T00:00:00Z"), "género" : [ "Folk", "Folk rock" ], "artista" : "Joni Mitchell", "formato" : "Álbum", "discográfica" : "Reprise Records", "estadodeconservación" : "Nuevo", "precio" : 19.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb16ed"), "tipo" : "CD", "nombre" : "I Never Loved a Man the Way I Love You", "lanzamiento" : ISODate("1967-03-10T00:00:00Z"), "género" : "Soul", "artista" : "Aretha Franklin", "formato" : "Álbum", "discográfica" : "Atlantic Records", "estadodeconservación" : "Nuevo", "precio" : 15.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb16f2"), "tipo" : "CD", "nombre" : "Kind of Blue", "lanzamiento" : ISODate("1959-08-17T00:00:00Z"), "género" : "Jazz", "artista" : "Miles Davis", "formato" : "Álbum", "discográfica" : "Columbia Records", "estadodeconservación" : "Nuevo", "precio" : 19.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb16f3"), "tipo" : "CD", "nombre" : "Back to Black", "lanzamiento" : ISODate("2006-10-30T00:00:00Z"), "género" : [ "Soul", "Rhythm & Blues" ], "artista" : "Amy Winehouse", "formato" : "Álbum", "discográfica" : "Island", "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb16f9"), "tipo" : "CD", "nombre" : "Remain in Light", "lanzamiento" : ISODate("1980-10-08T00:00:00Z"), "género" : "Punk", "artista" : "Talking Heads", "formato" : "Álbum", "discográfica" : "Sire", "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb16fc"), "tipo" : "CD", "nombre" : "Legend", "lanzamiento" : ISODate("1984-05-08T00:00:00Z"), "género" : "Reggae", "artista" : [ "Bob Marley", "The Wailers" ], "formato" : "Álbum", "discográfica" : "Island", "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb16ff"), "tipo" : "CD", "nombre" : "(I Can't Get No) Satisfaction", "lanzamiento" : ISODate("1965-06-06T00:00:00Z"), "género" : "Rock and roll", "artista" : "The Rolling Stones", "formato" : "Single", "discográfica" : [ "London Records", "Decca Records" ], "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1703"), "tipo" : "CD", "nombre" : "The Times They Are a-Changin'", "lanzamiento" : ISODate("1963-10-24T00:00:00Z"), "género" : "Folk", "artista" : "Bob Dylan", "formato" : "Single", "discográfica" : "Columbia Records", "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1705"), "tipo" : "CD", "nombre" : "No Woman, No Cry", "lanzamiento" : ISODate("1975-12-05T00:00:00Z"), "género" : "Reggae", "artista" : [ "Bob Marley", "The Wailers" ], "formato" : "Single", "discográfica" : "Island", "estadodeconservación" : "Nuevo", "precio" : 6.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb170d"), "tipo" : "CD", "nombre" : "Respect", "lanzamiento" : ISODate("1965-08-15T00:00:00Z"), "género" : "Soul", "artista" : [ "Aretha Franklin", "Otis Redding" ], "formato" : "Single", "discográfica" : [ "Stax Records", "Atco Records" ], "estadodeconservación" : "Nuevo", "precio" : 7.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb170e"), "tipo" : "CD", "nombre" : "Jhonny B. Goode", "lanzamiento" : ISODate("1958-03-12T00:00:00Z"), "género" : "Rock and roll", "artista" : "Chuck Berry", "formato" : "Single", "discográfica" : "Chess Records", "estadodeconservación" : "Nuevo", "precio" : 5.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb170f"), "tipo" : "CD", "nombre" : "What'd I Say", "lanzamiento" : ISODate("1959-07-13T00:00:00Z"), "género" : [ "Soul", "Rhythm & Blues" ], "artista" : "Ray Charles", "formato" : "Single", "discográfica" : "Atlantic Records", "estadodeconservación" : "Nuevo", "precio" : 4.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1710"), "tipo" : "CD", "nombre" : "Yesterday", "lanzamiento" : ISODate("1965-08-06T00:00:00Z"), "género" : "Bolero", "artista" : "The Beatles", "formato" : "Single", "discográfica" : "Parlophone", "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : false }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1711"), "tipo" : "CD", "nombre" : "Blowin’ in the Wind", "lanzamiento" : ISODate("1963-08-13T00:00:00Z"), "género" : "Folk", "artista" : "Bob Dylan", "formato" : "Single", "discográfica" : "Columbia Records", "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1713"), "tipo" : "CD", "nombre" : "Maybellene", "lanzamiento" : ISODate("1955-08-15T00:00:00Z"), "género" : "Rock and roll", "artista" : "Chuck Berry", "formato" : "Single", "discográfica" : "Chess Records", "estadodeconservación" : "Nuevo", "precio" : 4.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1717"), "tipo" : "CD", "nombre" : "Blew", "lanzamiento" : ISODate("1989-10-08T00:00:00Z"), "género" : "Grunge", "artista" : "Nirvana", "formato" : "EP", "discográfica" : "Tupelo", "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb171c"), "tipo" : "CD", "nombre" : "Souvenir of Their Visit to America", "lanzamiento" : ISODate("1964-03-23T00:00:00Z"), "género" : "Rock and roll", "artista" : "The Beatles", "formato" : "EP", "discográfica" : "Vee-Jay", "estadodeconservación" : "Nuevo", "precio" : 10.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb171d"), "tipo" : "CD", "nombre" : "Long Tall Sally", "lanzamiento" : ISODate("1964-06-19T00:00:00Z"), "género" : "Rock and roll", "artista" : "The Beatles", "formato" : "EP", "discográfica" : "Parlophone", "estadodeconservación" : "Nuevo", "precio" : 10.99, "stock" : true }
*/



// Todos los discos que sean de Pop y Rock. 

db.discos.find(
    {género: {$all: ["Rock", "Pop"] } }

).pretty()



//Todos los discos en CD que sean de Pop o de Rock. 

db.discos.find(
    {$and: [
        {tipo: "CD"},
        {género: {$in: ["Pop", "Rock"] } }
    ]}
    
).pretty()



// Discos que no sean singles y que cuesten más de 16 euros. 

db.discos.find(
    {$and: [
        {formato: {$ne: "Single"} },
        {precio: {$gt: 16} } 
    ]}
    
).pretty()



// Vinilos que su estado de conversación (si existe) sea bueno. 

db.discos.find(
    {$and: [
        {tipo: {$eq: "Vinilo"} },
        {estadodeconservación: {$exists: true, $eq: "Bueno"} }
    ]}
        
).pretty()

/*
{ "_id" : ObjectId("6191bd063592ce9f2ccb16e3"), "tipo" : "Vinilo", "nombre" : "Abbey Road", "lanzamiento" : ISODate("1970-01-01T00:00:00Z"), "género" : [ "Pop", "Rock and roll" ], "artista" : "The Beatles", "formato" : "Álbum", "discográfica" : "Apple Records", "estadodeconservación" : "Bueno", "precio" : 39.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1722"), "tipo" : "Vinilo", "nombre" : "Creep", "lanzamiento" : ISODate("1993-03-14T00:00:00Z"), "género" : "Rock", "artista" : "Radiohead", "formato" : "Single", "discográfica" : "Parlophone", "estadodeconservación" : "Bueno", "precio" : 30.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1726"), "tipo" : "Vinilo", "nombre" : "Stairway to Heaven", "lanzamiento" : ISODate("1970-12-03T00:00:00Z"), "género" : "Rock", "artista" : "Led Zeppelin", "formato" : "Single", "discográfica" : "Atlantic Records", "estadodeconservación" : "Bueno", "precio" : 30.99, "stock" : false }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1727"), "tipo" : "Vinilo", "nombre" : "Thriller", "lanzamiento" : ISODate("1982-11-30T00:00:00Z"), "género" : [ "Pop", "Rock" ], "artista" : "Michael Jackson", "formato" : "Álbum", "discográfica" : "Epic Records", "estadodeconservación" : "Bueno", "precio" : 30.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1729"), "tipo" : "Vinilo", "nombre" : "A Day at the Races", "lanzamiento" : ISODate("1976-12-10T00:00:00Z"), "género" : [ "Rock", "Pop" ], "artista" : "Queen", "formato" : "Álbum", "discográfica" : [ "EMI", "Elektra Records" ], "estadodeconservación" : "Bueno", "precio" : 35.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb172c"), "tipo" : "Vinilo", "nombre" : "Itch", "lanzamiento" : ISODate("1994-06-01T00:00:00Z"), "género" : "Rock", "artista" : "Radiohead", "formato" : "EP", "discográfica" : "EMI", "estadodeconservación" : "Bueno", "precio" : 25.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb172d"), "tipo" : "Vinilo", "nombre" : "Love You Live", "lanzamiento" : ISODate("1977-09-23T00:00:00Z"), "género" : "Rock", "artista" : "The Rolling Stones", "formato" : "Álbum", "discográfica" : [ "Rolling Stones Records", "Atlantic Records" ], "estadodeconservación" : "Bueno", "precio" : 30.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1732"), "tipo" : "Vinilo", "nombre" : "I Never Loved a Man the Way I Love You", "lanzamiento" : ISODate("1967-03-10T00:00:00Z"), "género" : "Soul", "artista" : "Aretha Franklin", "formato" : "Álbum", "discográfica" : "Atlantic Records", "estadodeconservación" : "Bueno", "precio" : 25.99, "stock" : true }
*/



// Discos que sean singles y que no pertenezcan a las siguientes discográficas.

db.discos.find(
    {$and: [
        {formato: {$ne: "Single"} },
        {discográfica: {$elemMatch: {$ne: "Columbia Records", $ne: "EMI" }} } 
    ]}
    
).pretty()

/*
{ "_id" : ObjectId("6191bd063592ce9f2ccb16ea"), "tipo" : "CD", "nombre" : "Revolver", "lanzamiento" : ISODate("1966-08-05T00:00:00Z"), "género" : [ "Pop", "Rock" ], "artista" : "The Beatles", "formato" : "Álbum", "discográfica" : [ "Parlophone", "Capitol Records" ], "estadodeconservación" : "Nuevo", "precio" : 24.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb16ec"), "tipo" : "CD", "nombre" : "Let It Bleed", "lanzamiento" : ISODate("1969-05-12T00:00:00Z"), "género" : "Rock", "artista" : "The Rolling Stones", "formato" : "Álbum", "discográfica" : [ "Decca Records", "London Records" ], "estadodeconservación" : "Nuevo", "precio" : 19.99, "stock" : false }
{ "_id" : ObjectId("6191bd063592ce9f2ccb16ee"), "tipo" : "CD", "nombre" : "Exile on Main Street", "lanzamiento" : ISODate("1972-05-12T00:00:00Z"), "género" : "Rock", "artista" : "The Rolling Stones", "formato" : "Álbum", "discográfica" : [ "Rolling Stones Records", "Virgin Records" ], "estadodeconservación" : "Nuevo", "precio" : 20.99, "stock" : false }
{ "_id" : ObjectId("6191bd063592ce9f2ccb16ef"), "tipo" : "CD", "nombre" : "Kid A", "lanzamiento" : ISODate("2000-10-02T00:00:00Z"), "género" : [ "Electrónica", "Rock" ], "artista" : "Radiohead", "formato" : "Álbum", "discográfica" : [ "EMI", "Parlophone", "Capitol Records" ], "estadodeconservación" : "Nuevo", "precio" : 14.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb16f4"), "tipo" : "CD", "nombre" : "Lemonade", "lanzamiento" : ISODate("2006-04-23T00:00:00Z"), "género" : [ "Rhythm & Blues", "Pop", "Hip hop", "Rock", "Soul", "Funk", "Country" ], "artista" : "Beyoncé", "formato" : "Álbum", "discográfica" : [ "Parkwood Entertainment", "Columbia Records" ], "estadodeconservación" : "Nuevo", "precio" : 19.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb16fa"), "tipo" : "CD", "nombre" : "OK Computer", "lanzamiento" : ISODate("1997-05-21T00:00:00Z"), "género" : "Rock", "artista" : "Radiohead", "formato" : "Álbum", "discográfica" : [ "Parlophone", "Capitol Records" ], "estadodeconservación" : "Nuevo", "precio" : 19.99, "stock" : false }
{ "_id" : ObjectId("6191bd063592ce9f2ccb16fd"), "tipo" : "CD", "nombre" : "Let It Be", "lanzamiento" : ISODate("1970-08-05T00:00:00Z"), "género" : [ "Pop", "Rock" ], "artista" : "The Beatles", "formato" : "Álbum", "discográfica" : [ "Apple Records" ], "estadodeconservación" : "Nuevo", "precio" : 19.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1715"), "tipo" : "CD", "nombre" : "Magical Mystery Tour", "lanzamiento" : ISODate("1967-11-27T00:00:00Z"), "género" : [ "Psicodelia", "Pop" ], "artista" : "The Beatles", "formato" : "EP", "discográfica" : [ "Capitol Records", "Parlophone" ], "estadodeconservación" : "Nuevo", "precio" : 15.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb171b"), "tipo" : "CD", "nombre" : "My Iron Lung", "lanzamiento" : ISODate("1994-10-24T00:00:00Z"), "género" : "Rock", "artista" : "Radiohead", "formato" : "EP", "discográfica" : [ "Parlophone", "Capitol Records" ], "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : false }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1721"), "tipo" : "Vinilo", "nombre" : "Wish You Were Here", "lanzamiento" : ISODate("1975-09-12T00:00:00Z"), "género" : "Rock", "artista" : "Pink Floyd", "formato" : "Álbum", "discográfica" : [ "Harvest", "EMI" ], "estadodeconservación" : "Regular", "precio" : 25.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1728"), "tipo" : "Vinilo", "nombre" : "Waterloo", "lanzamiento" : ISODate("1976-06-16T00:00:00Z"), "género" : "Pop", "artista" : "ABBA", "formato" : "Álbum", "discográfica" : [ "Universal Music", "Polar Music", "PolyGram" ], "estadodeconservación" : "Regular", "precio" : 23.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1729"), "tipo" : "Vinilo", "nombre" : "A Day at the Races", "lanzamiento" : ISODate("1976-12-10T00:00:00Z"), "género" : [ "Rock", "Pop" ], "artista" : "Queen", "formato" : "Álbum", "discográfica" : [ "EMI", "Elektra Records" ], "estadodeconservación" : "Bueno", "precio" : 35.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb172d"), "tipo" : "Vinilo", "nombre" : "Love You Live", "lanzamiento" : ISODate("1977-09-23T00:00:00Z"), "género" : "Rock", "artista" : "The Rolling Stones", "formato" : "Álbum", "discográfica" : [ "Rolling Stones Records", "Atlantic Records" ], "estadodeconservación" : "Bueno", "precio" : 30.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb172f"), "tipo" : "Vinilo", "nombre" : "Magical Mystery Tour", "lanzamiento" : ISODate("1967-11-27T00:00:00Z"), "género" : [ "Psicodelia", "Pop" ], "artista" : "The Beatles", "formato" : "EP", "discográfica" : [ "Capitol Records", "Parlophone" ], "estadodeconservación" : "Malo", "precio" : 25.99, "stock" : true }
*/



// Todos los singles en CD que valgan menos de 15 euros y que hayan salido entre los 70 y los 80. 

db.discos.find(
    { $and: [
        {tipo: "CD"},
        {formato: "Single"},
        {precio: {$lt: 15.00} },
        {lanzamiento: 
            {$gte: new Date ("1970-01-01"), $lte: new Date ("1980-01-01")}}
    ]}
).pretty()

/*
{ "_id" : ObjectId("6191bd063592ce9f2ccb16fe"), "tipo" : "CD", "nombre" : "Bohemian Rhapsody", "lanzamiento" : ISODate("1975-10-31T00:00:00Z"), "género" : [ "Rock" ], "artista" : "Queen", "formato" : "Single", "discográfica" : [ "EMI", "Elektra Records", "Parlophone", "Hollywood Records" ], "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1705"), "tipo" : "CD", "nombre" : "No Woman, No Cry", "lanzamiento" : ISODate("1975-12-05T00:00:00Z"), "género" : "Reggae", "artista" : [ "Bob Marley", "The Wailers" ], "formato" : "Single", "discográfica" : "Island", "estadodeconservación" : "Nuevo", "precio" : 6.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb170a"), "tipo" : "CD", "nombre" : "Dreams", "lanzamiento" : ISODate("1977-03-24T00:00:00Z"), "género" : "Rock", "artista" : "Fleetwood Mac", "formato" : "Single", "discográfica" : "Warner Bros Records", "estadodeconservación" : "Nuevo", "precio" : 4.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb170c"), "tipo" : "CD", "nombre" : "Imagine", "lanzamiento" : ISODate("1971-11-10T00:00:00Z"), "género" : "Rock", "artista" : "John Lennon", "formato" : "Single", "discográfica" : "Apple Records", "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1714"), "tipo" : "CD", "nombre" : "Let It Be", "lanzamiento" : ISODate("1970-03-06T00:00:00Z"), "género" : [ "Pop", "Rock", "Gospel" ], "artista" : "The Beatles", "formato" : "Single", "discográfica" : "Apple Records", "estadodeconservación" : "Nuevo", "precio" : 12.99, "stock" : true }
*/



// Todos los albumes en CD o en Vinilo que no sean de Pop o Rock, que cuesten menos de 20 euros y que hayan salido entre los 70 y los 80. 

db.discos.find(
       
    { $and: [
        {tipo: {$in: ["CD", "Vinilo"] } },
        {formato: "Álbum"},
        {lanzamiento: 
            {$gte: new Date ("1970-01-01"), $lte: new Date ("1980-01-01")}},
        {precio: {$lt: 20.00} },
        {género: {$nin: ["Pop", "Rock", "Pop rock"] } }
    ]}

).pretty()

/*
{ "_id" : ObjectId("6191bd063592ce9f2ccb16e5"), "tipo" : "CD", "nombre" : "Blue", "lanzamiento" : ISODate("1971-06-21T00:00:00Z"), "género" : [ "Folk", "Folk rock" ], "artista" : "Joni Mitchell", "formato" : "Álbum", "discográfica" : "Reprise Records", "estadodeconservación" : "Nuevo", "precio" : 19.99, "stock" : true }
*/

// Discos en CD de un grupo que empezaba por la letra R.

db.discos.find(
    {$and: [
        {tipo: {$eq: "CD"} },
        {artista: {$regex: /^R.*/, $options: 'i'} }
    ]}
).pretty()

/*
{ "_id" : ObjectId("6191bd063592ce9f2ccb16ef"), "tipo" : "CD", "nombre" : "Kid A", "lanzamiento" : ISODate("2000-10-02T00:00:00Z"), "género" : [ "Electrónica", "Rock" ], "artista" : "Radiohead", "formato" : "Álbum", "discográfica" : [ "EMI", "Parlophone", "Capitol Records" ], "estadodeconservación" : "Nuevo", "precio" : 14.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb16fa"), "tipo" : "CD", "nombre" : "OK Computer", "lanzamiento" : ISODate("1997-05-21T00:00:00Z"), "género" : "Rock", "artista" : "Radiohead", "formato" : "Álbum", "discográfica" : [ "Parlophone", "Capitol Records" ], "estadodeconservación" : "Nuevo", "precio" : 19.99, "stock" : false }
{ "_id" : ObjectId("6191bd063592ce9f2ccb170b"), "tipo" : "CD", "nombre" : "Creep", "lanzamiento" : ISODate("1993-04-17T00:00:00Z"), "género" : "Rock", "artista" : "Radiohead", "formato" : "Single", "discográfica" : "Parlophone", "estadodeconservación" : "Bueno", "precio" : 9.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb170f"), "tipo" : "CD", "nombre" : "What'd I Say", "lanzamiento" : ISODate("1959-07-13T00:00:00Z"), "género" : [ "Soul", "Rhythm & Blues" ], "artista" : "Ray Charles", "formato" : "Single", "discográfica" : "Atlantic Records", "estadodeconservación" : "Nuevo", "precio" : 4.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb1719"), "tipo" : "CD", "nombre" : "Airbag / How Am I Driving?", "lanzamiento" : ISODate("1998-04-21T00:00:00Z"), "género" : "Rock", "artista" : "Radiohead", "formato" : "EP", "discográfica" : "Capitol Records", "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb171a"), "tipo" : "CD", "nombre" : "Itch", "lanzamiento" : ISODate("1994-06-01T00:00:00Z"), "género" : "Rock", "artista" : "Radiohead", "formato" : "EP", "discográfica" : "EMI", "estadodeconservación" : "Nuevo", "precio" : 12.99, "stock" : true }
{ "_id" : ObjectId("6191bd063592ce9f2ccb171b"), "tipo" : "CD", "nombre" : "My Iron Lung", "lanzamiento" : ISODate("1994-10-24T00:00:00Z"), "género" : "Rock", "artista" : "Radiohead", "formato" : "EP", "discográfica" : [ "Parlophone", "Capitol Records" ], "estadodeconservación" : "Nuevo", "precio" : 9.99, "stock" : false }
*/










/*
            CONSULTAS COLECCIÓN MERCHANDISE

                                                        */


// Camisetas que se venden en la tienda. !!

db.merchandise.find(
    {tipoproducto: "Camiseta"}

).pretty()

/*
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16c1"), "tipoproducto" : "Camiseta", "nombre" : "Camiseta AC/DC", "color" : [ "Negro" ], "artista" : "AC/DC", "tamaño" : "Grande", "rebaja" : false, "stock" : 2, "precio" : 10.99 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16c2"), "tipoproducto" : "Camiseta", "nombre" : "Camiseta The Rolling Stones Classic Tongue", "color" : [ "Blanco", "Rojo" ], "artista" : "The Rolling Stones", "rebaja" : false, "tamaño" : "Grande", "stock" : 5, "precio" : 15.05 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16c3"), "tipoproducto" : "Camiseta", "nombre" : "Camiseta Guns N' Roses Design: Appetite for Destruction", "color" : [ "Negro" ], "artista" : "Guns N' Roses", "tamaño" : "Grande", "rebaja" : true, "stock" : 5, "precio" : 17.05 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16c4"), "tipoproducto" : "Camiseta", "nombre" : "Camiseta Guns N' Roses Design: Aero Force ", "color" : [ "Negro" ], "artista" : "Guns N' Roses", "tamaño" : "Grande", "rebaja" : true, "stock" : 2, "precio" : 21 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16c5"), "tipoproducto" : "Camiseta", "nombre" : "Camiseta Linkin Park", "artista" : "Linkin Park", "color" : [ "Amarillo" ], "tamaño" : "Grande", "rebaja" : false, "stock" : 2, "precio" : 22 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16c6"), "tipoproducto" : "Camiseta", "nombre" : "Camiseta Green Day Design: Longview Doodle", "color" : [ "Blanco" ], "artista" : "Green Day", "tamaño" : "Grande", "rebaja" : false, "stock" : 5, "precio" : 25 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16c7"), "tipoproducto" : "Camiseta", "nombre" : "Camiseta Bob Marley Face", "artista" : "Bob Marley", "color" : [ "Negro" ], "tamaño" : "Grande", "rebaja" : true, "stock" : 2, "precio" : 15.05 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16c8"), "tipoproducto" : "Camiseta", "nombre" : "Camiseta Nirvana Design: Vestibule", "artista" : "Nirvana", "color" : [ "Negro" ], "tamaño" : "Grande", "rebaja" : false, "stock" : 2, "precio" : 21 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16c9"), "tipoproducto" : "Camiseta", "nombre" : "Camiseta The Beatles Abbey Road", "artista" : "The Beatles", "color" : [ "Negro" ], "tamaño" : "Grande", "rebaja" : false, "stock" : 5, "precio" : 25 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16ca"), "tipoproducto" : "Camiseta", "nombre" : "Camiseta The Beatles Abbey Road", "artista" : "The Beatles", "color" : [ "Azúl" ], "tamaño" : "Grande", "rebaja" : false, "stock" : 5, "precio" : 27 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16cb"), "tipoproducto" : "Camiseta", "nombre" : "Camiseta Beatles Hamburg 1962 Poster", "artista" : "The Beatles", "color" : "Negro", "tamaño" : "Grande", "rebaja" : false, "stock" : 2, "precio" : 20 }
{ "_id" : ObjectId("6191bcfb3592ce9f2ccb16e2"), "tipoproducto" : "Camiseta", "nombre" : "Camiseta Logo The Beatles", "color" : [ "Blanco" ], "artista" : "The Beatles", "tamaño" : "Grande", "rebaja" : false, "stock" : 15, "precio" : 20 }
*/



// Productos que sean pequeñitos o medianos para un regalo. !!

db.merchandise.find(
    {$and: [
        {tamaño: {$in: ["Pequeño", "Mediano"] } }
    ]}

).pretty()

/*
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16d3"), "tipoproducto" : "Chapa", "nombre" : "Chapita Guns N' Roses Design: Lyrics & Logos", "artista" : "Guns N' Roses", "color" : [ "Negro" ], "tamaño" : "Pequeño", "rebaja" : false, "stock" : 50, "precio" : 5 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16d4"), "tipoproducto" : "Chapa", "nombre" : "Chapita John Lennon 440459", "artista" : "John Lennon", "color" : [ "Blanco" ], "tamaño" : "Pequeño", "rebaja" : false, "stock" : 50, "precio" : 5 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16d5"), "tipoproducto" : "Chapa", "nombre" : "Set Chapitas The Rolling Stones", "artista" : "The Rolling Stones", "color" : [ "Multicolor" ], "tamaño" : "Pequeño", "rebaja" : false, "stock" : 30, "precio" : 10 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16d6"), "tipoproducto" : "Chapa", "nombre" : "Set Chapitas The Beatles", "artista" : "The Beatles", "color" : [ "Multicolor" ], "tamaño" : "Pequeño", "rebaja" : false, "stock" : 30, "precio" : 10 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16d7"), "tipoproducto" : "Llavero", "nombre" : "Llavero Pink Floyd The Dark Side of The Side", "artista" : "Pink Floyd", "color" : [ "Negro" ], "tamaño" : "Pequeño", "rebaja" : false, "stock" : 20, "precio" : 10 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16d8"), "tipoproducto" : "Llavero", "nombre" : "Llavero AD/DC Devil Angus", "artista" : "AD/DC", "color" : [ "Negro" ], "tamaño" : "Pequeño", "rebaja" : true, "stock" : 15, "precio" : 5 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16d9"), "tipoproducto" : "Llavero", "nombre" : "Llavero John Lennon 345976", "artista" : "John Lennon", "color" : [ "Verde" ], "tamaño" : "Pequeño", "rebaja" : false, "stock" : 20, "precio" : 8 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16da"), "tipoproducto" : "Llavero", "nombre" : "Llavero The Rolling Stones Design UK & US", "artista" : "The Rolling Stones", "color" : [ "Blanco" ], "tamaño" : "Pequeño", "rebaja" : false, "stock" : 20, "precio" : 8 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16db"), "tipoproducto" : "Llavero", "nombre" : "Llavero The Beatles Design Apple Logo", "artista" : "The Beatles", "color" : [ "Negro" ], "tamaño" : "Pequeño", "rebaja" : false, "stock" : 15, "precio" : 7 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16dc"), "tipoproducto" : "Llavero", "nombre" : "Llavero Nirvana Design Smiley Logo", "artista" : "Nirvana", "color" : [ "Negro" ], "tamaño" : "Pequeño", "rebaja" : false, "stock" : 15, "precio" : 12 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16dd"), "tipoproducto" : "Taza", "nombre" : "Taza Pink Floyd", "artista" : "Pink Floyd", "color" : [ "Negro" ], "tamaño" : "Mediano", "rebaja" : true, "stock" : 5, "precio" : 15 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16de"), "tipoproducto" : "Taza", "nombre" : "Taza John Lennon War Is Over", "artista" : "John Lennon", "color" : [ "Blanco" ], "tamaño" : "Mediano", "rebaja" : false, "stock" : 20, "precio" : 12 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16df"), "tipoproducto" : "Taza", "nombre" : "Taza The Beatles LIVERPOOL", "artista" : "The Beatles", "color" : [ "Blanco" ], "tamaño" : "Mediano", "rebaja" : false, "stock" : 15, "precio" : 10 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16e0"), "tipoproducto" : "Taza", "nombre" : "Taza Led Zeppelin 141007", "artista" : "Led Zeppelin", "color" : [ "Negro" ], "tamaño" : "Mediano", "rebaja" : false, "stock" : 10, "precio" : 9 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16e1"), "tipoproducto" : "Taza", "nombre" : "Taza The Black Eyed Peas", "artista" : "The Black Eyed Peas", "color" : [ "Blanco" ], "tamaño" : "Mediano", "rebaja" : false, "stock" : 10, "precio" : 7 }
*/



// Productos que no valgan más de 15 euros. !!

db.merchandise.find(
    {precio: {$not: {$gte: 15} } }

).pretty()

/*
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16c1"), "tipoproducto" : "Camiseta", "nombre" : "Camiseta AC/DC", "color" : [ "Negro" ], "artista" : "AC/DC", "tamaño" : "Grande", "rebaja" : false, "stock" : 2, "precio" : 10.99 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16d3"), "tipoproducto" : "Chapa", "nombre" : "Chapita Guns N' Roses Design: Lyrics & Logos", "artista" : "Guns N' Roses", "color" : [ "Negro" ], "tamaño" : "Pequeño", "rebaja" : false, "stock" : 50, "precio" : 5 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16d4"), "tipoproducto" : "Chapa", "nombre" : "Chapita John Lennon 440459", "artista" : "John Lennon", "color" : [ "Blanco" ], "tamaño" : "Pequeño", "rebaja" : false, "stock" : 50, "precio" : 5 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16d5"), "tipoproducto" : "Chapa", "nombre" : "Set Chapitas The Rolling Stones", "artista" : "The Rolling Stones", "color" : [ "Multicolor" ], "tamaño" : "Pequeño", "rebaja" : false, "stock" : 30, "precio" : 10 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16d6"), "tipoproducto" : "Chapa", "nombre" : "Set Chapitas The Beatles", "artista" : "The Beatles", "color" : [ "Multicolor" ], "tamaño" : "Pequeño", "rebaja" : false, "stock" : 30, "precio" : 10 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16d7"), "tipoproducto" : "Llavero", "nombre" : "Llavero Pink Floyd The Dark Side of The Side", "artista" : "Pink Floyd", "color" : [ "Negro" ], "tamaño" : "Pequeño", "rebaja" : false, "stock" : 20, "precio" : 10 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16d8"), "tipoproducto" : "Llavero", "nombre" : "Llavero AD/DC Devil Angus", "artista" : "AD/DC", "color" : [ "Negro" ], "tamaño" : "Pequeño", "rebaja" : true, "stock" : 15, "precio" : 5 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16d9"), "tipoproducto" : "Llavero", "nombre" : "Llavero John Lennon 345976", "artista" : "John Lennon", "color" : [ "Verde" ], "tamaño" : "Pequeño", "rebaja" : false, "stock" : 20, "precio" : 8 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16da"), "tipoproducto" : "Llavero", "nombre" : "Llavero The Rolling Stones Design UK & US", "artista" : "The Rolling Stones", "color" : [ "Blanco" ], "tamaño" : "Pequeño", "rebaja" : false, "stock" : 20, "precio" : 8 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16db"), "tipoproducto" : "Llavero", "nombre" : "Llavero The Beatles Design Apple Logo", "artista" : "The Beatles", "color" : [ "Negro" ], "tamaño" : "Pequeño", "rebaja" : false, "stock" : 15, "precio" : 7 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16dc"), "tipoproducto" : "Llavero", "nombre" : "Llavero Nirvana Design Smiley Logo", "artista" : "Nirvana", "color" : [ "Negro" ], "tamaño" : "Pequeño", "rebaja" : false, "stock" : 15, "precio" : 12 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16de"), "tipoproducto" : "Taza", "nombre" : "Taza John Lennon War Is Over", "artista" : "John Lennon", "color" : [ "Blanco" ], "tamaño" : "Mediano", "rebaja" : false, "stock" : 20, "precio" : 12 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16df"), "tipoproducto" : "Taza", "nombre" : "Taza The Beatles LIVERPOOL", "artista" : "The Beatles", "color" : [ "Blanco" ], "tamaño" : "Mediano", "rebaja" : false, "stock" : 15, "precio" : 10 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16e0"), "tipoproducto" : "Taza", "nombre" : "Taza Led Zeppelin 141007", "artista" : "Led Zeppelin", "color" : [ "Negro" ], "tamaño" : "Mediano", "rebaja" : false, "stock" : 10, "precio" : 9 }
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16e1"), "tipoproducto" : "Taza", "nombre" : "Taza The Black Eyed Peas", "artista" : "The Black Eyed Peas", "color" : [ "Blanco" ], "tamaño" : "Mediano", "rebaja" : false, "stock" : 10, "precio" : 7 }
*/



//Productos que sean una camiseta, negra o blanca, y que no valga más de 20 euros.

db.merchandise.find(
    {$and: [
        {color: {$in: ["Negro", "Blanco"] } },
        {tipoproducto: {$eq: "Camiseta"} },
        {precio: {$lt: 15.00} }
    ]}

).pretty()

/*
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16c1"), "tipoproducto" : "Camiseta", "nombre" : "Camiseta AC/DC", "color" : [ "Negro" ], "artista" : "AC/DC", "tamaño" : "Grande", "rebaja" : false, "stock" : 2, "precio" : 10.99 }
*/



// Productos que sean o una camiseta o una sudadera, que no cueste más de 25 euros, color blanco y que haya suficiente stock como para llevar 5 productos.

db.merchandise.find(
    {$and: [
        {tipoproducto: {$in: ["Camiseta", "Sudadera"] } },
        {color: {$eq: "Blanco"} },
        {precio: {$lt: 25.00} },
        {stock: {$lte: 5}}
    ]}

).pretty()

/*
{ "_id" : ObjectId("6191bc9c3592ce9f2ccb16c2"), "tipoproducto" : "Camiseta", "nombre" : "Camiseta The Rolling Stones Classic Tongue", "color" : [ "Blanco" ], "artista" : "The Rolling Stones", "rebaja" : false, "tamaño" : "Grande", "stock" : 5, "precio" : 15.05 }
*/







/****************UPDATE OPERATORS****************/



// Queremos cambiar el precio de algunos de nuestros productos porque han bajado o subido de precio...

db.merchandise.update(
    {_id: ObjectId("619187357ad9d5a025bbfa9f") },
    {$set: {precio: 15.00} }
)

// Queremos quitar un color o colores de unos tipos de productos porque ya no los disponemos.

db.merchandise.update(
    {_id: ObjectId("619187357ad9d5a025bbfa9f") },
    {$unset: {color: "Negro"} }
)

// Añadir los nuevos colores que nos han traido de las camisetas que vendemos en la tienda...

db.merchandise.update(
    {_id: ObjectId("6191bc9c3592ce9f2ccb16c2") },
    {$addToSet: {color: "Rojo" } }
)

