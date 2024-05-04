class APIFeatures{
    constructor(query,queryString ){
        this.query = query;
        this.queryString = queryString;
    }

    filter(){

        // Build Query
        //  01a)filtering
        const queryObj = {...this.queryString};
        // ^^ it creates a obj with reference to query
        const excludedFields = ['page','sort','limit','fields'];
        excludedFields.forEach(el => delete queryObj[el]);
        // ^^ loops which delete from queryObj

       //01b ) advanced filtering
       console.log(queryObj);
       let queryStr = JSON.stringify(queryObj);
       queryStr = queryStr.replace(/\b(gte|gt|lt|lte)\b/g, match=>`$${match}`);
       console.log(JSON.parse(queryStr));

       //queryStr = JSON.parse(queryStr); -- can not use to parser for JSON

        //let query = Tour.find();
        //^^ the above query is converted from const to let because we are changing it in below

        this.query.find(JSON.parse(queryStr));
        return this;


    }

    sort(){
         //02) sorting

         if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ');
            this.query = this.query.sort(sortBy);
            // mongoose sort fuction line sort.('aparamater bparameter') n number of parameters so we converting it , to space
         }else{
            this.query = this.query.sort('-createdAt');
            //it sort it with new producted added
         }

         return this;


    }

    limitFields(){
        //03) limiting fields

        if(this.queryString.fields){
            const fieldsr = this.queryString.fields.split(',').join(' ');
            this.query = this.query.select(fieldsr,);
         }else{
            this.query = this.query.select('-__v');
         }

         return this;


    }

    paginate(){
         // 04)pagination
         const page = this.queryString.page *1 || 1// nice way to convert string into number
         const limit = this.queryString.limit *1 || 3;
         const skip = (page-1) * limit;
         //page=3 & limit per page is 10, 1-10, 11-20, 21-30 
         this.query = this.query.skip(skip).limit(limit);


        //  if(this.queryString.page){
        //     const numTours = await Tour.countDocuments(); //it return the promisses
        //     if(skip >= numTours) throw new Error('This page does not exist');
        //  }

         return this;

    }

    // its a query string of mongoose -- another way for query
        //  const query = Tour.find()
        //     .where('duration')
        //     .equals(5)
        //     .where('ratingAverage').
        //     equals(4.5);

         // excute Query
         //const tours = await query;
         //^^the above line is changed because we moved all above files to a class APIFeatures file in utility



}

module.exports = APIFeatures;