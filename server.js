const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const classes = {
    "hero": {
            "id": "1",
            "description": "A stalwart Hero, at home with a battleaxe, descended from a badlands chieftain",
            "stats": {
                "level": "7",
                "vigor": "14",
                "mind": "9",
                "endurance": "12",
                "strength": "16",
                "dexterity": "9",
                "intelligence": "7",
                "faith": "8",
                "arcane": "11"
            }
        },
    "warrior": {
            "id": "2",
            "description": "A twinblade wielding warrior from a nomadic tribe. An origin of exceptional technique",
            "stats": {
                "level": "8",
                "vigor": "11",
                "mind": "12",
                "endurance": "11",
                "strength": "10",
                "dexterity": "16",
                "intelligence": "10",
                "faith": "8",
                "arcane": "9"
            }
        },
    "unknown": {
            "id": "0"
        }
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/classes/:class',(request,response)=>{
    const className = request.params.class.toLowerCase()

    if( classes[className] ){
        response.json( classes[className] )
    }else{
        response.json( classes['unknown'] )
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})