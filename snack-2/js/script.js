const footballTeams = [
    {
      nome: "Milan",
      puntiFatti: 0,
      falliSubiti: 0,
      
    },
    {
      nome: "Roma",
      puntiFatti: 0,
      falliSubiti: 0,
      
    },
    {
      nome: "Inter",
      puntiFatti: 0,
      falliSubiti: 0,
      
    },
  ];
  
  pointsAndFouls(footballTeams)
  console.log(footballTeams);

  const [milan, roma , inter] = footballTeams
  console.log(milan , roma  ,inter);

 
  nameAndFouls(milan)
  nameAndFouls(roma)
  nameAndFouls(inter)



  function pointsAndFouls(array) {
    footballTeams.forEach((curTeam) => {
        curTeam.puntiFatti = randomPoints()
        curTeam.falliSubiti = randomFauls()
    });
    return array
    console.log(pointsAndFouls(footballTeams));
}


  function randomPoints() {
    return Math.floor((Math.random() * 100) + 1); 
  }
  

  function randomFauls() {
    return Math.floor((Math.random() * 100) + 1); 
  }

  function nameAndFouls(team) {
    const{nome, _ , falliSubiti} = team 
    console.log(nome, falliSubiti );
  }




