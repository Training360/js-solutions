# Feladatok

1. Írj egy függvényt `getSecondsOfThisYearUntilNow` néven, aminek a visszatérési értéke az adott év 01.01. óta eltelt másodperceinek a száma!

2. Írj egy függvényt `countOfWorkingDays` néven, ami két paramétert kap. Mind a két paraméter egy-egy dátum. Az első a  korábbi időpont, a második  a későbbi időpont.  A visszatérési értéke a két dátum közötti munkanapok (hétfő-péntek) száma! A különböző ünnepekkel nem kell számolnod! Ha az első dátum korábbi, mint a második akkor dobj egy hibát az alábbi üzenettel: `The first parameter is earlier date, than second!`!
Hibát dobni a következő módon tudsz: 
```javascript
  throw new Error(message)
```
A aktuális napot is bele kell számolni a munkanapokba, ha az munkanap!

3. Írj egy függvényt `customDateFormats` néven, ami paraméterként egy Date objektumot kap, a visszatérési értéke pedig egy objektum két tulajdonsággal, ami a következő formátumban tartalmazza a paraméterként kapott dátumot:
- `short`: 2020. jan. 11. 14:20 (tehát évszám, a hónap neve röviden magyarul, kisbetűkkel a nap száma, majd az idő a másodperc nélkül)
- `long`: 2020. január 11. 14:20:10 (tehát évszám, a hónap neve magyarul, a nap száma, majd az idő)
