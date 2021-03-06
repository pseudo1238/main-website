import React from "react"

export default () => 
    (
        <div className="container">
        <a className="no-decoration no-underline" href="/"> <h1 className="main-title">The Harvard Advocate</h1></a>
        <h1 class="header">SHOP</h1>
         <p class = "text center">Welcome to <i>The Harvard Advocate</i>'s Store. Below you can find back issues that you may purchase. To purchase other issues, contact <a href = "mailto:president@theharvardadvocate.com">president@theharvardadvocate.com</a>.</p>
        <div styles={{maxWidth: "50%"}}>
        <div id='collection-component-06224d29f8a'></div>
        <script type="text/javascript" dangerouslySetInnerHTML= {{ __html: ` 
    /*<![CDATA[*/

        (function () {
          var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
          if (window.ShopifyBuy) {
            if (window.ShopifyBuy.UI) {
              ShopifyBuyInit();
            } else {
              loadScript();
            }
          } else {
            loadScript();
          }
    
          function loadScript() {
            var script = document.createElement('script');
            script.async = true;
            script.src = scriptURL;
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
            script.onload = ShopifyBuyInit;
          }
    
          function ShopifyBuyInit() {
            var client = ShopifyBuy.buildClient({
              domain: 'the-harvard-advocate.myshopify.com',
              storefrontAccessToken: 'c352e31888e06717ad665e51df596558',
            });
    
            ShopifyBuy.UI.onReady(client).then(function (ui) {
              ui.createComponent('collection', {
                id: 71491354679,
                node: document.getElementById('collection-component-06224d29f8a'),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
      "product": {
        "variantId": "all",
        "contents": {
          "imgWithCarousel": false,
          "variantTitle": false,
          "description": false,
          "buttonWithQuantity": false,
          "quantity": false
        },
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "calc(50% - 40px)",
              "margin-left": "40px",
              "margin-bottom": "50px",
              "width": "calc(50% - 40px)"
            },
            "imgWrapper": {
              "position": "relative",
              "height": "0",
              "padding-top": "calc(75% + 15px)"
            },
            "img": {
              "height": "calc(100% - 15px)",
              "position": "absolute",
              "left": "0",
              "right": "0",
              "top": "0"
            }
          },
          "button": {
            "background-color": "#030303",
            ":hover": {
              "background-color": "#050505"
            },
            "border-radius": "0px",
            ":focus": {
              "background-color": "#050505"
            }
          }
        }
      },
      "cart": {
        "contents": {
          "button": true
        },
        "styles": {
          "button": {
            "background-color": "#030303",
            ":hover": {
              "background-color": "#050505"
            },
            "border-radius": "0px",
            ":focus": {
              "background-color": "#050505"
            }
          },
          "footer": {
            "background-color": "#ffffff"
          }
        }
      },
      "modalProduct": {
        "contents": {
          "img": false,
          "imgWithCarousel": true,
          "variantTitle": false,
          "buttonWithQuantity": true,
          "button": false,
          "quantity": false
        },
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0px",
              "margin-bottom": "0px"
            }
          },
          "button": {
            "background-color": "#030303",
            ":hover": {
              "background-color": "#050505"
            },
            "border-radius": "0px",
            ":focus": {
              "background-color": "#050505"
            }
          }
        }
      },
      "toggle": {
        "styles": {
          "toggle": {
            "background-color": "#030303",
            ":hover": {
              "background-color": "#050505"
            },
            ":focus": {
              "background-color": "#050505"
            }
          }
        }
      },
      "productSet": {
        "styles": {
          "products": {
            "@media (min-width: 601px)": {
              "margin-left": "-40px"
            }
          }
        }
      }
    }
              });
            });
          }
        })();
        /*]]>*/
        `}} />
        </div>
        </div>
)