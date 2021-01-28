import budgetPyAnimation2 from '../../../resources/ProjectAnimations/budgetPyAnimation2.gif'
import budgetPyAnimation3 from '../../../resources/ProjectAnimations/budgetPyAnimation3.gif'
import budgetPyAnimation4 from '../../../resources/ProjectAnimations/budgetPyAnimation4.gif'
import budgetPyAnimation5 from '../../../resources/ProjectAnimations/budgetPyAnimation5.gif'
import budgetPyAnimation6 from '../../../resources/ProjectAnimations/budgetPyAnimation6.gif'

import CLIDnDAnimation2 from '../../../resources/ProjectAnimations/CLIDnDAnimation2.gif'
import CLIDnDAnimation3 from '../../../resources/ProjectAnimations/CLIDnDAnimation3.gif'
import CLIDnDAnimation4 from '../../../resources/ProjectAnimations/CLIDnDAnimation4.gif'
import CLIDnDAnimation5 from '../../../resources/ProjectAnimations/CLIDnDAnimation5.gif'

import gpComAnimation1 from '../../../resources/ProjectAnimations/gpComAnimation1.gif'
import gpComAnimation2 from '../../../resources/ProjectAnimations/gpComAnimation2.gif'
import gpComAnimation3 from '../../../resources/ProjectAnimations/gpComAnimation3.gif'

import graphJSAnimation2 from '../../../resources/ProjectAnimations/graphJSAnimation2.gif'
import graphJSAnimation3 from '../../../resources/ProjectAnimations/graphJSAnimation3.gif'
import graphJSAnimation4 from '../../../resources/ProjectAnimations/graphJSAnimation4.gif'
import graphJSAnimation5 from '../../../resources/ProjectAnimations/graphJSAnimation5.gif'

import javaTodoAnimation1 from '../../../resources/ProjectAnimations/javaTodoAnimation1.gif'

import pythonRogueAnimation2 from '../../../resources/ProjectAnimations/pythonRogueAnimation2.gif'
import pythonRogueAnimation3 from '../../../resources/ProjectAnimations/pythonRogueAnimation3.gif'
import pythonRogueAnimation4 from '../../../resources/ProjectAnimations/pythonRogueAnimation4.gif'

import smAnimation1 from '../../../resources/ProjectAnimations/smAnimation1.gif'
import smAnimation2 from '../../../resources/ProjectAnimations/smAnimation2.gif'
import smAnimation3 from '../../../resources/ProjectAnimations/smAnimation3.gif'
import smAnimation4 from '../../../resources/ProjectAnimations/smAnimation4.gif'

import topoGlobeAnimation2 from '../../../resources/ProjectAnimations/topoGlobeAnimation2.gif'
import topoGlobeAnimation3 from '../../../resources/ProjectAnimations/topoGlobeAnimation3.gif'


class FeaturesBlock {
    static seisMix = {
        'USGS API Queries': {
          'details':[
              'By default, displays events from past week',
              'Date and Magnitude ranges can be changed',
              'Events are plotted on charts and globe automatically after refresh',
              'All events are clickable, bringing you to a details page'
          ],
          'animation':smAnimation1
        },
        'GlobeView - Geographic Plot':{
          'details':[
              'Plots seismic events geographically',
              'Events and globe are interactive',
              'Clicking on events brings up access to event details',
              'Globe rotation can be toggled and customized',
              'Changeable map projection'
            ],
            'animation':smAnimation2
          },
          'User Accounts':{
              'details':[
                  'Frequent users can create accounts and log in',
                  'User passwords are fully encrypted on the backend using BCrypt',
                  "User page provides an interface for a user's webpage activity"
              ],
              'animation':smAnimation3
          },
          'Bookmarking and Commenting':{
              'details':[
                  'Returning users can bookmark interesting events',
                  'Bookmarks are organized on a profile-page map, and hovering displays information',
                  'Users can also provide insights in the comments section of events that they visit',
                  "A user's insights are also tracked on their profile page"
              ],
              'animation':smAnimation4
          }
    }

    static budgetWeb = {
        'Initialize Table with User Data': {
          'details':[
              'Users can upload excel, csv, or pickle files of their data',
              'Uploaded tables must match required columns, and have at least one row',
              'Storage files setup on backend, formatted for user',
              'Application also "guesses" categories for user based on any categories in Type column'
          ],
          'animation':budgetPyAnimation2
        },
        'Users can add cards for auto-loading':{
            'details':[
                'New cards map downloaded file columns to Transaction History, Date and Cost columns',
                'Once a card is added, CSVs for that card can be loaded in and values will be inserted into the table automatically'
            ],
            'animation':budgetPyAnimation3
        },
        'Custom Transaction Categories':{
            'details':[
                'Users can update Type column with categories from a custom list',
                'These categories help with producing pie charts',
                'Categories can be added, deleted and/or customized'
            ],
            'animation':budgetPyAnimation4
        },
        'Charts and Graphics':{
            'details':[
                `User's finance data is plotted over time in a line chart`,
                'Two pie charts display proportions of spending categories, and spending categories against income categories',
                'The pie chart categories can be customized in the category interface',
                'Charts provide easy to interpret visuals of finances over time'
            ],
            'animation':budgetPyAnimation5
        },
        'Save, Reload, Export':{
            'details':[
                'Users can save data tables in backups and reload from the same files',
                'Files can be saved and loaded as .csv, .xlsx, or .p',
                'Files can also be exported for download as the same file-types above',
                'Exported files can be used in other applications!'
            ],
            'animation':budgetPyAnimation6
        }
    }

    static gpCom = {
        'Personal "Business Card"': {
          'details':[
              'My business card with contact information, links to my resume, blog, and social media',
              'Skillset overview and a brief personal statement',
              'Professional Skills and Education w/ relevant coursework'
          ],
          'animation':gpComAnimation2
        },
        'Project Portfolio':{
            'details':[
                'An up-to-date collection of my project work',
                'Sorted left-to-right, top-down with project most representative of my work coming first',
                'Starred projects are my personal favorites',
                'As I complete more projects, more cards will be added. Stay tuned!'
            ],
            'animation':gpComAnimation3
        },
        'Adaptive Styling':{
            'details':[
                'Adaptive CSS updates webpage styling based on screen size',
                'Settings maintain cleanliness and ease of use of the site across all media dimensions',
                'Desktop, tablet and mobile support'
            ],
            'animation':gpComAnimation1
        }
    }

    static topoGlobe = {
        'Globe Rotation Control': {
          'details':[
              'Globe rotation values can be set on 3 axes',
              'Auto rotation can be toggled on/off',
              'Rotation speeds adjustable'
          ],
          'animation':topoGlobeAnimation2
        },
        'Interactive Map Features': {
            'details':[
                'Map features can be made responsive (clickable, hover events, etc.)',
                'Features are only limited by what you can draw',
                'Any geojson shapes can be drawn on the map (e.g. the red circles) and can be made to respond to events the same way'
            ],
            'animation':topoGlobeAnimation3
        }
    }

    static graphJS = {
        'Upload Data-tables': {
          'details':[
              'Users can upload CSV files as datasets',
              'Data file is saved in a Cloud server (provided by Cloudinary)',
              'The app automatically parses the file and renders a table for ease-of-viewing',
              'Users can always access old datasets, or delete unneeded ones'
          ],
          'animation':graphJSAnimation2
        },
        'Line Graph Generation': {
          'details':[
              'Sequential data can be made into line charts',
              'Users can select a line chart in New Graphs',
              'Users can add any number of series',
              'Columns or Rows can be selected as the values for the x-axis or series'
          ],
          'animation':graphJSAnimation3
        },
        'Bar Chart Generation':{
            'details':[
              'Categorical data can be made into bar charts',
              'Users select bar chart in New Graphs',
              'Users can also add multiple series for bar charts',
              'App automatically aggregates categories into sums, and diplays processed data'
            ],
            'animation':graphJSAnimation4
        },
        'Pie Chart Generation':{
            'details':[
                'Categorical data can also be made into pie charts',
                'Pie charts limited to one series',
                'Pie chart accepts negative values (in red) and plots them counter to positive values (in green)'
            ],
            'animation':graphJSAnimation5
        }
    }

    static javaTodo = {
        'Add and Delete Todo Items': {
          'details':[
              'Items can be added and deleted to the list',
              'New list prompts the user with an ergonomic dialogue box',
              'Items each get a name, description, and deadline',
              'Items near or past their deadline are colored by the app for user alerts'
          ],
          'animation':javaTodoAnimation1
        }
    }

    static CLIDnD = {
        'World Building': {
          'details':[
              'Users can create multiple stories for their session',
              'Each story can contain multiple worlds',
              'Each world can be filled with locations',
              "With these features, DMs can worldbuild and organize prior to sessions"
          ],
          'animation':CLIDnDAnimation2
        },
        'Monster Catalog':{
            'details':[
              'Users can list all monsters and all monster types in a catalog',
              'For more compact lists, users can search for monsters by type, challenge rating or name',
              'Once a monster of interest is found, its details can be listed in a print-out or online'
            ],
            'animation':CLIDnDAnimation3
        },
        'Add Monsters to a Location':{
            'details':[
                `Users can add and remove monsters by name to a location's "pool"`,
                'Monsters at a location can be printed in a list',
                'Also, given a monsters name, you can list locations in this story where that monster appears'
            ],
            'animation':CLIDnDAnimation4
        },
        'DM Utility Features':{
            'details':[
                `At a location, an indecisive (or evil) Dungeon Master can randomly draw a monster from the location's pool`,
                `Once drawn, DMs can view the monster's details online or in print-out. Alternatively, they can pass`,
                'The app also provides a simple d20 Dice Roller'
            ],
            'animation':CLIDnDAnimation5
        }
    }

    static pythonRogue = {
        'Procedurally Generated Dungeons': {
          'details':[
              'Dungeons are randomly carved out at the start of each new game',
              'Users can reload their last played game if they have exited out in the middle of a session',
              'Enemies, items, weapons and more increase in value the deeper you descend'
          ],
          'animation':pythonRogueAnimation2
        },
        'Items, Equipment, Weapons':{
            'details':[
                'Weapons, potions and spell scrolls spawn for increased combat efficacy',
                'Items are stored in a players inventory and can be dropped to clear space'
            ],
            'animation':pythonRogueAnimation3
        },
        'Combat and Level Ups!':{
            'details':[
                'Users encounter monsters in the dungeon that get harder the deeper you delve',
                'Defeating monsters in combat earns you experience, which can be used to level up and increase your stats'
            ],
            'animation':pythonRogueAnimation4
        }
    }
}

export default FeaturesBlock