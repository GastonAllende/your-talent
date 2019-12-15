app.factory("quizQuestionsFactory", function () {
  // All the questions pass as factory to the quizController
  const questions = [
    {
      question:
        "Du har köpt och byggt ihop en ny möbel. Du har åtta skruvar och ett hyllplan över. Vad gör du?",
      answers: [
        {
          id: 0,
          text: "Jag skruvar isär möbeln och börjar om.",
          score: { subject: "Initiativtagare", score: 10 }
        },
        {
          id: 1,
          text:
            "Hyllan står upp, så jag slänger skruvar och hyllplan i förrådet och låtsas som ingenting.",
          score: { subject: "Problemlösare", score: 10 }
        }
      ]
    },
    {
      question: "Du och din kompis ska åka på semester. Vad gör du?",
      answers: [
        {
          id: 0,
          text: "Jag googlar, sätter ihop en plan och kommer med tre förslag.",
          score: { subject: "Organisatör", score: 10 }
        },
        {
          id: 1,
          text:
            "Jag tar mig friheten att boka då jag vet att resorna snart är slut. Hellre avboka än att det inte blir någon semester.",
          score: { subject: "Initiativtagare", score: 10 }
        }
      ]
    },
    {
      question:
        "Du och din kompis ska åka på festival och tälta. Ni får inte upp tältet. Vad gör du?",
      answers: [
        {
          id: 0,
          text: "Jag använder tältet som täcke.",
          score: { subject: "Problemlösare", score: 10 }
        },
        {
          id: 1,
          text:
            "Jag ringer farbror Bengt/tant Karin som är scout och ber om hjälp.",
          score: { subject: "Initiativtagare", score: 10 }
        }
      ]
    },
    {
      question:
        "Du ska samla ihop pengar till en kompis som fyller år. Hur gör du?",
      answers: [
        {
          id: 0,
          text:
            "Jag bestämmer vad vi ska köpa och ber mina kompisar att swisha mig.",

          score: { subject: "Organisatör", score: 10 }
        },
        {
          id: 1,
          text:
            "Jag startar en facebookgrupp och låter alla komma med förslag. Sedan röstar vi.",

          score: { subject: "Teamspelare", score: 10 }
        }
      ]
    },
    {
      question:
        "Du ska prata med en grupp människor. Alla pratar olika språk. Hur gör du?",
      answers: [
        {
          id: 0,
          text:
            "Jag använder google translate så att alla får information på sitt språk.",

          score: { subject: "Problemlösare", score: 10 }
        },
        {
          id: 1,
          text: "Jag frågar om det finns ett gemensamt språk som vi kan prata.",

          score: { subject: "Kommunikatör", score: 10 }
        }
      ]
    },
    {
      question: "Du märker att du kommer att bli sen till jobbet, vad gör du?",
      answers: [
        {
          id: 0,
          text:
            "Jag ringer till en jobbarkompis och meddelar hur sen jag blir.",

          score: { subject: "Kommunikatör", score: 10 }
        },
        {
          id: 1,
          text:
            "Jag släpper allt, rusar ut genom dörren för att försöka hinna i så god tid som möjligt.",

          score: { subject: "Teamspelare", score: 10 }
        }
      ]
    },
    {
      question:
        "Du är på jobbet och klar med dagens uppgifter 15 minuter innan arbetsdagens slut. Vad  gör du?",
      answers: [
        {
          id: 0,
          text:
            "Jag passar på att börja planera inför morgondagen. Då sparar jag massor med tid!",

          score: { subject: "Organisatör", score: 10 }
        },
        {
          id: 1,
          text: "Jag frågar min jobbarkompis om hen behöver hjälp med något.",

          score: { subject: "Teamspelare", score: 10 }
        }
      ]
    },
    {
      question:
        "Du ska träffa en kompis på stan och märker att du blir väldigt sen och din telefonen är urladdad. Vad gör du?",
      answers: [
        {
          id: 0,
          text:
            "Jag springer till bussen för att komma fram så snabbt som möjligt och ber sedan min  kompis tusen gånger om ursäkt för att jag är sen.",

          score: { subject: "Kommunikatör", score: 10 }
        },
        {
          id: 1,
          text:
            "Stressar inte upp mig, men frågar grannarna på bussen om någon har en telefon att låna så att jag kan ringa och meddela min kompis om förseningen.",

          score: { subject: "Problemlösare", score: 10 }
        }
      ]
    },
    {
      question:
        "Du jobbar som lärarvikarie i en skola. Två elever på rasten kommer inte överens om  spelreglerna i Svanskull. Vad gör du?",
      answers: [
        {
          id: 0,
          text: "Jag låter barnen själva lösa konflikten.",

          score: { subject: "Problemlösare", score: 10 }
        },
        {
          id: 1,
          text:
            "Jag föreslår en kompromiss – båda barnens regler tillämpas, och hälften av tiden vardera.",

          score: { subject: "Teamspelare", score: 10 }
        }
      ]
    },
    {
      question:
        "Du har dina kompisar över på middag, när det plötsligt blir strömavbrott. Vad gör du?",
      answers: [
        {
          id: 0,
          text: "Mysigt! Då berättar jag spökhistorier.",

          score: { subject: "Initiativtagare", score: 10 }
        },
        {
          id: 1,
          text:
            "Ber alla ta fram sin mobil och plocka fram ficklampan/blixten och fortsätter kvällen som vanligt.",

          score: { subject: "Problemlösare", score: 10 }
        }
      ]
    },
    {
      question:
        "Du väntar på bussen och upptäcker att det är ishalka på hållplatsen, vad gör du?",
      answers: [
        {
          id: 0,
          text: "Jag ringer till kommunen och felanmäler.",

          score: { subject: "Initiativtagare", score: 10 }
        },
        {
          id: 1,
          text: "Jag varnar alla i närheten.",

          score: { subject: "Kommunikatör", score: 10 }
        }
      ]
    },
    {
      question:
        "Du får en ny uppgift som du inte har en aning om hur du ska lösa, vad gör du?",
      answers: [
        {
          id: 0,
          text: "Jag googlar.",

          score: { subject: "Organisatör", score: 10 }
        },
        {
          id: 1,
          text: "Jag frågar en kompis eller jobbarkompis som jag tror vet.",

          score: { subject: "Kommunikatör", score: 10 }
        }
      ]
    },
    {
      question:
        "Du har fått en uppgift på jobbet som du tycker känns rätt trist, hur motiverar du dig  själv?",
      answers: [
        {
          id: 0,
          text:
            "Jag tänker på hur härligt det kommer vara när jag är klar med uppgiften.",

          score: { subject: "Problemlösare", score: 10 }
        },
        {
          id: 1,
          text: "Jag tänker på allt roligt jag kan göra med min lön.",

          score: { subject: "Organisatör", score: 10 }
        }
      ]
    },
    {
      question:
        "Du är med i en studiegrupp där en i gruppen inte gör det ni kommit överens om. Vad gör du?",
      answers: [
        {
          id: 0,
          text: "Jag snackar med personen och frågar om hen behöver hjälp.",

          score: { subject: "Kommunikatör", score: 10 }
        },
        {
          id: 1,
          text:
            "Jag fokuserar på att få arbetet gjort, med eller utan personens medverkan.",

          score: { subject: "Organisatör", score: 10 }
        }
      ]
    },
    {
      question:
        "Du har köpt en ny möbel som du ska bygga ihop hemma. När du öppnar paketet med alla delar saknas en instruktion. Vad gör du?",
      answers: [
        {
          id: 0,
          text:
            "Jag testar bygga ihop min möbel efter bästa förmåga, utan instruktion. Det kan inte vara  så svårt!",

          score: { subject: "Problemlösare", score: 10 }
        },
        {
          id: 1,
          text:
            "Jag ringer en kompis som ofta skruvar ihop möbler och frågar om hjälp!",

          score: { subject: "Teamspelare", score: 10 }
        }
      ]
    },
    {
      question: "Hur löser du helst nya uppgifter?",
      answers: [
        {
          id: 0,
          text: "Helst i grupp.",

          score: { subject: "Teamspelare", score: 10 }
        },
        {
          id: 1,
          text: "Helst på egen hand.",

          score: { subject: "Initiativtagare", score: 10 }
        }
      ]
    },
    {
      question: "Du får i uppgift att planera en kräftskiva. Hur gör du?",
      answers: [
        {
          id: 0,
          text:
            "Jag frågar en kompis som fixade kräftskiva förra året om tips och råd.",
          img: "img/question-one.png",
          score: { subject: "Teamspelare", score: 10 }
        },
        {
          id: 1,
          text:
            "Jag kör en “för-kräftskiva” hemma för att verkligen testa upplägget.",
          img: "img/question-two.png",
          score: { subject: "Initiativtagare", score: 10 }
        }
      ]
    },
    {
      question:
        "Du och dina kompisar ska planera en stor nyårsfest tillsammans. Vilken roll tar du?",
      answers: [
        {
          id: 0,
          text:
            "Jag gör upp en plan för vad som behöver göras och delar ut uppgifter",
          img: "img/question-one.png",
          score: { subject: "Organisatör", score: 10 }
        },
        {
          id: 1,
          text: "Jag ordnar med festens tema och inbjudningar.",
          img: "img/question-two.png",
          score: { subject: "Kommunikatör", score: 10 }
        }
      ]
    },
    {
      question:
        "Du ska åka på semester med din kompis. När du kommer till Arlanda upptäcker du att du  har glömt din plånbok hemma. Vad gör du?",
      answers: [
        {
          id: 0,
          text:
            "Jag Swishar över pengar till min kompis och så använder vi hens bankkort under resan.",
          img: "img/question-one.png",
          score: { subject: "Teamspelare", score: 10 }
        },
        {
          id: 1,
          text:
            "Jag har en ganska bra sångröst, så jag går in på toa och sjunger upp. Sen går jag ut och sjunger ett gäng populära låtar, och skramlar ihop till en helt ok reskassa.",
          img: "img/question-two.png",
          score: { subject: "Initiativtagare", score: 10 }
        }
      ]
    },
    {
      question:
        "Du har fått ansvar för ett särskilt viktigt uppdrag på jobbet. Hur förbereder du dig?",
      answers: [
        {
          id: 0,
          text:
            "Jag peppar mig själv och fokuserar på när jag har lyckats med kluriga uppgifter tidigare.",
          img: "img/question-one.png",
          score: { subject: "Organisatör", score: 10 }
        },
        {
          id: 1,
          text: "Jag bollar frågan med en jobbarkompis.",
          img: "img/question-two.png",
          score: { subject: "Kommunikatör", score: 10 }
        }
      ]
    }
  ];

  return questions;
});
