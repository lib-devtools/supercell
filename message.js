const predefinedMessages = [
  "Does this really work or am I wasting my time?",
  "Yeah it works bro, I literally got my reward like 10 minutes ago.",

  "I'm stuck on the last task, do I have to play the full 5 minutes?",
  "Yes dude, you HAVE to play the full 5 minutes or it won’t register.",

  "Why does the app say play 3 games? That’s a lot lol.",
  "It’s easy man, each one is only 5 minutes. Just grind it out.",

  "Anyone else doing the Helium Mobile one?",
  "Yeah I did it, just subscribe to the Zero Plan, it’s free.",

  "Does TikTok really count after 30 seconds?",
  "Yep, open it and chill for half a minute, that's it.",

  "Mine still says ‘verifying’, is that normal?",
  "Totally normal dude, sometimes it takes a few minutes.",

  "Do I need to keep the apps installed after finishing?",
  "Nope, ",

  "Bro I’ve been waiting forever.",
  "Relax, mine popped up randomly after like 4 minutes.",

  "Is anyone else from outside the US doing this?",
  "Yeah I’m from Canada and it still worked for me.",

  "I completed everything but my reward didn't show up.",
  "Same here earlier, just waited a bit and it suddenly appeared.",

  "How long do I have to stay inside the game?",
  "Like 5 minutes each bro, don’t leave early.",

  "I’m lowkey nervous this won’t work lol.",
  "Haha nah bro, just finish the tasks. It’s legit.",

  "The last game isn't tracking my time.",
  "Make sure you don’t lock your phone or switch apps.",

  "Yo I just finished the last task!",
  "Nice!! Now wait like 2–5 mins and it should hit.",

  "LET’S GOOOOO I GOT MINE!",
  "Told you!! Congrats man.",

  "Why is the last step always the hardest?",
  "Because that’s the one that verifies you're real lol.",

  "Should I refresh the page or just wait?",
  "Just wait bro, refreshing does nothing.",

  "I'm sweating waiting for this reward lmao.",
  "Same bro, the suspense is wild.",

  "Are the apps safe tho?",
  "Yeah dude, used them, deleted them, all good.",

  "My progress stuck at 90%... someone help.",
  "Mine froze too but then jumped to 100% out of nowhere.",

  "Does this work on iPhone?",
  "Yep, works on both iPhone and Android.",

  "Can I do this more than once?",
  "Probably once per account but you can try.",

  "I'm confused... after installing, do I need to open the app?",
  "YES bro, you MUST open it and use it for a bit.",

  "Anyone else grinding tasks right now?",
  "I’m literally in the middle of the last one lol.",

  "Just got my reward omggg!",
  "Congrats!!! Enjoy it!",

  "Does using a VPN mess it up?",
  "Yeah don’t use one, it sometimes breaks tracking.",

  "I messed up a task I think.",
  "Just redo it, it’ll still track you.",

  "Where does the reward even show up?",
  "In your account instantly once verified.",

  "Bro I almost gave up.",
  "Same, then boom—reward popped out of nowhere.",

  "This site is actually legit??",
  "Surprisingly yeah dude, it’s the only one that worked for me.",

  "I’m still waiting… hope it comes soon.",
  "It will bro, give it a minute.",

  "REWARD RECEIVED LET’S GOOOOO!!",
  "Yooo congrats man!!!",

  "Is it normal for the loading screen to stay long?",
  "Yep, that means it’s tracking the task.",

  "Done installing everything!",
  "Cool, now complete the time requirements.",

  "Do I need to interact with the app or just open it?",
  "Interact a bit, scroll, tap—just look active.",

  "Does it take longer at night?",
  "Sometimes yeah but it still works.",

  "I swear I tried everything online and nothing ever works.",
  "Same bro, this is the first legit one I found.",

  "Guys slow down, don’t skip steps.",
  "Facts, skipping steps is why it doesn’t track.",

  "Anyone else hyped rn?",
  "Bro I’m shaking, this better hit soon lol.",

  "Finally done! Now waiting...",
  "Almost there man, don’t close anything.",

  "Reward appeared after 3 minutes!!!",
  "Yesssir welcome to the club!",

  "I'm from Europe, does it work for me?",
  "Yeah tons of people outside the US got it.",

  "Does closing the app ruin progress?",
  "Yep, stay inside until the timer completes.",

  "Just completed the Zero Plan subscription.",
  "Nice! That one usually registers fast.",

  "Is the reward permanent?",
  "Yeah once it's in your account it's yours.",

  "OMG IT JUST POPPED UP I’M LOSING IT",
  "HAHA told you bro, enjoy!"  ,

  "Does this really work or is it just another fake site?",
  "Yes it works, I just got my reward a few minutes ago.",
  
  "I'm on the last step, does it matter if I open the app for a bit?",
  "Yeah you have to actually use it for like 30 seconds for it to count.",
  
  "Anyone else stuck on the final task?",
  "I was stuck too, but once I completed it fully the reward came.",
  
  "Is there supposed to be a delay after finishing everything?",
  "Yes, mine took around 3–5 minutes before showing up.",
  
  "Does this work for iPhone?",
  "It worked for me on iPhone, so yes.",
  
  "Is it safe to download the apps?",
  "I downloaded them and deleted them later, no issues at all.",
  
  "My reward hasn't appeared yet, is that normal?",
  "Totally normal, just give it a couple more minutes.",
  
  "Do I need to keep the apps installed?",
  "Nope, once your reward arrives you can delete them.",
  
  "Is this site still working today?",
  "I tried it earlier today and it worked fine.",
  
  "Does the country matter for this?",
  "I’m not in the US and it still worked, so I think it’s fine.",
  
  "I completed the tasks but nothing popped up yet.",
  "Same here, but then the reward showed suddenly.",
  
  "How long does the last step usually take?",
  "For me it took like 30 seconds inside the app.",
  
  "Guys, I'm losing hope on the final step.",
  "Don't worry, I felt the same, but the reward came after a short delay.",
  
  "Do I need to sign up inside the app?",
  "For some apps yes, just follow the instructions.",
  
  "Is this better than the other sites?",
  "Definitely. This is the only one that actually worked for me.",
  
  "Does the reward come instantly?",
  "Not instantly, but after a few minutes it appears.",
  
  "Is anyone else waiting right now?",
  "I was waiting earlier, and it showed up eventually.",
  
  "My friend told me it worked for him too.",
  "Same here, my cousin tried it and it worked.",
  
  "Is it normal if the loading screen stays long?",
  "Yes, sometimes it needs a moment to track the task.",
  
  "I just finished the final download!",
  "Great! Now just wait a little and the reward should appear.",
  
  "OMG I just got it! This is insane.",
  "Nice! Told you it actually works.",
  
  "Does it work without completing all apps?",
  "No, you need to finish all required tasks.",
  
  "Why is the last task always harder?",
  "It's the one that verifies you're real, that's why.",
  
  "Do I refresh the page or just wait?",
  "Just wait, refreshing doesn't affect it.",
  
  "I swear I'm nervous waiting for my reward lol.",
  "Haha I felt the same, but it showed up eventually.",
  
  "Is this safe for my phone?",
  "Yes, I had zero issues with my device.",
  
  "The last step didn't register for me.",
  "Make sure you spend enough time inside the app.",
  
  "Anyone here from outside the US?",
  "Yeah I'm from outside the US and it still worked.",
  
 
  
  "Do I have to keep the page open?",
  "No, once you're done with tasks you can just wait.",
  
  "Does it take longer at night?",
  "Maybe, but mine came fast today.",
  
  "This is the first site that actually worked.",
  "I know right? Everything else online is fake.",
  
  "I'm telling you guys, it's real. I just got mine.",
  "Facts. This site actually delivers.",
  
  "Is there support if something goes wrong?",
  "Not really, but usually it works fine.",
  
  "I'm still waiting… hope it comes soon.",
  "Mine took a bit too, don’t stress.",
  
  "Reward just appeared!! I’m so happy.",
  "Told you it was gonna show up!",
  
  "Does using VPN affect it?",
  "Some say yes, better not use it.",
  
  "Bro I’m hype, this actually works!",
  "Lol same here, it’s fire.",
  
  "Can I close the apps after finishing?",
  "Yes, completely safe to close them.",
  
  "Finished the last task and now waiting...",
  "Good, you're almost there!",
  
  "Where does the reward show up?",
  "In your account directly.",
  
  "I’ve tried many sites and none worked.",
  "This one is different, it really does work.",
  
  "Anyone else confused by the instructions?",
  "They’re simple once you read them carefully.",
  
  "I just got it, that was so worth it.",
  "Happy for you! Enjoy!",
  
  "Is the waiting time always random?",
  "Yeah depends on the tracking speed.",
  
  "Guys don’t rush it, just do the tasks slowly.",
  "True, rushing makes people skip steps.",
  
  "I feel like it's taking longer today.",
  "It happens sometimes, but it still works.",
  
  "YES! Reward just showed up!! I’m screaming!",
  "Lmao congrats!!",

  "Hey guys, does this really work or is it fake?",
  "Yeah it works, I finished the tasks and got my reward after a few minutes.",
  
  "I'm hesitating to try it, does the last step actually matter?",
  "Yes, you need to finish the last step, that’s when the reward shows up.",
  
  "Is anyone else having issues with the final task?",
  "I had the same problem but once I completed it fully, the reward came.",
  
  "Does it work on iPhone or only Android?",
  "It worked for me on iPhone, took like 6 minutes to appear.",
  
  "I just finished everything but nothing popped up yet, is that normal?",
  "Yeah don’t worry, mine took a few minutes too. Just wait a little.",
  
  "Bro I'm losing hope, been waiting for like 3 minutes.",
  "Relax, mine came after 4 minutes. It should arrive soon.",
  
  "Guys, is it safe to download these apps?",
  "I downloaded them and deleted them later, everything was fine.",
  
  "Is the site still working today?",
  "Yes, I tried it literally 10 minutes ago and it worked.",
  
  "Anyone here still waiting for their reward?",
  "I was waiting too, but then it suddenly appeared. Just be patient.",
  
  "Can someone explain the steps? I feel like I’m messing up.",
  "Just follow the tasks exactly and complete the last app fully. That’s what worked for me.",
  
  "OMG I just got mine! Didn't expect it tbh.",
  "Told you it works! Congrats!",
  
  "Does the country matter? I'm not from the US.",
  "It worked for me and I'm not from the US either, so you should be fine.",
  
  "I just finished the final download and thought it failed…",
  "Same! I lost hope for a second but then boom, reward showed up.",
  
  "This is actually fire, not gonna lie.",
  "Facts, this is the only site that worked for me.",
  
  "Anyone else shocked this is legit?",
  "Yeah bro, I’ve tried so many sites and this one actually delivered.",
  
  "Do I have to keep the apps installed?",
  "No, once the reward shows, you can delete them safely.",
  
  "Finally got my reward, this is crazy!",
  "Congrats! Enjoy it, the waiting is worth it."
];
