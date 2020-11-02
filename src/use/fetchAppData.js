import { toRefs, reactive } from "vue"

export default function fetchAppData() {
  const appDataState = reactive({
    data: null,
    fetching: true
  })
  const submitted = async () => {
    try {
      const response = await fetch(
        "https://api-eu-central-1.graphcms.com/v2/ckcqkqrgx1p0a01xs05384s2b/master",
        {
          method: "POST",
          body: JSON.stringify({
            query: `query {
                      obsahWebus {
                        uvod {
                          uvodniText
                          podtext
                          obrazekNaPozadiTelefon {
                            url
                          }
                          obrazekNaPozadiPocitac {
                            url
                          }
                        }
                        naCemNamZalezi {
                          obrazek {
                            fileName
                            url
                          }
                          textyPred {
                            id
                            nadpis
                            text
                          }
                          textyZa {
                            id
                            nadpis
                            textOdstavce
                          }
                        }
                        coNabizime {
                          id
                          nazev
                          podnazev
                          cena
                          mnozstvi
                          jednotky
                          skupinaProduku
                        }
                        oNas {
                          textPred {
                            id
                            nadpis
                            textOdstavce
                          }
                          obrazek {
                            fileName
                            url
                          }
                          textZa {
                            id
                            nadpis
                            text
                          }
                        }
                        galerie {
                          obrazkyProGalerii{
                            fileName
                            url
                          }
                        }
                        kontakt {
                          oteviraciHodiny {
                            pondeli
                            utery
                            streda
                            ctvrtek
                            patek
                            sobota
                            nedele
                          }
                          email
                          telefon
                          adresa
                          facebook
                        }
                        parallaxObrazek {
                          parallaxImage {
                            url
                          }
                        }
                      }
                    }`
          })
        }
      )

      const json = await response.json()
      appDataState.data = json.data.obsahWebus[0]
    } catch (error) {
      console.log(`Something went wrong ${error}`)
    } finally {
      appDataState.fetching = false
    }
  }
  return { ...toRefs(appDataState), submitted }
}
