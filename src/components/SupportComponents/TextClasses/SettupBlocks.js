class SettupBlocks {
    static seisMix = {
        'frontend':{
            'steps':[
                'Uses Node Package Manager',
                'Clone the github repo to a local directory',
                'Open terminal and cd into the directory',
                'Run "npm install" to install dependencies',
                'Run "npm start" to boot app on localhost',
                'Optionally, run "npm build" for minified build files, then run serve -s build to boot up'
            ]
        },
        'backend':{
            'steps':[
                'Uses Ruby Bundler',
                'Clone the github repo to a local directory',
                'Open terminal and cd into the directory',
                'Run "bundle install"',
                'Run "rails db:create"',
                'Run "rails db:migrate"',
                'Run "rails db:seed"',
                `Run "${"<EDITOR>='code --wait' rails credentials:edit"}", replace <EDITOR> with your code editor of choice (i.e. VSC)`,
                `This opens up a credentials.yml file, in this file type "${"hmac: secret_key: 'my_secret_key'"}"`,
                'Run "rails s"'


            ]
        }
    }

    static budgetWeb = {
        'frontend':{
            'steps':[
                'Uses Node Package Manager',
                'Clone the github repo to a local directory',
                'Open terminal and cd into the directory',
                'Run "npm install" to install dependencies',
                'Run "npm start" to boot app on localhost',
                'Optionally, run "npm build" for minified build files, then run serve -s build to boot up',
                'With your opened app, the FIRST thing you need to do is "Initialize Graph" with a file matching the required columns: Transaction History, Date, Type, Cost, Checking, Savings, Total, Total Income', 
                'You need at least one row of initial values. "Total" is the sum of Checking and Savings, and "Total Income" can be set equal to "Total" to start',
                'After initializing, you are set!'
            ]
        },
        'backend':{
            'steps':[
                'Uses Python (Preferably with Anaconda)',
                'Clone the github repo to a local directory',
                'Open terminal and cd into the directory',
                'If using Anaconda, run "conda env create -f environment.yml" to create a conda environment named "budget" by default',
                'After the above, run "budget activate" to activate the dependency environment',
                'If not using Anaconda, you may have to open the environment.yml file and install the dependencies listed in your environment manager of choice',
                'Finally, running "flask run" should boot up your backend'
            ]
        }
    }

    static gpCom = {
        'frontend':{
            'steps':[
                'Uses Node Package Manager',
                'Clone the github repo to a local directory',
                'Open terminal and cd into the directory',
                'Run "npm install" to install dependencies',
                'Run "npm start" to boot app on localhost',
                'Optionally, run "npm build" for minified build files, then run serve -s build to boot up'
            ]
        }
    }

    static topoGlobe = {
        'frontend':{
            'steps':[
                'Uses Node Package Manager',
                'Clone the github repo to a local directory',
                'Open terminal and cd into the directory',
                'Run "npm install" to install dependencies',
                'Run "npm start" to boot app on localhost',
                'Optionally, run "npm build" for minified build files, then run serve -s build to boot up'
            ]
        }
    }

    static graphJS = {
        'frontend':{
            'steps':[
                'Clone the github repo to a local directory',
                'Find the index.html file in the pulled repo',
                "Click and drag this file into your web browser's URL bar"
            ]
        },
        'backend':{
            'steps':[
                'Uses Ruby Bundler, Cloudinary Account',
                'Clone the github repo to a local directory',
                'Open terminal and cd into the directory',
                'Run "bundle install"',
                'Run "rails db:create"',
                'Run "rails db:migrate"',
                '(Optional) Run "rails db:seed"',
                'Run "rails s"',
                'If you seeded, user account "griff" password "g" should exist by default. Otherwise you can make your own',
                'In "/app/controllers/datasets_controller.rb" edit the "uploadToCloud" method. Here you put your Cloudinary account information to connect to your account',
                'If you prefer an alternative storage method, you can also edit this method in any way. It is passed the file to be stored and returns a pointer to it'
            ]
        }
    }

    static javaTodo = {
        'desktop':{
            'steps':[
                'Uses the IntelliJ IDEA Development kit',
                'Clone the github repo to a local directory',
                'Open the repo in IntelliJ',
                'Right click on Project name, click "Open Module Settings"',
                'Hit the plus at the bottom for a new module, click JARs or Directories',
                'Select the "graphics.jar" file in the local resources folder',
                'Select "Classes"',
                'This imports the icons in the jar file and loads them into the classpath for JavaFX',
                "You're set to run the app!"
            ]
        }
    }

    static CLIDnD = {
        'frontend':{
            'steps':[
                'Uses Ruby Bundler',
                'Clone the repo to a local directory',
                'Cd into the directory',
                'Run "bundle install"',
                'Run "rake db:migrate"',
                'Run "rake monsterSeed", this seeds the monsters from the DnD API, may take a minute',
                'Run "rake run"',
                "You're all set!"
            ]
        }
    }

    static pythonRogue = {
        'App':{
            'steps':[
                'Uses Python (Preferably with Anaconda)',
                'Clone the github repo to a local directory',
                'Open terminal and cd into the directory',
                'If using Anaconda, run "conda env create -f environment.yml" to create a conda environment named "roguelike" by default',
                'After the above, run "roguelike activate" to activate the dependency environment',
                'If not using Anaconda, you may have to open the environment.yml file and install the dependencies listed in your environment manager of choice',
                'Finally, running "python engine.py" should boot up your game',
                'Have fun!'
            ]
        }
    }
}

export default SettupBlocks