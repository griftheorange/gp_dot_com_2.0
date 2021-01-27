import budgetPyComponentTree from '../../../resources/ProjectComponentDiagrams/budgetPyComponentTree.png'
import budgetPyRouteTree from '../../../resources/ProjectComponentDiagrams/budgetPyRouteTree.png'
import gpComComponentTree from '../../../resources/ProjectComponentDiagrams/gpComComponentTree.png'
import graphJSComponentTree from '../../../resources/ProjectComponentDiagrams/graphJSComponentTree.png'
import graphJSRouteTree from '../../../resources/ProjectComponentDiagrams/graphJSRouteTree.png'
import javaTodoComponentTree from  '../../../resources/ProjectComponentDiagrams/javaTodoComponentTree.png'
import smComponentTree from '../../../resources/ProjectComponentDiagrams/smComponentTree.png'
import smRouteTree from '../../../resources/ProjectComponentDiagrams/smRouteTree.png'
import topoGlobeComponentTree from '../../../resources/ProjectComponentDiagrams/topoGlobeComponentTree.png'

class TextBlocks {
    static seisMix = {
        'Frontend - React Components':smComponentTree,
        'Backend - Rails Restful Routes':smRouteTree
    }

    static budgetWeb = {
        'Frontend - React Components':budgetPyComponentTree,
        'Backend - Flask Custom Routes':budgetPyRouteTree
    }

    static gpCom = {
        'Frontend - React Components':gpComComponentTree
    }

    static topoGlobe = {
        'Frontend - React Components':topoGlobeComponentTree
    }

    static graphJS = {
        'Frontend - Javascript Files':graphJSComponentTree,
        'Backend -  Rails Restful Routes':graphJSRouteTree
    }

    static javaTodo = {
        'Java Files':javaTodoComponentTree
    }

    static CLIDnD = null

    static pythonRogue = null
}

export default TextBlocks