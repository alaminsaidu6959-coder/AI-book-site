<!doctype html>
<html lang="ha">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Build Your First AI Website - Al-amin Saidu</title>
  <link rel="stylesheet" href="style.css">
</head>
<body class="dark">
  <main class="cover-page">
    <div class="cover-image-wrapper">
      <!-- Saka hoton cover: cover.jpg -->
      <img src="cover.jpg" alt="Book Cover" class="cover-img">
      <div class="cover-overlay">
        <h1 class="title">Build Your First AI Website</h1>
        <p class="subtitle">(Hausa Step-by-Step Guide)</p>
        <p class="byline">✍️ By Al-amin Saidu</p>
        <p class="quote">“Ilmi shi ne ƙarfi — AI ke ƙarfafa shi.”</p>
        <a class="read-btn" href="read.html">📖 Karanta Littafin</a>
      </div>
    </div>

    <button id="chat-toggle" class="chat-toggle" aria-label="Open Chatbot">💬</button>
    <div id="chatbox" class="chatbox">
      <div class="chat-header">Chatbot - Tambaya a Hausa <span id="chat-close">✕</span></div>
      <div id="chat-messages" class="chat-messages"></div>
      <div class="chat-input">
        <input id="chat-input" type="text" placeholder="Rubuta tambayarka..." />
        <button id="chat-send">Aika</button>
      </div>
    </div>

    <footer class="site-footer">© 2025 Al-amin Saidu</footer>
  </main>

  <script src="script.js"></script>
</body>
</html> 
<!doctype html>
<html lang="ha">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Read - Build Your First AI Website</title>
  <link rel="stylesheet" href="style.css">
</head>
<body class="dark read-page">
  <nav class="topbar">
    <a href="index.html" class="back">← Baya</a>
    <h2 class="nav-title">Build Your First AI Website</h2>
  </nav>

  <article class="book-content">
    <h1>Gabatarwa</h1>
    <p>A wannan littafi zaka koya mataki-mataki yadda ake gina AI website daga tushe har zuwa lokacin da zata yi aiki. Littafin yana da sauƙi, musamman ga masu farawa.</p>

    <h2>Sashe na 1: Fahimtar AI</h2>
    <p>AI (Artificial Intelligence) na nufin kwamfuta mai koyo kamar mutum. Ana koya mata ta amfani da bayanai (data) domin ta iya yin abu kai tsaye.</p>

    <h2>Sashe na 2: Shirye-shiryen farko</h2>
    <p>Kafin ka fara, kana bukatar abubuwa uku: kwamfuta ko wayar Android, intanet, da code editor.</p>

    <h2>Sashe na 3: Fara da HTML</h2>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;AI Website&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Barka da zuwa AI Website!&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

    <h2>Sashe na 4: CSS</h2>
    <p>Yi amfani da CSS don gyara kamanni.</p>

    <h2>Sashe na 5: JavaScript & Chatbot</h2>
    <p>A ƙasa akwai chatbot mai amsa tambayoyi a Hausa (a sami chatbox a wannan shafi).</p>

    <h2>Kammalawa</h2>
    <p>Ka gina website naka daga tushe har zuwa AI chatbot. Ci gaba da bincike da gyara.</p>

    <footer class="book-footer">© 2025 Al-amin Saidu</footer>
  </article>

  <button id="chat-toggle-2" class="chat-toggle" aria-label="Open Chatbot">💬</button>
  <div id="chatbox-2" class="chatbox">
    <div class="chat-header">Chatbot - Tambaya a Hausa <span id="chat-close-2">✕</span></div>
    <div id="chat-messages-2" class="chat-messages"></div>
    <div class="chat-input">
      <input id="chat-input-2" type="text" placeholder="Rubuta tambayarka..." />
      <button id="chat-send-2">Aika</button>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html> 
:root{
  --bg:#0b0f17;
  --panel:#0f1724;
  --accent:#3fb0ff;
  --muted:#9aa9bf;
  --glow: 0 8px 30px rgba(63,176,255,0.18);
  --glass: rgba(255,255,255,0.03);
  font-family: "Poppins", Arial, sans-serif;
}

*{box-sizing:border-box}
body.dark{
  margin:0;
  background: linear-gradient(180deg, #05060a 0%, #0b0f17 100%);
  color:#e6f0ff;
  min-height:100vh;
}

.cover-page .cover-image-wrapper{
  position:relative;
  width:100%;
  height:100vh;
  overflow:hidden;
  display:flex;
  align-items:center;
  justify-content:center;
}

.cover-img{
  position:absolute;
  top:0; left:0;
  width:100%;
  height:100%;
  object-fit:cover;
  filter:brightness(0.45) contrast(1.05);
  transform:scale(1.02);
}

.cover-overlay{
  position:relative;
  z-index:2;
  text-align:center;
  padding:30px;
  max-width:900px;
}

.title{
  font-size:44px;
  color:var(--accent);
  margin:0 0 8px 0;
  text-shadow: 0 6px 30px rgba(63,176,255,0.12);
}

.subtitle{
  color:var(--muted);
  margin:0 0 10px 0;
}

.byline{ margin:8px 0; color:#cfeeff; font-weight:600;}
.quote{ color:#bcdcff; font-style:italic; margin:10px 0 18px 0; }

.read-btn{
  display:inline-block;
  background: linear-gradient(90deg,var(--accent),#4dafff);
  color:#00121a;
  padding:12px 22px;
  border-radius:10px;
  font-weight:700;
  text-decoration:none;
  box-shadow: var(--glow);
  transition:transform .18s ease;
}
.read-btn:hover{ transform:translateY(-4px); }

.site-footer{
  position:fixed;
  left:16px;
  bottom:12px;
  color:var(--muted);
  font-size:13px;
  z-index:9;
}

/* Chatbox */
.chat-toggle{
  position:fixed;
  right:18px;
  bottom:18px;
  width:56px;height:56px;
  border-radius:50%;
  border:0;
  background:linear-gradient(180deg,var(--accent),#34a7ff);
  color:#001;
  font-size:22px;
  cursor:pointer;
  z-index:999;
  box-shadow: 0 6px 30px rgba(63,176,255,0.22);
}

.chatbox{
  position:fixed;
  right:18px;
  bottom:90px;
  width:320px;
  max-width:92%;
  background:var(--panel);
  border-radius:12px;
  overflow:hidden;
  display:none;
  box-shadow: 0 20px 50px rgba(0,0,0,0.6);
  z-index:999;
}

.chat-header{
  padding:10px 12px;
  background:linear-gradient(90deg, rgba(63,176,255,0.06), rgba(77,175,255,0.02));
  color:var(--accent);
  font-weight:700;
}
.chat-messages{
  padding:12px;
  max-height:260px;
  overflow:auto;
  color:#d9f0ff;
  font-size:14px;
}
.chat-input{ display:flex; gap:8px; padding:10px; background:var(--glass); }
.chat-input input{
  flex:1; padding:8px 10px; border-radius:8px; border:1px solid rgba(255,255,255,0.05);
  background:transparent; color: #e6f0ff;
}
.chat-input button{
  background:var(--accent); border:0; padding:8px 12px; border-radius:8px; font-weight:700; cursor:pointer;
}

/* Read page */
.read-page .topbar{
  display:flex; align-items:center; gap:12px; padding:14px 18px; background:transparent;
}
.back{ color:var(--muted); text-decoration:none; font-weight:600; }
.nav-title{ margin:0; color:#dff5ff; font-size:18px; }

.book-content{
  max-width:900px;
  margin:20px auto;
  background: rgba(255,255,255,0.01);
  padding:28px;
  border-radius:12px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.6);
  color:#eaf6ff;
}

.book-content h1, .book-content h2{ color:var(--accent); }
.book-content pre{ background:#071024; padding:12px; border-radius:8px; overflow:auto; color:#cfeeff; }

/* Responsive */
@media (max-width:720px){
  .title{ font-size:28px; }
  .cover-overlay{ padding:18px; }
  .chatbox{ width:92%; right:4%; bottom:84px; }
}
