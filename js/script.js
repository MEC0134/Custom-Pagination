// Step 1: Retrieve the JSON data (assuming it's stored in a file)
fetch('user-data.json')
  .then(response => response.json())
  .then(data => {
    // Step 2: Parse the JSON data into an array of objects
    const contacts = data;

    // Step 3: Create contact cards for each object
    const contactList = document.querySelector('.contact-list');
    const itemPerPage = 10; // Number of items per page
    let currentPage = 1; // Current page

    function displayContacts(startIndex, endIndex) {
      // Clear the contact list
      contactList.innerHTML = '';

      // Show contacts for the current page
      for (let i = startIndex; i < endIndex; i++) {
        if (contacts[i]) {
          const contact = contacts[i];

          const listItem = document.createElement('li');
          listItem.classList.add('contact-item', 'cf');

          const contactDetails = document.createElement('div');
          contactDetails.classList.add('contact-details');

          const avatar = document.createElement('img');
          avatar.classList.add('avatar');
          avatar.src = contact.avatar;

          const name = document.createElement('h3');
          name.textContent = contact.name;

          const email = document.createElement('span');
          email.classList.add('email');
          email.textContent = contact.email;

          contactDetails.appendChild(avatar);
          contactDetails.appendChild(name);
          contactDetails.appendChild(email);

          const joinedDetails = document.createElement('div');
          joinedDetails.classList.add('joined-details');

          const dateJoined = document.createElement('span');
          dateJoined.classList.add('date');
          dateJoined.textContent = 'Joined ' + contact.joinedDate;

          joinedDetails.appendChild(dateJoined);

          listItem.appendChild(contactDetails);
          listItem.appendChild(joinedDetails);

          contactList.appendChild(listItem);
        }
      }
    }

    function showPage(pageNumber) {
      // Calculate start and end index of contacts for the given page number
      const startIndex = (pageNumber - 1) * itemPerPage;
      const endIndex = startIndex + itemPerPage;

      // Display the contacts for the current page
      displayContacts(startIndex, endIndex);
    }

    function createPaginationButtons() {
      // Calculate the number of pages
      const numOfPages = Math.ceil(contacts.length / itemPerPage);

      // Clear the pagination container
      const paginationContainer = document.querySelector('.pagination-container');
      paginationContainer.innerHTML = '';

      // Create pagination buttons
      for (let i = 1; i <= numOfPages; i++) {
        const button = document.createElement('a');
        button.href = '#';
        button.classList.add('nums');
        button.textContent = i;

        // Add event listener to each button
        button.addEventListener('click', function () {
          currentPage = i;
          showPage(currentPage);

          // Remove the active class from all buttons
          const buttons = document.querySelectorAll('.nums');
          buttons.forEach(btn => btn.classList.remove('active'));

          // Add the active class to the clicked button
          this.classList.add('active');
        });

        paginationContainer.appendChild(button);
      }

      // Show the initial page
      showPage(currentPage);

      // Add the active class to the first button
      const firstButton = document.querySelector('.nums');
      firstButton.classList.add('active');
    }

    // Call the function to create pagination buttons
    createPaginationButtons();
  })
  .catch(error => console.error('Error fetching JSON:', error));
