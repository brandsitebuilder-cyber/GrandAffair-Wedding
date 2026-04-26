export type Language = 'en';

export const content = {
  en: {
    nav: {
      landing: "Home",
      story: "Our Story",
      invitation: "Invitation",
      schedule: "Schedule",
      dressCode: "Dress Code & RSVP",
      accommodation: "Accommodation & Travel",
      thingsToDo: "Things To Do",
      faq: "FAQ",
      gallery: "Gallery"
    },
    hero: {
      names: "Isabella & Alexander",
      date: "22 January 2027",
      venue: "The Ritz-Carlton · Sandton, Johannesburg",
      rsvpBtn: "RSVP"
    },
    story: {
      subtitle: "The Beginning",
      title: "Our Story",
      p1: "It began at a glamorous gala fundraiser under the sparkling chandeliers of a Johannesburg ballroom. He was the evening's guest speaker — a visionary entrepreneur with a commanding presence. She was a passionate philanthropist, radiant in a floor-length gown, championing the cause of the night.",
      p2: "Their eyes met across the room, and what started as a polite conversation became an all-night dance. They talked, they laughed, and they discovered a connection that neither could deny. By the time the last waltz played, they knew this was only the beginning.",
      p3: "From that night forward, they were inseparable. Weekends were filled with art gallery openings, candlelit dinners, and quiet sunsets over the city skyline. Their love grew deeper with every shared moment, every whispered promise, every adventure embraced together.",
      p4: "Today, they stand side by side, ready to say 'I do.' She is his inspiration, and he is her anchor. Surrounded by family and friends, we celebrate the extraordinary love story of Isabella and Alexander."
    },
    invitation: {
      title: "The Invitation",
      intro: "With hearts full of love and gratitude, together with their families,",
      names: "Isabella Torres & Alexander Grant",
      action: "request the honor of your presence",
      message: "We invite you to join us as we exchange our vows and begin our forever. Your presence at our wedding will make this celebration whole.",
      datetime: "Saturday, 22 January 2027 at 17:00",
      venue: "The Ritz-Carlton Ballroom, Sandton, Johannesburg",
      attire: "Attire: Black Tie",
      closing: "We look forward to celebrating our love with the warmth of our family and friends."
    },
    schedule: {
      subtitle: "The Timeline",
      title: "Schedule",
      items: [
        { time: "16:30", event: "Guest Arrival & Cocktails" },
        { time: "17:00", event: "Wedding Ceremony" },
        { time: "18:00", event: "Canapés & Refreshments" },
        { time: "19:30", event: "Reception & Dinner" },
        { time: "21:00", event: "Speeches & Toasts" },
        { time: "22:00", event: "Dancing & Celebration" }
      ]
    },
    details: {
      title: "Details & RSVP",
      attireSubtitle: "Dress Code",
      attireTitle: "Black Tie",
      attireIntro: "We kindly request full formal black tie attire.",
      attireList: [
        "For gentlemen: A classic black tuxedo with bow tie.",
        "For ladies: Floor-length evening gowns in elegant colors.",
        "We invite you to embrace the timeless sophistication of a black tie affair."
      ],
      rsvpSubtitle: "Join Us",
      rsvpTitle: "RSVP",
      rsvpText: "We kindly ask that you confirm your attendance by 15 December 2026. You may RSVP via the form below.",
      dietarySubtitle: "Menu",
      dietaryTitle: "Dietary Requirements",
      dietaryText: "Please let us know if you have any allergies or specific dietary needs so we can ensure you are well cared for on the evening.",
      thankYou: "Thank You",
      form: {
        name: "Full Name(s)",
        cellphone: "Cellphone Number",
        cellphonePlaceholder: "082 123 4567",
        attending: "Number Attending",
        dietary: "Dietary Requirements",
        message: "Message for the Couple",
        submit: "Submit RSVP",
        duplicateError: "It looks like you've already RSVP'd with this number!",
        networkError: "Failed to connect to the server. Please check your connection.",
        genericError: "Something went wrong. Please try again later."
      }
    },
    accommodation: {
      subtitle: "Stay & Travel",
      title: "Accommodation & Travel",
      intro: "We look forward to welcoming you to Sandton, the vibrant heart of Johannesburg. We have gathered the following information to ensure your stay is as seamless and enjoyable as possible.",
      onsiteTitle: "Accommodation Tips",
      onsiteList: [
        "Whether you are looking to stay at the venue or nearby, please see \"Accommodation: Price & Proximity\" below.",
        "Consider Lekkeslaap or Airbnb for more cost effective accommodation options.",
        "If you are staying further from the venue, please see \"Recommended Shuttles\" below."
      ],
      tableTitle: "Accommodation: Price & Proximity",
      tableHeaders: ["Accommodation", "Dist.", "Est. p/n", "Website"],
      tableData: [
        ["The Ritz-Carlton (Venue, On-site)", "0 km", "R 5,000+", "ritzcarlton.com"],
        ["The Saxon Hotel", "~3 km", "R 8,000+", "thesaxon.com"],
        ["Michelangelo Towers", "~5 km", "R 3,000+", "michelangelotowers.co.za"],
        ["Houghton Hotel", "~5 km", "R 2,500+", "thehoughtonhotel.com"],
        ["Davyton Boutique Hotel", "~7 km", "R 1,800+", "davytonhotel.co.za"],
        ["Fairlawns Boutique Hotel", "~8 km", "R 2,200+", "fairlawns.co.za"],
        ["Hyatt Regency Johannesburg", "~8 km", "R 2,500+", "hyatt.com"],
        ["Mercure Hotel Suites", "~10 km", "R 1,500+", "mercure.com"],
        ["Protea Hotel Balalaika", "~2 km", "R 2,000+", "marriott.com"],
        ["Ashlea Gardens B&B", "~6 km", "R 1,200+", "ashleagardens.co.za"],
        ["African Pride 15 On Orange", "~7 km", "R 3,000+", "africanpridehotels.com"],
        ["City Lodge Sandton", "~3 km", "R 1,600+", "citylodge.co.za"],
        ["Radisson Blu Sandton", "~4 km", "R 2,800+", "radissonblu.com"],
        ["Southern Sun Hyde Park", "~6 km", "R 2,200+", "southernsun.com"],
        ["The Epitaph Boutique Hotel", "~10 km", "R 2,000+", "theepitaph.co.za"]
      ],
      transportTitle: "Transport Tips",
      transportList: [
        "E-Hailing: Uber and Bolt are widely available in Sandton, ideal for point-to-point trips.",
        "Shuttles: Ensure you book early. When booking, ask for late night shuttle services.",
        "Parking on-site: Valet parking is available at The Ritz-Carlton. We encourage using a transport service so you can fully enjoy the evening."
      ],
      shuttleTitle: "Recommended Shuttles",
      shuttleData: [
        ["Joburg Shuttle Services", "joburgshuttle.co.za"],
        ["Sandton Taxi Services", "santaco.co.za"],
        ["Gauteng Private Transfers", "gautengprivatetransfers.co.za"],
        ["Joe's Premier Shuttle", "sandtonclassifieds.co.za"],
        ["Fair Cape Shuttles", "faircapeshuttles.co.za"],
        ["City Hopper Shuttles", "cityhoppershuttles.co.za"]
      ]
    },
    faq: {
      subtitle: "Details",
      title: "FAQ",
      questions: [
        {
          q: "Are children invited?",
          a: "We have chosen to host an adults-only celebration. We appreciate your understanding and hope you enjoy this elegant evening with us."
        },
        {
          q: "Is there parking available?",
          a: "Yes, valet parking will be available at The Ritz-Carlton. Detailed instructions will be shared upon your arrival."
        },
        {
          q: "Can I bring a plus one?",
          a: "Due to space limitations, we can only accommodate those guests named on your formal invitation. Thank you for respecting our guest list."
        },
        {
          q: "When should I RSVP by?",
          a: "Please kindly submit your RSVP by 15 December 2026. We look forward to celebrating with you."
        },
        {
          q: "Is accommodation available at the venue?",
          a: "Yes, The Ritz-Carlton offers luxurious guest rooms. We recommend booking early as rooms fill quickly for events."
        },
        {
          q: "What is the dress code?",
          a: "Black Tie — full formal. Gentlemen should wear a tuxedo, and ladies should wear floor-length evening gowns."
        }
      ]
    },
    thingsToDo: {
      subtitle: "Explore",
      title: "Things to Do in Johannesburg",
      intro: "Johannesburg offers world-class attractions. Here are our suggestions for the weekend:",
      list: [
        { name: "Sandton City Shopping", desc: "Shop at Africa's premier retail destination with over 300 stores, luxury boutiques, and fine dining." },
        { name: "Nelson Mandela Square", desc: "A vibrant public square with restaurants, shops, and the iconic Nelson Mandela statue." },
        { name: "Johannesburg Art Gallery", desc: "Explore an impressive collection of South African and international art in a historic building." },
        { name: "Maboneng Precinct", desc: "A trendy urban neighborhood with galleries, boutiques, rooftop bars, and street art." },
        { name: "Constitution Hill", desc: "Visit the historic prison and constitutional court, a powerful testament to South Africa's journey." },
        { name: "Apartheid Museum", desc: "A moving and educational museum chronicling South Africa's path to democracy." },
        { name: "Walter Sisulu Botanical Gardens", desc: "Escape the city with beautiful gardens, hiking trails, and a stunning waterfall." }
      ]
    },
    gallery: {
      subtitle: "Moments",
      title: "Gallery"
    },
    footer: {
      text: "Isabella & Alexander · 22 January 2027"
    }
  }
};
