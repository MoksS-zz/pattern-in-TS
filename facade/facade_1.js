class TravelFacade {
    constructor(reservationType) {
        this.reservationType = reservationType;

        this.flight = new FlightBooker();
        this.hotel = new HotelBooker();
        this.train = new TrainBooker();
    };
    book(reservationInfo) {
        switch (this.reservationType) {
            case 'Flight':
                // book flight;
                this.flight.book(reservationInfo);
                break;
            case 'Hotel':
                // book hotel;
                this.hotel.book(reservationInfo);
                break;
            case 'Train':
                // book Train;
                this.train.book(reservationInfo);
                break;
            case 'Flight_And_Hotel':
                // book Flight and Hotel
                this.flight.book(reservationInfo);
                this.hotel.book(reservationInfo);
                break;
            case 'Train_And_Hotel':
                // book Train and Hotel
                this.train.book(reservationInfo);
                this.hotel.book(reservationInfo);
                break;
            default:
                // throw an error
                throw Error('Reservation type is not supported.');
        };
    };
};

class FlightBooker {
    book(bookingInfo) {
        // handle booking flight
        console.log(bookingInfo.flight);
    };
};

class TrainBooker {
    book(bookingInfo) {
        // handle train booking
        console.log(bookingInfo.train);
    };
};

class HotelBooker {
    book(bookingInfo) {
        // handle hotel booking
        console.log(bookingInfo.hotel);
    };
};

const flight = {
    return_datetime: '25/09/2017 22:00',
    departure_datetime: '21/09/2017 09:00',
    from: 'New York',
    to: 'London'
};

const train = {
    departure_datetime: '22/09/2017 20:00',
    return_datetime: '25/09/2017 10:00',
    from: 'London',
    to: 'Edinburgh'
};

let hotel = {
    check_in_date: '22/09/2017',
    nights: 1,
    city: 'London',
    hotel_name: 'Four Seasons Hotel'
};

const travel1 = new TravelFacade('Flight_And_Hotel');
travel1.book({ flight, hotel });
// {departure_datetime: "21/09/2017 09:00", return_datetime: "25/09/2017 22:00", from: "New York", to: "London"}
// {check_in_date: "22/09/2017", nights: 1, city: "London", hotel_name: "Four Seasons Hotel"}

hotel = {
    check_in_date: '22/09/2017 20:00',
    nights: 3,
    city: 'Edinbrugh',
    hotel_name: 'The Balmoral'
};

const travel2 = new TravelFacade('Train_And_Hotel');
travel2.book({ train, hotel });
// {departure_datetime: "22/09/2017 20:00", return_datetime: "25/09/2017 10:00", from: "London", to: "Edinburgh"}
// {check_in_date: "22/09/2017 20:00", nights: 3, city: "Edinbrugh", hotel_name: "The Balmoral"}