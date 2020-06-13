

export let container = {

    containers : [ ] ,

    get : function( elem ){ return this.containers[elem]} ,

    remove : function( elem ) {   this.containers = this.containers.filter(
            ( item) => {return item !== elem }
     ) } ,

    add : function( elem ) { this.containers.push( elem)}




}


export let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];