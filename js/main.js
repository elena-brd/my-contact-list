const filter = document.getElementById('filter-input');
const contactList = document.getElementById('contact-list-items');

function searchContactName(e) {
    const text = e.target.value.toLowerCase();
    const names = contactList.querySelectorAll('li');

    names.forEach((contact) => {
        const contactName = contact.textContent.toLowerCase();

        if (contactName.indexOf(text) > -1) {
            contact.style.display = '';
        } else {
            contact.style.display = 'none';
        }
    })
}


filter.addEventListener('keyup', searchContactName);