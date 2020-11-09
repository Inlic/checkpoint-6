# Bug-Report Project


The Objective of this project was to create a tool to better report bugs for your team. The goal being, to better track bugs in your application, as well as the process taken to solve them.

All bugs needed to have a title, description, who reported the bug, closedDate and whether or not it has been closed.

Users could also add notes to the bug report providing detailed steps towards the bugs resolution.

Once a bug was closed, no further editing should be allowed.

<hr>

### Home View:

<div>
  <img class="img-responsive" style="border: 1px solid black;padding: 10px" src="HomeView.jpg" />
</div>
<div>
  <img class="img-responsive" style="border: 1px solid black;padding: 10px" src="AddBug.jpg" />
</div>

From the Home page users can view all the bugs that have been added, color coded to which are open and closed(by status). You should be able to filter the bugs based on their status(open or closed).

#### Challenges

Try to implement pagination here(display limited number of bugs per page). Modals for creating bugs instead of a static form could be a nice feature as well.
<br>
<br>

<hr>

### Details View:

<div>
  <img class="img-responsive"  style="border: 1px solid black;padding: 10px"  src="BugDetailsView.jpg" />
</div>
<div>
  <img class="img-responsive"  style="border: 1px solid black;padding: 10px"  src="AddComment.jpg" />
</div>

The details view provides some additional information about the bug, as well as showing all the notes made by other users. Here notes can be created or removed.

#### Challenges:

See if you can implement the ability to go next or previous from this page. Modals for creating notes would be a nice feature instead of a static form always visible on the page.

<hr>
<br>
<br>

## Bug-Report API

### Bug Schema

```Javascript
var bug = new Schema({
    closed: { type: Boolean, required: true, default: false },
    description: { type: String, required: true },
    title: { type: String, required: true },
    closedDate: { type: Date}
    creatorEmail: { type: String, required: true }
}, { timestamps: true, toJSON: { virtuals: true } })
```

### Note Schema

```Javascript
var note = new Schema({
    content: { type: String, required: true },
    bug: { type: ObjectId, ref: 'Bug' required: true },
    flagged: { type: String, enum: ["pending", "completed", "rejected"] }
    creatorEmail: { type: String, required: true }
}, { timestamps: true, toJSON: { virtuals: true } })
```

### Suggested Endpoints

> baseUrl: `'https://localhost:3000/api'`

Get

`/bugs`: returns a list of all the bugs

`/bugs/:id`: returns a single bug with all it's data

`/bugs/:id/notes`: returns all notes for a given bug id

Post

`/bugs`: Creates a new bug

`/notes`: Adds a new note to the bug.

Put

> _both of these can only be done if bug is open_

`/bugs/:id`: Edits bug

`/notes/:id`: Edits note. (not required)

Delete

> There is no true bug delete, only changing the status of a bug to closed.

`/bugs/:id`: Changes status of bug from open to close

`notes/:id`: Deletes note.

<hr>

## Requirements

### Visualization

- At least 2 supported front end routes
  - Home shows all bugs
  - BugDetails displays the details of a bug and its Notes
  
  - I created two pages in Vue in order to meet these requirements.  One as a home page, and a second bug-details page.
  
- Bugs can be filtered by their status
  - I filtered by closed or open status.  This was tracked on the page by implementing a toggle icon which hides closed bugs on a click.
- Creating a new bug automatically navigates to the BugDetails view
  - I added a router push to the add bug function to make sure the user was sent to the correct location.
- Navbar to allow navigating back to Home view
  - The navbar was built as a separate Vue component that I added to base App so it appeared on all pages.
- Styling Indication on main page that bug is closed (color, strike-through, etc.)
  - I chose different coloring here instead of a strikethrough.
- Bugs display last modified date
  - I had to get a better understanding of Javascript date and time functions before I could implement this feature.  I ended up using a built in Javascript date function to transform the data into the necessary format.

### Functionality

- Users Can Register, Login, and Logout (this should work out of the box, don't break it)
- Users can only modify/delete data they created
  - Server side logic acts to prevent this.
- Bugs can be created from the Home view
  - Users must login to create a bug report, but otherwise this pathway uses a standard form to create a bug.
- Bugs can be closed from the BugDetails view
  - Utilizes a delete request on the server side to modify the data instead of removing it entirely.
- User is prompted "are you sure?" when closing a Bug
  - I used the sweetalert2 package here to create these prompts.

- Notes can be added and removed from a bug in the BugDetails view
- User prompt to remove Note from Bug
    - Notes have their own separate CRUD methods to accomplish these goals.

- A Bug can be edited
  - Put request on server side.
- Cannot edit a Bug after it is closed
  - Server does a check here to make sure the bug is not closed before allowing the edit.

#### Challenges

- Implement user auth
  - Implemented utilizing auth 0.
- Modals for creating Bugs
- Modals for creating Notes
- Use sweet alert for prompts
  - Implemented in this application.
