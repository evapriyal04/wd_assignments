let day = 1;
let dayname;
switch(day){
    case 1:
        dayName = "sunday";
        break;
        case 2:
            dayName ="monday";
            break;
            case 3:
                dayName = "wednesday";
                break;
                case 5:
                    dayName = "thursday";
                    break;
                    case 6:
                        dayName = "friday";
                        break;
                        case 7:
                            dayName = "saturday";
                            break;
                            default:
                                dayName = "invalid day";

}
console.log("the day is "+dayName);