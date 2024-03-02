var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["FRONT"] = 20] = "FRONT";
    SeatChoice[SeatChoice["MIDDLE"] = 54] = "MIDDLE";
    SeatChoice[SeatChoice["BACK"] = 55] = "BACK";
})(SeatChoice || (SeatChoice = {}));
var danielSeat = SeatChoice.BACK;
console.log(danielSeat);
