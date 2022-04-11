
/* home.js */

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
}
// this example loads the data from a JSON file stored in the uploads directory
async function addContent(node) {
	const response = await fetch('/uploads/documents.json')
	const documents = await response.json()
	const template = document.querySelector('template#document')
	for(const document of documents.data) {
		const fragment = template.content.cloneNode(true)
		fragment.querySelector('h2').innerText = document.title
		fragment.querySelector('p').innerText = document.document
		fragment.querySelector('p').innerText = documet.category
		fragment.querySelector('p').innerText = documet.description
		node.appendChild(fragment)
	}
}
