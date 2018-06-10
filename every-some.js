function checkUsersValid(goodUsers){
    //console.log(goodUserList);
    return function (testAllValid){
        //console.log(submittedUserList);
        return testAllValid.every(function water(someUser){
            return goodUsers.some(function waters(goodUser){
                return goodUser === someUser;
            })
        })
    }
}
module.exports = checkUsersValid;