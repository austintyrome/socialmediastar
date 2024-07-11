const names = [
    {
      "username": "kittencabootal",
      "email": "coolcats@email.com"
    },
    {
      "username": "venusdelight",
      "email": "goddessofbeauty@email.com"
    },
    {
      "username": "tirxiemattel",
      "email": "barbiegirl@email.com"
    },
    {
      "username": "denahlifox",
      "email": "iceprincess@email.com"
    },
    {
      "username": "bobthedragqueen",
      "email": "thatonequeen@email.com"
    },
    {
      "username": "sashacolby",
      "email": "thedragqueen@email.com"
    },
    {
      "username": "tyrasanchez",
      "email": "theothertyra@email.com"
    },
    {
      "username": "jujubee",
      "email": "friedchicken@email.com"
    },
    {
      "username": "montexchange",
      "email": "pettycash@email.com"
    },
    {
      "username": "gingerminj",
      "email": "glamortoad@email.com"
    }
  ];
  
  const appDescriptions = [
    {
      "tweet": "This new season of Interview with a Vampire is amazing #tv #vampires"
    },
    {
      "tweet": "Next stop Rome! #internationallove"
    },
    {
      "tweet": "Does any one know a good plumber in LA? #fullofit"
    },
    {
      "tweet": "Going to see Wicked tonight. It is one of my favorite musicals! #greenwithenvy #defyinggravity #forgood"
    },
    {
      "tweet": "Y'all I need a gig. Is anyone tyring to book me? #moneyproblems #workinggirl"
    },
    {
      "tweet": "Just watched the newest episode of Drag Race!#gagged #plottwist"
    },
    {
      "tweet": "Looking for some good Chinese food in Chicago? #needreqs #hungry"
    },
    {
      "tweet": "I just saw someone get tackled by sercurity at the subway. He did manage to out run them until he almost reached the subway before they got him. #nexttime"
    },
    {
      "tweet": "I started making a new costume today. #excited #creative"
    },
    {
      "tweet": "Is Pluto still a planet or not? #needtoknow"
    }
  ];
  
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  const getRandomName = () =>
    `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;
  
  const getRandomAssignments = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        assignmentName: getRandomArrItem(appDescriptions),
        score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
      });
    }
    return results;
  };
  
  module.exports = { getRandomName, getRandomAssignments };