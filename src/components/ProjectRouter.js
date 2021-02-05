import Card from './SupportComponents/Card'
import TextBlocks from './SupportComponents/TextClasses/TextBlocks'
import SettupBlocks from './SupportComponents/TextClasses/SettupBlocks'
import DevTools from './SupportComponents/TextClasses/DevTools'
import FeaturesBlock from './SupportComponents/TextClasses/FeaturesBlock'
import ComponentsBlock from './SupportComponents/TextClasses/ComponentsBlock'
import ProjectPage from './Pages/ProjectPage'

import budgetPyAnimation1 from '../resources/ProjectAnimations/budgetPyAnimation1.gif'
import CLIDnDAnimation1 from '../resources/ProjectAnimations/CLIDnDAnimation1.gif'
import GPComAnimation1 from '../resources/ProjectAnimations/gpComAnimation1.gif'
import graphJSAnimation1 from '../resources/ProjectAnimations/graphJSAnimation1.gif'
import javaTodoAnimation1 from '../resources/ProjectAnimations/javaTodoAnimation1.gif'
import pythonRogueAnimation1 from '../resources/ProjectAnimations/pythonRogueAnimation1.gif'
import smAnimation1 from '../resources/ProjectAnimations/smAnimation1.gif'
import topoGlobeAnimation1 from '../resources/ProjectAnimations/topoGlobeAnimation1.gif'

export default function(props){
    const projectPages = {
        "Budget.web":{
            "detailsBlock":{
                "title":"Budget.web",
                "description":"Personal Finance App",
                "frontendLink":'https://github.com/griftheorange/budget_web_py_frontend',
                "backendLink":'https://github.com/griftheorange/budget_web_py_backend',
                "repo":null,
                "videoDemo":null,
                "blogArticle":null,
                "devTools":DevTools.budgetWeb
            },
            "animationBlock":budgetPyAnimation1,
            "summaryBlock":TextBlocks.budgetWeb,
            "settupBlock":SettupBlocks.budgetWeb,
            "featuresBlock":FeaturesBlock.budgetWeb,
            "componentsBlock":ComponentsBlock.budgetWeb
        },
        "SeisMix":{
            "detailsBlock":{
                "title":"SeisMix",
                "description":"USGS Seismic Event Tracker",
                "frontendLink":'https://github.com/griftheorange/sm-frontend',
                "backendLink":'https://github.com/griftheorange/sm-backend',
                "repo":null,
                "videoDemo":'https://www.youtube.com/watch?v=fy93QL0LiVM&feature=youtu.be',
                "blogArticle":null,
                "devTools":DevTools.seisMix
            },
            "animationBlock":smAnimation1,
            "summaryBlock":TextBlocks.seisMix,
            "settupBlock":SettupBlocks.seisMix,
            "featuresBlock":FeaturesBlock.seisMix,
            "componentsBlock":ComponentsBlock.seisMix
        },
        "GP.com":{
            "detailsBlock":{
                "title":"GP.com",
                "description":"Personal Landing Page",
                "frontendLink":'https://github.com/griftheorange/gp_dot_com_2.0',
                "backendLink":null,
                "repo":null,
                "videoDemo":null,
                "blogArticle":null,
                "devTools":DevTools.gpCom
            },
            "animationBlock":GPComAnimation1,
            "summaryBlock":TextBlocks.gpCom,
            "settupBlock":SettupBlocks.gpCom,
            "featuresBlock":FeaturesBlock.gpCom,
            "componentsBlock":ComponentsBlock.gpCom
        },
        "TopoGlobe":{
            "detailsBlock":{
                "title":"TopoGlobe",
                "description":"Geographic Plotting in React",
                "frontendLink":'https://github.com/griftheorange/topojson-test',
                "backendLink":null,
                "repo":null,
                "videoDemo":null,
                "blogArticle":'https://medium.com/better-programming/topojson-geojson-and-projections-developing-interactive-map-visuals-for-web-apps-79e2d50abb19?source=friends_link&sk=1efcd7cd0a58d2bc38196ac02dc98ef6',
                "devTools":DevTools.topoGlobe
            },
            "animationBlock":topoGlobeAnimation1,
            "summaryBlock":TextBlocks.topoGlobe,
            "settupBlock":SettupBlocks.topoGlobe,
            "featuresBlock":FeaturesBlock.topoGlobe,
            "componentsBlock":ComponentsBlock.topoGlobe
        },
        "Graph.js":{
            "detailsBlock":{
                "title":"Graph.js",
                "description":"Custom Graph Generator",
                "frontendLink":'https://github.com/griftheorange/graph-JS-frontent',
                "backendLink":'https://github.com/griftheorange/graph-JS-backend',
                "repo":null,
                "videoDemo":'https://youtu.be/ua4csPpWLk8',
                "blogArticle":'https://medium.com/better-programming/d3-responsive-and-dynamic-visualizations-for-data-and-other-easy-recipes-68e37b451822?source=friends_link&sk=1f369ccf8c1108d2d753e3908f6ec85d',
                "devTools":DevTools.graphJS
            },
            "animationBlock":graphJSAnimation1,
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
                "repo":'https://github.com/griftheorange/module-one-final-project-guidelines-dumbo-web-102819',
                "videoDemo":null,
                "blogArticle":null,
                "devTools":DevTools.CLIDnD
            },
            "animationBlock":CLIDnDAnimation1,
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
                "repo":'https://github.com/griftheorange/python_roguelike',
                "videoDemo":null,
                "blogArticle":null,
                "devTools":DevTools.pythonRogue
            },
            "animationBlock":pythonRogueAnimation1,
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
                "repo":'https://github.com/griftheorange/Java-TodoList',
                "videoDemo":null,
                "blogArticle":null,
                "devTools":DevTools.javaTodo
            },
            "animationBlock":javaTodoAnimation1,
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