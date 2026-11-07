/*
  All website content lives here. Edit this file; you should not need to touch app.js.

  Each page has a list of sections. Each section has a `type` (which component draws it)
  and the fields that component needs. Optional on every section:
    heading   – section title
    id        – anchor id; link to it with "#/page/id" (e.g. "#/lifestyle/fashion")
    intro     – short muted paragraph under the heading
    more      – { label, href } link shown under the section
    note      – { pillar, text } shown only in presenter mode (press P)
    draft     – true marks the whole section as unfinished (dashed outline)

  Any text beginning with "TBD" renders as a visible placeholder.

  Shared data used by several pages:
    team        – names shown in the footer
    photos      – every photo, with its credit (the Credits page is built from this)
    characters  – the Willow Tree character library
    genres      – shop categories
    catalog     – every book in the shop
    partners    – placeholder partner logos (all fictional)

  Component types: hero, text, features, cards, characters, cast, readAlong, media, videos,
  spotlight, banner, books, tiers, steps, timeline, stats, logos, faq, subnav, credits, placeholder
*/

window.SITE = {
  brand: {
    name: "Willow Tree",
    sub: "Publishing",
    footer: "Concept prototype for the Bain x Prism Fall 2026 case competition. Willow Tree Publishing, its characters, people and partners are fictional."
  },

  /* Shown at the bottom of every page. Add or correct names here. */
  team: ["V. Wansink", "L. Norberg"],

  nav: [
    { id: "home", label: "Home" },
    { id: "kids", label: "Kids" },
    { id: "lifestyle", label: "Lifestyle" },
    { id: "shop", label: "Shop" },
    { id: "club", label: "Story Club" },
    { id: "partners", label: "Partners" },
    { id: "case", label: "The case" }
  ],

  /* Photos are hotlinked from Wikimedia Commons under the licences listed.
     If a photo can't load (offline), a labelled placeholder appears instead.
     To use local copies, save them in assets/media/ and change `src`. */
  photos: {
    levar: {
      src: "https://upload.wikimedia.org/wikipedia/commons/3/35/LeVar_Burton_Photo_Op_GalaxyCon_Raleigh_2023.jpg",
      alt: "LeVar Burton smiling at a fan convention",
      credit: "Super Festivals from Ft. Lauderdale, USA", license: "CC BY 2.0",
      page: "https://commons.wikimedia.org/wiki/File:LeVar_Burton_Photo_Op_GalaxyCon_Raleigh_2023.jpg",
      position: "50% 25%"
    },
    bedtime: {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/46/Bedtime_story_-_Madeline.JPG",
      alt: "A parent reading a picture book to a child at bedtime",
      credit: "Ldorfman", license: "CC BY-SA 3.0",
      page: "https://commons.wikimedia.org/wiki/File:Bedtime_story_-_Madeline.JPG"
    },
    favorite: {
      src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/The_Favorite_by_Georgios_Iakovidis.jpg",
      alt: "Painting of a grandfather holding his young grandson",
      credit: "Georgios Jakobides, The Favorite", license: "Public domain",
      page: "https://commons.wikimedia.org/wiki/File:The_Favorite_by_Georgios_Iakovidis.jpg",
      position: "50% 30%"
    },
    bookshop: {
      src: "https://upload.wikimedia.org/wikipedia/commons/8/80/Libraria_Carturesti_Carusel_-_Interior_ziua.jpg",
      alt: "A bright, multi-storey bookshop with white balconies of shelves",
      credit: "Mihai Petre", license: "CC BY-SA 4.0",
      page: "https://commons.wikimedia.org/wiki/File:Libraria_Carturesti_Carusel_-_Interior_ziua.jpg"
    },
    bread: {
      src: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Freshly_baked_bread_loaves.jpg",
      alt: "Freshly baked loaves of bread coming out of the oven",
      credit: "FotoDawg (Flickr)", license: "CC BY 2.0",
      page: "https://commons.wikimedia.org/wiki/File:Freshly_baked_bread_loaves.jpg"
    },
    runway: {
      src: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Michael_Kors_Spring-Summer_2014_01.jpg",
      alt: "A model walking a fashion show runway",
      credit: "Christopher Macsurak from Chicago, USA", license: "CC BY 2.0",
      page: "https://commons.wikimedia.org/wiki/File:Michael_Kors_Spring-Summer_2014_01.jpg",
      position: "50% 20%"
    },
    classroom: {
      src: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Elementary_classroom_in_Alaska.jpg",
      alt: "An elementary school classroom with students at their desks",
      credit: "Liz (Flickr)", license: "CC BY 2.0",
      page: "https://commons.wikimedia.org/wiki/File:Elementary_classroom_in_Alaska.jpg"
    },
    shelves: {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a3/SanDiegoCityCollegeLearningResource_-_bookshelf.jpg",
      alt: "Long rows of library bookshelves",
      credit: "Joe Crawford from Moorpark, California, USA", license: "CC BY 2.0",
      page: "https://commons.wikimedia.org/wiki/File:SanDiegoCityCollegeLearningResource_-_bookshelf.jpg"
    },
    scouts: {
      src: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Girl_Scouts_raising_the_American_flag.jpg",
      alt: "A troop of Girl Scouts at an outdoor ceremony",
      credit: "Villwock at English Wikipedia", license: "CC BY-SA 3.0",
      page: "https://commons.wikimedia.org/wiki/File:Girl_Scouts_raising_the_American_flag.jpg"
    }
  },

  /* The character library. `color` picks the art background: leaf, sun, sky or berry. */
  characters: [
    {
      id: "wren", name: "Wren Willowby", kind: "A small wren", since: 1986, color: "sun",
      blurb: "Collects the words people drop and gives each one back to someone who needs it.",
      tags: ["Picture books", "Read-along host", "Pilot in testing"]
    },
    {
      id: "badger", name: "Barnaby Badger", kind: "A badger librarian", since: 1989, color: "leaf",
      blurb: "Runs the lending burrow under the old willow and has never once returned a book late.",
      tags: ["Picture books", "Early readers", "Library card star"]
    },
    {
      id: "otters", name: "Juniper and Moss", kind: "Otter twins", since: 1994, color: "sky",
      blurb: "Row the river every morning, argue about the map, and always find their way home.",
      tags: ["Picture books", "Series pitch ready", "Available to license"]
    },
    {
      id: "mole", name: "Marigold Mole", kind: "A gardening mole", since: 2001, color: "berry",
      blurb: "Grows a vegetable patch, then cooks everything in it with whoever drops by.",
      tags: ["Picture books", "Kids' cookbook", "Cook-along shorts"]
    },
    {
      id: "amara", name: "Amara", kind: "A city kid with a kite", since: 2027, isNew: true, color: "sky",
      blurb: "Builds paper kites on her apartment roof and flies them over every neighbourhood in the city.",
      tags: ["New series for 2027", "Written with new voices", "Story Club early access"]
    }
  ],

  genres: [
    { id: "picture", label: "Picture books" },
    { id: "board", label: "Board books" },
    { id: "early", label: "Early readers" },
    { id: "middle", label: "Middle grade" },
    { id: "novels", label: "Novels" },
    { id: "cookbooks", label: "Cookbooks" },
    { id: "fashion", label: "Fashion and style" },
    { id: "audio", label: "Audiobooks" }
  ],

  /* Every book in the shop. `series` links a book to a character for the series filter.
     Cover fields: bg, ink, accent, art ("char:wren" or a motif: willow, mill, clock,
     lanterns, moon, plate, bowl, hanger, stitch, star), kind ("novel" or "fashion" moves the title down). */
  catalog: [
    { id: "wren-word", title: "Wren and the Word That Got Away", author: "Hattie Bloom", genre: "picture", series: "wren", format: "Hardcover", age: "Ages 3 to 6", price: 17.99, badge: "Bestseller", bg: "#F2B630", art: "char:wren" },
    { id: "barnaby-burrow", title: "Barnaby's Lending Burrow", author: "Hattie Bloom", genre: "picture", series: "badger", format: "Hardcover", age: "Ages 3 to 6", price: 16.99, bg: "#A9C77A", art: "char:badger" },
    { id: "otters-upstream", title: "Juniper and Moss Row Upstream", author: "Samuel Reyes", genre: "picture", series: "otters", format: "Hardcover", age: "Ages 4 to 7", price: 17.99, bg: "#BFDCE5", art: "char:otters" },
    { id: "amara-kites", title: "Amara and the Paper Kites", author: "Nia Coleman", genre: "picture", series: "amara", format: "Hardcover", age: "Ages 4 to 8", price: 18.99, badge: "Pre-order", bg: "#E9A6B9", art: "char:amara" },
    { id: "treasury", title: "The Willow Tree Treasury: 40 Years of Stories", author: "Willow Tree Editors", genre: "picture", format: "Gift edition", age: "All ages", price: 34.99, badge: "40th anniversary", bg: "#3E5A1E", ink: "#FBFBF7", accent: "#FBE3A6", art: "char:badger" },
    { id: "wren-first", title: "Wren's First Words", author: "Hattie Bloom", genre: "board", series: "wren", format: "Board book", age: "Ages 0 to 3", price: 8.99, bg: "#FBE3A6", art: "char:wren" },
    { id: "moss-splash", title: "Splash, Moss, Splash", author: "Samuel Reyes", genre: "board", series: "otters", format: "Board book", age: "Ages 0 to 3", price: 8.99, bg: "#D6EAF0", art: "char:otters" },
    { id: "barnaby-late", title: "Barnaby and the Very Late Book", author: "Hattie Bloom", genre: "early", series: "badger", format: "Paperback", age: "Reading level 1", price: 5.99, bg: "#DCE8C6", art: "char:badger" },
    { id: "marigold-soup", title: "Marigold Makes Soup", author: "Elena Park", genre: "early", series: "mole", format: "Paperback", age: "Reading level 2", price: 5.99, bg: "#F4D2DC", art: "char:mole" },
    { id: "river-clock", title: "The River Clock", author: "Samuel Reyes", genre: "middle", format: "Paperback", age: "Ages 8 to 12", price: 9.99, kind: "novel", bg: "#5E8FA0", ink: "#FBFBF7", accent: "#FBE3A6", art: "clock" },
    { id: "mill-ashby", title: "The Mill at Ashby Bend", author: "Theo Marsh", genre: "novels", format: "Hardcover", age: "Fiction", price: 28.00, badge: "Book club pick", kind: "novel", bg: "#1C2433", ink: "#FBFBF7", accent: "#F2B630", art: "mill" },
    { id: "lanterns", title: "Summer of Lanterns", author: "Ines Varga", genre: "novels", format: "Paperback", age: "Fiction", price: 18.00, kind: "novel", bg: "#B84A6A", ink: "#FBFBF7", accent: "#FBE3A6", art: "lanterns" },
    { id: "small-hours", title: "Small Hours", author: "Theo Marsh", genre: "novels", format: "Hardcover", age: "Fiction", price: 27.00, kind: "novel", bg: "#3E5A1E", ink: "#FBFBF7", accent: "#BFDCE5", art: "willow" },
    { id: "sunday-table", title: "Sunday Table", author: "Rosa Delgado", genre: "cookbooks", format: "Hardcover", age: "120 recipes", price: 35.00, badge: "New", bg: "#FDF1CF", accent: "#3E5A1E", art: "plate" },
    { id: "twenty-minute", title: "Twenty-Minute Suppers", author: "Rosa Delgado", genre: "cookbooks", format: "Paperback", age: "80 recipes", price: 24.99, bg: "#DCE8C6", accent: "#B84A6A", art: "bowl" },
    { id: "garden-cookbook", title: "Marigold Mole's Garden Cookbook", author: "Elena Park", genre: "cookbooks", series: "mole", format: "Hardcover", age: "Cooking with kids", price: 19.99, bg: "#F4D2DC", art: "char:mole" },
    { id: "autumn-edit", title: "The Edit: Autumn 2026", author: "Willow Tree Fashion", genre: "fashion", format: "Bookazine", age: "Seasonal edition", price: 14.99, kind: "fashion", bg: "#E9A6B9", accent: "#1C2433", art: "hanger" },
    { id: "wardrobe", title: "A Wardrobe for Life", author: "Priya Anand", genre: "fashion", format: "Hardcover", age: "Style guide", price: 32.00, kind: "fashion", bg: "#1C2433", ink: "#FBFBF7", accent: "#F2B630", art: "stitch" },
    { id: "wren-audio", title: "Wren and the Word That Got Away", author: "Read by Hattie Bloom", genre: "audio", series: "wren", format: "Audiobook", age: "12 minutes", price: 6.99, bg: "#F2B630", art: "char:wren" },
    { id: "mill-audio", title: "The Mill at Ashby Bend", author: "Read by Theo Marsh", genre: "audio", format: "Audiobook", age: "9 hours 40 minutes", price: 24.99, kind: "novel", bg: "#1C2433", ink: "#FBFBF7", accent: "#F2B630", art: "mill" }
  ],

  /* Placeholder logos. Every organisation here is invented for the demo. */
  partners: [
    { id: "northbrook", name: "Northbrook Public Media", type: "Public broadcaster", mark: "arch", serif: true },
    { id: "lantern", name: "Lantern Lane Animation", type: "Animation studio", mark: "reel" },
    { id: "meadowfield", name: "Meadowfield Unified Schools", type: "School district", mark: "school" },
    { id: "library-alliance", name: "National Library Alliance", type: "Library network", mark: "book", serif: true },
    { id: "hearthside", name: "Hearthside Plush Co.", type: "Toy licensee", mark: "bear" },
    { id: "kindred", name: "Kindred Youth Network", type: "Community organisation", mark: "knot" },
    { id: "fjord", name: "Fjord Learning", type: "English learning, Sweden", mark: "globe" },
    { id: "riverbend", name: "Riverbend Public Library", type: "Library partner", mark: "wave", serif: true }
  ],

  pages: {
    /* ------------------------------------------------------------------ */
    home: {
      title: "Willow Tree",
      sections: [
        {
          type: "hero",
          title: "Stories for every generation.",
          text: "Forty years of beloved characters, in print, on screen and read aloud.",
          actions: [
            { label: "Meet the characters", href: "#/kids/characters", primary: true },
            { label: "Shop books", href: "#/shop" },
            { label: "Join the Story Club", href: "#/club" }
          ],
          note: { pillar: "Brand and nostalgia", text: "Leads with heritage and trust, the asset competitors can't copy. Speaks to parents and grandparents who grew up with the books." }
        },
        {
          type: "cards",
          heading: "One house, three shelves",
          items: [
            { photo: "bedtime", title: "Willow Tree Kids", text: "Picture books, read-alongs and short animated stories with characters children already love.", href: "#/kids" },
            { photo: "bread", title: "Willow Tree Lifestyle", text: "Cookbooks, novels and audiobooks, with the cooks and authors who wrote them.", href: "#/lifestyle" },
            { photo: "runway", title: "Willow Tree Fashion", text: "Seasonal edits and style guides, broken down by the editors and models who made them.", href: "#/lifestyle/fashion" }
          ],
          note: { pillar: "Online presence", text: "Replaces one generic corporate account with sector brands, each with its own audience, hosts and marketing team." }
        },
        {
          type: "cast",
          heading: "Meet the characters",
          compact: true,
          href: "#/kids/characters",
          more: { label: "See every character", href: "#/kids/characters" },
          note: { pillar: "Stories and IP", text: "The character library is the core asset. Every face here is licensable to screen, toy and audio partners." }
        },
        {
          type: "books",
          heading: "New on the shelf",
          items: ["amara-kites", "sunday-table", "mill-ashby", "treasury"],
          link: "#/shop",
          more: { label: "Browse the shop", href: "#/shop" },
          note: { pillar: "Direct to consumer", text: "An online storefront turns brand traffic into margin Willow Tree keeps, instead of handing it to retailers." }
        },
        {
          type: "banner",
          art: "box",
          title: "The Family Bundle",
          text: "Two children's books and one for the grown-ups, on the doorstep every month. $39.99 a month, free US shipping.",
          actions: [
            { label: "Choose a box", href: "#/club/family", primary: true },
            { label: "Compare all boxes", href: "#/club/young" }
          ],
          note: { pillar: "Recurring revenue", text: "One subscription serves the whole household, which is how a 40-year multi-generational audience actually buys." }
        },
        {
          type: "spotlight",
          heading: "Forty years under the willow",
          photo: "favorite",
          text: "Grandparents who grew up with Barnaby Badger now read him to their grandchildren. We still publish every book with the same care, and now you can hear them, watch them and have them delivered.",
          actions: [{ label: "Shop the 40th anniversary Treasury", href: "#/shop/picture" }],
          note: { pillar: "Brand and nostalgia", text: "Gen X and boomer grandparents are a high-trust, high-spend audience. Nostalgia is the hook for gifting and the Generations Gift box." }
        },
        {
          type: "timeline",
          items: [
            { year: "1986", text: "Willow Tree opens in a converted mill and publishes the first Wren Willowby book." },
            { year: "1989", text: "Barnaby Badger opens his lending burrow." },
            { year: "1994", text: "Juniper and Moss row onto the shelf." },
            { year: "2001", text: "Marigold Mole plants her first garden." },
            { year: "2026", text: "Read-alongs, the Story Club and the shop launch." },
            { year: "2027", text: "Amara and the Paper Kites starts a new series." }
          ]
        },
        {
          type: "videos",
          heading: "Watch together",
          intro: "Calm, short and made from the books. Every video ends with the story it came from.",
          items: [
            { title: "Wren's Word of the Week", kind: "Short", duration: "0:45", art: "char:wren", bg: "sun", href: "#/kids/watch" },
            { title: "Barnaby's Lending Burrow", kind: "Read-aloud", duration: "6:40", art: "char:badger", bg: "leaf", href: "#/kids/watch" },
            { title: "Marigold Makes Pea Soup", kind: "Cook-along", duration: "3:12", art: "char:mole", bg: "berry", href: "#/kids/watch" }
          ],
          more: { label: "Visit Willow Tree Kids", href: "#/kids" }
        },
        {
          type: "logos",
          heading: "In good company",
          items: ["northbrook", "lantern", "library-alliance", "meadowfield"],
          href: "#/partners",
          more: { label: "Work with us", href: "#/partners" }
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    kids: {
      title: "Willow Tree Kids",
      sections: [
        {
          type: "text",
          heading: "Healthy screen time, built from books",
          text: "Every video starts and ends with a book. Short, calm and made to be watched together.",
          note: { pillar: "Online presence", text: "Positions the YouTube channel as parent-approved screen time, so digital supports print instead of replacing it." }
        },
        {
          type: "subnav",
          items: [
            { label: "Characters", href: "#/kids/characters" },
            { label: "Read along", href: "#/kids/read" },
            { label: "Pilot", href: "#/kids/pilot" },
            { label: "Watch", href: "#/kids/watch" },
            { label: "Young Writers Prize", href: "#/kids/writers" }
          ]
        },
        {
          type: "cast",
          id: "characters",
          heading: "The characters",
          intro: "Four characters families have loved for decades, and a new one arriving in 2027.",
          note: { pillar: "Stories and IP", text: "Licensed, not sold, so Willow Tree earns royalties on every external production. Amara shows new characters reaching new and under-represented audiences." }
        },
        {
          type: "readAlong",
          id: "read",
          heading: "Read along with Wren",
          intro: "Press play and the story reads itself aloud, word by word. Narration is generated in the browser.",
          story: "Under the old willow, Wren Willowby found a word lying in the grass. It was a small word, a little muddy, and it said hello. Wren carried it past the bridge, past the mill, and all the way to the bend in the river, where a shy young otter was waiting for someone to say it.",
          note: { pillar: "Technical demo", text: "Live synthesised narration with word highlighting. The same approach, using AI narration, can voice the backlist at a fraction of studio cost." }
        },
        {
          type: "media",
          id: "pilot",
          heading: "Short-form pilot",
          poster: "levar",
          posterTitle: "Wren and the Word That Got Away",
          posterSub: "A 60-second animated short, introduced by a celebrity guest reader",
          caption: "Pilot concept: a famous, trusted reader opens each short with a one-line hello before the animation starts. Casting concept only, pictured is LeVar Burton, with no affiliation implied.",
          src: "",
          note: { pillar: "Stories and IP", text: "Short-form clips act as cheap pilots. A familiar face gives each one a personal feel; characters that perform become the pitch for a licensed TV series." }
        },
        {
          type: "videos",
          id: "watch",
          heading: "On the Willow Tree Kids channel",
          intro: "No autoplay, no ads, nothing over ten minutes.",
          items: [
            { title: "Wren's Word of the Week: Puddle", kind: "Short", duration: "0:45", art: "char:wren", bg: "sun" },
            { title: "Barnaby's Lending Burrow", kind: "Read-aloud", duration: "6:40", art: "char:badger", bg: "leaf" },
            { title: "Juniper and Moss: The Big Splash", kind: "Short", duration: "0:58", art: "char:otters", bg: "sky" },
            { title: "Marigold Makes Pea Soup", kind: "Cook-along", duration: "3:12", art: "char:mole", bg: "berry" },
            { title: "Amara and the Paper Kites, first look", kind: "Preview", duration: "1:30", art: "char:amara", bg: "sky" },
            { title: "Story time with Hattie Bloom", kind: "Author reading", duration: "8:05", art: "char:wren", bg: "leaf" }
          ],
          note: { pillar: "Online presence", text: "Characters host their own channel. Shorts test which characters travel; read-alouds and author readings build trust with parents." }
        },
        {
          type: "spotlight",
          id: "writers",
          heading: "The Young Writers Prize",
          photo: "classroom",
          text: "Students in grades 2 to 6 write a new adventure for a Willow Tree character. The winning story is animated as a featured short on the channel, and the winner's school library gets 100 new books.",
          points: ["Entries open every January through participating schools", "Judged by Willow Tree authors and editors", "Winners announced at the spring Willow Tree Book Fair"],
          actions: [{ label: "Enter through your school", href: "#/partners/schools", primary: true }],
          note: { pillar: "Distribution", text: "Gives schools a reason to choose a Willow Tree book fair over Scholastic, and produces new content for the channel at almost no cost." }
        },
        {
          type: "features",
          heading: "For parents",
          items: [
            { title: "Calm by design", text: "Gentle pacing, no flashing effects and no autoplay into the next video." },
            { title: "Every video ends with a book", text: "Each episode closes on the cover, so a favourite short leads back to the story." },
            { title: "Read-alongs in every box", text: "Story Club kids' boxes include a read-along code for that month's titles.", href: "#/club/young" }
          ]
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    lifestyle: {
      title: "Willow Tree Lifestyle",
      sections: [
        {
          type: "text",
          heading: "Willow Tree Lifestyle",
          text: "Books for the grown-ups, and the people who write them.",
          note: { pillar: "Online presence", text: "Each lifestyle area has its own host, channel and marketing team, instead of one corporate account for everything." }
        },
        {
          type: "subnav",
          items: [
            { label: "Kitchen", href: "#/lifestyle/kitchen" },
            { label: "Fiction", href: "#/lifestyle/fiction" },
            { label: "Fashion", href: "#/lifestyle/fashion" },
            { label: "Listen", href: "#/lifestyle/listen" }
          ]
        },
        {
          type: "spotlight",
          id: "kitchen",
          heading: "Willow Tree Kitchen",
          photo: "bread",
          person: { name: "Rosa Delgado", role: "Author of Sunday Table and host of the weekly cook-along", avatar: { skin: "#B27A55", hair: "#2B1D16", style: "bun", top: "#B84A6A", bg: "sun" } },
          text: "Our cookbook authors cook every recipe on camera, start to finish, so you can cook along at home.",
          points: ["A new cook-along video every Sunday", "Six recipe cards in every Story Club Kitchen Box", "Marigold Mole's Garden Cookbook for cooking with kids"],
          actions: [{ label: "Shop cookbooks", href: "#/shop/cookbooks", primary: true }, { label: "See the Kitchen Box", href: "#/club/grownups" }],
          note: { pillar: "Author-led marketing", text: "The cook breaks the book down on video. People buy from people, and a regular host gives the Lifestyle channel a face." }
        },
        {
          type: "books",
          items: ["sunday-table", "twenty-minute", "garden-cookbook"]
        },
        {
          type: "spotlight",
          id: "fiction",
          heading: "Willow Tree Fiction",
          photo: "shelves",
          reverse: true,
          person: { name: "Theo Marsh", role: "Author of The Mill at Ashby Bend", avatar: { skin: "#E3B896", hair: "#7A5232", style: "short", top: "#3E5A1E", glasses: true, bg: "leaf" } },
          text: "In Between the Lines, our novelists take one chapter apart on camera: where the idea came from, what they cut, and why it ends the way it does.",
          points: ["A monthly author live read for Story Club members", "Advance reader copies for reviewers and book creators", "Free book club guides for every novel"],
          actions: [{ label: "Shop novels", href: "#/shop/novels", primary: true }, { label: "Join the Reader's Box", href: "#/club/grownups" }],
          note: { pillar: "Author-led marketing", text: "A Masterclass-style series. Readers want more contact with authors, and social discovery concentrates sales on a few titles, so we make our authors the marketing." }
        },
        {
          type: "books",
          items: ["mill-ashby", "small-hours", "lanterns"]
        },
        {
          type: "spotlight",
          id: "fashion",
          heading: "Willow Tree Fashion",
          photo: "runway",
          person: { name: "Priya Anand", role: "Editor of The Edit", avatar: { skin: "#9C6B4E", hair: "#1C1410", style: "long", top: "#1C2433", bg: "berry" } },
          text: "Twice a year The Edit gathers the season into one beautiful print edition. Then the models and stylists who shot it break each look down on video.",
          points: ["The Edit, published every spring and autumn", "Style guides that last longer than a season", "Behind-the-shoot videos with the people in the pages"],
          actions: [{ label: "Shop fashion and style", href: "#/shop/fashion", primary: true }],
          note: { pillar: "Portfolio", text: "Fashion moves from monthly magazines to fewer, higher-value seasonal editions. Underperforming monthly titles are licensed out for a lump sum to fund the growth pillars." }
        },
        {
          type: "spotlight",
          id: "listen",
          heading: "Listen",
          art: "listen",
          reverse: true,
          text: "Our authors read their own audiobooks wherever they can. Backlist favourites are getting audio editions too, so every Willow Tree story can be heard as well as read.",
          points: ["New picture books read by the people who wrote them", "Audiobook membership from $9.99 a month", "One free audiobook with every Reader's Box"],
          actions: [{ label: "Shop audiobooks", href: "#/shop/audio", primary: true }, { label: "See the Listener plan", href: "#/club/grownups" }],
          note: { pillar: "Audio and AI narration", text: "Audio is the fastest-growing format. Authors narrate front-list titles; AI narration voices the backlist at a fraction of studio cost." }
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    shop: {
      title: "Shop",
      sections: [
        {
          type: "banner",
          photo: "bookshop",
          title: "The Willow Tree shop",
          text: "Every title we publish, shipped from our own warehouse. Free US shipping on orders over $35.",
          actions: [{ label: "Browse all books", href: "#/shop/catalog", primary: true }],
          note: { pillar: "Direct to consumer", text: "An online storefront: higher margin per book, direct customer data, and a home for the whole backlist, not just what retailers stock." }
        },
        {
          type: "characters",
          heading: "Shop by character",
          items: [
            { name: "Wren Willowby", blurb: "Words and friendship", color: "sun", href: "#/shop/wren" },
            { name: "Barnaby Badger", blurb: "Libraries and kindness", color: "leaf", href: "#/shop/badger" },
            { name: "Juniper and Moss", blurb: "River adventures", color: "sky", href: "#/shop/otters" },
            { name: "Marigold Mole", blurb: "Gardens and cooking", color: "berry", href: "#/shop/mole" },
            { name: "Amara", blurb: "New in 2027", color: "sky", href: "#/shop/amara" }
          ]
        },
        {
          type: "books",
          id: "catalog",
          heading: "All books",
          items: "all",
          filters: true
        },
        {
          type: "features",
          heading: "More ways to buy",
          items: [
            { title: "Pre-loved classroom sets", text: "Books returned by schools, checked page by page and resold from $2.50 a copy." },
            { title: "Bulk orders for schools", text: "Shipped straight to the district. 40% off list price from 50 copies.", href: "#/partners/schools" },
            { title: "Give a Story Club box", text: "Three, six or twelve months of books, with a note in your own words.", href: "#/club/family" },
            { title: "Library cardholders save 15%", text: "Show a partner library card at checkout for 15% off every Story Club box.", href: "#/partners/libraries" }
          ],
          note: { pillar: "New markets", text: "Used-book resale serves the education market cheaply, and bulk wholesale goes direct to schools instead of through distributors." }
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    club: {
      title: "Story Club",
      sections: [
        {
          type: "banner",
          art: "box",
          title: "Story Club",
          text: "A new book on the doorstep every month, hand-picked by Willow Tree editors, with boxes for every reader in the house.",
          actions: [{ label: "See the Family Bundle", href: "#/club/family", primary: true }, { label: "Compare boxes", href: "#/club/young" }],
          note: { pillar: "Recurring revenue", text: "Subscriptions turn one-off purchases into predictable monthly revenue and give Willow Tree direct customer data." }
        },
        {
          type: "steps",
          heading: "How it works",
          items: [
            { title: "Pick a box", text: "Choose a box for each reader, or one Family Bundle for the whole house." },
            { title: "Tell us about your readers", text: "Ages, favourite characters and anything you already own." },
            { title: "Editors choose the books", text: "Every title is hand-picked. You can swap any pick before it ships." },
            { title: "It arrives in the first week", text: "Free US shipping. Skip or pause any month from your account." }
          ]
        },
        {
          type: "tiers",
          id: "family",
          heading: "The Family Bundle",
          intro: "One box for the whole household: books for the children and something for the grown-ups.",
          billing: true,
          cta: "Start a subscription",
          items: [
            {
              name: "Family Bundle", badge: "Most popular", featured: true,
              desc: "For households with one or two children",
              price: "$39.99", period: "per month", annual: "$399", annualPeriod: "per year, two months free",
              points: ["Two children's books, matched to each child's age", "One adult novel or cookbook, your pick each month", "Read-along and audiobook codes for every title", "Early access to new characters, starting with Amara", "Free US shipping"],
              save: "About $12 a month less than three separate boxes"
            },
            {
              name: "Generations Gift",
              desc: "From grandparents, to grandchildren",
              price: "$59", period: "for three months", annual: "$59", annualPeriod: "for three months",
              points: ["Three monthly Sprout or Sapling boxes sent to a grandchild", "A printed note in your own words in the first box", "A 40th anniversary Treasury for you to keep", "Six and twelve month gifts at $109 and $199"],
              save: "One payment, no renewal"
            }
          ],
          note: { pillar: "Recurring revenue", text: "The bundle of adult and children's books from the team notes. It raises spend per household and makes cancelling harder because everyone loses something." }
        },
        {
          type: "tiers",
          id: "young",
          heading: "For young readers",
          billing: true,
          cta: "Start a subscription",
          items: [
            { name: "Seedling", desc: "Ages 0 to 3", price: "$12.99", period: "per month", annual: "$129", annualPeriod: "per year", points: ["One board book", "A read-aloud tip card for parents", "Lullaby audio from the characters"] },
            { name: "Sprout", desc: "Ages 3 to 6", price: "$15.99", period: "per month", annual: "$159", annualPeriod: "per year", featured: true, badge: "Best for picture books", points: ["One hardcover picture book", "Read-along code for that title", "A character activity sheet"] },
            { name: "Sapling", desc: "Ages 6 to 9", price: "$22.99", period: "per month", annual: "$229", annualPeriod: "per year", points: ["One early reader and one chapter book", "Audiobook code for the chapter book", "Young Writers Prize story starters"] }
          ]
        },
        {
          type: "tiers",
          id: "grownups",
          heading: "For grown-ups",
          billing: true,
          cta: "Start a subscription",
          items: [
            { name: "Reader's Box", desc: "New fiction", price: "$19.99", period: "per month", annual: "$199", annualPeriod: "per year", featured: true, badge: "Before it's in shops", points: ["One new hardcover novel, two weeks before release", "A letter from the author", "Invitation to the monthly author live read", "One free audiobook a year"] },
            { name: "Kitchen Box", desc: "Cookbooks", price: "$29.99", period: "every two months", annual: "$149", annualPeriod: "per year", points: ["One new cookbook", "Six recipe cards", "The cook-along video for every recipe"] },
            { name: "Listener", desc: "Audiobooks only", price: "$9.99", period: "per month", annual: "$99", annualPeriod: "per year", points: ["One audiobook credit a month", "Authors reading their own books", "Keep every title, even if you cancel"] }
          ]
        },
        {
          type: "tiers",
          id: "schools",
          heading: "For schools and libraries",
          cta: "Request a quote",
          items: [
            { name: "Classroom", desc: "For one class", price: "$149", period: "per term", points: ["25 books matched to your class's reading levels", "Teacher guides and read-along codes", "One virtual author visit a year", "Young Writers Prize entry pack"] },
            { name: "Library Display Kit", desc: "For public and school libraries", price: "$79", period: "per month", points: ["A themed monthly display with posters and shelf cards", "Character library cards for new members", "Cardholders save 15% on any Story Club box"] }
          ],
          more: { label: "More for schools and libraries", href: "#/partners/schools" }
        },
        {
          type: "features",
          heading: "Every box includes",
          items: [
            { title: "Hand-picked titles", text: "Chosen by Willow Tree editors, never by an algorithm." },
            { title: "A read-along code", text: "Unlocks that month's titles only, so the screen always leads back to the book." },
            { title: "Skip or pause anytime", text: "No minimum term on monthly plans. Cancel in two clicks." },
            { title: "Free US shipping", text: "Shipping to Canada, the UK and Sweden from $4.99 a box." }
          ]
        },
        {
          type: "faq",
          heading: "Questions",
          items: [
            { q: "Can I choose the books myself?", a: "Editors pick each month's titles, and you can swap any pick for another from the same box up to five days before it ships. Family Bundle members choose their adult title every month." },
            { q: "Can the Family Bundle cover two children of different ages?", a: "Yes. Each child gets a book matched to their own age, from board books to chapter books." },
            { q: "How does the library discount work?", a: "If your library is a Willow Tree partner, enter your library card number at checkout for 15% off any monthly or annual box." },
            { q: "What does a read-along code unlock?", a: "Narrated, word-by-word read-alongs for the books in that box. It doesn't unlock the whole catalogue." },
            { q: "Do you ship outside the US?", a: "We ship to Canada, the UK and Sweden, with more countries coming as our English-learning programmes grow." }
          ]
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    partners: {
      title: "Partners",
      sections: [
        {
          type: "text",
          heading: "Work with Willow Tree",
          text: "Forty years of characters families trust, and the rights to bring them somewhere new.",
          note: { pillar: "Distribution and new markets", text: "Each audience is a channel: licensees for royalties, institutions for volume, communities for reach, international for growth beyond a flat US market." }
        },
        {
          type: "subnav",
          items: [
            { label: "Studios", href: "#/partners/studios" },
            { label: "Schools", href: "#/partners/schools" },
            { label: "Libraries", href: "#/partners/libraries" },
            { label: "Community", href: "#/partners/community" },
            { label: "International", href: "#/partners/international" },
            { label: "Authors and creators", href: "#/partners/creators" }
          ]
        },
        {
          type: "spotlight",
          id: "studios",
          heading: "Studios and broadcasters",
          art: "studio",
          text: "We license our characters for animation, TV and film. Willow Tree keeps the rights and earns royalties; partners bring production.",
          points: ["Public and educational broadcasters first, partners who share our families' trust", "Every pitch comes with audience data from our short-form pilots", "Content guidelines protect each character's voice", "Toy, plush and audio licensing alongside every series"],
          actions: [{ label: "Request the licensing pack", demo: "Licensing pack requested. This is a demo, so nothing was sent.", primary: true }],
          note: { pillar: "Stories and IP", text: "License, don't sell. Royalties on external productions without carrying production cost. Main focus of the TV strategy." }
        },
        {
          type: "steps",
          heading: "How licensing works",
          items: [
            { title: "Pilot", text: "60-second shorts test a character with real families on our channel." },
            { title: "Pitch", text: "Characters that perform become a series pitch, with the audience numbers to back it." },
            { title: "License", text: "The partner produces. Willow Tree approves scripts and earns royalties." },
            { title: "Publish", text: "Tie-in books and audiobooks for every season, back in print and in the Story Club." }
          ],
          note: { pillar: "Risk mitigation", text: "Content that doesn't convert is caught at the pilot stage, before anyone spends on a series." }
        },
        {
          type: "spotlight",
          id: "schools",
          heading: "Schools and book fairs",
          photo: "classroom",
          reverse: true,
          text: "A week-long Willow Tree Book Fair, books delivered straight to the district, and a writing prize that puts students' stories on screen.",
          points: ["Book fairs where the school keeps 25% of sales as free books", "Bulk wholesale direct to districts, 40% off list from 50 copies", "The Young Writers Prize: the winning story becomes a featured short", "Pre-loved classroom sets from $2.50 a book"],
          actions: [{ label: "Book a fair", demo: "Fair request noted. This is a demo, so nothing was sent.", primary: true }, { label: "About the Young Writers Prize", href: "#/kids/writers" }],
          note: { pillar: "Distribution", text: "The school channel, positioned head to head with Scholastic. School budgets are falling, so the fair pays schools in books and pre-loved sets keep costs low." }
        },
        {
          type: "spotlight",
          id: "libraries",
          heading: "Libraries",
          art: "librarycard",
          text: "A national partnership with library networks: our characters on library cards, a new themed display every month, and Story Club discounts for every cardholder.",
          points: ["Character library cards for new members", "Monthly themed displays with posters and shelf cards", "15% off Story Club boxes for partner library cardholders", "Free read-along story times led by librarians"],
          actions: [{ label: "See the Library Display Kit", href: "#/club/schools" }],
          note: { pillar: "Recurring revenue", text: "Libraries become a marketing channel for the Story Club, and the display kit is its own small subscription." }
        },
        {
          type: "spotlight",
          id: "community",
          heading: "Community organisations",
          photo: "scouts",
          reverse: true,
          text: "We work with youth and service groups like Girl Scouts, 4-H, Big Brothers Big Sisters and Rotary clubs to bring books to events, fundraisers and reading programmes.",
          points: ["Fundraiser book sales where the group keeps 20%", "Reading challenge badges with Willow Tree characters", "Pop-up shops and bookmobile visits at community events"],
          actions: [{ label: "Plan a fundraiser", demo: "Fundraiser request noted. This is a demo, so nothing was sent.", primary: true }],
          note: { pillar: "Distribution", text: "Community groups are both an advertising channel and a retail channel, reaching families outside bookshops." }
        },
        {
          type: "spotlight",
          id: "international",
          heading: "Learning English abroad",
          art: "globe",
          text: "Children around the world learn English with picture books. Our read-alongs pair every word with a voice, which makes them ideal for classrooms in countries like Sweden.",
          points: ["Picture books with read-along codes for language classrooms", "Teacher packs aligned to early English curricula", "Story Club shipping to Sweden, the UK and Canada"],
          note: { pillar: "New markets", text: "English-language content travels. International learners are growth beyond a US market forecast at 0.4% a year." }
        },
        {
          type: "features",
          id: "creators",
          heading: "Authors and creators",
          items: [
            { title: "Advance reader copies", text: "Reviewers, booksellers and book creators get new titles weeks early." },
            { title: "Authors on camera", text: "Author readings, chapter breakdowns and cook-alongs for every new release.", href: "#/lifestyle/fiction" },
            { title: "Author-narrated audio", text: "Wherever possible, the author reads their own audiobook.", href: "#/lifestyle/listen" },
            { title: "New voices", text: "Open submissions for stories from communities our shelves have missed, starting with the Amara series.", href: "#/kids/characters" }
          ],
          note: { pillar: "Author-led marketing", text: "Readers want contact with authors. Influencer copies and author content drive the social discovery that now decides which books sell." }
        },
        {
          type: "logos",
          heading: "Our partners",
          intro: "Placeholder logos for illustration. Every organisation shown here is fictional.",
          items: "all"
        },
        {
          type: "banner",
          title: "Become a partner",
          text: "Tell us who you are and what you'd like to make. Our partnerships team replies within five working days.",
          actions: [{ label: "Contact partnerships", demo: "This is a demo, so no message was sent.", primary: true }]
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    case: {
      title: "The case",
      sections: [
        {
          type: "stats",
          heading: "The market Willow Tree is in",
          source: "Source: IBISWorld, Book Publishing in the US (51113), February 2026; Audio Publishers Association.",
          items: [
            { value: "$48.9B", label: "US book publishing revenue, 2026" },
            { value: "0.4%", label: "Forecast annual growth, 2026–31" },
            { value: "$4.9B", label: "Children's books, the only print category growing units in Q1 2026" },
            { value: "+13%", label: "US audiobook sales growth in 2024, to $2.22B" },
            { value: "23%", label: "Share of new audiobook releases using AI narration" }
          ],
          note: { pillar: "Market context", text: "Backup for Q&A. The industry is flat, so growth has to come from new formats and channels, not more of the same print." }
        },
        {
          type: "features",
          heading: "Key problems",
          items: [
            { title: "Declining sales", text: "Most revenue still comes from print, and print is flat or falling outside children's books." },
            { title: "Slowing growth", text: "The industry grows about 0.3% a year and can't absorb rising paper and tariff costs." },
            { title: "Changing habits", text: "Young parents grew up digital, and short-form video competes for every child's attention." },
            { title: "Squeezed institutions", text: "School library budgets fall about 4.3% a year and the K-12 population is shrinking in places." }
          ]
        },
        {
          type: "features",
          heading: "Where each idea lives on this site",
          items: [
            { title: "Stories and IP", text: "Characters, short-form pilots and licensing.", href: "#/kids" },
            { title: "Online presence", text: "Sector brands with hosts, authors on camera, audio.", href: "#/lifestyle" },
            { title: "Recurring revenue", text: "Story Club boxes, the Family Bundle and library kits.", href: "#/club" },
            { title: "Distribution", text: "The shop, schools, libraries, community and international.", href: "#/partners" }
          ]
        },
        {
          type: "steps",
          heading: "Roadmap",
          items: [
            { title: "Stories and IP", text: "License characters to screen partners; pilot with short-form content." },
            { title: "Online presence", text: "Sector brands, a read-aloud channel and author-led marketing." },
            { title: "Expanding the portfolio", text: "Subscriptions, schools, libraries and international, funded partly by exiting underperforming newspapers and licensing magazine titles." }
          ],
          note: { pillar: "Action plan", text: "TBD: add timing and financial impact once the deck numbers are final." }
        },
        {
          type: "features",
          heading: "Risks and how we manage them",
          items: [
            { title: "Digital cannibalises print", text: "Digital is a discovery tool. Read-along codes unlock single titles, never the full catalogue." },
            { title: "Licensing dilutes the brand", text: "Choose partners carefully and issue content guidelines for every character." },
            { title: "Content doesn't convert", text: "Run small short-form pilots before committing to any series." }
          ]
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    /* Not in the nav; linked from the footer. */
    credits: {
      title: "Credits",
      sections: [
        {
          type: "credits",
          heading: "Credits",
          intro: "This site is a concept prototype. Willow Tree Publishing, its characters, staff, books and partners are fictional. Character art, book covers and logos are original illustrations made for this demo."
        }
      ]
    }
  }
};
