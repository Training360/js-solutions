# Feladatok

1. Írj egy függvény kifejezést `removeDuplicatesFromArray` néven, ami a paraméterként megadott tömbből eltávolítja a duplikált elemeket! A tömb csak primítív értékeket tartalmaz! 
A függvény visszatérési értéke a duplikált elemektől mentes új tömb!

2. Készíts egy `HU` nevű objektumot, aminek az alábbi propertijei vannak:
- `date()`: Visszaadja a paraméterként megadott dátumot a magyar dátumírás szabályainak megfelelően
- `currency()`: Visszaadja a paraméterként megadott számot a magyar pénzformátumnak megfelelően a Ft végződéssel együtt
- `list()`: A paraméterként kapott string tömböt visszaadja az alábbi formában: első, második és harmadik" (Tehát vesszőkkel elválasztva az utolsó elem előtt az és szóval)

3. Készíts egy `objectConverter` nevű objektumot, ami az alábbi metódusokkal rendelkezik:
   - `arrayToMap(array)`
   - `arrayToSet(array)`
   - `setToMap(set)`
   - `setToArray(set)`
   - `mapToArray(map)`
   - `mapToSet(map)`

A fenti metódusok értelemszerűen nem másra szolgálnak, mint az egyik összetett adattípusból konvertálják át az adatokat egy másikba. 
Mindegyik metódus visszatérési értéke egy új Array, Map, vagy Set object.