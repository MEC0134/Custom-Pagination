## Custom-Pagination


#### An application made with Vanilla JavaScript to create our own custom pagination without the help of any built in functions. This is a custom pagination JavaScript project that allows you to display data from a JSON file in a paginated manner.

### Features

- Pagination of data from a JSON file
- Customizable number of items per page
- Navigation buttons for easy browsing
- Display of current page and total pages
- Responsive design for different screen sizes


### To use this pagination JavaScript project, follow these steps:

1. Clone or download the project repository to your local machine.
2. Open the project folder in your preferred code editor.


### Usage

1. Ensure that your data is stored in a JSON file. Modify the data.json file in the project folder with your own data.
```
[
   {
        "avatar": "https://randomuser.me/api/portraits/thumb/women/67.jpg",
        "name": "iboya vat",
        "email": "iboya.vat@example.com",
        "joinedDate": "07/15/15"
    },
  ...
]
```

2. Open the index.html file in a web browser.

3. The data from the JSON file will be displayed with pagination controls at the bottom of the page.

4. Click on the pagination buttons to navigate through the pages.

5. The number of items displayed per page can be customized by modifying the ITEMS_PER_PAGE constant in the script.js file.


### Customization

You can customize the pagination project to suit your specific needs. Here are a few areas you can modify:

- Styling: The project comes with basic styling, but you can modify the CSS in the styles.css file to match your desired design.
- Data: Update the '__user-data.json__' file with your own data. Ensure that each object in the JSON array has the necessary properties for your project.
- Functionality: If you need to modify the pagination logic or add additional features, you can edit the '__script.js__' file
