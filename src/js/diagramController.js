app.controller("DiagramController", function ($scope, $routeParams) {

  const profil = document.querySelector(".js-vikarie-profil");
  const param = $routeParams.param;

  let profiles = [
    (kommunikator = 0),
    (organisator = 0),
    (teamspelare = 0),
    (problemlosare = 0),
    (initiativtagare = 0)
  ];

  let first = 0,
    second = 2;

  // Get the points from the string pass as a parameter from the other controller
  for (let i = 0; i < profiles.length; i++) {
    profiles[i] = parseInt(param.substring(first, second));
    first = second;
    second += 2;
  }

  // Get the profile with the highest point
  const mostPoint = Math.max.apply(Math, profiles);
  const index = profiles.indexOf(mostPoint);
  let vikarieProfil;

  switch (index) {
    case 0:
      vikarieProfil = "Du är en kommunikatör";
      break;
    case 1:
      vikarieProfil = "Du är en organisatör";
      break;
    case 2:
      vikarieProfil = "Du är en teamspelare";
      break;
    case 3:
      vikarieProfil = "Du är en problemlösare";
      break;
    case 4:
      vikarieProfil = "Du är en initiativtagare";
      break;
    default:
      "Inget";
  }

  // Show profile on screen
  profil.innerHTML += vikarieProfil;

  // Labels to the chart
  $scope.labels = [
    "Kommunikatör",
    "Organisatör",
    "Teamspelare",
    "Problemlösare",
    "Initiativtagare"
  ];

  // Data to the chart
  $scope.data = [
    profiles[0],
    profiles[1],
    profiles[2],
    profiles[3],
    profiles[4]
  ];
});
