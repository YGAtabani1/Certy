
/* .js */

import { db } from './db.js'

export async function getDocuments() {
	let sql = `SELECT * FROM documents;`
	records = await db.query(sql)
	console.log(records.description)
	return records
}

export async function addDocument(file) {
	const sql = `INSERT INTO documents(user, title, descrip, date_modified, states, document) VALUES("${file.user}", "${file.title}", "${file.description}", "${file.date_modified}", "${file.status}", "${file.base64}" )`
	console.log(sql)
	await db.query(sql)
	return true
 }
 