/*
  All website content lives here. Edit this file; you should not need to touch app.js.

  Each page has a list of sections. Each section has a `type` (which component draws it)
  and the fields that component needs. Optional on every section:
    heading   – section title
    id        – anchor id
    note      – { pillar, text } shown only in presenter mode (press P)
    draft     – true marks the whole section as unfinished (dashed outline)

  Any text beginning with "TBD" renders as a visible placeholder.

  Component types: hero, text, features, characters, readAlong, media, tiers, stats, steps, placeholder
*/

window.SITE = {
  brand: {
    name: "Willow Tree",
    sub: "Publishing",
    footer: "Concept prototype for the Bain x Prism Fall 2026 case competition. Willow Tree Publishing is a fictional company."
  },

  nav: [
    { id: "home", label: "Home" },
    { id: "kids", label: "Willow Tree Kids" },
    { id: "club", label: "Story Club" },
    { id: "partners", label: "Partners" },
    { id: "case", label: "The case" }
  ],

  pages: {
    home: {
      title: "Willow Tree",
      sections: [
        {
          type: "hero",
          title: "Forty years of stories, now wherever families read, watch and listen.",
          text: "The characters generations grew up with, in print, on screen and read aloud.",
          actions: [
            { label: "Meet the characters", href: "#/kids", primary: true },
            { label: "Join the Story Club", href: "#/club" }
          ],
          note: { pillar: "Brand and nostalgia", text: "Leads with heritage and trust, the asset competitors can't copy. Speaks to parents and grandparents who grew up with the books." }
        },
        {
          type: "features",
          heading: "One house, three shelves",
          items: [
            { title: "Willow Tree Kids", text: "Picture books, read-alouds and short animated stories with the characters children already love.", href: "#/kids" },
            { title: "Willow Tree Lifestyle", text: "Cookbooks and novels, with authors and cooks taking readers behind the pages.", href: "TBD" },
            { title: "Willow Tree Fashion", text: "TBD: role of the fashion magazines after portfolio review." }
          ],
          note: { pillar: "Online presence", text: "Replaces one generic corporate account with sector brands, each with its own audience, hosts and marketing team." }
        }
      ]
    },

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
          type: "characters",
          heading: "The characters",
          items: [
            { name: "TBD character", blurb: "TBD: one-line description.", color: "leaf" },
            { name: "TBD character", blurb: "TBD: one-line description.", color: "sun" },
            { name: "TBD character", blurb: "TBD: one-line description.", color: "sky" },
            { name: "TBD character", blurb: "TBD: one-line description.", color: "berry" }
          ],
          note: { pillar: "Stories and IP", text: "The character library is the core asset. Licensed, not sold, so Willow Tree earns royalties on every external production." }
        },
        {
          type: "readAlong",
          heading: "Read along",
          intro: "Press play and the story reads itself aloud, word by word. Narration is generated in the browser.",
          story: "Under the old willow, the smallest leaf wanted to see the river. So it waited for the wind, held on tight, and let go. It drifted past the bridge, past the mill, and all the way to the bend where the ducks were reading a book of their own.",
          note: { pillar: "Technical demo", text: "Live synthesised narration with word highlighting. The same approach, using AI narration, can voice the backlist at a fraction of studio cost." }
        },
        {
          type: "media",
          heading: "Short-form pilot",
          caption: "TBD: 30–60 second animated short to test a character before pitching a series.",
          src: "",
          note: { pillar: "Stories and IP", text: "Short-form clips act as cheap pilots. Characters that perform become the pitch for a licensed TV series." }
        }
      ]
    },

    club: {
      title: "Story Club",
      sections: [
        {
          type: "text",
          heading: "A new book on the doorstep every month",
          text: "Hand-picked by Willow Tree editors, with a bundle for the grown-ups too."
        },
        {
          type: "tiers",
          heading: "Choose a box",
          items: [
            { name: "Sprout", price: "TBD", period: "per month", points: ["One picture book", "Read-along access for that title", "TBD"] },
            { name: "Grove", price: "TBD", period: "per month", featured: true, points: ["Two children's books", "One adult title: novel or cookbook", "Early access to new characters"] },
            { name: "Classroom", price: "TBD", period: "per term", points: ["Bulk set for schools", "Teacher reading guides", "TBD"] }
          ],
          cta: "Start a subscription",
          note: { pillar: "Recurring revenue", text: "Subscriptions turn one-off purchases into predictable monthly revenue and give Willow Tree direct customer data." }
        }
      ]
    },

    partners: {
      title: "Partners",
      sections: [
        {
          type: "features",
          heading: "Work with Willow Tree",
          items: [
            { title: "Schools and book fairs", text: "Book fairs, bulk orders shipped straight to districts, and a young writers' competition whose winning story becomes a featured short." },
            { title: "Libraries", text: "Monthly themed displays and Willow Tree characters on library cards." },
            { title: "Studios and broadcasters", text: "License the characters for animation, TV and film. Willow Tree keeps the rights; partners bring production." },
            { title: "Learning English abroad", text: "Picture books and read-alongs for children learning English in markets like Sweden." }
          ],
          note: { pillar: "Distribution and new markets", text: "Each audience is a channel: institutions for volume, licensees for royalties, international for growth beyond a flat US market." }
        },
        {
          type: "placeholder",
          heading: "Partner logos",
          text: "TBD: illustrative partner types or logos.",
          draft: true
        }
      ]
    },

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
          type: "steps",
          heading: "Roadmap",
          items: [
            { title: "Stories and IP", text: "License characters to screen partners; pilot with short-form content." },
            { title: "Online presence", text: "Sector brands, a read-aloud channel and author-led marketing." },
            { title: "Expanding the portfolio", text: "Subscriptions, schools, libraries and international, funded partly by exiting underperforming newspapers and magazines." }
          ],
          note: { pillar: "Action plan", text: "TBD: add timing and financial impact once the deck numbers are final." }
        }
      ]
    }
  }
};
