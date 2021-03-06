module.exports = {
  evergreen: true,
  plugins: {
    "@vuepress/back-to-top": {},
    "@vuepress/google-analytics": {
      ga: "UA-138493396-3"
    },
    "@vuepress/medium-zoom": {
      selector: ".theme-default-content img",
      options: {
        scrollOffset: 0
      }
    },
    "@vuepress/pwa": {
      updatePopup: {
        "/": {
          message: "Доступно новое содержимое.",
          buttonText: "Обновить"
        },
        "/en/": {
          message: "New content is available.",
          buttonText: "Refresh"
        }
      }
    }
  },
  head: [
    ["meta", {
      name: "author",
      content: "Владислав Люминарский"
    }],
    ["meta", {
      name: "theme-color",
      content: "black"
    }],
    ["link", {
      rel: "icon",
      href: "/icons/icon512.png"
    }],
    ["link", {
      rel: "manifest",
      href: "/manifest.webmanifest"
    }],
    ["link", {
      rel: "license",
      href: "/LICENSE"
    }]
  ],
  locales: {
    "/": {
      lang: "ru-RU",
      title: "Объектно-ориентированное программирование",
      description: "Учебные материалы по курсу " +
                   "\"Объектно-ориентированное программирование\"."
    },
    "/en/": {
      lang: "en-US",
      title: "Object-oriented programming",
      description: "Educational materials for course " +
                   "\"Object-oriented programming\"."
    }
  },
  themeConfig: {
    repo: "OOP-course/OOP-course",
    editLinks: true,
    logo: "/icons/icon512.png",
    locales: {
      "/": {
        docsDir: "docs",
        selectText: "Выбор языка",
        label: "Русский",
        lastUpdated: "Последнее обновление",
        editLinkText: "Редактировать эту страницу",
        algolia: {
          apiKey: "892ad28dc056e1eb225c126678ef1c09",
          indexName: "c_vladislav",
          algoliaOptions: {
            facetFilters: [
              "lang:ru-RU",
              "tags:oop-course"
            ]
          }
        },
        nav: [
          {
            text: "О курсе",
            link: "/about/"
          },
          {
            text: "Учебный процесс",
            items: [
              {
                text: "Практические занятия",
                link: "/practice/"
              },
              {
                text: "Лабораторные работы",
                link: "/labs/"
              }
            ]
          }
        ],
        sidebar: {
          "/practice/": [
            "",
            {
              title: "Основы ООП",
              collapsable: false,
              children: [
                "01/",
                "02/",
                "03/"
              ]
            },
            {
              title: "Основы проектирования ПО",
              collapsable: false,
              children: [
                "04/",
                "05/",
                "06/",
                "07/"
              ]
            }
          ],
          "/labs/": [
            "",
            {
              title: "Лабораторные работы",
              collapsable: false,
              children: [
                "01/",
                "02/"
              ]
            }
          ]
        }
      },
      "/en/": {
        docsDir: "docs/en",
        selectText: "Languages",
        label: "English",
        lastUpdated: "Last updated",
        editLinkText: "Edit this page",
        algolia: {
          apiKey: "892ad28dc056e1eb225c126678ef1c09",
          indexName: "c_vladislav",
          algoliaOptions: {
            facetFilters: [
              "lang:en-US",
              "tags:oop-course"
            ]
          }
        },
        nav: [
          {
            text: "About",
            link: "/en/about/"
          },
          {
            text: "Educational process",
            items: [
              {
                text: "Practice lessons",
                link: "/en/practice/"
              },
              {
                text: "Laboratory work",
                link: "/en/labs/"
              }
            ]
          }
        ],
        sidebar: {
          "/en/practice/": [
            "",
            {
              title: "Basics of OOP",
              collapsable: false,
              children: [
                "01/",
                "02/"
              ]
            },
            {
              title: "Basics of software design",
              collapsable: false,
              children: [
                "03/",
                "04/"
              ]
            }
          ],
          "/en/labs/": [
            "",
            {
              title: "Laboratory work",
              collapsable: false,
              children: [
                "01/",
                "02/"
              ]
            }
          ]
        }
      }
    }
  }
};