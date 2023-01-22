const data = require('../../fixtures/testUsers.json')
console.log(typeof(data.AMBETTER_EMBARK))
class UserList {
    getUserName(userName){
        return data[userName]
    }
}
 module.exports = UserList