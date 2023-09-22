//4)write a class to calculate the uber price.       

class UberPriceCalc{
    constructor(BaseFare,CostPerMinute,MinutesOfRide,CostPerMile,DistanceOfRide,BookingFee,OtherFees){
    this.BF=BaseFare
    this.CPM=CostPerMinute
    this.MOR=MinutesOfRide
    this.CM=CostPerMile
    this.DOR=DistanceOfRide
    this.BF=BookingFee
    this.OF=OtherFees
}

//----The formula to calculate how much does Uber cost is: Base Fare + (Uber Cost per minute * minutes of ride) + (Uber Cost per mile * distance of ride) 
//+ Booking Fee + Other Fees = Total of Uber Fare-----

getPrice(){
    console.log("Uber Price "+(this.BF+(this.CPM*this.MOR)+(this.CM*this.DOR)+this.BF+this.OF))
}
setPrice(newBaseFare,newCostPerMinute,newMinutesOfRide,newCostPerMile,newDistanceOfRide,newBookingFee,newOtherFees){
    this.BF=newBaseFare
    this.CPM=newCostPerMinute
    this.MOR=newMinutesOfRide
    this.CM=newCostPerMile
    this.DOR=newDistanceOfRide
    this.BF=newBookingFee
    this.OF=newOtherFees
} 
}
let totalPrice= new UberPriceCalc()
totalPrice.setPrice(90,10,100,25,14,50,10)
totalPrice.getPrice()

// Output:
// Uber Price 1460