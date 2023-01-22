const UserList = require('../../data/userList')
const user = new UserList()
class GuideLogin {
    userLogin (userName){
        let username = user.getUserName(userName)
        cy.get('input[id="identifierInput"]').type(username.email);
    }
}

module.exports = GuideLogin