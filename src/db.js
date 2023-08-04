import Database from 'better-sqlite3';
const db = new Database('favorites.db');

const createTable = `
    CREATE TABLE IF NOT EXISTS favorites (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        url TEXT NOT NULL
    )
`;
db.exec(createTable);
//db.exec('DROP TABLE IF EXISTS favorites');

// const queryTables = "SELECT name FROM sqlite_master WHERE type='table'";
// const tables = db.prepare(queryTables).all();
// console.log(tables);

const insertDataQuery = db.prepare(
    'INSERT INTO favorites (name, url) VALUES (?, ?)'
);
//db.prepare(insertData).run('goog', 'https://google.com');

// const data = [
//     { name: 'social', url: 'https://instagram.com' },
//     { name: 'news', url: 'https://yahoo.com' },
// ];

// data.forEach((favorite) => {
//     insertDataQuery.run(favorite.name, favorite.url);
// });

// console.log(
//     db.prepare('SELECT url FROM favorites WHERE name = ?').get('social').url
// );

db.prepare('DELETE FROM favorites').run();

console.log(db.prepare('SELECT * FROM favorites').all());
