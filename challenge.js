var mark ={
    fullName: ' Mark Smith ',
    bills:[77,375,110,45],
    calcTip:function(){
        this.tips=[];
            this.finalValues=[];
        for(var i=0;i<this.bills.length;i++){
            var percentage;
            var bill=this.bills[i];
            if(bill<100){
                percentage=.2;
            }else if(bill>=100 && bill[i]<300){
                percentage=.1;
            }else {
                percentage=..25;
            }
            this.tips[i]=bill*percentage;
            this.finalValues[i]=bill+bill*percentage;
        }
        
    }
}

function calcAverage(tips){
    var sum=0;
    for(var i=0;i<tips.length;i++){
        sum=sum+tips[i];
    }
    return sum/tips.length;
}

john.calcTip();
mark.calcTip();


john.average=calcAverage(john.tips);
mark.average=calcAverage(mark.tips);
console.log(john,mark);