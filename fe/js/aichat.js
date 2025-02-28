// const sendButton = document.getElementById("sendButton");
const sendButton = $("#sendButton");
const userInput = $("#userInput");
const messagesDiv = $("#messages");

console.log(sendButton);
sendButton.click(function() {
    console.log("click");
}
//     async () => {
//     const userMessage = userInput.val();
//     console.log(userMessage);
//     if (!userMessage) return;
//     // 显示用户消息
//     messagesDiv.innerHTML += `<div class="message user-message">用户: ${userMessage}</div>`;
//     userInput.value = "";
  
//     // 发送请求到后端
//     try {
//       const response = await fetch("http://localhost:3000/api/chat", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ message: userMessage }),
//       });
  
//       const data = await response.json();
//       // 显示AI回复
//       messagesDiv.innerHTML += `<div class="message ai-message">AI: ${data.reply}</div>`;
//       messagesDiv.scrollTop = messagesDiv.scrollHeight; // 滚动到最新消息
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }
);