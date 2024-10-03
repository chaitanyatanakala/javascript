arr=[
    { name: "John", notes: [3, 5, 4]},
    { name: "Arun", notes: [4,6,3,2]}
    ]
    
    function avg(a){
        sum=0;
        for(j of a){
            sum=sum+j
        }
        return sum/a.length
    }
    for(i of arr){
        x=avg(i.notes)
        delete i.notes;
        i["avg.notes"]=x
    }
    console.log(arr)
    
    
    [
      { name: 'John', 'avg.notes': 4 },
      { name: 'Arun', 'avg.notes': 3.75 }
    ]