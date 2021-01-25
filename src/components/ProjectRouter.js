import Card from './SupportComponents/Card'
import TextBlocks from './SupportComponents/TextClasses/TextBlocks'
import SettupBlocks from './SupportComponents/TextClasses/SettupBlocks'
import DevTools from './SupportComponents/TextClasses/DevTools'
import FeaturesBlock from './SupportComponents/TextClasses/FeaturesBlock'
import ComponentsBlock from './SupportComponents/TextClasses/ComponentsBlock'
import ProjectPage from './Pages/ProjectPage'

export default function(props){
    const projectPages = {
        "Budget.web":{
            "detailsBlock":{
                "title":"Budget.web",
                "description":"Personal Finance App",
                "frontendLink":null,
                "backendLink":null,
                "videoDemo":null,
                "blogArticle":null,
                "devTools":DevTools.budgetWeb
            },
            "animaitonBlock":null,
            "summaryBlock":TextBlocks.budgetWeb,
            "settupBlock":SettupBlocks.budgetWeb,
            "featuresBlock":FeaturesBlock.budgetWeb,
            "componentsBlock":ComponentsBlock.budgetWeb
        },
        "SeisMix":{
            "detailsBlock":{
                "title":"SeisMix",
                "description":"USGS Seismic Event Tracker",
                "frontendLink":null,
                "backendLink":null,
                "videoDemo":null,
                "blogArticle":null,
                "devTools":DevTools.seisMix
            },
            "animaitonBlock":null,
            "summaryBlock":TextBlocks.seisMix,
            "settupBlock":SettupBlocks.seisMix,
            "featuresBlock":FeaturesBlock.seisMix,
            "componentsBlock":ComponentsBlock.seisMix
        },
        "GP.com":{
            "detailsBlock":{
                "title":"GP.com",
                "description":"Personal Landing Page",
                "frontendLink":null,
                "backendLink":null,
                "videoDemo":null,
                "blogArticle":null,
                "devTools":DevTools.gpCom
            },
            "animaitonBlock":null,
            "summaryBlock":TextBlocks.gpCom,
            "settupBlock":SettupBlocks.gpCom,
            "featuresBlock":FeaturesBlock.gpCom,
            "componentsBlock":ComponentsBlock.gpCom
        },
        "TopoGlobe":{
            "detailsBlock":{
                "title":"TopoGlobe",
                "description":"Geographic Plotting in React",
                "frontendLink":null,
                "backendLink":null,
                "videoDemo":null,
                "blogArticle":null,
                "devTools":DevTools.topoGlobe
            },
            "animaitonBlock":null,
            "summaryBlock":TextBlocks.topoGlobe,
            "settupBlock":SettupBlocks.topoGlobe,
            "featuresBlock":FeaturesBlock.topoGlobe,
            "componentsBlock":ComponentsBlock.topoGlobe
        },
        "Graph.js":{
            "detailsBlock":{
                "title":"Graph.js",
                "description":"Custom Graph Generator",
                "frontendLink":null,
                "backendLink":null,
                "videoDemo":null,
                "blogArticle":null,
                "devTools":DevTools.graphJS
            },
            "animaitonBlock":null,
            "summaryBlock":TextBlocks.graphJS,
            "settupBlock":SettupBlocks.graphJS,
            "featuresBlock":FeaturesBlock.graphJS,
            "componentsBlock":ComponentsBlock.graphJS
        },
        "CLI DnD":{
            "detailsBlock":{
                "title":"CLI DnD",
                "description":"DnD Organizer, Monster Database CLI",
                "frontendLink":null,
                "backendLink":null,
                "videoDemo":null,
                "blogArticle":null,
                "devTools":DevTools.CLIDnD
            },
            "animaitonBlock":null,
            "summaryBlock":TextBlocks.CLIDnD,
            "settupBlock":SettupBlocks.CLIDnD,
            "featuresBlock":FeaturesBlock.CLIDnD,
            "componentsBlock":ComponentsBlock.CLIDnD
        },
        "Python RogueLike":{
            "detailsBlock":{
                "title":"Python RogueLike",
                "description":"Procedurally Generated Dungeon Crawler",
                "frontendLink":null,
                "backendLink":null,
                "videoDemo":null,
                "blogArticle":null,
                "devTools":DevTools.pythonRogue
            },
            "animaitonBlock":null,
            "summaryBlock":TextBlocks.pythonRogue,
            "settupBlock":SettupBlocks.pythonRogue,
            "featuresBlock":FeaturesBlock.pythonRogue,
            "componentsBlock":ComponentsBlock.pythonRogue
        },
        "JavaTodo":{
            "detailsBlock":{
                "title":"JavaTodo",
                "description":"Desktop Task Tracking App",
                "frontendLink":null,
                "backendLink":null,
                "videoDemo":null,
                "blogArticle":null,
                "devTools":DevTools.javaTodo
            },
            "animaitonBlock":null,
            "summaryBlock":TextBlocks.javaTodo,
            "settupBlock":SettupBlocks.javaTodo,
            "featuresBlock":FeaturesBlock.javaTodo,
            "componentsBlock":ComponentsBlock.javaTodo
        }
    }
    return (
        <Card label="home" history={props.history}>
            <ProjectPage page={projectPages[props.match.params.name]}/>
        </Card>
    )
}