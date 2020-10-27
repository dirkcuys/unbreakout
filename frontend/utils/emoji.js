const emojis = [
  ["💀", "Skull"],
  ["👻", "Ghost"],
  ["👽", "Alien"],
  ["👾", "Alien Monster"],
  ["🤖", "Robot"],
  ["💌", "Love Letter"],
  ["💛", "Yellow Heart"],
  ["💚", "Green Heart"],
  ["💙", "Blue Heart"],
  ["💜", "Purple Heart"],
  ["🖤", "Black Heart"],
  ["🕵️", "Detective"],
  ["👸", "Princess"],
  ["🧚", "Fairy"],
  ["🧛", "Vampire"],
  ["🧟", "Zombie"],
  ["🦄", "Unicorn"],
  ["🦉", "Owl"],
  ["🕷️", "Spider"],
  ["🥀", "Wilted Flower"],
  ["🍫", "Chocolate Bar"],
  ["🍭", "Lollipop"],
  ["⚡", "High Voltage"],
  ["🎃", "Jack-O-Lantern"],
  ["🔮", "Crystal Ball"],
  ["👀", "Eyes"],
  ["💃", "Woman Dancing"],
  ["🏄", "Person Surfing"],
  ["🚴", "Person Biking"],
  ["🕯️", "Candle"],
  ["💥", "Collision"],
  ["💫", "Dizzy"],
  ["🐵", "Monkey Face"],
  ["🐶", "Dog Face"],
  ["🦊", "Fox"],
  ["🐱", "Cat Face"],
  ["🦁", "Lion"],
  ["🐯", "Tiger Face"],
  ["🐴", "Horse Face"],
  ["🐮", "Cow Face"],
  ["🐷", "Pig Face"],
  ["🐭", "Mouse Face"],
  ["🐹", "Hamster"],
  ["🐰", "Rabbit Face"],
  ["🐻", "Bear"],
  ["🐨", "Koala"],
  ["🐼", "Panda"],
  ["🦃", "Turkey"],
  ["🐔", "Chicken"],
  ["🐣", "Hatching Chick"],
  ["🐦", "Bird"],
  ["🐧", "Penguin"],
  ["🦚", "Peacock"],
  ["🐸", "Frog"],
  ["🐢", "Turtle"],
  ["🐍", "Snake"],
  ["🐲", "Dragon Face"],
  ["🦕", "Sauropod"],
  ["🦖", "T-Rex"],
  ["🐳", "Spouting Whale"],
  ["🐟", "Fish"],
  ["🐠", "Tropical Fish"],
  ["🐡", "Blowfish"],
  ["🐙", "Octopus"],
  ["🐚", "Spiral Shell"],
  ["🐌", "Snail"],
  ["🦋", "Butterfly"],
  ["🐛", "Bug"],
  ["🐜", "Ant"],
  ["🐝", "Honeybee"],
  ["🐞", "Lady Beetle"],
  ["💐", "Bouquet"],
  ["🌸", "Cherry Blossom"],
  ["🌹", "Rose"],
  ["🌺", "Hibiscus"],
  ["🌻", "Sunflower"],
  ["🌼", "Blossom"],
  ["🌷", "Tulip"],
  ["🌱", "Seedling"],
  ["🌲", "Evergreen Tree"],
  ["🌳", "Deciduous Tree"],
  ["🌴", "Palm Tree"],
  ["🌵", "Cactus"],
  ["🌿", "Herb"],
  ["🍀", "Four Leaf Clover"],
  ["🍁", "Maple Leaf"],
  ["🍄", "Mushroom"],
  ["🦀", "Crab"],
  ["🦞", "Lobster"],
  ["🌈", "Rainbow"],
  ["☂️", "Umbrella"],
  ["❄️", "Snowflake"],
  ["☃️", "Snowman"],
  ["🍇", "Grapes"],
  ["🍉", "Watermelon"], 
  ["🍊", "Tangerine"],
  ["🍋", "Lemon"],
  ["🍎", "Red Apple"],
  ["🌶️", "Hot Pepper"],
  ["🍞", "Bread"],
  ["🧀", "Cheese Wedge"],
  ["🍔", "Hamburger"],
  ["🍟", "French Fries"], 
  ["🍕", "Pizza"],
  ["🌮", "Taco"],
  ["🍿", "Popcorn"],
  ["🍙", "Rice Ball"],
  ["🍝", "Spaghetti"],
  ["🍣", "Sushi"],
  ["🍤", "Fried Shrimp"],
  ["🍦", "Soft Ice Cream"],
  ["🍩", "Doughnut"],
  ["🍪", "Cookie"],
  ["🍯", "Honey Pot"],
  ["☕", "Hot Beverage"],
  ["🌋", "Volcano"],
  ["🏛️", "Classical Building"],
  ["🏠", "House"],
  ["⛺", "Tent"],
  ["💈", "Barber Pole"],
  ["🎪", "Circus Tent"],
  ["🚂", "Locomotive"],
  ["🚕", "Taxi"],
  ["🚗", "Automobile"],
  ["🚚", "Delivery Truck"],
  ["🚜", "Tractor"],
  ["🏎️", "Racing Car"],
  ["🚲", "Bicycle"],
  ["🚢", "Ship"],
  ["✈️", "Airplane"],
  ["🛰️", "Satellite"],
  ["🚀", "Rocket"],
  ["🛎️", "Bellhop Bell"],
  ["⏳", "Hourglass Not Done"],
  ["⏰", "Alarm Clock"],
  ["🌟", "Glowing Star"],
  ["☀️", "Sun"],
  ["🌙", "Crescent Moon"],
  ["🔥", "Fire"],
  ["💧", "Droplet"],
  ["🌊", "Water Wave"],
  ["🎀", "Ribbon"],
  ["🎁", "Wrapped Gift"],
  ["🏆", "Trophy"],
  ["⚽", "Soccer Ball"],
  ["🏀", "Basketball"],
  ["🏓", "Ping Pong"],
  ["🎱", "Pool 8 Ball"],
  ["🔮", "Crystal Ball"],
  ["🎩", "Top Hat"],
  ["💎", "Gem Stone"],
  ["📣", "Megaphone"],
  ["🔔", "Bell"],
  ["🎵", "Musical Note"],
  ["🎤", "Microphone"],
  ["🎧", "Headphone"],
  ["🎸", "Guitar"],
  ["🎹", "Musical Keyboard"],
  ["☎️", "Telephone"],
  ["📟", "Pager"],
  ["💾", "Floppy Disk"],
  ["📀", "DVD"],
  ["🎥", "Movie Camera"],
  ["🎬", "Clapper Board"],
  ["📺", "Television"],
  ["📸", "Camera with Flash"],
  ["📹", "Video Camera"],
  ["📼", "Videocassette"],
  ["📚", "Books"],
  ["📓", "Notebook"],
  ["📦", "Package"],
  ["📫", "Closed Mailbox with Raised Flag"],
  ["✏️", "Pencil"],
  ["🖍️", "Crayon"],
  ["📋", "Clipboard"],
  ["📌", "Pushpin"],
  ["📎", "Paperclip"],
  ["📐", "Triangular Ruler"],
  ["✂️", "Scissors"],
  ["🗄️", "File Cabinet"],
  ["🗑️", "Wastebasket"],
  ["📡", "Satellite Antenna"],
  ["♻️", "Recycling Symbol"],
  ["🤠", "Cowboy Hat Face"],
  ["🤹", "Person Juggling"],
  ["🦍", "Gorilla"],
  ["🥝", "Kiwi Fruit"],
  ["🥑", "Avocado"],
  ["🥕", "Carrot"],
  ["🥐", "Croissant"],
  ["🥖", "Baguette Bread"],
  ["🥈", "2nd Place Medal"],
  ["🥁", "Drum"],
  ["🛒", "Shopping Cart"],
  ["🧠", "Brain"],
  ["🥥", "Coconut"],
  ["🥦", "Broccoli"],
  ["🥨", "Pretzel"],
  ["🥟", "Dumpling"],
  ["🥠", "Fortune Cookie"],
  ["🥡", "Takeout Box"],
  ["🥧", "Pie"]
]

export function randomEmoji(){
  const index = Math.floor(Math.random()*emojis.length);
  return emojis[index][0];
};
  
