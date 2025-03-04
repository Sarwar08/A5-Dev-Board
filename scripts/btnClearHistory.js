document.getElementById('clear-history').addEventListener('click', function(){
    console.log("btn clicked");
    
    const messageParentDiv = document.getElementById('activity-log-message');
    console.log(messageParentDiv.innerHTML);
    
    messageParentDiv.innerHTML = "";
})