# Dashboard for data visualization

A dashboard displaying data from a MariaDB/JawsDB SQL database.

### Built with

React/Redux, Node.js/Express, MariaDB, React-Thunk, material-ui

### To run

Run `npm install` inside both `backend` and `frontend` folders.

Inside `backend` folder: run `npp run dev`.
Inside `frontend` folder: run `npm start`.

### Sequence of data events

React app will start on `localhost:3000`. Pages call the backend endpoint to fetch data from SQL database server. Data is then pushed to Redux store.

Components access store via containers. Data is processed, filtered down to dumb components and displayed in charts.

If database server times-out, error will show on backend console. Restart server by entering `rs` and `Enter` on Terminal.
