app.controller('TestController', ['$scope', function ($scope) {

    $scope.title = 'Test Application';

    $scope.slotclicked = function (index) {
        var modal = document.getElementById('myModal');
        var nameinput;
        var phoneinput;
        modal.style.display = "block";

        document.getElementById('thisName').value = $scope.slots[index].name;       // set existing in input field
        document.getElementById('thisPhone').value = $scope.slots[index].number;

       
        window.onclick = function (event) {

            if (event.target == modal) {                                            // if clicked on input window

                if ($scope.slots[index].selected === false) {

                    nameinput = document.getElementById('thisName').value;
                    phoneinput = document.getElementById('thisPhone').value;

                    modal.style.display = "none";                                   // close model window

                    $scope.slots[index].name = nameinput;                           // write input to scope
                    $scope.slots[index].number = phoneinput;
                    if (nameinput !== "" || phoneinput !== "")
                    {
                        $scope.slots[index].selected = true;
                    }

                    $scope.$apply();

                } else {

                    document.getElementById('thisName').value = "";
                    document.getElementById('thisPhone').value = "";

                    modal.style.display = "none";
                }
            }
        }
    };

    $scope.slots = [{
        beginningtime: '9am',
        endingtime: '10am',
        selected: false,
        name: '',
        number: ''
    },
            {
                beginningtime: '10am',
                endingtime: '11am',
                selected: false,
                name: '',
                number: ''
            }, {
                beginningtime: '11am',
                endingtime: '11am',
                selected: false,
                name: '',
                number: ''
            }, {
                beginningtime: '11am',
                endingtime: '12m',
                selected: false,
                name: '',
                number: ''
            }, {
                beginningtime: '12pm',
                endingtime: '1pm',
                selected: false,
                name: '',
                number: ''
            }, {
                beginningtime: '1pm',
                endingtime: '2pm',
                selected: false,
                name: '',
                number: ''
            }, {
                beginningtime: '2pm',
                endingtime: '3pm',
                selected: false,
                name: '',
                number: ''
            }, {
                beginningtime: '3pm',
                endingtime: '4pm',
                selected: false,
                name: '',
                number: ''
            }, {
                beginningtime: '4pm',
                endingtime: '5pm',
                selected: false,
                name: '',
                number: ''
            }];

}]);

