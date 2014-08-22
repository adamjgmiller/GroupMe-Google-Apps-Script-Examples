// Core file to enable a range of GroupMe Bots
// Goal is for this Base to enable both regular Script activity posting out as well as inbound activity from GroupMe for every request GroupMe sends to the script.


var botId = "your bot id here";
function sendText(text){
  UrlFetchApp.fetch("https://api.groupme.com/v3/bots/post", {"method":"post", "payload":'{"bot_id":"' + botId + '","text":"' + text + '"}'})
}

function sendImage(text, imageURL){
  UrlFetchApp.fetch("https://api.groupme.com/v3/bots/post", {"method":"post", "payload":'{"bot_id":"' + botId + '","text":"' + text + '","attachments":[{"type":"image","url":"' + imageURL + '"}]}'})
}

//respond to messages sent to the group. Recieved as POST 
function doPost(e){
  var post = JSON.parse(e.postData.getDataAsString());
    
    // Need to add more of the structure of the JSON received from GroupMe
    // That way, it will be almost plug and play to grab what the bot is looking for, then call on, for example, a function in your own Branch/version, and then to give whatever message back based on data returned in these external functions.
    
  var text = post.text;
  
    // Is this - below - just one example of how to look for commands? I think I've got the gist here. -Thriller (replace this comment with header for below)
    
  //check if user entered command '!time'
  //if so respond with the time
  if(text.toLowerCaser().substring(0, 5) == "!time"){
    sendText("5:03 PM");
  }
    
}
