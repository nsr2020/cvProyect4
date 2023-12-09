import data from './public/src/data/cvinfo'


import { createHeader } from './public/src/functions/functionHeader/functionHeader.js'
import { createFooter } from './public/src/functions/functionFooter/functionFooter.js'
import { createHero } from './public/src/functions/functionHero/functionHero.js'
import { createPersonalInfo } from './public/src/functions/funPersonal/funPersonal.js'
import { createProjects } from './public/src/functions/functionProjects/functionProjects.js'
import './style.css'





//Ejcución de funcion del Header
createHeader()
createHero()
createPersonalInfo()
createProjects()

createFooter()

