const notifications = [
  { app: "Zomato", text: "Your diet starts tomorrow... Order now!", icon: "https://images.seeklogo.com/logo-png/35/2/zomato-logo-png_seeklogo-354338.png" },
  { app: "Zomato", text: "Reminder: Happiness is just a biryani away", icon: "https://images.seeklogo.com/logo-png/35/2/zomato-logo-png_seeklogo-354338.png" },
  { app: "Swiggy", text: "Hungry? Or just bored? Either way, I got you", icon: "https://w7.pngwing.com/pngs/717/559/png-transparent-swiggy-office-business-chief-executive-online-food-ordering-logo-business-food-text-service-thumbnail.png" },
  { app: "Swiggy", text: "Your cravings are powerful. Use them wisely", icon: "https://w7.pngwing.com/pngs/717/559/png-transparent-swiggy-office-business-chief-executive-online-food-ordering-logo-business-food-text-service-thumbnail.png" },
  { app: "Duolingo", text: "Lesson missed. Duo is disappointed", icon: "https://e7.pngegg.com/pngimages/1007/388/png-clipart-duolingo-full-logo-tech-companies.png" },
  { app: "Duolingo", text: "Your streak is crying in a corner", icon: "https://e7.pngegg.com/pngimages/1007/388/png-clipart-duolingo-full-logo-tech-companies.png" },
  { app: "Gmail", text: "New message from Riya: 'Let's sync tomorrow'", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" },
  { app: "Gmail", text: "Monthly newsletter: 5 productivity hacks", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" },
  { app: "Slack", text: "You were mentioned in #dev: Can you review the PR?", icon: "https://a.slack-edge.com/80588/marketing/img/meta/favicon-32.png" },
  { app: "Slack", text: "Standup in 10 minutes — join the channel", icon: "https://a.slack-edge.com/80588/marketing/img/meta/favicon-32.png" },
  { app: "Calendar", text: "Event starting: 'Interview with Ankit' in 15 min", icon: "https://www.gstatic.com/images/branding/product/1x/calendar_48dp.png" },
  { app: "Calendar", text: "Weekly review: add action items", icon: "https://www.gstatic.com/images/branding/product/1x/calendar_48dp.png" },
  { app: "Twitter", text: "Your tweet got 100 likes — trending!", icon: "https://abs.twimg.com/favicons/twitter.ico" },
  { app: "Twitter", text: "New follower: dev_girl", icon: "https://abs.twimg.com/favicons/twitter.ico" },
  { app: "Spotify", text: "New release by your favorite artist", icon: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Icon_RGB_Green.png" },
  { app: "Spotify", text: "Your daily mix is ready", icon: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Icon_RGB_Green.png" },
  { app: "WhatsApp", text: "Missed call from Mom", icon: "https://www.freepnglogos.com/uploads/whatsapp-logo-png-hd-2.png" },
  { app: "WhatsApp", text: "New message: 'Where are you?'", icon: "https://www.freepnglogos.com/uploads/whatsapp-logo-png-hd-2.png" },
  { app: "Reddit", text: "Your post was gilded in r/javascript", icon: "https://www.redditstatic.com/desktop2x/img/favicon/favicon-32x32.png" },
  { app: "Reddit", text: "1 new comment on your thread", icon: "https://www.redditstatic.com/desktop2x/img/favicon/favicon-32x32.png" },
  { app: "LinkedIn", text: "John viewed your profile", icon: "https://static.licdn.com/sc/h/8w7z9g2t6dc1z6s8w5j0v6b6c" },
  { app: "LinkedIn", text: "Job suggestion: Frontend Engineer — nearby", icon: "https://static.licdn.com/sc/h/8w7z9g2t6dc1z6s8w5j0v6b6c" },
  { app: "Instagram", text: "New story from travel.adventures", icon: "https://instagram.com/static/images/ico/favicon-200.png/ab6eff595bb1.png" },
  { app: "Instagram", text: " Someone liked your photo", icon: "https://instagram.com/static/images/ico/favicon-200.png/ab6eff595bb1.png" },
  { app: "Netflix", text: "New episode of 'Night City' available", icon: "https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.png" },
  { app: "GPay", text: "Payment received: ₹450 from Aakash", icon: "https://www.gpay.com/favicon.ico" },
  { app: "Uber", text: "Your ride has arrived — green Toyota Etios", icon: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_32,h_32/v1640371882/icons/favicon.png" },
  { app: "Paytm", text: "Cashback of ₹50 credited!", icon: "https://play-lh.googleusercontent.com/0v4bP7coH2Vq0n-BgXxV3l6xKMvP7o5Zb3Z66QWzb4fHo3b6Qq0Xvnu0QwWyq3tJ8rA" },
  { app: "Medium", text: "New story: 'How I built a tiny company'", icon: "https://miro.medium.com/fit/c/48/48/1*1V6aY73fOQ0rQx2f1Yw6TA.png" },
  { app: "StackOverflow", text: "Your answer was accepted — +15 reputation", icon: "https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico" },
  { app: "Telegram", text: "New message in 'CodeTalks' channel", icon: "https://telegram.org/img/t_logo.png" },
  { app: "Fitness", text: "Goal completed: 10k steps today — nice!", icon: "https://cdn-icons-png.flaticon.com/512/727/727399.png" },
  { app: "Weather", text: "Rain expected tomorrow — carry an umbrella", icon: "https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png" },
  { app: "Bank", text: "OTP: 784512 — do not share with anyone", icon: "https://image.flaticon.com/icons/png/512/69/69524.png" },
  { app: "Todoist", text: "2 overdue tasks — quick wins available", icon: "https://d3ptyyxy2at9ui.cloudfront.net/icons/256x256/todoist.png" }
];

const sendOnceBtn = document.getElementById("sendOnceBtn");
const autoSendToggle = document.getElementById("autoSendToggle");
const intervalInput = document.getElementById("intervalInput");
const appFilter = document.getElementById("appFilter");
const previewIcon = document.getElementById("previewIcon");
const previewTitle = document.getElementById("previewTitle");
const previewBody = document.getElementById("previewBody");
const previewCard = document.getElementById("previewCard");
const historyList = document.getElementById("historyList");
const sentCountEl = document.getElementById("sentCount");
const historyCountEl = document.getElementById("historyCount");
const legendEl = document.getElementById("legend");
const silentToggle = document.getElementById("silentToggle");
const vibrateToggle = document.getElementById("vibrateToggle");

let autoIntervalId = null;
let sentCount = 0;
let history = [];

const apps = Array.from(new Set(notifications.map(n => n.app))).sort();
apps.forEach(a => {
  const opt = document.createElement("option");
  opt.value = a;
  opt.textContent = a;
  appFilter.appendChild(opt);

  const chip = document.createElement("div");
  chip.className = "chip";
  const firstIcon = notifications.find(n => n.app === a).icon;
  chip.innerHTML = `<img src="${firstIcon}" alt="${a}"/> ${a}`;
  legendEl.appendChild(chip);
});

function pickRandom(filtered = notifications) {
  return filtered[Math.floor(Math.random() * filtered.length)];
}
function formatTime(ts = Date.now()) {
  const d = new Date(ts);
  return d.toLocaleString();
}

const notificationSupported = "Notification" in window;
async function ensurePermission() {
  if (!notificationSupported) return false;
  if (Notification.permission === "granted") return true;
  try {
    const result = await Notification.requestPermission();
    return result === "granted";
  } catch (e) {
    console.warn("Permission request failed:", e);
    return false;
  }
}

function playBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.value = 880;
    g.gain.value = 0.05;
    o.connect(g);
    g.connect(ctx.destination);
    o.start();
    setTimeout(() => {
      o.stop();
      ctx.close();
    }, 120);
  } catch (e) {
  }
}

function sendNotification(note) {
  const title = `${note.app} — Notification`;
  const options = { body: note.text, icon: note.icon };
  if (notificationSupported && Notification.permission === "granted") 
    {
    try {
      const n = new Notification(title, options);
      n.onclick = () => window.focus();
    } catch (e) {
      console.warn("Notification create failed:", e);
    }
  } else {
    flashPreview();
  }
  if (vibrateToggle.checked && navigator.vibrate) 
  {
    navigator.vibrate(120);
  }
  if (!silentToggle.checked) playBeep();
  const item = { note, ts: Date.now() };
  history.unshift(item);
  updateHistory();
  sentCount++;
  sentCountEl.textContent = sentCount;
}

function flashPreview() 
{
  previewCard.style.transition = "box-shadow .18s";
  previewCard.style.boxShadow = "0 8px 40px rgba(14,165,160,0.18)";
  setTimeout(() => previewCard.style.boxShadow = "", 300);
}

function updatePreview() 
{
  const filter = appFilter.value;
  const filtered = filter === "all" ? notifications : notifications.filter(n => n.app === filter);
  const next = pickRandom(filtered);
  previewIcon.src = next.icon;
  previewTitle.textContent = `${next.app} Notification`;
  previewBody.textContent = next.text;
}

function updateHistory() 
{
  historyList.innerHTML = "";
  history.slice(0, 200).forEach(entry => {
    const el = document.createElement("div");
    el.className = "history-item";
    el.innerHTML = `
      <img src="${entry.note.icon}" alt="${entry.note.app}" />
      <div class="meta">
        <div style="font-weight:700">${entry.note.app}</div>
        <div class="time">${entry.note.text}</div>
        <div class="time muted" style="font-size:0.78rem;margin-top:6px">${formatTime(entry.ts)}</div>
      </div>
    `;
    historyList.appendChild(el);
  });
  historyCountEl.textContent = history.length;
}

sendOnceBtn.addEventListener("click", async () => 
  {
  if (notificationSupported && Notification.permission !== "granted") 
  {
    const ok = await ensurePermission();
    if (!ok) {
      alert("Please allow notification permissions to use native notifications.");
      return;
    }
  }
  const filter = appFilter.value;
  const filtered = filter === "all" ? notifications : notifications.filter(n => n.app === filter);
  const n = pickRandom(filtered);
  sendNotification(n);
  updatePreview();
});

function startAutoSend() 
{
  const intervalSec = Math.max(1, Number(intervalInput.value) || 5);
  if (autoIntervalId) clearInterval(autoIntervalId);
  autoIntervalId = setInterval(() => 
    {
    if (notificationSupported && Notification.permission !== "granted") 
      {
      ensurePermission().then(ok => 
        {
        if (!ok) {
          const filter = appFilter.value;
          const filtered = filter === "all" ? notifications : notifications.filter(n => n.app === filter);
          sendNotification(pickRandom(filtered));
        }
      });
    } else {
      const filter = appFilter.value;
      const filtered = filter === "all" ? notifications : notifications.filter(n => n.app === filter);
      sendNotification(pickRandom(filtered));
    }
    updatePreview();
  }, intervalSec * 1000);
}

function stopAutoSend() {
  if (autoIntervalId) {
    clearInterval(autoIntervalId);
    autoIntervalId = null;
  }
}

autoSendToggle.addEventListener("change", () => {
  if (autoSendToggle.checked) startAutoSend(); else stopAutoSend();
});

intervalInput.addEventListener("change", () => {
  if (autoSendToggle.checked) {
    startAutoSend();
  }
});

appFilter.addEventListener("change", () => {
  updatePreview();
});

(function init() 
{
  updatePreview();
  sentCountEl.textContent = sentCount;
  historyCountEl.textContent = history.length;
  if (!notificationSupported) 
  {
    alert("This browser does not support the Notification API. You will still see in-page notifications.");
  } 
  else if (Notification.permission === "default") 
  {
    Notification.requestPermission().catch(()=>{});
  }
})();