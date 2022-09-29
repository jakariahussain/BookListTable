// Id define section
	let BookForm = document.querySelector('#form')
	let bookTitle = document.querySelector('#bookTitle')
	let bookAuthor = document.querySelector('#bookAuthor')
	let bookYear = document.querySelector('#BookYear')
	let title = document.querySelector('#title')
	let author = document.querySelector('#author')
	let Year = document.querySelector('#Year')

	// add event title
	BookForm.addEventListener('submit', function(e) {
    if (bookTitle.value === '') {
        alert('please enter your exite value')
    }
    let tableRow = document.createElement('tr')
    tableRow.className = 'text-center'

    let tableData = document.createElement('td')
    tableRow.appendChild(tableData)
    tableData.appendChild(document.createTextNode(bookTitle.value))

    title.appendChild(tableRow)
    bookTitle.value = ''
    e.preventDefault()
})

	// add event author
	BookForm.addEventListener('submit', function(e) {
    if (bookAuthor.value === '') {
        alert('please enter your exite value')
    }
    let tableRow = document.createElement('tr')
    tableRow.className = 'text-center'

    let tableData = document.createElement('td')
    tableRow.appendChild(tableData)
    tableData.appendChild(document.createTextNode(bookAuthor.value))

    author.appendChild(tableRow)
    bookAuthor.value = ''
    e.preventDefault()
})

	// add event Year
	BookForm.addEventListener('submit', function(e) {
    if (bookYear.value === '') {
        alert('please enter your exite value')
    }
    let tableRow = document.createElement('tr')
    tableRow.className = 'text-center'

    let tableData = document.createElement('td')
    tableRow.appendChild(tableData)
    tableData.appendChild(document.createTextNode(bookYear.value))

    Year.appendChild(tableRow)
    bookYear.value = ''
    e.preventDefault()
})