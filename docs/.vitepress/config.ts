import { defineConfig } from 'vitepress'

// Local: `/`. GitHub Pages project site: `/sf6-wiki/` (set via VITEPRESS_BASE in CI).
const base = process.env.VITEPRESS_BASE || '/'

export default defineConfig({
  title: 'SF6 Wiki',
  description: 'Street Fighter 6 character data from SuperCombo Wiki',
  base,
  appearance: 'dark',
  cleanUrls: true,
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Mods', link: '/mods/' },
      { text: 'Characters', link: '/characters/ryu/overview' },
    ],
    sidebar: /* AUTO-SIDEBAR */
[
  {
    "text": "Mods",
    "items": [
      {
        "text": "Overview",
        "link": "/mods/"
      },
      {
        "text": "Drill Format",
        "link": "/mods/drill-format"
      },
      {
        "text": "Como montar o JSON",
        "link": "/mods/montar-json"
      }
    ]
  },
  {
    "text": "Characters",
    "items": [
      {
        "text": "A.K.I.",
        "collapsed": true,
        "items": [
          {
            "text": "Overview",
            "link": "/characters/a.k.i/overview"
          },
          {
            "text": "Moves",
            "link": "/characters/a.k.i/moves"
          },
          {
            "text": "Frame Data",
            "link": "/characters/a.k.i/frame-data"
          },
          {
            "text": "Combos",
            "link": "/characters/a.k.i/combos"
          },
          {
            "text": "Strategy",
            "link": "/characters/a.k.i/strategy"
          },
          {
            "text": "Matchups",
            "link": "/characters/a.k.i/matchups"
          },
          {
            "text": "Resources",
            "link": "/characters/a.k.i/resources"
          }
        ]
      },
      {
        "text": "Akuma",
        "collapsed": true,
        "items": [
          {
            "text": "Overview",
            "link": "/characters/akuma/overview"
          },
          {
            "text": "Moves",
            "link": "/characters/akuma/moves"
          },
          {
            "text": "Frame Data",
            "link": "/characters/akuma/frame-data"
          },
          {
            "text": "Combos",
            "link": "/characters/akuma/combos"
          },
          {
            "text": "Strategy",
            "link": "/characters/akuma/strategy"
          },
          {
            "text": "Matchups",
            "link": "/characters/akuma/matchups"
          },
          {
            "text": "Resources",
            "link": "/characters/akuma/resources"
          }
        ]
      },
      {
        "text": "Alex",
        "collapsed": true,
        "items": [
          {
            "text": "Overview",
            "link": "/characters/alex/overview"
          },
          {
            "text": "Moves",
            "link": "/characters/alex/moves"
          },
          {
            "text": "Frame Data",
            "link": "/characters/alex/frame-data"
          },
          {
            "text": "Combos",
            "link": "/characters/alex/combos"
          },
          {
            "text": "Strategy",
            "link": "/characters/alex/strategy"
          },
          {
            "text": "Matchups",
            "link": "/characters/alex/matchups"
          },
          {
            "text": "Resources",
            "link": "/characters/alex/resources"
          }
        ]
      },
      {
        "text": "Arjun",
        "collapsed": true,
        "items": [
          {
            "text": "Overview",
            "link": "/characters/arjun/overview"
          },
          {
            "text": "Moves",
            "link": "/characters/arjun/moves"
          },
          {
            "text": "Frame Data",
            "link": "/characters/arjun/frame-data"
          },
          {
            "text": "Combos",
            "link": "/characters/arjun/combos"
          },
          {
            "text": "Strategy",
            "link": "/characters/arjun/strategy"
          },
          {
            "text": "Matchups",
            "link": "/characters/arjun/matchups"
          },
          {
            "text": "Resources",
            "link": "/characters/arjun/resources"
          }
        ]
      },
      {
        "text": "Blanka",
        "collapsed": true,
        "items": [
          {
            "text": "Overview",
            "link": "/characters/blanka/overview"
          },
          {
            "text": "Moves",
            "link": "/characters/blanka/moves"
          },
          {
            "text": "Frame Data",
            "link": "/characters/blanka/frame-data"
          },
          {
            "text": "Combos",
            "link": "/characters/blanka/combos"
          },
          {
            "text": "Strategy",
            "link": "/characters/blanka/strategy"
          },
          {
            "text": "Matchups",
            "link": "/characters/blanka/matchups"
          },
          {
            "text": "Resources",
            "link": "/characters/blanka/resources"
          }
        ]
      },
      {
        "text": "C.VIPER",
        "collapsed": true,
        "items": [
          {
            "text": "Overview",
            "link": "/characters/c.viper/overview"
          },
          {
            "text": "Moves",
            "link": "/characters/c.viper/moves"
          },
          {
            "text": "Frame Data",
            "link": "/characters/c.viper/frame-data"
          },
          {
            "text": "Combos",
            "link": "/characters/c.viper/combos"
          },
          {
            "text": "Strategy",
            "link": "/characters/c.viper/strategy"
          },
          {
            "text": "Matchups",
            "link": "/characters/c.viper/matchups"
          },
          {
            "text": "Resources",
            "link": "/characters/c.viper/resources"
          }
        ]
      },
      {
        "text": "Cammy",
        "collapsed": true,
        "items": [
          {
            "text": "Overview",
            "link": "/characters/cammy/overview"
          },
          {
            "text": "Moves",
            "link": "/characters/cammy/moves"
          },
          {
            "text": "Frame Data",
            "link": "/characters/cammy/frame-data"
          },
          {
            "text": "Combos",
            "link": "/characters/cammy/combos"
          },
          {
            "text": "Strategy",
            "link": "/characters/cammy/strategy"
          },
          {
            "text": "Matchups",
            "link": "/characters/cammy/matchups"
          },
          {
            "text": "Resources",
            "link": "/characters/cammy/resources"
          }
        ]
      },
      {
        "text": "Chun Li",
        "collapsed": true,
        "items": [
          {
            "text": "Overview",
            "link": "/characters/chun-li/overview"
          },
          {
            "text": "Moves",
            "link": "/characters/chun-li/moves"
          },
          {
            "text": "Frame Data",
            "link": "/characters/chun-li/frame-data"
          },
          {
            "text": "Combos",
            "link": "/characters/chun-li/combos"
          },
          {
            "text": "Strategy",
            "link": "/characters/chun-li/strategy"
          },
          {
            "text": "Matchups",
            "link": "/characters/chun-li/matchups"
          },
          {
            "text": "Resources",
            "link": "/characters/chun-li/resources"
          }
        ]
      },
      {
        "text": "Dee Jay",
        "collapsed": true,
        "items": [
          {
            "text": "Overview",
            "link": "/characters/dee-jay/overview"
          },
          {
            "text": "Moves",
            "link": "/characters/dee-jay/moves"
          },
          {
            "text": "Frame Data",
            "link": "/characters/dee-jay/frame-data"
          },
          {
            "text": "Combos",
            "link": "/characters/dee-jay/combos"
          },
          {
            "text": "Strategy",
            "link": "/characters/dee-jay/strategy"
          },
          {
            "text": "Matchups",
            "link": "/characters/dee-jay/matchups"
          },
          {
            "text": "Resources",
            "link": "/characters/dee-jay/resources"
          }
        ]
      },
      {
        "text": "Dhalsim",
        "collapsed": true,
        "items": [
          {
            "text": "Overview",
            "link": "/characters/dhalsim/overview"
          },
          {
            "text": "Moves",
            "link": "/characters/dhalsim/moves"
          },
          {
            "text": "Frame Data",
            "link": "/characters/dhalsim/frame-data"
          },
          {
            "text": "Combos",
            "link": "/characters/dhalsim/combos"
          },
          {
            "text": "Strategy",
            "link": "/characters/dhalsim/strategy"
          },
          {
            "text": "Matchups",
            "link": "/characters/dhalsim/matchups"
          },
          {
            "text": "Resources",
            "link": "/characters/dhalsim/resources"
          }
        ]
      },
      {
        "text": "E.HONDA",
        "collapsed": true,
        "items": [
          {
            "text": "Overview",
            "link": "/characters/e.honda/overview"
          },
          {
            "text": "Moves",
            "link": "/characters/e.honda/moves"
          },
          {
            "text": "Frame Data",
            "link": "/characters/e.honda/frame-data"
          },
          {
            "text": "Combos",
            "link": "/characters/e.honda/combos"
          },
          {
            "text": "Strategy",
            "link": "/characters/e.honda/strategy"
          },
          {
            "text": "Matchups",
            "link": "/characters/e.honda/matchups"
          },
          {
            "text": "Resources",
            "link": "/characters/e.honda/resources"
          }
        ]
      },
      {
        "text": "Ed",
        "collapsed": true,
        "items": [
          {
            "text": "Overview",
            "link": "/characters/ed/overview"
          },
          {
            "text": "Moves",
            "link": "/characters/ed/moves"
          },
          {
            "text": "Frame Data",
            "link": "/characters/ed/frame-data"
          },
          {
            "text": "Combos",
            "link": "/characters/ed/combos"
          },
          {
            "text": "Strategy",
            "link": "/characters/ed/strategy"
          },
          {
            "text": "Matchups",
            "link": "/characters/ed/matchups"
          },
          {
            "text": "Resources",
            "link": "/characters/ed/resources"
          }
        ]
      },
      {
        "text": "Elena",
        "collapsed": true,
        "items": [
          {
            "text": "Overview",
            "link": "/characters/elena/overview"
          },
          {
            "text": "Moves",
            "link": "/characters/elena/moves"
          },
          {
            "text": "Frame Data",
            "link": "/characters/elena/frame-data"
          },
          {
            "text": "Combos",
            "link": "/characters/elena/combos"
          },
          {
            "text": "Strategy",
            "link": "/characters/elena/strategy"
          },
          {
            "text": "Matchups",
            "link": "/characters/elena/matchups"
          },
          {
            "text": "Resources",
            "link": "/characters/elena/resources"
          }
        ]
      },
      {
        "text": "Guile",
        "collapsed": true,
        "items": [
          {
            "text": "Overview",
            "link": "/characters/guile/overview"
          },
          {
            "text": "Moves",
            "link": "/characters/guile/moves"
          },
          {
            "text": "Frame Data",
            "link": "/characters/guile/frame-data"
          },
          {
            "text": "Combos",
            "link": "/characters/guile/combos"
          },
          {
            "text": "Strategy",
            "link": "/characters/guile/strategy"
          },
          {
            "text": "Matchups",
            "link": "/characters/guile/matchups"
          },
          {
            "text": "Resources",
            "link": "/characters/guile/resources"
          }
        ]
      },
      {
        "text": "Ingrid",
        "collapsed": true,
        "items": [
          {
            "text": "Overview",
            "link": "/characters/ingrid/overview"
          },
          {
            "text": "Moves",
            "link": "/characters/ingrid/moves"
          },
          {
            "text": "Frame Data",
            "link": "/characters/ingrid/frame-data"
          },
          {
            "text": "Combos",
            "link": "/characters/ingrid/combos"
          },
          {
            "text": "Strategy",
            "link": "/characters/ingrid/strategy"
          },
          {
            "text": "Matchups",
            "link": "/characters/ingrid/matchups"
          },
          {
            "text": "Resources",
            "link": "/characters/ingrid/resources"
          }
        ]
      },
      {
        "text": "Jamie",
        "collapsed": true,
        "items": [
          {
            "text": "Overview",
            "link": "/characters/jamie/overview"
          },
          {
            "text": "Moves",
            "link": "/characters/jamie/moves"
          },
          {
            "text": "Frame Data",
            "link": "/characters/jamie/frame-data"
          },
          {
            "text": "Combos",
            "link": "/characters/jamie/combos"
          },
          {
            "text": "Strategy",
            "link": "/characters/jamie/strategy"
          },
          {
            "text": "Matchups",
            "link": "/characters/jamie/matchups"
          },
          {
            "text": "Resources",
            "link": "/characters/jamie/resources"
          }
        ]
      },
      {
        "text": "JP",
        "collapsed": true,
        "items": [
          {
            "text": "Overview",
            "link": "/characters/jp/overview"
          },
          {
            "text": "Moves",
            "link": "/characters/jp/moves"
          },
          {
            "text": "Frame Data",
            "link": "/characters/jp/frame-data"
          },
          {
            "text": "Combos",
            "link": "/characters/jp/combos"
          },
          {
            "text": "Strategy",
            "link": "/characters/jp/strategy"
          },
          {
            "text": "Matchups",
            "link": "/characters/jp/matchups"
          },
          {
            "text": "Resources",
            "link": "/characters/jp/resources"
          }
        ]
      },
      {
        "text": "Juri",
        "collapsed": true,
        "items": [
          {
            "text": "Overview",
            "link": "/characters/juri/overview"
          },
          {
            "text": "Moves",
            "link": "/characters/juri/moves"
          },
          {
            "text": "Frame Data",
            "link": "/characters/juri/frame-data"
          },
          {
            "text": "Combos",
            "link": "/characters/juri/combos"
          },
          {
            "text": "Strategy",
            "link": "/characters/juri/strategy"
          },
          {
            "text": "Matchups",
            "link": "/characters/juri/matchups"
          },
          {
            "text": "Resources",
            "link": "/characters/juri/resources"
          }
        ]
      },
      {
        "text": "Ken",
        "collapsed": true,
        "items": [
          {
            "text": "Overview",
            "link": "/characters/ken/overview"
          },
          {
            "text": "Moves",
            "link": "/characters/ken/moves"
          },
          {
            "text": "Frame Data",
            "link": "/characters/ken/frame-data"
          },
          {
            "text": "Combos",
            "link": "/characters/ken/combos"
          },
          {
            "text": "Strategy",
            "link": "/characters/ken/strategy"
          },
          {
            "text": "Matchups",
            "link": "/characters/ken/matchups"
          },
          {
            "text": "Resources",
            "link": "/characters/ken/resources"
          }
        ]
      },
      {
        "text": "Kimberly",
        "collapsed": true,
        "items": [
          {
            "text": "Overview",
            "link": "/characters/kimberly/overview"
          },
          {
            "text": "Moves",
            "link": "/characters/kimberly/moves"
          },
          {
            "text": "Frame Data",
            "link": "/characters/kimberly/frame-data"
          },
          {
            "text": "Combos",
            "link": "/characters/kimberly/combos"
          },
          {
            "text": "Strategy",
            "link": "/characters/kimberly/strategy"
          },
          {
            "text": "Matchups",
            "link": "/characters/kimberly/matchups"
          },
          {
            "text": "Resources",
            "link": "/characters/kimberly/resources"
          }
        ]
      },
      {
        "text": "Lily",
        "collapsed": true,
        "items": [
          {
            "text": "Overview",
            "link": "/characters/lily/overview"
          },
          {
            "text": "Moves",
            "link": "/characters/lily/moves"
          },
          {
            "text": "Frame Data",
            "link": "/characters/lily/frame-data"
          },
          {
            "text": "Combos",
            "link": "/characters/lily/combos"
          },
          {
            "text": "Strategy",
            "link": "/characters/lily/strategy"
          },
          {
            "text": "Matchups",
            "link": "/characters/lily/matchups"
          },
          {
            "text": "Resources",
            "link": "/characters/lily/resources"
          }
        ]
      },
      {
        "text": "Luke",
        "collapsed": true,
        "items": [
          {
            "text": "Overview",
            "link": "/characters/luke/overview"
          },
          {
            "text": "Moves",
            "link": "/characters/luke/moves"
          },
          {
            "text": "Frame Data",
            "link": "/characters/luke/frame-data"
          },
          {
            "text": "Combos",
            "link": "/characters/luke/combos"
          },
          {
            "text": "Strategy",
            "link": "/characters/luke/strategy"
          },
          {
            "text": "Matchups",
            "link": "/characters/luke/matchups"
          },
          {
            "text": "Resources",
            "link": "/characters/luke/resources"
          }
        ]
      },
      {
        "text": "M.BISON",
        "collapsed": true,
        "items": [
          {
            "text": "Overview",
            "link": "/characters/m.bison/overview"
          },
          {
            "text": "Moves",
            "link": "/characters/m.bison/moves"
          },
          {
            "text": "Frame Data",
            "link": "/characters/m.bison/frame-data"
          },
          {
            "text": "Combos",
            "link": "/characters/m.bison/combos"
          },
          {
            "text": "Strategy",
            "link": "/characters/m.bison/strategy"
          },
          {
            "text": "Matchups",
            "link": "/characters/m.bison/matchups"
          },
          {
            "text": "Resources",
            "link": "/characters/m.bison/resources"
          }
        ]
      },
      {
        "text": "Mai",
        "collapsed": true,
        "items": [
          {
            "text": "Overview",
            "link": "/characters/mai/overview"
          },
          {
            "text": "Moves",
            "link": "/characters/mai/moves"
          },
          {
            "text": "Frame Data",
            "link": "/characters/mai/frame-data"
          },
          {
            "text": "Combos",
            "link": "/characters/mai/combos"
          },
          {
            "text": "Strategy",
            "link": "/characters/mai/strategy"
          },
          {
            "text": "Matchups",
            "link": "/characters/mai/matchups"
          },
          {
            "text": "Resources",
            "link": "/characters/mai/resources"
          }
        ]
      },
      {
        "text": "Manon",
        "collapsed": true,
        "items": [
          {
            "text": "Overview",
            "link": "/characters/manon/overview"
          },
          {
            "text": "Moves",
            "link": "/characters/manon/moves"
          },
          {
            "text": "Frame Data",
            "link": "/characters/manon/frame-data"
          },
          {
            "text": "Combos",
            "link": "/characters/manon/combos"
          },
          {
            "text": "Strategy",
            "link": "/characters/manon/strategy"
          },
          {
            "text": "Matchups",
            "link": "/characters/manon/matchups"
          },
          {
            "text": "Resources",
            "link": "/characters/manon/resources"
          }
        ]
      },
      {
        "text": "Marisa",
        "collapsed": true,
        "items": [
          {
            "text": "Overview",
            "link": "/characters/marisa/overview"
          },
          {
            "text": "Moves",
            "link": "/characters/marisa/moves"
          },
          {
            "text": "Frame Data",
            "link": "/characters/marisa/frame-data"
          },
          {
            "text": "Combos",
            "link": "/characters/marisa/combos"
          },
          {
            "text": "Strategy",
            "link": "/characters/marisa/strategy"
          },
          {
            "text": "Matchups",
            "link": "/characters/marisa/matchups"
          },
          {
            "text": "Resources",
            "link": "/characters/marisa/resources"
          }
        ]
      },
      {
        "text": "Rashid",
        "collapsed": true,
        "items": [
          {
            "text": "Overview",
            "link": "/characters/rashid/overview"
          },
          {
            "text": "Moves",
            "link": "/characters/rashid/moves"
          },
          {
            "text": "Frame Data",
            "link": "/characters/rashid/frame-data"
          },
          {
            "text": "Combos",
            "link": "/characters/rashid/combos"
          },
          {
            "text": "Strategy",
            "link": "/characters/rashid/strategy"
          },
          {
            "text": "Matchups",
            "link": "/characters/rashid/matchups"
          },
          {
            "text": "Resources",
            "link": "/characters/rashid/resources"
          }
        ]
      },
      {
        "text": "Ryu",
        "collapsed": true,
        "items": [
          {
            "text": "Overview",
            "link": "/characters/ryu/overview"
          },
          {
            "text": "Moves",
            "link": "/characters/ryu/moves"
          },
          {
            "text": "Frame Data",
            "link": "/characters/ryu/frame-data"
          },
          {
            "text": "Combos",
            "link": "/characters/ryu/combos"
          },
          {
            "text": "Strategy",
            "link": "/characters/ryu/strategy"
          },
          {
            "text": "Matchups",
            "link": "/characters/ryu/matchups"
          },
          {
            "text": "Resources",
            "link": "/characters/ryu/resources"
          }
        ]
      },
      {
        "text": "Sagat",
        "collapsed": true,
        "items": [
          {
            "text": "Overview",
            "link": "/characters/sagat/overview"
          },
          {
            "text": "Moves",
            "link": "/characters/sagat/moves"
          },
          {
            "text": "Frame Data",
            "link": "/characters/sagat/frame-data"
          },
          {
            "text": "Combos",
            "link": "/characters/sagat/combos"
          },
          {
            "text": "Strategy",
            "link": "/characters/sagat/strategy"
          },
          {
            "text": "Matchups",
            "link": "/characters/sagat/matchups"
          },
          {
            "text": "Resources",
            "link": "/characters/sagat/resources"
          }
        ]
      },
      {
        "text": "Terry",
        "collapsed": true,
        "items": [
          {
            "text": "Overview",
            "link": "/characters/terry/overview"
          },
          {
            "text": "Moves",
            "link": "/characters/terry/moves"
          },
          {
            "text": "Frame Data",
            "link": "/characters/terry/frame-data"
          },
          {
            "text": "Combos",
            "link": "/characters/terry/combos"
          },
          {
            "text": "Strategy",
            "link": "/characters/terry/strategy"
          },
          {
            "text": "Matchups",
            "link": "/characters/terry/matchups"
          },
          {
            "text": "Resources",
            "link": "/characters/terry/resources"
          }
        ]
      },
      {
        "text": "Yasmine",
        "collapsed": true,
        "items": [
          {
            "text": "Overview",
            "link": "/characters/yasmine/overview"
          },
          {
            "text": "Moves",
            "link": "/characters/yasmine/moves"
          },
          {
            "text": "Frame Data",
            "link": "/characters/yasmine/frame-data"
          },
          {
            "text": "Combos",
            "link": "/characters/yasmine/combos"
          },
          {
            "text": "Strategy",
            "link": "/characters/yasmine/strategy"
          },
          {
            "text": "Matchups",
            "link": "/characters/yasmine/matchups"
          },
          {
            "text": "Resources",
            "link": "/characters/yasmine/resources"
          }
        ]
      },
      {
        "text": "Zangief",
        "collapsed": true,
        "items": [
          {
            "text": "Overview",
            "link": "/characters/zangief/overview"
          },
          {
            "text": "Moves",
            "link": "/characters/zangief/moves"
          },
          {
            "text": "Frame Data",
            "link": "/characters/zangief/frame-data"
          },
          {
            "text": "Combos",
            "link": "/characters/zangief/combos"
          },
          {
            "text": "Strategy",
            "link": "/characters/zangief/strategy"
          },
          {
            "text": "Matchups",
            "link": "/characters/zangief/matchups"
          },
          {
            "text": "Resources",
            "link": "/characters/zangief/resources"
          }
        ]
      }
    ]
  }
]
/* END-AUTO-SIDEBAR */,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/street-fighter-community-ai/sf6-wiki' },
    ],
    footer: {
      message: 'Fan project. Frame data & strategy content sourced from SuperCombo Wiki.',
      copyright: 'Street Fighter is a trademark of Capcom. Not affiliated with Capcom.',
    },
  },
  head: [
    ['meta', { name: 'theme-color', content: '#0b0b0f' }],
  ],
})
