
/* uploads.js */

import { customiseNavbar, file2DataURI, loadPage, secureGet, showMessage } from '../util.js'

export async function setup(node) {
	console.log('UPLOADS: setup')
	try {
		console.log(node)
		document.querySelector('header p').innerText = 'Upload a document'
		customiseNavbar(['home','uploads' ,'logout'])
		if(localStorage.getItem('authorization') === null) loadPage('login')
		// there is a token in localstorage
		node.querySelector('form').addEventListener('submit', await uploadData)
	} catch(err) {
		console.error(err)
	}
}

async function uploadData(event) {
	console.log('func UPLOAD DATA')
	event.preventDefault()
	const element = document.querySelector('input[name="file"]')
	const title = document.querySelector('input[name="title"]').value
	const description = document.querySelector('textarea[name="description"]').value
	const category = document.querySelector(".categoryDropdown select").value
	//const file = document.querySelector('input[name="file"]').files[0]
	const states = ['uplaoded','Require Amendments' ,'verified']
	file.stamp = Date.now()
	file.date_modified = document.lastModified()
	file.title = title
	file.description = description
	file.category = category
	file.status = states[0]
	console.log(file.status)
	console.log(file.title)
	file.base64 = await file2DataURI(file)
	file.user = localStorage.getItem('username')
	console.log(file)
	const url = '/api/files'
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/vnd.api+json',
			'Authorization': localStorage.getItem('authorization')
		},
		body: JSON.stringify(file)
	}
	const response = await fetch(url, options)
	console.log(response)
	const json = await response.json()
	console.log(json)
	showMessage('file uploaded')
	loadPage('home')
}






	