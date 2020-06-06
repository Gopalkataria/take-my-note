

let container = {

    containers : [ ] ,

    get : function( elem ){ return this.containers[elem]} ,

    remove : function( elem ) {   this.containers = this.containers.filter(  
            ( item) => {return item != elem }
     ) } , 

    add : function( elem ) { this.containers.push( elem)}




}