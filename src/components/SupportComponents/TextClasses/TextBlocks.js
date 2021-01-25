class TextBlocks {
    static seisMix = `
    Seismix: A React web app for visualizing and querying the most up-to-date information on global seismic activity.
    SeisMix accesses data from the USGS's public API, a government agency devoted to the geographic survey of the United States and tracking of worldwide seismic events. Their database provides up-to-date records of global seismic events from 1970 to the present date.
    This application is designed to facilitate queries and analysis of the API over date and magnitude ranges. By inputting a timeframe and a range of event sizes, the API is queried and the relevant data is formatted into various charts and graphics for ease-of-viewing.
    In addition to charts, the application also provides an interactive globe for geographic plotting of events. All events on the charts and the globe are clickable and viewable through their own page, and all events contain links back to the USGS source site.
    For long-term usage, users can also create accounts on the webpage. Signed-in users can bookmark events of interest for later revisiting, and bookmarked events are cleanly displayed on the users profile page for ease-of-access.
    For more details, check out the Features below, or the Demo Video under the title!
    `.trim()

    static budgetWeb = `
    Budget.web: A personal finance app for tracking and visualizing transactions and account balances over time.
    Budget.web was initially designed as an app for my own personal use, and over time has been abstracted for use by any user. It uses a React Webpage Frontend with a Python Backend.
    This application was designed to provide users an interface for managing and tracking spendings and account balances over time. The data is tracked on the backend in a table listing Transaction Name, Date of Transaction, Transaction Category (provided by users), Transaction Cost, Checking & Savings Balances, and Total Current Balance.
    My personal favorite feature (and the driving motivation behind this project) is the automation of loading transaction data from credit card files. For example, a user can download their transaction data from a credit card of their choice, and add it as a new card for their app. With this, simply uploading transaction data from that card will automatically insert the transaction values into their table.
    The user's data table can be seeded with an Excel table or CSV file, and additional transactions can be manually added. Transactions can be categorized as different types as well, which is useful for graphing.
    Transactions over time are plotted on a line graph for balance tracking, and categorized transactions can be displayed in two pie charts: spendings and spendings vs income. Across these three plots, users can track their finances over time, and compare the degrees of their spending across all their custom categories.
    Data tables can be saved as backups and exported as Excel, CSV or pickle files for ease of transfer to other applications. Backup tables can be re-loaded in, or the data can be re-initialized with exported files if resets are necessary.
    For more details, check out the Features below. Enjoy!
    `.trim()

    static gpCom = `
    GP.com: My personal landing page and résumé site.
    I built GP.com as a way to collect, organize and present my project work over the course of my software development journey. It was built using the React.js framework, with the Semantic-UI library and custom CSS for styling.
    GP.com provides users with a compact, aesthetic interface to view my project history, while also providing access to other sites and resources providing reference for me (e.g. Resume, Blogs, Social Media, Github).
    The site was built with a modular setup in mind, using the full potential of React Components to construct many unique pages from organized sub-components. Because of this, long-term maintenence of the site and updates with new projects, pages, etc. should prove very simple.
    As a result I hope to maintain this site as a constant, up-to-date reference of my work, and I hope you enjoy viewing it as much as I've enjoyed building it!
    `.trim()

    static topoGlobe = `
    TopoGlobe: An app for plotting geographic events in a responsive, interactive React environment.
    I originally put together TopoGlobe as a practice piece for rendering and animating geographic data in a React setting. By the end, it became a very useful proof-of-concept project, and an implementation of it can be seen in my <a href='/project_overview/SeisMix'>SeisMix Project</a>.
    The main goal of this project was to combine functionality of three separate JS libraries (topojson-client, D3.js, and React) into a clean, easy-to-replicate implementation. My aim then was to render an animated, interactive globe with data features that contained all the power and responsiveness of React components, with the file handling and data manipulation being performed by the specialized D3 and topojson libraries.
    Topojson files, a compact means of storing geogrpahic data, were converted to geojson features interpretable by the D3 library. The D3 library then was able to manipulate and project the geojson features to path data interpretable by path elements in React. Lastly, sets of React components were generated from individual map features, and provided with listeners for hover and click events.
    Lastly, by setting the D3 projection's 'rotation' setting dependent on React state, animation for the globe was made easily interfaceable with React's toolkit.
    For more deatails on this implementation, feel free to check out the blog post I wrote on this project linked above, or the README in the github repo. I hope you enjoy this implementation as much as I enjoyed building it!
    `.trim()

    static graphJS = `
    Graph.js: An application for custom graph generation from uploaded data files.
    Graph.js was built as a way of mimicking Excel graphing features in a webpage using Vanilla Javascript and the D3.js library.
    With this application, users can make accounts, and upload data files that are stored on a Cloudinary backend (by default). These data files are automatically parsed by the webapp and displayed for the user.
    From there, a user can generate line, bar, and pie charts from the provided data. This is done by specifying the table columns/rows meant to be used as the different axes/series of the graph.
    For example, with data values associated with a date, the user can specify the date column as the x-axis of a line graph, and declare the data values to be plotted on the y. Alternatively, if data is organized into categories, the categories can be made into the x-axis or groups of bar/pie charts. The application will automatically aggregate the data by category and plot the result for the users.
    This project holds a lot of meaning to me personally; It was my first big project using the D3 library (one of my favorite Javascript toolkits), and my first step into data management and visualization. Take a look at the demo video above or the Features below if you're interested learning in more!
    `

    static javaTodo = `
    JavaTodo: A desktop Task Tracking Application written in Java.
    JavaTodo is a project in-progress written in Java, using the IntelliJ IDEA Development kit and the JavaFX GUI library. The app is fundamental in its features, with a user being able to add and delete Todo List items and the app coloring items that are near or past their deadline.
    The main purpose of this project, however, was for practice as my first foray into Desktop App development and native GUI development. The app extensively uses the built-in JavaFX library and fxml markup for the GUI display, with other external library references for styling and user-friendliness.
    Much of this project was completed in reference to Tim Buchalka's Udemy Java Masterclass Course, to whom I extend my thanks for the instruction and offer my recommendations as an invaluable Java resource.
    This project is still in development, and will be updated as features become implemented. Stay tuned!
    `.trim()

    static CLIDnD = `
    CLI DnD: A command line Dungeons and Dragons Organizer App with interfaces to the Open5e DnD API.
    This app holds a special place in my heart. If you've already checked out the Github Repo, you may have noticed that it was the final project for our first module of Flatiron School's Software Engineering Program. It was co-authorer by Guligena Aierken, Imade Osifo and I, and it could be described as our 'first ever' code project. I hope you enjoy the hard work we put into the start of our development journey!
    CLI DnD was built as a means for Dungeon Masters (the leads of a DnD game) to create, organize and flesh out game settings prior to a session. It uses a Sinatra framework with active-record to persist user data. It also uses the Rest-Client and Launchy Ruby Gems to interface with the Open5e monster database, and provides full access to its resources in multiple easy-to-view formats.
    With the app, a Dungeon Master can create a story setting, create worlds within the story, and specify locations within those worlds. From there, a location can be fleshed out by adding enemies/monsters that can appear there. These monsters are seeded from the Open5e, and the app supports detail viewing as a print-out. Alternatively, the app can link you directly to the Open5e site.
    We also provided additional features, including a variety of sorting options to browse the Monster Catalog, tracking entity appearances in your story, and random monster rolls for the indecisive DM.
    For more details, check out the Features below, or the Demo Video above. Enjoy!
    `.trim()

    static pythonRogue = `
    Python Roguelike: A desktop roguelike dungeon crawler written with the Libtcod Library.
    This application was developed in reference to the Roguelike TCOD Tutorial <a href='http://rogueliketutorials.com/tutorials/tcod/'>here</a>. This tutorial walks you through the construction of the roguelike game with modern, good coding practices in Python. I highly extend my recommendations of this tutorial for a fun first step into python.
    The application builds a procedurally generated dungeon by carving out rooms and hallways, and filling these rooms with entities. Entities can include monsters, items, stairs, etc.
    Different entities have different behaviors produced through composition. The Engine iterates through all entities present on the map repeatedly, executing code based on the entities specific needs. For example, items and stairs do nothing, monsters move towards players or attack, and players are prompted for input on their turn.
    Items and equipment can also produce their own functionality. Items can be used to cast spells, equipped for stat increases and, so on. Additionally, combat can level up a player, and stats can be increased for further combat capability.
    Again, I highly recommend this tutorial as a first step python project. The code is actually quite intricate, and the product is a fun and enjoyable display of your troubleshooting results.
    Follow the setup instructions to try it out, or even build one of your own!
    `.trim()
}

export default TextBlocks