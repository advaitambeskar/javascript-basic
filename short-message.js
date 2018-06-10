function getShortMessages(messages){
    let array1 = [];
    messages.forEach(x => {
        if(x.message.length<51){
            array1.push(x.message);
        }
    });
    return array1;
}

module.exports = getShortMessages;