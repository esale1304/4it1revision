// Lesson-by-lesson content for 4IT1 Topic 1 (lessons 1.1a to 1.1c built so far)
window.CONTENTS=[
["1.1a","Computers"],["1.1b","Mobile Phones & Tablets"],["1.1c","Cameras & Home Entertainment"],["1.1d","Navigation Aids, Home Automation, Multifunctional Devices & Convergence"],
["1.2a","Portability, Performance & Storage"],["1.2b","User Interfaces"],["1.2c","Connectivity, Media Support, Energy, Expansion & Security Features"],
["1.3a","System Software: Utilities"],["1.3b","Operating Systems: Role & Functions"],["1.3c","Applications: Office Productivity"],["1.3d","Applications: Web Authoring, Graphics & Multimedia"],["1.3e","Applications: Control & Project Management Software"],["1.3f","Communication Software"],["1.3g","Software Licensing & Updates"],
["1.4a","Keyboards & Pointing Devices"],["1.4b","Scanners, Barcodes & Webcams"],["1.4c","Microphones, Touch Screens & Biometric Scanners"],["1.4d","Card Readers & Sensors"],["1.4e","Monitors & Printers"],["1.4f","Plotters, Data Projectors, Speakers & Control Devices"],
["1.5a","Storage Devices: HDD, SSD & Optical"],["1.5b","Storage Media: Hard Disks, Optical, Flash & Tape"],["1.5c","Storage Capacity Units"],
["1.6a","RAM & Virtual Memory"],["1.6b","ROM & Flash Memory"],["1.7","Processors"],
["1.8a","Choosing Devices & Peripherals to Meet Needs (Including Accessibility)"],["1.8b","Choosing & Configuring Software to Meet Needs; Justifying Choices"]
];
window.SUBTOPICS={"1.1":"Types of digital devices","1.2":"Features of digital devices","1.3":"Software","1.4":"Peripherals: input and output","1.5":"Peripherals: storage","1.6":"Memory","1.7":"Processors","1.8":"ICT systems to meet specified needs"};

window.LESSONS=[
{
 id:"1.1a", title:"Computers", minutes:50,
 big:"A single mainframe computer can serve thousands of users at once, and a microprocessor in a washing machine controls just one job. So what actually decides which kind of 'computer' a task needs?",
 spec:["1.1.1 Be aware that mainframe computers are used for complex processing tasks and microprocessors are embedded in products such as washing machines.","1.1.2 Understand that laptop and desktop computers are types of personal computers. Some laptops are used as desktop replacements."],
 objectives:["Understand what a mainframe computer is and what it is used for.","Understand what a microprocessor is and where it is embedded.","Know the difference between desktop and laptop computers.","Know what a single-board computer is and what it is used for."],
 vocab:[
  ["Mainframe computer","A large, powerful computer that can do a lot of complicated jobs quickly and can be used by a lot of people at the same time."],
  ["Microprocessor","The device that controls what a computer does; it takes data as input, does something with it and provides output."],
  ["Embedded computing","Computing hardware that is fixed into position and carries out a specialist task."],
  ["Single-board computer (SBC)","An affordable computer used in education, embedded computing projects and physical computing projects."],
  ["Upgrade","To make a computer better and able to do more things."],
  ["Desktop replacement","A larger laptop with a bigger, better-quality screen and higher performance levels."]],
 prior:[
  {q:"Name one digital device you use every day.",a:"Any reasonable device, e.g. smartphone, laptop, tablet, games console."},
  {q:"What is the purpose of a computer's processor, in simple terms?",a:"It carries out (executes) instructions."},
  {q:"Give one example of a household appliance that contains a built-in computer chip.",a:"Any one: washing machine, microwave, smart TV, dishwasher."}],
 priorNote:"This is the first lesson, so these questions check what you already know from everyday life.",
 learn:[
  {h:"Mainframe computers and microprocessors",notes:[
   "A **mainframe computer** is a large, powerful computer that can do a lot of complicated jobs quickly and can be used by a lot of people at the same time. Mainframes are used for complex processing tasks such as statistical analysis and bulk data processing by large organisations.",
   "A **microprocessor** is the device that controls what a computer does; it takes data as input, does something with it and provides output. Microprocessors are embedded into everyday products such as washing machines, microwaves and televisions, to control a specialist task."]},
  {h:"Desktop computers",notes:[
   "Personal computers (PCs) are common in homes and offices, and come in many shapes and sizes, such as desktops and laptops.",
   "Desktops have more space for components than laptops, and often let users **upgrade** them or add extra components. A desktop usually needs peripheral devices connected to it, such as a monitor, printer, mouse and keyboard.",
   "Some desktops are 'all-in-one', combining the monitor with the PC hardware in a single unit."]},
  {h:"Laptops and desktop replacements",notes:[
   "Laptops include a keyboard, a screen, a track pad and a rechargeable battery. Having these features means laptops can be taken away from the desk, making them portable.",
   "Some laptops are called **desktop replacements**. These tend to be larger than other laptops, with a bigger, better-quality screen and higher performance levels."]},
  {h:"Single-board computers",notes:[
   "**Single-board computers (SBCs)** are affordable computers used in education, embedded computing projects and physical computing projects. Embedded computing is computing hardware fixed into position that carries out a specialist task; physical computing involves interactive systems that can sense and respond to the world around them.",
   "The Raspberry Pi Zero is an example of an SBC. It costs very little and uses a cheap microSD card as its storage."]}
 ],
 think:"The 'best' computer is never about raw power alone. A mainframe is overkill for a student project, just as a single-board computer would be hopeless for a bank's transaction processing. Always match the device to the scale of the task.",
 tip:"For 'which one of these' questions, rule out the wrong answers using what each device is actually designed for. Don't just guess the most familiar-sounding option.",
 practice:{
  tasks:[
   {ctx:"Mainframe computers and microprocessors",q:"State one difference between a mainframe computer and a microprocessor embedded in a washing machine.",marks:2,a:"A mainframe is a large, powerful computer designed to carry out many complex processing tasks for many users at once, whereas a microprocessor embedded in a washing machine only carries out one specific, limited task (controlling the wash cycle)."},
   {ctx:"Desktop computers",q:"State one advantage of a desktop computer having more internal space than a laptop.",marks:1,a:"It allows the user to upgrade the computer or add additional components more easily."},
   {ctx:"Laptops and desktop replacements",q:"State two features that make a laptop portable.",marks:2,a:"Any two: keyboard, screen, track pad, rechargeable battery (all built into one unit)."},
   {ctx:"Single-board computers",q:"Give one reason why single-board computers are suitable for use in schools.",marks:1,a:"Any one: they are affordable/cheap; they are suitable for teaching embedded/physical computing projects."}
  ],
  worked:{q:"Explain one reason a graphic designer might choose a desktop computer over a laptop for their work.",marks:2,
   model:"A desktop computer has more internal space for components, so it can be upgraded with a more powerful graphics card or processor as needed [1], which would let the designer run demanding design software more smoothly than a laptop of similar price [1].",
   why:"The answer identifies the specific feature (more space/upgradeability) and links it directly to a concrete benefit for the scenario (running demanding software). This is exactly the structure a 2-mark explanation needs."},
  guided:{q:"Explain one reason an office worker who travels between different sites might choose a laptop over a desktop computer.",marks:2,starters:["A laptop is more ______, because it includes...","This means the worker can..."],
   a:"A laptop is more portable, because it includes a keyboard, screen, track pad and rechargeable battery all in one unit. This means the worker can carry it and use it at different sites, rather than being tied to one desk."},
  apply:{scenario:"A small charity has a limited budget and wants to teach local students the basics of physical computing (e.g. connecting sensors to control a simple device).",q:"Recommend a suitable type of computer for this project, and justify your choice.",marks:3,
   a:"A single-board computer (e.g. a Raspberry Pi) would be suitable, because it is affordable (fitting a limited budget) and is specifically designed for embedded and physical computing projects such as connecting sensors."},
  kca:[
   {q:"State what a microprocessor does.",marks:1,a:"Controls what a computer does; takes data as input, processes it, and provides output."},
   {q:"Give one example of a task a mainframe computer might be used for.",marks:1,a:"Any one: statistical analysis, bulk data processing."},
   {q:"What is meant by an 'all-in-one' desktop?",marks:1,a:"A desktop that combines the monitor with the PC hardware in a single unit."}],
  kcb:{scenario:"A university's IT department needs a computer to process the exam results and financial records of 20,000 students at once, and separately wants an affordable option for a coding club to teach students basic embedded systems programming.",
   qs:[{q:"Recommend a suitable type of computer for each need, and justify your choices.",marks:4,a:"For processing exam results/financial records: a mainframe, because it is designed for complex processing tasks for many users/large amounts of data at once. For the coding club: a single-board computer, because it is affordable and designed for embedded/physical computing projects."}]},
  exam:[
   {id:"e1",type:"mcq",q:"Which one of these is an example of an embedded system?",opts:["Desktop computer","Mainframe computer","Microwave oven","Laptop"],ans:2,why:"A microwave oven has a microprocessor built in to carry out one specialist task. The other three are general-purpose computers."},
   {id:"e2",type:"short",cmd:"Explain",marks:2,q:"A bank processes millions of customer transactions every day. Explain why it uses a mainframe computer rather than a desktop computer.",points:["A mainframe is designed for complex processing / very large amounts of data","It can be used by many people at the same time (a desktop is designed for one user)"]},
   {id:"e3",type:"short",cmd:"Describe",marks:2,q:"Describe two features that make a laptop more portable than a desktop computer.",points:["It has a rechargeable battery so it does not need to stay plugged in","The screen, keyboard and track pad are built into one unit (no separate peripherals to carry)","It is smaller / lighter than a desktop"]}
  ],
  exit:{q:"In one sentence, explain to a partner why a washing machine doesn't need a mainframe computer to work.",a:"For example: because a washing machine's microprocessor only needs to carry out one simple, specific task (controlling the wash cycle), not complex processing for many users."}
 },
 cards:[
  ["What does a microprocessor do?","Controls what a computer does; takes data as input, processes it and provides output."],
  ["Name a task for a mainframe computer.","Statistical analysis or bulk data processing."],
  ["What is an 'all-in-one' desktop?","A desktop that combines the monitor with the PC hardware in a single unit."],
  ["Which is better for upgrading: a desktop or a laptop? Why?","A desktop, because it has more space inside for components."],
  ["Name two features that make a laptop portable.","Any two: keyboard, screen, track pad, rechargeable battery (all in one unit)."],
  ["Give an example of a single-board computer.","Raspberry Pi Zero."],
  ["Why are single-board computers used in schools?","They are affordable and suit embedded and physical computing projects."]
 ],
 cloze:[
  {t:"A ___ is a large, powerful computer used by many people at the same time.",a:["mainframe","mainframe computer"]},
  {t:"A microprocessor ___ into a washing machine carries out one specialist task.",a:["embedded","is embedded"]},
  {t:"A larger laptop with a better screen and higher performance is called a desktop ___.",a:["replacement"]},
  {t:"A Raspberry Pi Zero is an example of a single-___ computer.",a:["board"]}
 ],
 organiser:["A **mainframe** does complex processing for many users at once (statistics, bulk data) in large organisations.","A **microprocessor** takes input, processes it and gives output. It is **embedded** in products like washing machines to do one specialist task.","**Desktops** have more internal space, so they are easier to **upgrade**. They need peripherals such as a monitor and keyboard.","**Laptops** are portable: keyboard, screen, track pad and rechargeable battery in one unit.","A **desktop replacement** is a larger laptop with a bigger, better screen and higher performance.","**Single-board computers** (e.g. Raspberry Pi Zero) are affordable and used for education, embedded and physical computing."],
 puzzle:[
  ["MAINFRAME","A large, powerful computer used by many people at once for complex processing"],
  ["MICROPROCESSOR","Controls what a computer does by taking input, processing it and giving output"],
  ["EMBEDDED","Fixed into position to do a specialist task, like the computing hardware in a washing machine"],
  ["UPGRADE","To make a computer better so it can do more things"],
  ["DESKTOP","Type of personal computer with more internal space for components"],
  ["LAPTOP","Portable personal computer with a built-in keyboard, screen and battery"],
  ["PORTABLE","Easy to carry around"],
  ["PERIPHERAL","A device, such as a printer or mouse, that connects to a desktop computer"]],
 mind:[
  {t:"Mainframe",c:["Large and powerful","Complex processing","Many users at once","Statistics, bulk data"]},
  {t:"Microprocessor",c:["Input, process, output","Embedded: washing machine, microwave, TV","One specialist task"]},
  {t:"Desktop",c:["More internal space","Easier to upgrade","Needs peripherals","All-in-one"]},
  {t:"Laptop",c:["Portable","Keyboard, screen, track pad, battery","Desktop replacement"]},
  {t:"Single-board computer",c:["Affordable","Raspberry Pi Zero","Education, physical computing"]}
 ]
},
{
 id:"1.1b", title:"Mobile Phones & Tablets", minutes:50,
 big:"A talking phone can read out every message aloud for a blind user, while an emergency-button phone can call five contacts in a row until someone answers. So why doesn't every phone just come with every feature built in?",
 spec:["1.1.3 Know about types of mobile phones; smartphones and specialist phones and how they connect to the network (SIM).","1.1.4 Know about tablet devices."],
 objectives:["Understand what a SIM card does and how mobile phones connect to a network.","Know about specialist phones and how they meet particular user needs, including accessibility.","Understand the features of a smartphone.","Understand the features of a tablet device and how it compares to a smartphone."],
 vocab:[
  ["SIM (subscriber identity module)","A card used to identify the subscriber (user) to a mobile phone network."],
  ["Specialist phone","A mobile phone with features designed to provide functions that meet particular user needs."],
  ["Accessibility","A measure of how easy something is to use, especially by people with disabilities."],
  ["Wi-Fi (wireless fidelity)","A way of connecting computers or other electronic machines to a network or the internet using radio signals rather than wires."],
  ["Application (app)","A program that allows a user to perform a task."],
  ["Virtual keyboard","A keyboard displayed on and used via a touch screen."]],
 prior:[
  {q:"What is a mainframe computer used for? (1.1a)",a:"Complex processing tasks, e.g. statistical analysis or bulk data processing for many users at once."},
  {q:"What is a single-board computer, and give an example. (1.1a)",a:"An affordable computer used in education/embedded/physical computing projects, e.g. Raspberry Pi Zero."},
  {q:"What makes a laptop a 'desktop replacement'? (1.1a)",a:"It is larger than other laptops, with a bigger/better screen and higher performance."}],
 learn:[
  {h:"Mobile phones and SIM cards",notes:[
   "Mobile phones use a **SIM card** to connect to a mobile phone network. SIM stands for subscriber identity module; a SIM card identifies the subscriber to the network."]},
  {h:"Specialist phones and accessibility",notes:[
   "Some mobile phones have **specialist features** providing users with functions that meet particular needs, for example an emergency button linked to a list of emergency contacts, calling each person until someone answers.",
   "Other phones meet **accessibility** needs, e.g. the Alto 2 'talking phone' for blind/partially sighted users (every feature/function spoken aloud), or phones with fewer/larger buttons and hearing aid connections."]},
  {h:"Smartphones",notes:[
   "Smartphones are small computers with Wi-Fi and mobile phone connectivity, allowing phone calls and internet access. They include features of other devices, such as cameras, media players and handheld games consoles.",
   "Smartphones have a more advanced operating system than other mobile phones. Applications (apps) can be downloaded to customise the smartphone with entertainment, educational and business features.",
   "Most smartphones use a touch screen; a **virtual keyboard** is displayed on and used via the touch screen to enter text.",
   "Because smartphones combine so many features, they use more power than other mobile phones, giving them a shorter battery life."]},
  {h:"Tablet devices",notes:[
   "Tablet devices are bigger than smartphones but have similar features: a touch screen, apps and Wi-Fi connectivity for internet access.",
   "Some tablets have SIM card slots, allowing internet connectivity via the mobile phone network so they can be online even when out of Wi-Fi range."]}
 ],
 think:"Accessibility features aren't just 'extras' for a small number of users. They often solve a genuine, everyday usability problem that could help anyone in the right situation, from an elderly relative to someone temporarily unable to see a screen clearly in bright sunlight.",
 tip:"When a question asks about 'connectivity' for a SIM card, remember a SIM connects to the mobile phone network specifically, not Wi-Fi, Bluetooth or infra-red.",
 practice:{
  tasks:[
   {ctx:"Mobile phones and SIM cards",q:"Explain the purpose of a SIM card in a mobile phone.",marks:2,a:"A SIM card identifies the subscriber (user) to the mobile phone network, allowing the phone to connect to and use that network."},
   {ctx:"Specialist phones and accessibility",q:"Describe one way a specialist phone could meet the needs of a visually impaired user.",marks:2,a:"A specialist phone could read out (speak aloud) every feature and function, such as contact names and text messages, so the user does not need to see the screen to use the phone."},
   {ctx:"Smartphones",q:"Explain one disadvantage of a smartphone combining so many features into one device.",marks:2,a:"Combining so many features means the smartphone uses more power [1], giving it a shorter battery life and meaning it needs to be charged more often than other types of mobile phone [1]."},
   {ctx:"Tablet devices",q:"State one similarity and one difference between a smartphone and a tablet device.",marks:2,a:"Similarity: both can have a touch screen / apps / Wi-Fi. Difference: a tablet is bigger than a smartphone (or: not all tablets can make phone calls / have a SIM slot)."}
  ],
  worked:{q:"Explain one way a phone with tactile keys and large on-screen text could benefit an elderly user with limited dexterity and eyesight.",marks:2,
   model:"Tactile keys are more responsive and easier to press accurately than a flat touch screen [1], while larger on-screen text makes information easier to read for a user with limited eyesight [1].",
   why:"The answer addresses both stated needs (dexterity via tactile keys; eyesight via large text) separately, which is what a 2-mark question covering two aspects of the scenario requires."},
  guided:{q:"Explain one benefit of an emergency button feature for an elderly relative living alone.",marks:2,starters:["The emergency button is linked to ______, so...","This means that in an emergency, the user can..."],
   a:"The emergency button is linked to a list of emergency contacts, so the phone will call each person on the list until someone answers. This means that in an emergency, the user can get help quickly with a single button press, without needing to dial a number."},
  apply:{scenario:"A delivery company wants its drivers to have a portable device to check delivery addresses, take photos of delivered parcels, and stay in contact even when away from any Wi-Fi network.",q:"Recommend a suitable device for the drivers, and justify your choice.",marks:3,
   a:"A smartphone would be suitable, because it combines a camera (for photos), internet/app access for checking addresses, and mobile network connectivity via a SIM card, meaning drivers stay connected without needing Wi-Fi."},
  kca:[
   {q:"What does SIM stand for?",marks:1,a:"Subscriber identity module."},
   {q:"Give one example of a feature found on a specialist accessibility phone.",marks:1,a:"Any one: spoken feedback, larger buttons, hearing aid connections, tactile keypad."},
   {q:"State one feature a tablet and a smartphone have in common.",marks:1,a:"Any one: touch screen, apps, Wi-Fi connectivity."}],
  kcb:{scenario:"A student wants a single portable device for browsing the internet, watching videos and taking notes in lectures using a larger screen than a phone, but doesn't need to make phone calls.",
   qs:[{q:"Recommend a suitable device, and justify your choice.",marks:3,a:"A tablet would be suitable, because it offers a larger screen than a smartphone (better for watching videos/note-taking) with similar internet/app features, and the student doesn't need phone call functionality."}]},
  exam:[
   {id:"e1",type:"mcq",q:"A SIM card is used to identify which of these?",opts:["The phone's screen size","The subscriber to the network","The Wi-Fi router","The phone's operating system"],ans:1,why:"A SIM (subscriber identity module) identifies the subscriber (user) to the mobile phone network."},
   {id:"e2",type:"short",cmd:"Explain",marks:2,q:"Mia's tablet has no SIM card slot. Explain one problem this causes when she travels on a long train journey.",points:["Without a SIM the tablet can only get online through Wi-Fi","So she will lose her internet connection wherever there is no Wi-Fi (e.g. between stations)"]},
   {id:"e3",type:"short",cmd:"Recommend",marks:3,q:"Mr Ali is blind and wants a mobile phone. Recommend a type of phone for Mr Ali and justify your choice.",points:["A specialist (accessibility / talking) phone","It reads out (speaks aloud) each feature, menu or message","So he can use it without seeing the screen"]}
  ],
  exit:{q:"In one sentence, explain to a partner why a tablet without a SIM card slot might not be a good choice for someone who travels a lot.",a:"For example: because without a SIM card, the tablet can only access the internet via Wi-Fi, so it would lose connectivity in places without a Wi-Fi network."}
 },
 cards:[
  ["What does SIM stand for?","Subscriber identity module."],
  ["Give one feature of a specialist accessibility phone.","Any one: spoken feedback, larger buttons, hearing aid connections, tactile keypad."],
  ["Name one feature a tablet and a smartphone have in common.","Any one: touch screen, apps, Wi-Fi connectivity."],
  ["Why do smartphones have a shorter battery life than basic mobile phones?","They combine so many features that they use more power."],
  ["Why can a tablet with a SIM slot go online away from Wi-Fi?","The SIM connects it to the mobile phone network."],
  ["What does a virtual keyboard do?","It is displayed on and used via the touch screen to enter text."]
 ],
 cloze:[
  {t:"A ___ card identifies the subscriber to a mobile phone network.",a:["sim"]},
  {t:"A phone with features designed to meet particular user needs is called a ___ phone.",a:["specialist"]},
  {t:"A keyboard displayed on a touch screen is called a ___ keyboard.",a:["virtual"]},
  {t:"A program that lets a user perform a task is called an ___.",a:["app","application"]}
 ],
 organiser:["A **SIM card** identifies the subscriber to the mobile phone network, so the phone can connect to it.","**Specialist phones** meet particular needs: emergency button, talking phone, larger buttons, hearing aid connections.","**Smartphones** are small computers with Wi-Fi and mobile connectivity, apps, a touch screen and a more advanced operating system.","A **virtual keyboard** is shown on the touch screen.","Smartphones use more power, so their battery life is shorter.","**Tablets** are bigger than smartphones with similar features. Some have a SIM slot, so they can get online away from Wi-Fi."],
 puzzle:[
  ["SIM","Card that identifies the subscriber to a mobile phone network"],
  ["SPECIALIST","Type of phone with features designed for particular user needs"],
  ["ACCESSIBILITY","How easy something is to use, especially for people with disabilities"],
  ["WIFI","Wireless connection to a network using radio signals"],
  ["APPLICATION","A program that lets a user perform a task, shortened to 'app'"],
  ["VIRTUAL","Type of keyboard displayed on a touch screen"],
  ["SMARTPHONE","Small computer with Wi-Fi, mobile connectivity and apps"],
  ["TABLET","Bigger than a smartphone, with a touch screen, apps and Wi-Fi"],
  ["SUBSCRIBER","The user of a mobile phone network"],
  ["EMERGENCY","Type of button that calls a list of contacts until someone answers"]],
 mind:[
  {t:"SIM card",c:["Subscriber identity module","Identifies the user","Connects to mobile network"]},
  {t:"Specialist phones",c:["Emergency button","Talking phone","Larger buttons","Hearing aid connection"]},
  {t:"Smartphone",c:["Wi-Fi and mobile network","Apps, advanced OS","Touch screen, virtual keyboard","Shorter battery life"]},
  {t:"Tablet",c:["Bigger than smartphone","Touch screen, apps, Wi-Fi","Some have a SIM slot"]}
 ]
},
{
 id:"1.1c", title:"Cameras & Home Entertainment", minutes:60,
 big:"An 8K television packs in so many pixels that you can't tell them apart even up close. So why can a much cheaper smartphone screen still look just as sharp to your eyes?",
 spec:["1.1.5 Be able to describe the purpose and use of other digital devices such as: cameras and camcorders, games consoles, home entertainment systems, media players."],
 objectives:["Describe how digital cameras and camcorders capture images, and what affects image quality.","Understand how television resolution affects picture quality.","Know about home entertainment devices: sound systems, PVRs, Blu-ray/DVD players.","Describe the features of games consoles and media players."],
 vocab:[
  ["Pixel","A small dot that helps to make up an image."],
  ["Resolution","The number of pixels used by a screen to display an image."],
  ["Set-top box (STB)","A device that sends video and audio received from a broadcaster to a television."],
  ["Personal video recorder (PVR)","A device that records broadcast content so that it can be watched at a later date."],
  ["Avatar","A figure that represents a person in a computer game or other virtual environment."],
  ["Media player","An electronic device that can store and play digital music and videos and show digital photographs."]],
 prior:[
  {q:"What does SIM stand for? (1.1b)",a:"Subscriber identity module."},
  {q:"State one feature a smartphone has that a basic mobile phone does not. (1.1b)",a:"Any one: Wi-Fi, apps, touch screen, more advanced OS."},
  {q:"State one difference between a smartphone and a tablet. (1.1b)",a:"A tablet is bigger than a smartphone (or not all tablets have SIM/phone call ability)."}],
 learn:[
  {h:"Cameras and camcorders",notes:[
   "Digital cameras and camcorders use light sensors to capture images formed by light passing through the lens. Traditionally, cameras capture still images and camcorders capture moving images, but most modern devices can do both.",
   "Moving images (movies) are a sequence of images called **frames**; a higher frame rate produces smoother results, while a lower frame rate can make a movie appear to stutter or jump.",
   "Image quality depends on: the **lens** (letting light through without defects), the **image processor** (which can compensate for poor lighting), and the **sensor resolution** (the number of pixels captured; more pixels means more detail and better quality)."]},
  {h:"Televisions and sound systems",notes:[
   "Televisions display images using **pixels**; the number of pixels used is the screen's **resolution**. HD screens have more pixels (higher resolution) than standard definition. Resolution is stated as horizontal × vertical pixels, but manufacturers often state only the vertical figure, e.g. 1920×1080 is called 1080p.",
   "Ultra High Definition (UHD) screens are called 4K or 8K, having a horizontal resolution of approximately 4,000 or 8,000 pixels. Smart TVs use apps to download/stream content from the internet.",
   "Sound systems produce loud, rich sound using high-quality speakers/amplifiers. They can connect to personal devices via wired (USB) or wireless (Bluetooth) connections, and to a network via Wi-Fi."]},
  {h:"PVRs and Blu-ray/DVD players",notes:[
   "A **personal video recorder (PVR)** records broadcast content so it can be watched at a later date. Some devices combine both a **set-top box (STB)** and a PVR.",
   "Blu-ray and DVD players connect to televisions to play films/content stored on disk. Blu-ray players will usually also play DVDs, but DVD players cannot play Blu-ray disks. Blu-ray disks can store HD movies with higher-quality picture/sound; newer 4K Ultra HD Blu-ray players can play 4K content on 4K televisions."]},
  {h:"Games consoles",notes:[
   "Games consoles let users play video games on a television screen, using games provided on disks or downloaded from the internet. Controllers, often wireless, control characters, vehicles and objects in the game.",
   "Some consoles use motion sensors, letting the player control the game with gestures/body movements. Others use virtual reality controllers and headsets, where the player's real-world movements are replicated by an **avatar** in the game's virtual world.",
   "Modern consoles are multifunctional: they may have apps/internet connectivity, and disk drives to play movies/music on DVD, Blu-ray or 4K Ultra HD Blu-ray.",
   "Handheld consoles provide mobile gaming with a built-in screen, but have less storage than full-size consoles, often reducing image/sound quality, game complexity and storyline length to reduce the amount of data that needs to be stored."]},
  {h:"Media players",notes:[
   "**Media players** provide video and audio content to a television, either streamed directly from the internet or accessed from networked/local storage. They connect to a TV directly or via a wired/wireless network, and are controlled by a remote control or, in some cases, a smartphone app.",
   "Personal media players are compact, portable devices with local storage, useful when travelling or exercising due to their small size and long battery life. They often use solid-state flash memory, which is not affected by being moved or shaken."]}
 ],
 think:"Home entertainment devices increasingly do each other's jobs. A games console can stream films, and a smart TV can play some games, so always check what a device's primary purpose is before assuming what it can't do.",
 tip:"For 'give one use/example' questions, a single precise word or short phrase is enough. Don't write a whole explanation when only 1 mark is available.",
 practice:{
  tasks:[
   {ctx:"Cameras and camcorders",q:"Explain how the number of pixels a camera's sensor can capture affects the quality of its images.",marks:2,a:"A higher number of pixels means the sensor can capture more detail [1], producing a higher-resolution image that stays clear at a larger display size before it becomes pixelated [1]."},
   {ctx:"Televisions and sound systems",q:"State one advantage of a smart TV over a standard television.",marks:1,a:"A smart TV can use apps and stream/download content directly from the internet."},
   {ctx:"PVRs and Blu-ray/DVD players",q:"State one difference between a Blu-ray player and a DVD player.",marks:1,a:"A Blu-ray player can usually also play DVD disks, but a DVD player cannot play Blu-ray disks (or: Blu-ray disks store higher-quality/HD content than DVDs)."},
   {ctx:"Games consoles",q:"Explain one reason handheld games consoles often have reduced game complexity compared to full-size consoles.",marks:2,a:"Handheld consoles have less storage than full-size consoles [1], so games are made less complex (e.g. reduced image/sound quality, shorter storylines) to reduce the amount of data that needs to be stored [1]."},
   {ctx:"Media players",q:"State one reason personal media players often use flash memory rather than a hard disk.",marks:1,a:"Flash memory (solid state) is not affected by being moved or shaken, unlike a hard disk, which suits a portable device."}
  ],
  worked:{q:"A customer wants to know why 8K televisions make each pixel impossible to tell apart, even up close. Explain why this happens.",marks:2,
   model:"An 8K television has a horizontal resolution of approximately 8,000 pixels, far more than a standard or even 4K screen [1], so each individual pixel is much smaller and packed more closely together, making them impossible to distinguish even at a close viewing distance [1].",
   why:"The answer links the specific technical fact (very high pixel count) to the visual consequence (pixels too small/close to distinguish). This is exactly the causal reasoning a 2-mark 'explain why' question needs."},
  guided:{q:"Explain one reason a smart TV's built-in speakers might not be the best option for watching a film.",marks:2,starters:["Built-in TV speakers are often small and low-quality because...","This means a viewer might need to..."],
   a:"Built-in TV speakers are often small and low-quality because modern TV screens are very thin, leaving little space for good-quality speaker components. This means a viewer might need to connect an external sound system for better, richer sound."},
  apply:{scenario:"A gym wants to offer members a way to watch personal video content while exercising on cardio machines, without carrying a fragile device that could be damaged by movement.",q:"Recommend a suitable device for this, and justify your choice.",marks:3,
   a:"A personal media player would be suitable, because it is compact/portable with a long battery life, and typically uses solid-state flash memory storage, which is not affected by the movement/shaking that happens during exercise."},
  kca:[
   {q:"State what is meant by 'resolution'.",marks:1,a:"The number of pixels used by a screen to display an image."},
   {q:"Give one example of a device that could combine a set-top box and a PVR.",marks:1,a:"A satellite television device/box."},
   {q:"State one feature of VR gaming that traditional console gaming does not have.",marks:1,a:"Any one: a VR headset; controllers that replicate the player's own movements via an avatar."}],
  kcb:{scenario:"A family wants to watch 4K movies with the best possible picture and sound quality, using content stored on disk, without buying multiple separate devices.",
   qs:[{q:"Recommend a suitable device for the family, and justify your choice.",marks:3,a:"A 4K Ultra HD Blu-ray player (or a modern games console with a 4K Blu-ray drive) would be suitable, because it can play 4K content in high quality directly from disk on a compatible 4K television, without needing separate devices."}]},
  exam:[
   {id:"e1",type:"mcq",q:"A 4K television has a higher resolution than an HD television. What does this mean?",opts:["It has a larger screen","It uses more pixels to display the image","It has a longer battery life","It has built-in speakers"],ans:1,why:"Resolution is the number of pixels used by a screen to display an image. 4K has more pixels than HD."},
   {id:"e2",type:"short",cmd:"Explain",marks:2,q:"Explain one benefit to a family of owning a personal video recorder (PVR).",points:["It records broadcast programmes","So the family can watch them at a later date, when it suits them"]},
   {id:"e3",type:"short",cmd:"Describe",marks:2,q:"Modern games consoles are multifunctional. Describe one function of a modern games console other than playing games.",points:["Names a suitable function, e.g. play films or music from DVD / Blu-ray disks, or use apps / stream content over the internet","Gives how or why it is used, e.g. through the disk drive or the internet connection, to watch on the television"]}
  ],
  exit:{q:"In one sentence, explain to a partner why a media player streaming from the internet needs a network connection, but a personal media player playing its own stored files does not.",a:"For example: because a media player streaming from the internet needs to continuously receive data over a network, whereas a personal media player with local storage already has the files saved on the device itself."}
 },
 cards:[
  ["What is meant by 'resolution'?","The number of pixels used by a screen to display an image."],
  ["What affects the quality of a digital camera's images?","The lens, the image processor and the sensor resolution (number of pixels)."],
  ["Which device could combine a set-top box and a PVR?","A satellite television device/box."],
  ["Name one feature of VR gaming that traditional console gaming does not have.","A VR headset, or controllers that copy the player's movements through an avatar."],
  ["How is a Blu-ray player different from a DVD player?","Blu-ray players usually play DVDs too, but DVD players cannot play Blu-ray disks."],
  ["Why do handheld consoles have simpler games?","They have less storage, so games use less data (lower quality, shorter storylines)."],
  ["Why do personal media players use flash memory?","Not affected by being moved or shaken, unlike a hard disk."],
  ["What does a smart TV do that a standard TV does not?","Uses apps and streams or downloads content from the internet."]
 ],
 cloze:[
  {t:"The number of pixels used by a screen to display an image is its ___.",a:["resolution"]},
  {t:"A ___ records broadcast content so it can be watched at a later date (shortened to PVR).",a:["personal video recorder","pvr"]},
  {t:"A figure that represents a player in a virtual game world is called an ___.",a:["avatar"]},
  {t:"A frame ___ that is too low can make a movie appear to stutter.",a:["rate"]}
 ],
 organiser:["**Cameras and camcorders** capture images with light sensors. Quality depends on the **lens**, **image processor** and **sensor resolution** (pixels). Movies are a sequence of **frames**.","**Resolution** is the number of pixels a screen uses. 4K and 8K screens have about 4,000 and 8,000 horizontal pixels. **Smart TVs** use apps and stream from the internet.","A **PVR** records broadcasts to watch later. **Blu-ray** players also play DVDs; DVD players cannot play Blu-ray.","**Games consoles**: controllers, motion sensors, VR with an **avatar**; also multifunctional (apps, disk drives). Handheld consoles have less storage.","**Media players** stream or play stored content. Personal media players are compact with long battery life and use flash memory."],
 puzzle:[
  ["PIXEL","A small dot that helps to make up an image"],
  ["RESOLUTION","The number of pixels a screen uses to display an image"],
  ["AVATAR","A figure that represents a player in a virtual game world"],
  ["CAMCORDER","Device traditionally used to record moving images"],
  ["FRAME","One image in the sequence that makes up a movie"],
  ["CONSOLE","Device used to play video games on a television"],
  ["STREAMING","Receiving video or audio directly from the internet as you watch"],
  ["FLASH","Type of solid-state memory used in personal media players"],
  ["BLURAY","Disk type that stores HD movies and can store 4K content"]],
 mind:[
  {t:"Cameras and camcorders",c:["Light sensors capture image","Frames: frame rate","Quality: lens, processor, pixels"]},
  {t:"Televisions",c:["Resolution: pixels","HD, 4K, 8K","Smart TV: apps, streaming"]},
  {t:"Home entertainment",c:["Sound systems","PVR and set-top box","Blu-ray / DVD players"]},
  {t:"Games consoles",c:["Controllers, motion sensors","VR and avatar","Multifunctional","Handheld: less storage"]},
  {t:"Media players",c:["Streaming or stored content","Personal: compact, flash memory"]}
 ]
}
];
