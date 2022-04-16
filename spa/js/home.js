
/* home.js */

//import { Marked } from 'https://deno.land/x/markdown@v2.0.0/mod.ts'
import { customiseNavbar } from '../util.js'


export async function setup(node) {
	console.log('HOME: setup')
	try {
		console.log(node)
		document.querySelector('header p').innerText = 'Home'
		customiseNavbar(['home', 'uploads','logout']) // navbar if logged in
		const token = localStorage.getItem('authorization')
		console.log(token)
		if(token === null) customiseNavbar(['home', 'register', 'login']) //navbar if logged out
			//add content to the page
		await addContent(node)
	} catch(err) {
		console.error(err)
		}
}


// this example loads the data from a JSON file stored in the uploads directory
 async function addContent(node) {
	const response = await fetch('/uploads/quotes.json')
	const quotes = await response.json()
	const template = document.querySelector('template#quote')
	for(const quote of quotes.data) {
		const fragment = template.content.cloneNode(true)
		fragment.querySelector('h2').innerText = records.title
		fragment.querySelector('h1').innerText = records.date
		fragment.querySelector('p').innerText = records.category
		fragment.querySelector('p1').innerText = records.description
		fragment.querySelector('p2').innerText = records.status
		fragment.querySelector('embed').innerText = records.document
		node.appendChild(fragment)
	}

// this example loads the data from a JSON file stored in the uploads directory
/* async function addContent(node) {
	const response = await fetch('/uploads/documents.json')
	const documents = await response.json()
	const template = document.querySelector('template#home')
	for(const document of documents.data) {
		const fragment = template.content.cloneNode(true)
		fragment.querySelector('h2').innerText = document.title
		fragment.querySelector('p').innerText = document.document
		fragment.querySelector('p').innerText = document.category
		const markdown = document.description
		const markedDescription = Marked.parse(markdown)
		fragment.querySelector('p').innerText = document.markedDescription
		fragment.querySelector('p').innerText = document.status
		fragment.querySelector('p').innerText = document.date
		node.appendChild(fragment)
	} */
}
