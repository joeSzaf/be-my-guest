const Model = require("./Model")

class Event extends Model {
    static get tableName() {
      return "events"
    }
  
    static get jsonSchema() {
      return {
        type: "object",
        required: ["name"],
        properties: {
          name: { type: "string", minLength: 1, maxLength: 50 },
          eventsInfo: { type: "json" },
          description: { type: "string", minLength: 1, maxLength: 255 },
          userId: { type: ["integer", "string"] }
        }
      }
    }
  
    static get relationMappings() {
        const { User } = require('./index')
    
        return {
          user: {
            relation: Model.BelongsToOneRelation,
            modelClass: User,
            join: {
              from: 'events,userId',
              to: 'users.id'
            }
          }
        }
      }
  }
  
  module.exports = Event
  