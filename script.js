function $(s){return document.querySelector(s)}
const chatToggle=$('#chat-toggle'),chatBox=$('#chatbox'),chatClose=$('#chat-close'),chatMessages=$('#chat-messages'),chatInput=$('#chat-input'),chatSend=$('#chat-send');
function appendMessage(container,who,text){
 const el=document.createElement('div');
 el.innerHTML=`<strong>${who==='bot'?'Bot':'Kai'}:</strong> <span style="margin-left:8px">${text}</span>`;
 container.appendChild(el);
 container.scrollTop=container.scrollHeight;
}
function botReply(msg){
 if(!msg)return"Sannu! Yaya zan taimaka?";
 msg=msg.toLowerCase();
 if(msg.includes('sannu')||msg.includes('assalamu'))return"Wa'alaikumussalam! Ina taimaka maka?";
 if(msg.includes('ai'))return"AI (Artificial Intelligence) na nufin kwamfuta mai koyo kamar mutum.";
 if(msg.includes('github'))return"GitHub wuri ne da ake adana code online.";
 if(msg.includes('netlify'))return"Netlify na taimakawa wajen ɗora website cikin sauƙi.";
 if(msg.includes('na gode')||msg.includes('nagode'))return"Alhamdulillah!";
 return"Ban fahimta sosai ba. Tambaya ta daban?";
}
chatToggle.addEventListener('click',()=>chatBox.style.display='block');
document.body.addEventListener('click',e=>{if(e.target.id==='chat-close')chatBox.style.display='none'});
chatSend.addEventListener('click',()=>{
 const text=chatInput.value.trim();
 if(!text)return;
 appendMessage(chatMessages,'kai',text);
 const reply=botReply(text);
 setTimeout(()=>appendMessage(chatMessages,'bot',reply),400);
 chatInput.value='';
});
chatInput.addEventListener('keypress',e=>{if(e.key==='Enter')chatSend.click()});