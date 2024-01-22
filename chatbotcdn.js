document.write(
    '<div style="position: absolute; bottom: 10px; right: 10px;">' +
    '<div id="chatbox" style="height: 500px; width: 400px; background-color: aqua;border-radius: 20px; visibility: hidden;">' +
    '</div>' +
    '<div id="chaticon">' +
    '<img src="chat-bubble.png" style="height: 50px;width: 50px; right: 0;margin-top: 20px;" />' +
    '</div>' +
    '<script>' +
    'document.getElementById("chaticon").addEventListener("click", displayDate);' +
    'function displayDate() {' +
    '    var chatbox = document.getElementById("chatbox");' +
    '    var currentVisibility = chatbox.style.visibility;' +
    '    if (currentVisibility === "visible") {' +
    '        chatbox.style.visibility = "hidden";' +
    '    } else {' +
    '        chatbox.style.visibility = "visible";' +
    '    }' +
    '}' +
    '</script>' +
    '</div>'
);
