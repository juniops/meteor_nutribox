let _decideIfShowHeader = (previousMessage, message) => {
    console.log(message.owner)
    console.log(Meteor.userId())
    message.showHeader =  message.owner === Meteor.userId()
};

let _mapMessages = (messages) => {
    let previousMessage;
    return messages.map((message) => {
        _decideIfShowHeader(previousMessage, message);
        previousMessage = message;
        return message;
    });
};

export default function (messages) {
    return _mapMessages(messages);
}
